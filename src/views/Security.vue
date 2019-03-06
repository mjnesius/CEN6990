<template>
  <div class="security container">
    <div class="jumbotron mt-3">
      <h1 class="display-3">Security</h1>
      <p
        class="lead"
      >From firewalls to malware, you will quickly gain the knowledge and skills to be a security pro!</p>
      <hr class="my-4">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui.</p>
    </div>
    <div class="list-group">
      <router-link
        v-for="course in courses"
        :key="course.id"
        :to="{ name: 'course', params: { id: course.id } }"
        class="list-group-item list-group-item-action mb-3"
      >
        {{ course.title }}
        <span class="ml-5">{{ course.shortDescription }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  name: "Security",
  data() {
    return {
      courses: []
    };
  },
  created() {
    db.collection("courses")
      .where("topic", "==", "security")
      .orderBy("date", "desc")
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

<style scoped></style>
