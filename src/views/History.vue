<template>
  <div class="container">
    <div class="row p-5 justify-content-center">
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/undraw_task_31wc.svg" alt>
      </div>
      <div class="col-md-6 mt-3">
        <h1 class="dispay-3">History of Courses</h1>
        <p class="lead">Course pages you have visited.</p>
        <p>Select from list and revisit the course.</p>
      </div>
    </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr class="table-primary text-bold">
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Instructor</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="pushToCoursePage(course.id)" v-for="course in courses" :key="course.id">
          <td>{{ course.title }}</td>
          <td>{{ course.shortDescription }}</td>
          <td>{{ course.instructor }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Topic",
  data() {
    return {
      user: null,
      more: true,
      courseHistory: null,
      courses: []
    };
  },
  methods: {
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id } });
    },
    updateList() {
      this.courses = [];
      db.collection("history")
        .where("user_id", "==", user.uid)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.courseHistory = doc.data().history;
          });
        });
    }
  },

  created() {
    this.updateList();
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
</style>
