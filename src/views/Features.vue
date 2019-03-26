<template>
  <div>
    <h1 class="container">This is the Features Page</h1>
    <div class="jumbotron" style="background-color:transparent !important;">
      <div class="container">
        <h3
          class="mt-5 display-4"
          style="text-align: center; justify-content: center;"
        >
          Frequently Asked Questions
        </h3>
        <div class="accordion mt-4" id="accordionExample">
          <div class="card" v-for="qa in qas" :key="qa.id">
            <div class="card-header " :id="qa.heading">
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
              class="collapse col-sm-offset-1"
              :aria-labelledby="qa.heading"
              data-parent="#accordionExample"
            >
              <div class="card-body col-sm-offset-1">
                <p style="margin-left: 35px">{{ qa.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features",
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
          card: "a3"
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
          id: 5,
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
