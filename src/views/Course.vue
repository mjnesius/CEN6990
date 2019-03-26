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
    <div class="row mt-3 p-3">
      <div class="col-md-10 mx-auto">
        <h1 class="display-5">{{ course.title }}</h1>
        <p class="lead">{{ course.longDescription }}</p>
        <hr>
        <h4 class="text-muted">Instructor: {{ course.instructor }}</h4>
        <p class="lead">{{ course.instructorBio }}</p>
      </div>
    </div>
    <div class="row p-3">
      <div class="col-md-10 mx-auto">
        <h2 class="display-5">Comments</h2>
        <form @submit.prevent="addComment" class="mb-4">
          <div class="form-group">
            <input
              type="text"
              v-model="newContent"
              class="form-control form-control-lg"
              id="content"
              placeholder="New comment..."
            >
          </div>
          <p v-if="feedback" class="text-danger text-center">{{ feedback }}</p>
        </form>
        <ul class="comments">
          <li v-for="(comment, index) in comments" :key="index">
            <p>
              <span class="text-muted mr-5">{{ comment.date }}</span>
              <span class="text-muted lead">{{ comment.alias }}</span>
            </p>
            <h5>{{ comment.content }}</h5>
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
    },
    firebaseUser() {
      return this.$store.state.user;
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
      user: null,
      userId: null,
      historyList: null
    };
  },
  created() {
    let paramCourseId = this.$route.params.id;
    db.collection("courses")
      .doc(paramCourseId)
      .get()
      .then(doc => {
        this.course = doc.data();
        this.currentVideo = this.course.lectures[0].id;
      })
      .catch(err => {
        console.log(err);
      });
    let ref = db.collection("trending").doc(paramCourseId);
    ref.get().then(doc => {
      let newCount = 1;
      if (doc.exists) {
        newCount = doc.data().count + 1;
      }
      ref
        .set({
          title: this.course.title,
          instructor: this.course.instructor,
          count: newCount
        })
        .catch(error => {
          console.error(error);
        });
    });
    db.collection("users")
      .where("user_id", "==", this.firebaseUser.uid)
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.user = doc.data();
          this.userId = doc.id;
          let historyList = doc.data().history;
          if (!historyList) {
            historyList = [];
          } else {
            historyList = historyList.filter(nextCourse => {
              return nextCourse.id != paramCourseId;
            });
          }
          if (historyList.length > 10) {
            historyList.pop();
          }
          let newEntry = {
            title: this.course.title,
            shortDescription: this.course.shortDescription,
            instructor: this.course.instructor,
            id: paramCourseId
          };
          historyList.unshift(newEntry);
          db.collection("users")
            .doc(this.userId)
            .update({
              history: historyList
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
    db.collection("comments")
      .where("course", "==", paramCourseId)
      .orderBy("date")
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(change => {
          if (change.type == "added") {
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
.comments {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
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
