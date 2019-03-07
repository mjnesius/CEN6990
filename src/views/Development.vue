<template>
  <div class="development container">
    <div class="jumbotron mt-3">
      <h1 class="display-3">Sofware Development</h1>
      <p
        class="lead"
      >From Java to Javascript, you will quickly gain the knowledge and skills to code like a pro!</p>
      <hr class="my-4">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!</p>
    </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Description</th>
          <th scope="col">Instructor</th>
          <th scope="col">Update</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="pushToCoursePage(course.id)" v-for="course in courses" :key="course.id">
          <td>{{ course.title }}</td>
          <td>{{ course.shortDescription }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.timestamp }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Development",
  data() {
    return {
      courses: []
    };
  },
  methods: {
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id: id } });
    }
  },
  created() {
    db.collection("courses")
      .where("topic", "==", "development")
      .orderBy("date", "desc")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          let course = doc.data();
          course.id = doc.id;
          course.timestamp = moment(doc.data().timestamp).format("ll");
          this.courses.push(course);
        });
      });
  }
};
</script>

<style scoped>
tbody tr{
  cursor: pointer
}
</style>
