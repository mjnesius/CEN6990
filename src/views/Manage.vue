<template>
  <div class="container">
    <div class="row py-3 justify-content-center align-items-center">
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/undraw_teaching_f1cm.svg" alt>
      </div>
      <div class="col-md-6 mb-5 text-center">
        <h1 class="dispay-3">Manage Courses</h1>
        <p class="lead">Add, Update, and Delete Courses</p>
        <p
          mb-5
        >Current User created courses are initially displayed but use Search Fields to find other courses.</p>
        <div class="mt-5">
          <button @click.prevent="add" type="button" class="btn btn-lg btn-success">Add Course</button>
        </div>
        <div class="d-flex justify-content-center">
          <form class="form-inline mt-5">
            <input
              class="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Search by Course ID"
              aria-label="Search"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Clear</button>
          </form>
        </div>
        <div class="d-flex justify-content-center">
          <form class="form-inline mt-4">
            <input
              class="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Search by Owner ID"
              aria-label="Search"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Clear</button>
          </form>
        </div>
      </div>
    </div>
    <table class="table table-hover table-striped">
      <thead>
        <tr class="table-primary text-bold">
          <th scope="col">Course ID</th>
          <th scope="col">Title</th>
          <th scope="col">Instructor</th>
          <th scope="col">Update</th>
          <th scope="col">Modify</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="pushToCoursePage(course.id)" v-for="course in courses" :key="course.id">
          <td>{{ course.id }}</td>
          <td>{{ course.title }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.timestamp }}</td>
          <td>
            <button @click.prevent="edit" type="button" class="btn btn-sm btn-warning">Edit</button>
            <button
              @click.prevent="deleteCourse"
              type="button"
              class="btn ml-1 btn-sm btn-danger"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mb-3">
      <button type="button" @click="loadMore" class="btn btn-primary" v-show="more">Load More</button>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Manage",
  data() {
    return {
      more: true,
      courses: []
    };
  },
  methods: {
    edit() {},
    add() {},
    deleteCourse() {},
    loadMore() {
      this.updateId(30);
      this.more = false;
    },
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id } });
    },
    updateId(number) {
      this.more = true;
      db.collection("courses")
        .where("owner_id", "==", this.user.uid)
        .orderBy("date", "desc")
        .limit(number)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let course = doc.data();
            course.id = doc.id;
            course.timestamp = moment(doc.data().date.toDate()).format("ll");
            this.courses.push(course);
          });
        });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  created() {
    this.updateId(10);
  }
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}
</style>
