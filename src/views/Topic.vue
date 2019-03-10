<template>
  <div class="container">
    <div class="h-100">
      <div class="row p-5 h-100 justify-content-center align-items-center">
        <div class="col-md-6">
          <img v-if="topic == 'Software Development'" src="../assets/undraw_programmer_imem.svg" alt width="400">
          <img v-else-if="topic == 'Information Technology'" src="../assets/undraw_dashboard_nklg.svg" alt width="400">
          <img v-else src="../assets/undraw_security_o890.svg" alt width="400">
        </div>
        <div class="col-md-6">
          <h1 class="dispay-3">{{topic}}</h1>
          <p class="lead">{{phrase}}</p>
          <p>{{description}}</p>
        </div>
      </div>
    </div>

    <table class="table table-hover table-striped">
      <thead>
        <tr class="table-primary text-bold">
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
    <div class="d-flex justify-content-center mb-3">
      <button type="button" @click="loadMore" class="btn btn-primary" v-show="more">Load More</button>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Topic",
  data() {
    return {
      more: true,
      id: "",
      topic: "",
      phrase: "",
      description: "",
      image: "",
      courses: [],
      topics: [
        {
          search: "development",
          topic: "Software Development",
          phrase:
            "From Java to Javascript, you will quickly gain the knowledge and skills to code like a pro!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!",
          image: "../assets/undraw_programmer_imem.svg"
        },
        {
          search: "it",
          topic: "Information Technology",
          phrase:
            "From workstations to networks, you will quickly gain the knowledge and skills to work with the pros!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!",
          image: "../assets/undraw_dashboard_nklg.svg"
        },
        {
          search: "security",
          topic: "CyberSecurity",
          phrase:
            "From firewalls to malware, you will quickly gain the knowledge and skills to be a security pro!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!",
          image: "../assets/undraw_security_o890.svg"
        }
      ]
    };
  },
  methods: {
    loadMore() {
      this.more = false;
      this.id = this.$route.params.id;
      let currentTopic = this.topics[this.id];
      this.topic = currentTopic.topic;
      this.phrase = currentTopic.phrase;
      this.description = currentTopic.description;
      this.image = currentTopic.image;
      this.courses = [];
      let search = currentTopic.search;
      db.collection("courses")
        .where("topic", "==", search)
        .orderBy("date", "desc")
        .limit(20)
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
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id: id } });
    },
    updateId() {
      this.more = true;
      this.id = this.$route.params.id;
      let currentTopic = this.topics[this.id];
      this.topic = currentTopic.topic;
      this.phrase = currentTopic.phrase;
      this.description = currentTopic.description;
      this.image = currentTopic.image;
      this.courses = [];
      let search = currentTopic.search;
      db.collection("courses")
        .where("topic", "==", search)
        .orderBy("date", "desc")
        .limit(10)
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
  watch: {
    $route: "updateId"
  },
  computed: {
    newImage() {
      return this.image; 
    }
  },
  created() {
    this.id = this.$route.params.id;
    let currentTopic = this.topics[this.id];
    this.topic = currentTopic.topic;
    this.phrase = currentTopic.phrase;
    this.description = currentTopic.description;
    this.image = currentTopic.image;
    let search = currentTopic.search;
    db.collection("courses")
      .where("topic", "==", search)
      .orderBy("date", "desc")
      .limit(10)
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
};
</script>

<style scoped>
tbody tr {
  cursor: pointer;
}

</style>
