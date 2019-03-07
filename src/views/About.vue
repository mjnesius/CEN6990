<template>
  <div class="about container">
    <div class="jumbotron">
      <h1 class="display-3">UWF Empowers!</h1>
      <h2 class="display-4">Your Dream, Our Mission</h2>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button"
          >Start your journey!</a
        >
      </p>
    </div>
    <div class="jumbotron">
      <h1 class="display-3">Start your IT journey!</h1>
      <p class="lead">Access world class coursework for free!</p>
      <hr class="my-4" />
    </div>
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
            <p>{{ qa.answer }}</p>
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
          question: "How much do courses cost?",
          answer:
            "Courses are free for both registered and unregeistered users!",
          id: 1,
          heading: "q1",
          target: "#a1",
          card: "a1"
        },
        {
          question: "Do I need to be a UWF student?",
          answer:
            "No. Our mind blowing educational materials are free for the entire world.",
          id: 2,
          heading: "q2",
          target: "#a2",
          card: "a2"
        },
        {
          question: "Am I able to earn certificates by completing coursework?",
          answer:
            "We are not offering certificates at this time. However, future releases will include integration with social networking sites like LinkedIn where you'll be able to post digital certificates of completion.",
          id: 3,
          heading: "q3",
          target: "#a3",
          card: "32"
        },
        {
          question: "How do I become an instructor for a course?",
          answer:
            "Currently, only official faculty with UWF are allowed to create course content for UWF Empowers. If that means you, then please contact the site admin to be granted an instructor user account.",
          id: 4,
          heading: "q4",
          target: "#a4",
          card: "a4"
        },
        {
          question: "Why do you have so many questions?",
          answer: "We are a very inquisitive people",
          id: 4,
          heading: "q5",
          target: "#a5",
          card: "a5"
        }
      ]
    };
  }
};
</script>

<style scoped></style>
