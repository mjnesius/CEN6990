<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-9 mx-auto">
        <div class="embed-responsive mb-2 embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="newVideo" allowfullscreen></iframe>
        </div>
      </div>
      <div class="lecture-list col-lg-3 overflow-auto pt-sm-2 pt-lg-0 border">
        <div class="list-group list-group-item-action">
          <button
            type="button"
            v-for="(lecture, index) in course.lectures"
            :key="index"
            @click="loadVideo(lecture.id, index)"
            class="list-group-item my-2 btn btn-outline-primary"
          >
            <div class="d-flex align-item-start">
              <i v-if="index == currentIndex" class="fas fa-play-circle mr-3 h2"></i>
              <i v-else class="far fa-play-circle mr-3 h2"></i>
              <strong class="text-left">{{ lecture.title }}</strong>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="row my-3 p-3">
      <div class="col-md-10 mx-auto">
        <h1 class="display-5">{{ course.title }}</h1>
        <p class="lead">{{ course.longDescription }}</p>
        <hr>
        <h4 class="text-muted">Instructor: {{ course.instructor }}</h4>
        <p class="text-muted lead">{{ course.instructorBio }}</p>
      </div>
    </div>
    <div class="row p-3">
      <div class="col-md-10 mx-auto">
        <h2 class="display-5">Comments</h2>
        <form @submit.prevent="addComment">
          <div class="form-group">
            <label for="content">Add a comment:</label>
            <input
              type="text"
              v-model="newContent"
              class="form-control"
              id="content"
              placeholder="New comment..."
            >
          </div>
          <p v-if="feedback" class="text-danger text-center">{{ feedback }}</p>
        </form>
        <ul class="">
          <li v-for="(comment, index) in comments" :key="index">
            <p class="mb-2">
              <span class="mr-5">{{ comment.alias }}</span>
              <span class="mr-5">{{ comment.date }}</span>
              <span>{{ comment.content }}</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase";
import moment from "moment";

export default {
  name: "Course",
  computed: {
    newVideo() {
      return `https://www.youtube.com/embed/${this.currentVideo}?rel=0`;
    }
  },
  methods: {
    loadVideo(id, index) {
      this.currentVideo = id;
      this.currentIndex = index;
    },
    addComment() {
      if (this.newContent) {
        this.feedback = null;
        db.collection("comments")
          .add({
            course: this.$route.params.id,
            alias: this.user.alias,
            content: this.newContent,
            date: firebase.firestore.Timestamp.fromDate(new Date())
          })
          .then(doc => {
            this.newContent = null;
          });
      } else {
        this.feedback = "You must enter a comment to add it";
      }
    }
  },
  data() {
    return {
      course: "",
      currentIndex: "",
      currentVideo: "",
      newContent: null,
      feedback: null,
      comments: [],
      user: null
    };
  },
  created() {
    db.collection("courses")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        this.course = doc.data();
        this.currentVideo = this.course.lectures[0].id;
      });
    let ref = db.collection("users");
    ref
      .where("user_id", "==", firebase.auth().currentUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
          this.user.id = doc.id;
        });
      });
    db.collection("comments")
      .where("course", "==", this.$route.params.id)
      .orderBy("date")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
            console.log(change.doc.data());
            this.comments.unshift({
              alias: change.doc.data().alias,
              date: moment(change.doc.data().date.toDate()).format("ll"),
              content: change.doc.data().content
            });
          }
        });
      });
  }
};
</script>

<style scoped>
@media (min-width: 576px) {
  .lecture-list {
    max-height: 300px;
  }
}
@media (min-width: 992px) {
  .lecture-list {
    max-height: 390px;
  }
}
@media (min-width: 1200px) {
  .lecture-list {
    max-height: 465px;
  }
}
</style>
