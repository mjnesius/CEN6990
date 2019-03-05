<template>
  <div class="about container">
    <h1>This is the About page ...</h1>
    <h3>Commonly Asked Questions</h3>
    <div class="accordion" id="accordionExample">
      <div class="card" v-for="qa in qas" :key="qa.id">
        <div class="card-header" :id="qa.heading">
          <h5 class="mb-0">
            <button
              class="btn btn-link"
              aria-expanded="false"
              type="button"
              data-toggle="collapse"
              :data-target="qa.target"
              :aria-controls="qa.card"
            >
              {{ qa.question }}
            </button>
          </h5>
        </div>

        <div
          :id="qa.card"
          class="collapse"
          :aria-labelledby="qa.heading"
          data-parent="#accordionExample"
        >
          <div class="card-body">
            {{ qa.answer }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      qas: [
        {
          question: "What is the point of this?",
          answer: "Dolores consequatur aliquam saepe qui.",
          id: 1,
          heading: "q1",
          target: "#a1",
          card: "a1"
        },
        {
          question: "Why do you have so many questions?",
          answer: "We are a very inquisitive people",
          id: 2,
          heading: "q2",
          target: "#a2",
          card: "a2"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
