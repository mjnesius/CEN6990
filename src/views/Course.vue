<template>
  <div class="container">
    <div class="row my-5 vh-20">
      <div class="col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/fBNz5xF-Kx4?rel=0" allowfullscreen></iframe>
        </div>
      </div>
      <div class="col-md-6 overflow-auto">
        <div class="list-group list-group-item-action overflow-auto">
          <button
            type="button"
            v-for="(lecture, index) in lectures"
            :key="index"
            @click="loadVideo(lecture.id)"
            class="list-group-item mb-2"
          >
            {{ lecture.title }}
            <span class="ml-5">{{ lecture.shortDescription }}</span>
          </button>
        </div>
      </div>
    </div>
    <div class="jumbotron mt-3">
      <h1 class="display-5">Software Development in a Nutshell</h1>
      <p
        class="lead"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos.</p>
      <hr class="my-4">
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
  data() {
    return {
      currentVideo: "fBNz5xF-Kx4",
      lectures: [
        {
          title: "lecture1",
          shortDescription:
            "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos",
          id: "fBNz5xF-Kx4"
        },
        {
          title: "lecture2",
          shortDescription:
            "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos",
          id: "Wy9q22isx3U"
        },
        {
          title: "lecture3",
          shortDescription:
            "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos",
          id: "j55fHUJqtyw"
        },
        {
          title: "lecture4",
          shortDescription:
            "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos",
          id: "r-yxNNO1EI8"
        },
        {
          title: "lecture5",
          shortDescription:
            "Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos",
          id: "sYNjEzcOTOs"
        }
      ],
      computed: {
        newVideo() {
          return "https://www.youtube.com/embed/fBNz5xF-Kx4?rel=0";
        }
      },
      methods: {
        loadVideo(id) {
          this.currentVideo = id;
        }
      }
    };
  }
};
</script>

<style scoped>
</style>