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
    <div class="list-group">
      <router-link
        v-for="course in courses"
        :key="course.id"
        :to="{ name: 'course', params: { id: course.id }}"
        class="list-group-item list-group-item-action mb-3"
      >{{ course.title }} <span class="ml-5">{{ course.shortDescription }}</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Development",
  data() {
    return {
      courses: [
        { title: "course1", shortDescription: "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos", id: "1" },
        { title: "course2", shortDescription: "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos", id: "2" },
        { title: "course3", shortDescription: "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos", id: "3" },
        { title: "course4", shortDescription: "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos", id: "4" },
        { title: "course5", shortDescription: "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos", id: "5" }
      ]
    }
  },
};
</script>

<style scoped>
</style>