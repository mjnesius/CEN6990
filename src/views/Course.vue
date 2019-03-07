<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="newVideo" allowfullscreen></iframe>
        </div>
      </div>
      <div class="lecture-list col-md-6 overflow-auto">
        <div class="list-group list-group-item-action">
          <button
            type="button"
            v-for="(lecture, index) in lectures"
            :key="index"
            @click="loadVideo(lecture.id)"
            class="list-group-item mb-2"
          >
            {{ lecture.title }}
            <span class="ml-5">{{ lecture.shortDescription }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="jumbotron mt-3">
      <h1 class="display-5">{{ courseTitle }}</h1>
      <p class="lead">{{ courseDescription }}</p>
      <p>Instructor:  {{courseInstructor}}</p>
      <p>Biography:  {{courseInstructorBio}}</p>
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
    loadVideo: function(id) {
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
        console.log(this.currentVideo);
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
  height: 310px;
}
</style>
