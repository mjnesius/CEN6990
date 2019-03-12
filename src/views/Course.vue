<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-9">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="newVideo" allowfullscreen></iframe>
        </div>
      </div>
      <div class="lecture-list col-md-3 overflow-auto">
        <div class="list-group list-group-item-action border border-primary">
          <button
            type="button"
            v-for="(lecture, index) in course.lectures"
            :key="index"
            @click="loadVideo(lecture.id, index)"
            class="list-group-item mb-2 btn btn-outline-primary"
          >
            <div class="d-flex align-item-start">
              <i v-if="index == currentIndex" class="fas fa-play-circle mr-3 text-primary h2"></i>
              <i v-else class="far fa-play-circle mr-3 text-primary h2"></i>
              <strong class="text-left">{{ lecture.title }}</strong>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="jumbotron bg-secondary border border-primary mt-3 text-primary">
      <h1 class="display-5">{{ course.title }}</h1>
      <p class="lead">{{ course.longDescription }}</p>
      <hr>
      <p class="text-muted">Instructor: {{course.instructor}}</p>
      <p class="text-muted">Biography: {{course.instructorBio}}</p>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

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
    }
  },
  data() {
    return {
      course: null,
      currentIndex: "",
      currentVideo: ""
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
  }
};
</script>

<style scoped>
.lecture-list {
  height: 465px;
}
</style>
