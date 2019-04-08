<template>
  <div class="container">
    <div class="row p-5 justify-content-center">
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/undraw_working_late_pukg.svg" alt>
      </div>
      <div class="col-md-6 mt-3 text-center">
        <h1 class="dispay-3 mt-5">History of Courses</h1>
        <p class="lead">Course pages you have recently visited.</p>
        <p>Select from list and revisit the course.</p>
      </div>
    </div>
    <table class="table table-hover table-striped mb-5">
      <thead>
        <tr class="table-primary text-bold">
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Instructor</th>
        </tr>
      </thead>
      <tbody>
        <tr
          id="testCourseClick"
          @click="pushToCoursePage(course.id)"
          v-for="course in historyList"
          :key="course.id"
        >
          <td id="testCourseTitle">{{ course.title }}</td>
          <td>{{ course.shortDescription }}</td>
          <td>{{ course.instructor }}</td>
        </tr>
      </tbody>
    </table>
    <p
      v-if="historyList.length == 0"
      class="my-5 text-center text-muted"
    >You have no courses in your history. Get started today!</p>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "History",
  data() {
    return {
      historyList: []
    };
  },
  methods: {
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id } });
    },
    getHistoryList() {
      db.collection("users")
        .where("user_id", "==", this.user.uid)
        .limit(10)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.historyList = doc.data().history;
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.getHistoryList();
  }
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
</style>
