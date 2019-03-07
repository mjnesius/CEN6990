<template>
  <div class="about container">
    <h1>This is the About page ...</h1>
    <div class="jumbotron">
      <h1 class="display-3">Trending Courses</h1>
      <hr class="my-4" />
    </div>
    <div class="jumbotron">
      <h1 class="display-3">Instructors in the Spotlight</h1>
      <hr class="my-4" />
      <div class="card" style="background-color:#009CDE !important">
        <div class="row  mt-3" style="margin-left:1px; margin-right:1px; ">
          <div class="col-sm-6">
            <div class="card mb-3">
              <div
                class="row  mt-3"
                style="margin-left:1px; margin-right:1px; "
              >
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <div style="height: 190px">
                      <img
                        class="img-responsive mh-100"
                        style="height: 100%; width: 100%; display: block;"
                        src="../assets/team_03.jpg"
                        alt="Card image"
                      />
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <h4
                      class="card-header"
                      style="background-color:#8DC8E8 !important"
                    >
                      Professor Jamie Smith
                    </h4>
                    <div class="card-body">
                      <h5 class="card-title">PhD MIT</h5>
                      <h6 class="card-subtitle text-muted">Cybersecurity</h6>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        I have over 20 years of industry experience and look
                        forward to sharing my knowledge with you!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card mb-3">
              <div
                class="row  mt-3"
                style="margin-left:1px; margin-right:1px; "
              >
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <img
                      style="height: 190px; width: 100%; display: block;"
                      src="../assets/team_02.jpg"
                      alt="Card image"
                    />
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <h4
                      class="card-header"
                      style="background-color:#8DC8E8 !important"
                    >
                      Professor Ronald Jackson
                    </h4>
                    <div class="card-body">
                      <h5 class="card-title">PhD NYU</h5>
                      <h6 class="card-subtitle text-muted">Database Systems</h6>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        My expertise is in distributed, real-time databases.
                        Come learn with me!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-3" style="background-color:#fffff !important">
        <div class="row  mt-3" style="margin-left:1px; margin-right:1px;">
          <div class="col-sm-6">
            <div class="card mb-3" style="background-color:#009CDE !important">
              <div
                class="row  mt-3"
                style="margin-left:1px; margin-right:1px; "
              >
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <h3
                      class="card-header"
                      style="background-color:#B6ADA5 !important"
                    >
                      Professor Raul Gomez
                    </h3>
                    <div class="card-body">
                      <h5 class="card-title">PhD Standford</h5>
                      <h6 class="card-subtitle text-muted">
                        Software Engineering
                      </h6>
                    </div>
                    <div class="card-body">
                      <p class="card-text">
                        I have over 15 years developing software in the defense
                        industry!
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <img
                      style="height: 190px; width: 100%; display: block;"
                      src="../assets/team_01.jpg"
                      alt="Card image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card mb-3" style="background-color:#009CDE !important">
              <div
                class="row  mt-3"
                style="margin-left:1px; margin-right:1px; "
              >
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <h3
                      class="card-header"
                      style="background-color:#B6ADA5 !important"
                    >
                      Professor Gabe McMasters
                    </h3>
                    <div class="card-body">
                      <h5 class="card-title">PhD Columbia University</h5>
                      <h6 class="card-subtitle text-muted">UX Design</h6>
                    </div>
                    <div class="card-body">
                      <p class="card-text">. Come learn with me!</p>
                    </div>
                  </div>
                </div>
                <div class="col-sm-6">
                  <div class="card mb-3">
                    <img
                      style="height: 190px; width: 100%; display: block;"
                      src="../assets/team3.jpg"
                      alt="Card image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
