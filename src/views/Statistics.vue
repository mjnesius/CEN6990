<template>
  <div class="container">
    <div class="row p-5 justify-content-center">
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/undraw_youtube_tutorial_2gn3.svg" alt>
      </div>
      <div class="col-md-6 mt-3 text-center">
        <h1 class="dispay-3 mt-5">Statistics</h1>
        <p class="lead">Visit count by course.</p>
        <p>Numbers are reset to zero every Sunday at midnight.</p>
      </div>
    </div>
    <table class="table table-hover table-striped mb-5">
      <thead>
        <tr class="table-primary text-bold">
          <th scope="col">Course ID</th>
          <th scope="col">Title</th>
          <th scope="col">Instructor</th>
          <th scope="col">Views</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.id }}</td>
          <td>{{ course.title }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.count }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Statistics",
  data() {
    return {
      courses: []
    };
  },
  created() {
    db.collection("trending")
      .orderBy("count", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let course = doc.data();
          course.id = doc.id;
          this.courses.push(course);
        });
      });
  }
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
</style>
