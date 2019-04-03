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
        >Current User courses are initially displayed but use Search Fields to find other courses.</p>
        <div class="mt-5">
          <button
            id="testAddClick"
            @click.prevent="add"
            type="button"
            class="btn btn-lg btn-success"
          >Add Course</button>
        </div>
        <div class="d-flex justify-content-center">
          <form id="testSearchCourse" @submit.prevent="searchForCourse" class="form-inline mt-5">
            <input
              class="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Search by Course ID"
              aria-label="Search"
              v-model="courseIdSearch"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <button
              id="testClear1"
              @click.prevent="searchDb(user.uid)"
              class="btn btn-outline-primary my-2 my-sm-0"
            >Clear</button>
          </form>
        </div>
        <div class="d-flex justify-content-center">
          <form id="testSearchOwner" @submit.prevent="searchOwner" class="form-inline mt-4">
            <input
              class="form-control form-control-lg mr-sm-2"
              type="search"
              placeholder="Search by Owner ID"
              aria-label="Search"
              v-model="ownerIdSearch"
            >
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <button
              id="testClear2"
              @click.prevent="searchDb(user.uid)"
              class="btn btn-outline-primary my-2 my-sm-0"
            >Clear</button>
          </form>
        </div>
      </div>
    </div>
    <table class="table table-striped mb-5">
      <thead>
        <tr class="table-primary text-bold">
          <th scope="col">Course ID</th>
          <th scope="col">Title</th>
          <th scope="col">Instructor</th>
          <th scope="col">Update</th>
          <th scope="col">View and Modify</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.id }}</td>
          <td id="testCourseTitle">{{ course.title }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.timestamp }}</td>
          <td>
            <button
              id="testViewClick"
              @click.prevent="pushToCoursePage(course.id)"
              type="button"
              class="btn btn-sm btn-primary py-1 px-3"
            >View</button>
            <button
              id="testEditClick"
              @click.prevent="edit(course.id)"
              type="button"
              class="btn ml-1 btn-sm btn-warning py-1 px-3"
            >Edit</button>
            <button
              id="testDeleteClick"
              @click.prevent="setDeleteId(course.id)"
              type="button"
              class="btn ml-1 btn-sm btn-danger py-1"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <div class="d-flex justify-content-center">
              <i class="fas fa-exclamation-triangle text-danger"></i>
              <h1
                class="modal-title text-danger mt-5 ml-5"
                id="exampleModalCenterTitle"
              >Confirm Delete</h1>
            </div>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body h3 text-center">This delete action will be final.</div>
          <div class="modal-footer">
            <button type="button" class="btn btn-success" data-dismiss="modal">Cancel</button>
            <button
              @click="deleteCourse()"
              type="button"
              data-dismiss="modal"
              class="btn btn-danger"
            >Delete Course</button>
          </div>
        </div>
      </div>
    </div>
    <p v-if="courses.length == 0" class="my-5 text-center text-muted">No Results.</p>
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
      courses: [],
      courseIdSearch: "",
      ownerIdSearch: "",
      deleteId: ""
    };
  },
  methods: {
    setDeleteId(courseId) {
      this.deleteId = courseId;
    },
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id } });
    },
    edit(id) {
      this.$router.push({ name: "edit", params: { id } });
    },
    add() {
      this.$router.push({ name: "add" });
    },
    deleteCourse() {
      db.collection("courses")
        .doc(this.deleteId)
        .delete()
        .then(() => {
          this.courses = this.courses.filter(course => {
            return course.id != this.deleteId;
          });
        })
        .catch(function(error) {
          console.error("Error removing document: ", error);
        });
      db.collection("comments")
        .where("course", "==", this.deleteId)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let commentDeleteId = doc.id;
            db.collection("comments")
              .doc(commentDeleteId)
              .delete()
              .catch(function(error) {
                console.error("Error removing document: ", error);
              });
          });
        })
        .catch(err => {
          console.log(err);
        });
    },
    searchOwner() {
      this.searchDb(this.ownerIdSearch);
    },
    searchDb(search) {
      this.courseIdSearch = "";
      this.ownerIdSearch = "";
      this.courses = [];
      db.collection("courses")
        .where("owner_id", "==", search)
        .orderBy("date", "desc")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            let course = doc.data();
            course.id = doc.id;
            course.timestamp = moment(doc.data().date.toDate()).format("ll");
            this.courses.push(course);
          });
        });
    },
    searchForCourse() {
      this.courses = [];
      db.collection("courses")
        .doc(this.courseIdSearch)
        .get()
        .then(doc => {
          let course = doc.data();
          course.id = doc.id;
          course.timestamp = moment(doc.data().date.toDate()).format("ll");
          this.courses.push(course);
          this.courseIdSearch = "";
          this.ownerIdSearch = "";
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
    this.searchDb(this.user.uid);
  }
};
</script>

<style scoped>
i {
  font-size: 3rem;
}
tbody tr {
  cursor: pointer;
}
</style>
