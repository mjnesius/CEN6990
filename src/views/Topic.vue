<template>
  <div class="container">
    <div class="jumbotron mt-3">
      <h1 class="display-3">{{topic}}</h1>
      <p class="lead">{{phrase}}</p>
      <hr class="my-4">
      <p>{{description}}</p>
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
  name: "Topic",
  data() {
    return {
      id: "",
      topic: "",
      phrase: "",
      description: "",
      courses: [],
      topics: [
        {
          search: "development",
          topic: "Development",
          phrase:
            "From Java to Javascript, you will quickly gain the knowledge and skills to code like a pro!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!"
        },
        {
          search: "it",
          topic: "Information Technology",
          phrase:
            "From workstations to networks, you will quickly gain the knowledge and skills to work with the pros!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!"
        },
        {
          search: "security",
          topic: "CyberSecurity",
          phrase:
            "From firewalls to malware, you will quickly gain the knowledge and skills to be a security pro!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!"
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
</style>
