<template>
  <div class="container">
    <div class="row p-5 justify-content-center align-items-center">
      <div class="col-md-6">
        <img
          class="img-fluid"
          v-if="currentTopic.topic == 'Software Development'"
          src="../assets/undraw_programmer_imem.svg"
          alt="software programmer coding"
        />
        <img
          class="img-fluid"
          v-else-if="currentTopic.topic == 'Information Technology'"
          src="../assets/undraw_dashboard_nklg.svg"
          alt="computer screen with gadgets"
        />
        <img
          class="img-fluid"
          v-else
          src="../assets/undraw_security_o890.svg"
          alt="security guard in front of computer screen"
        />
      </div>
      <div class="col-md-6 pt-3">
        <h1 class="dispay-3">{{ currentTopic.topic }}</h1>
        <p class="lead">{{ currentTopic.phrase }}</p>
        <p>{{ currentTopic.description }}</p>
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
        <tr
          @click="pushToCoursePage(course.id)"
          v-for="course in courses"
          :key="course.id"
        >
          <td>{{ course.title }}</td>
          <td>{{ course.shortDescription }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.timestamp }}</td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex justify-content-center mb-3">
      <button
        type="button"
        @click="loadMore"
        class="btn btn-primary"
        v-show="more"
      >
        Load More
      </button>
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
      currentTopic: null,
      courses: [],
      topics: [
        {
          search: "development",
          topic: "Software Development",
          phrase:
            "From Java to Javascript, you will quickly gain the knowledge and skills to code like a pro!",
          description:
            "Courses available in Computer Science, Game Development, Programming Languages, Testing, AI, Agile, and System Architecture.",
          image: "../assets/undraw_programmer_imem.svg"
        },
        {
          search: "it",
          topic: "Information Technology",
          phrase:
            "From workstations to networks, UWF Instructors will teach you current industry best practices with the latest technology.",
          description:
            "IT course topics include Certifications, Networking, Database Administration, Virtualization, Cloud, Servers, and Dev Ops.",
          image: "../assets/undraw_dashboard_nklg.svg"
        },
        {
          search: "security",
          topic: "CyberSecurity",
          phrase:
            "From firewalls to malware, we have you covered. Learn from the experts and join the hotest career field in tech.",
          description:
            "In-depth courses in Operations, Certifications, Governance, Digital Forensics, Application Security, Penetration Testing, Network Security, and Security Engineering.",
          image: "../assets/undraw_security_o890.svg"
        }
      ]
    };
  },
  methods: {
    loadMore() {
      this.updateId(30);
      this.more = false;
    },
    pushToCoursePage(id) {
      this.$router.push({ name: "course", params: { id } });
    },
    updateId(number) {
      this.more = true;
      this.currentTopic = this.topics[this.$route.params.id];
      this.courses = [];
      let search = this.currentTopic.search;
      db.collection("courses")
        .where("topic", "==", search)
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
