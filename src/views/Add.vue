<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-8 mx-auto my-5">
        <h2 class="text-center mb-5">Add Course</h2>
        <form @submit.prevent="addCourse">
          <div class="form-group">
            <label for="formGroupExampleInput">Course Title</label>
            <input
              type="text"
              class="form-control form-control-lg w-50"
              id="formGroupExampleInput"
              placeholder="Course Title"
              maxlength="30"
              v-model="course.title"
              autofocus
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Short Description</label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="formGroupExampleInput2"
              placeholder="Short Description"
              maxlength="80"
              v-model="course.shortDescription"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Long Description</label>
            <textarea
              type="text"
              class="form-control form-control-lg"
              id="formGroupExampleInput"
              placeholder="Long Description"
              maxlength="400"
              rows="4"
              v-model="course.longDescription"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Instructor</label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="formGroupExampleInput2"
              placeholder="Instructor"
              maxlength="20"
              v-model="course.instructor"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Instructor ID</label>
            <input
              type="text"
              class="form-control form-control-lg"
              id="formGroupExampleInput2"
              placeholder="Instructor ID"
              maxlength="20"
              v-model="course.owner_id"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Instructor Bio</label>
            <textarea
              type="text"
              class="form-control form-control-lg"
              id="formGroupExampleInput"
              placeholder="Instructor Bio"
              maxlength="300"
              rows="3"
              v-model="course.instructorBio"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Topic</label>
            <select
              class="form-control form-control-lg"
              id="exampleFormControlSelect1"
              v-model="course.topic"
            >
              <option value="development">Development</option>
              <option value="security">CyberSecurity</option>
              <option value="it">Information Technology</option>
            </select>
          </div>
          <h4 class="mb-5 mt-5">Lectures:</h4>
          <div v-for="(lecture, index) in course.lectures" class="form-group" :key="index">
            <div class="form-row">
              <div class="col-md-4">
                <label for="id">Video ID:</label>
                <input
                  type="text"
                  class="form-control"
                  name="id"
                  v-model="course.lectures[index].id"
                  maxlength="20"
                >
              </div>
              <div class="col-md-4">
                <label for="title">Lecture Title:</label>
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  v-model="course.lectures[index].title"
                  maxlength="20"
                >
              </div>
              <button
                @click.prevent="deleteLecture(index)"
                type="button"
                class="btn btn-sm btn-danger"
              >Delete</button>
            </div>
          </div>
          <h4 class="mb-5">Add Lectures:</h4>
          <div class="form-row">
            <div class="col-md-4">
              <label for="id">Video ID:</label>
              <input
                type="text"
                class="form-control form-control-lg"
                name="id"
                v-model="lecture.id"
                maxlength="20"
                placeholder="Video ID"
              >
            </div>
            <div class="col-md-4">
              <label for="title">Lecture Title:</label>
              <input
                type="text"
                class="form-control form-control-lg"
                name="title"
                v-model="lecture.title"
                maxlength="20"
                placeholder="Lecture Title"
              >
            </div>
            <button @click="addLecture()" type="button" class="btn btn-success">Add Lecture</button>
          </div>
          <p v-if="feedback" class="text-center h5 my-3 text-danger">{{ feedback }}</p>
          <button class="btn btn-lg btn-success btn-block my-5">Add Course</button>
        </form>
        <button @click.prevent="backToManage" class="btn btn-lg btn-primary btn-block">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Add",
  data() {
    return {
      course: { lectures: [] },
      lecture: {},
      feedback: null
    };
  },
  methods: {
    backToManage() {
      this.$router.push({ name: "manage" });
    },
    deleteLecture(index) {
      this.course.lectures.splice(index, 1);
    },
    addLecture() {
      if (this.lecture.id && this.lecture.title) {
        this.course.lectures.push(this.lecture);
        this.lecture = {};
        this.feedback = null;
      } else {
        this.feedback = "You must enter values to add another lecture.";
      }
    },
    addCourse() {
      if (
        this.course.title &&
        this.course.shortDescription &&
        this.course.longDescription &&
        this.course.instructor &&
        this.course.instructorBio &&
        this.course.lectures &&
        this.course.owner_id
      ) {
        this.feedback = null;
        this.course.date = new Date();
        db.collection("courses")
          .add(this.course)
          .then(() => {
            this.$router.push({ name: "manage" });
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        this.feedback = "You must enter values in all fields to add course.";
      }
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.course.owner_id = this.user.uid;
  }
};
</script>

<style scoped>
</style>