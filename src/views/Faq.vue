<template>
  <div>
    <div class="jumbotron" style="background-color:transparent !important;">
      <div class="container">
        <h3
          class="mt-3 display-4"
          style="text-align: center; justify-content: center;"
        >
          Frequently Asked Questions
        </h3>
        <div class="row text-center my-5">
          <div class="col">
            <img
              class="img-fluid w-75 mb-sm-5"
              style="width: auto; max-width: 550px; height: auto; max-height: 500px;"
              src="../assets/FAQ.jpg"
              alt
            />
          </div>
        </div>

        <div class="accordion mt-4" id="accordionExample">
          <div class="card" v-for="qa in qas" :key="qa.id">
            <div
              class="card-header bg-gradient-primary text-white"
              :id="qa.heading"
            >
              <h2 class="mb-0 panel-title">
                <a
                  class="collapsed"
                  aria-expanded="false"
                  data-toggle="collapse"
                  :data-target="qa.target"
                  :aria-controls="qa.card"
                >
                  {{ qa.question }}
                  <span
                    class="when-opened"
                    style="float:right; font-size: 3em; color: #007A33;"
                  >
                    <font-awesome-icon icon="chevron-up" />
                    <!--<i class="fas fa-chevron-up"> </i>-->
                  </span>
                  <span
                    class="when-closed"
                    style="float:right; font-size: 3em; color: #007A33;"
                    ><font-awesome-icon icon="chevron-down" />
                    <!--i class="fas fa-chevron-down"></i>-->
                  </span>
                </a>
              </h2>
            </div>

            <div
              :id="qa.card"
              class="collapse col-sm-offset-1"
              :aria-labelledby="qa.heading"
              data-parent="#accordionExample"
            >
              <div class="card-body col-sm-offset-1">
                <h3 style="margin-left: 35px">{{ qa.answer }}</h3>
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
  name: "Faq",
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

<style scoped>
.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
