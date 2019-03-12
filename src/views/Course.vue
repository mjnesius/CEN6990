<template>
  <div class="container">
    <div class="row my-3">
      <div class="col-md-9 mx-auto">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="newVideo" allowfullscreen></iframe>
        </div>
      </div>
      <div class="lecture-list col-lg-3 overflow-auto pt-sm-2 pt-lg-0">
        <div class="list-group list-group-item-action border border-primary">
          <button
            type="button"
            v-for="(lecture, index) in course.lectures"
            :key="index"
            @click="loadVideo(lecture.id, index)"
            class="list-group-item mb-2 btn btn-outline-primary"
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
    <div class="jumbotron bg-secondary border border-primary mb-3">
      <h1 class="display-5">{{ course.title }}</h1>
      <p class="lead">{{ course.longDescription }}</p>
      <hr>
      <h4 class="text-muted">Instructor: {{course.instructor}}</h4>
      <p class="text-muted lead">{{course.instructorBio}}</p>
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
      course: '',
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
@media (min-width: 576px) { .lecture-list {
  max-height: 300px;
} }
@media (min-width: 992px) { .lecture-list {
  max-height: 390px;
} }
@media (min-width: 1200px) { .lecture-list {
  max-height: 465px;
} }
</style>
