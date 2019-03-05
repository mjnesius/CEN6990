<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-6">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" :src="newVideo" allowfullscreen></iframe>
        </div>
      </div>
      <div class="lecture-list col-md-6 overflow-auto">
        <div class="list-group list-group-item-action">
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
      <h1 class="display-5">{{ courseTitle }}</h1>
      <p class="lead">{{ courseDescription }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
  computed: {
    newVideo() {
      return `https://www.youtube.com/embed/${this.currentVideo}?rel=0`;
    }
  },
  methods: {
    loadVideo: function(id) {
      this.currentVideo = id;
    }
  },
  data() {
    return {
      currentVideo: "fBNz5xF-Kx4",
      courseTitle: "Software Development in a Nutshell",
      courseDescription:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos.",
      lectures: [
        {
          title: "lecture1",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "fBNz5xF-Kx4"
        },
        {
          title: "lecture2",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "Wy9q22isx3U"
        },
        {
          title: "lecture3",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "j55fHUJqtyw"
        },
        {
          title: "lecture4",
          shortDescription: "Dolores consequatur aliquam saepe qui",
          id: "r-yxNNO1EI8"
        },
        {
          title: "lecture5",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "sYNjEzcOTOs"
        },
        {
          title: "lecture6",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "r-yxNNO1EI8"
        },
        {
          title: "lecture7",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "r-yxNNO1EI8"
        },
        {
          title: "lecture8",
          shortDescription: "Dolores consequatur aliquam saepe qui.",
          id: "r-yxNNO1EI8"
        }
      ]
    };
  }
};
</script>

<style scoped>
.lecture-list {
  height: 270px;
}
</style>
