<template>
  <div class="about container">
    <div class="jumbotron">
      <h1 class="display-3">UWF Empowers!</h1>
      <div
        id="inspirationCarousel"
        class="carousel slide"
        data-ride="carousel"
        data-interval="5000"
      >
        <div class="carousel-inner mh-150">
          <div class="carousel-item item active" width="auto">
            <div class="carousel-content">
              <h2 class="caro-h2">Your Dream, Our Mission</h2>
            </div>
            <img
              class="d-block w-100 img-fluid img-responsive"
              src="../assets/areyourready.jpg"
              alt="First slide"
            />
          </div>
          <div class="carousel-item item">
            <div class="carousel-content">
              <h2 class="caro-h2">Take Charge, Reimagine</h2>
            </div>
            <img
              class="d-block w-100 img-fluid img-responsive"
              src="../assets/inspiring-1.jpg"
              alt="Second slide"
            />
          </div>
          <div class="carousel-item item">
            <div class="carousel-content">
              <h2 class="caro-h2">Your Future, Starts Today</h2>
            </div>
            <img
              class="d-block w-100 img-fluid img-responsive"
              src="../assets/inspiring-4.jpg"
              alt="Third slide"
            />
          </div>
        </div>
        <div class="col-md-12 carousel-button">
          <a
            class=" btn btn-light btn-lg btn-outline-primary"
            href="Home"
            role="button"
            >Start your journey!</a
          >
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h1 class="display-3">Start your IT journey!</h1>
      <p class="lead">Access world class coursework for free!</p>
      <hr class="my-4" />
      <div class="rowImg">
        <div class="columnImg ">
          <div class="tile-container">
            <img
              src="../assets/skills.jpg"
              alt="Books_03"
              style="width:100%"
              display="block"
              target="_self"
            />
            <a href="Home" alt="Search the stacks at UWF Libraries">
              <div class="overlay">
                <div class="overlay-text">Search our course library</div>
              </div>
            </a>
          </div>
          <div class="tile-container">
            <img
              src="../assets/students.jpg"
              alt="portrait"
              style="width:100%"
              target="_self"
            />
            <a
              href="https://uwf.edu/go/connection/alumni-profiles/"
              alt="Meet our notable alumni"
            >
              <div class="overlay">
                <div class="overlay-text">
                  Meet our notable alumni
                </div>
              </div></a
            >
          </div>
        </div>
        <div class="columnImg">
          <div class="tile-container">
            <a href="https://uwf.edu/ihire/" alt="iHire UWF" target="_self">
              <img
                src="../assets/employer1.jpg"
                alt="ihire project"
                style="width:100%"
              />
              <div class="overlay">
                <div class="overlay-text">
                  iHire UWF
                </div>
              </div></a
            >
          </div>
          <div class="tile-container">
            <a
              href="https://uwf.edu/topscholars"
              alt="Get to Know UWF's Top&nbsp;Scholars"
              target="_self"
            >
              <img
                src="../assets/testimonials-7.jpg"
                alt="Top Scholars"
                style="width:100%"
              />
              <div class="overlay">
                <div class="overlay-text">
                  Get to Know UWF's Top&nbsp;Scholars
                </div>
              </div></a
            >
          </div>
        </div>
        <div class="columnImg">
          <div class="tile-container">
            <a href="../topic/2" alt="Security" target="_self">
              <img
                src="../assets/security-3.jpg"
                alt="Security"
                style="width:100%"
              />
              <div class="overlay">
                <div class="overlay-text">
                  Cybersecurity Track
                </div>
              </div></a
            >
          </div>
          <div class="tile-container">
            <a href="../topic/0" alt="Software" target="_self">
              <img src="../assets/se.jpg" alt="Software" style="width:100%" />
              <div class="overlay">
                <div class="overlay-text">
                  Software Engineering Track
                </div>
              </div></a
            >
          </div>
        </div>
      </div>
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
      ],
      testimonials: [
        {
          id: 0,
          name: "Joselle",
          specialty: "Cybersecurity",
          blurb:
            "Musice wasn't paying the bills, so I skilled up and got an entry level developer position with a tier-1 defense contactor. Thanks Empower!",
          img: "../src/assets/testimonials-6.jpg"
        },
        {
          id: 1,
          name: "Joe",
          specialty: "Database Systems",
          blurb:
            "UWF Empower helped me kickstart my career change. With the mobil app development skills I learned, I was able to launch my Hat Hailing service and we just reached Unicorn status!",
          img: "../src/assets/testimonials-4.jpg"
        },
        {
          id: 2,
          name: "Professor Gabe McMasters",
          specialty: "Cybersecurity",
          blurb: "Come learn with me!",
          img: "../src/assets/testimonials-1.jpg"
        },
        {
          id: 3,
          name: "Professor Raul Gomez",
          specialty: "UX Design",
          blurb:
            "I have over 15 years developing software in the defense industry!",
          img: "../assets/testimonials-3.jpg"
        }
      ]
    };
  }
};
</script>

<style scoped>
.carousel {
  max-height: 370px;
  min-height: 250px;
  overflow: hidden;
}
.item img {
  width: auto;
  height: auto;
  min-height: 250px;
  overflow: hidden;
}

@media (max-width: 368px) {
  .carousel {
    max-height: 150px;
    min-height: 150px;
    overflow: hidden;
  }
  .item img {
    width: auto;
    height: auto;
    max-height: 150px;
    min-height: 150px;
    overflow: hidden;
  }
}
.carousel-content {
  position: absolute;
  font-weight: bolder;
  top: 5%;
  left: 5%;
  z-index: 20;
  color: white;
  text-shadow: 0 3.5px 3.5px rgba(0, 0, 0, 0.6);
}
.carousel-button {
  position: absolute;
  bottom: 5%;
  z-index: 22;
}
@media screen and (max-width: 850px) {
  h1 {
    font-size: 8vw;
  }
  h2 {
    font-size: 7vw;
  }
  .caro-h2 {
    font-size: 4vw;
  }
  h3 {
    font-size: 6vw;
  }
  h4 {
    font-size: 5vw;
  }
}
.btn-light,
.btn-primary:hover {
  color: #009cde;
  background-color: #009cde;
  border-color: #97c800;
  fill: #8dc8e8;
}

.rowImg {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.columnImg {
  flex: 33%;
  max-width: 33%;
  padding: 0 5px;
}

.columnImg img {
  margin-top: 8px;
  vertical-align: middle;
}

/* Responsive layout - makes a two column-layout instead of four columns */
@media screen and (max-width: 800px) {
  .columnImg {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .columnImg {
    flex: 100%;
    max-width: 100%;
  }
}
.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #004c97;
  z-index: 23;
}
.overlay-text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 24;
}
.tile-container:hover .overlay {
  opacity: 0.9;
}
.tile-container {
  position: relative;
  width: 100%;
  z-index: 22;
}
</style>
