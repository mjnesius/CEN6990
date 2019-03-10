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
            v-for="(lecture, index) in lectures"
            :key="index"
            @click="loadVideo(lecture.id)"
            class="list-group-item mb-2 btn btn-outline-primary"
          >
            <div class="d-flex align-item-start">
              <i class="far fa-play-circle mr-3 text-primary h2"></i>
              <strong class="text-left">{{ lecture.title }}</strong>
            </div>
          </button>
        </div>
      </div>
    </div>
    <div class="jumbotron bg-secondary border border-primary mt-3 text-primary">
      <h1 class="display-5">{{ courseTitle }}</h1>
      <p class="lead">{{ courseDescription }}</p>
      <hr>
      <p class="text-muted">Instructor: {{courseInstructor}}</p>
      <p class="text-muted">Biography: {{courseInstructorBio}}</p>
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
    loadVideo (id) {
      this.currentVideo = id;
    }
  },
  data() {
    return {
      currentVideo: "",
      courseTitle: "",
      courseDescription: "",
      courseInstructor: "",
      courseInstructorBio: "",
      lectures: []
    };
  },
  created() {
    db.collection("courses")
      .doc(this.$route.params.id)
      .get()
      .then(doc => {
        let course = doc.data();
        course.id = doc.id;
        this.currentVideo = course.lectures[0].id;
        this.courseTitle = course.title;
        this.courseDescription = course.longDescription;
        this.lectures = course.lectures;
        this.courseInstructor = course.instructor;
        this.courseInstructorBio = course.instructorBio;
      });
  }
};
</script>

<style scoped>
.lecture-list {
  height: 465px;
}
</style>
