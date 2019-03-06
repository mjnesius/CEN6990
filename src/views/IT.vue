<template>
  <div class="it container">
    <div class="jumbotron mt-3">
      <h1 class="display-3">Information Technology</h1>
      <p
        class="lead"
      >From workstations to networks, you will quickly gain the knowledge and skills to work with the pros!</p>
      <hr class="my-4">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!</p>
    </div>
    <div class="list-group">
      <router-link
        v-for="course in courses"
        :key="course.id"
        :to="{ name: 'course', params: { id: course.id }}"
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
  name: "IT",
  data() {
    return {
      courses: []
    };
  },
  created() {
    db.collection("courses")
      .where("topic", "==", "it")
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

<style scoped>
</style>