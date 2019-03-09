<template>
  <section>
    <div class="container">
      <section>
        <div id="home-heading" class="jumbotron">
          <section class="dark-overlay">
            <h1 class="display-3 mt-3">{{topic}}</h1>
            <p class="lead">{{phrase}}</p>
            <p class="mb-5">{{description}}</p>
          </section>
        </div>
      </section>
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
  </section>
</template>

<script>
import db from "@/firebase/init";
import moment from "moment";
export default {
  name: "Topic",
  data() {
    return {
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
          image: "url(../assets/areyourready.jpg)"
        },
        {
          search: "it",
          topic: "Information Technology",
          phrase:
            "From workstations to networks, you will quickly gain the knowledge and skills to work with the pros!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!",
          image: "url(../assets/informationsecurity.jpg)"
        },
        {
          search: "security",
          topic: "CyberSecurity",
          phrase:
            "From firewalls to malware, you will quickly gain the knowledge and skills to be a security pro!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!",
          image: "url(../assets/computerscreen2.jpg)"
        }
      ]
    };
  },
  methods: {
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id: id } });
    },
    updateId() {
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
#home-heading {
  position: relative;
  min-height: 200px;
  background: url(../assets/areyourready.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;
}

.dark-overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
