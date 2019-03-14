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
            >
          </div>
          <div class="carousel-item item">
            <div class="carousel-content">
              <h2 class="caro-h2">Take Charge, Reimagine</h2>
            </div>
            <img
              class="d-block w-100 img-fluid img-responsive"
              src="../assets/inspiring-1.jpg"
              alt="Second slide"
            >
          </div>
          <div class="carousel-item item">
            <div class="carousel-content">
              <h2 class="caro-h2">Your Future, Starts Today</h2>
            </div>
            <img
              class="d-block w-100 img-fluid img-responsive"
              src="../assets/inspiring-4.jpg"
              alt="Third slide"
            >
          </div>
        </div>
        <div class="col-md-12 carousel-button">
          <a
            class="btn btn-light btn-lg btn-outline-primary"
            href="Home"
            role="button"
          >Start your journey!</a>
        </div>
      </div>
    </div>
    <div class="jumbotron">
      <h1 class="display-3">Start your IT journey!</h1>
      <p class="lead">Access world class coursework for free!</p>
      <hr class="my-4">
      <div class="rowImg">
        <div class="columnImg">
          <div class="tile-container">
            <img
              src="../assets/skills.jpg"
              alt="Books_03"
              style="width:100%"
              display="block"
              target="_self"
            >
            <a href="Home" alt="Search the stacks at UWF Libraries">
              <div class="overlay">
                <div class="overlay-text">Search our course library</div>
              </div>
            </a>
          </div>
          <div class="tile-container">
            <img src="../assets/inspiring-3.jpg" alt="portrait" style="width:100%" target="_self">
            <a href="/topic/1" alt="Meet our notable alumni">
              <div class="overlay">
                <div class="overlay-text">Become and IT Professional</div>
              </div>
            </a>
          </div>
        </div>
        <div class="columnImg">
          <div class="tile-container">
            <a href="https://uwf.edu/ihire/" alt="iHire UWF" target="_self">
              <img src="../assets/employer1.jpg" alt="ihire project" style="width:100%">
              <div class="overlay">
                <div class="overlay-text">iHire UWF</div>
              </div>
            </a>
          </div>
          <div class="tile-container">
            <a
              href="https://uwf.edu/topscholars"
              alt="Get to Know UWF's Top&nbsp;Scholars"
              target="_self"
            >
              <img src="../assets/testimonials-7.jpg" alt="Top Scholars" style="width:100%">
              <div class="overlay">
                <div class="overlay-text">Get to Know UWF's Top&nbsp;Scholars</div>
              </div>
            </a>
          </div>
        </div>
        <div class="columnImg">
          <div class="tile-container">
            <a href="../topic/2" alt="Security" target="_self">
              <img src="../assets/security-3.jpg" alt="Security" style="width:100%">
              <div class="overlay">
                <div class="overlay-text">Become A Cybersecurity Expert</div>
              </div>
            </a>
          </div>
          <div class="tile-container">
            <a href="../topic/0" alt="Software" target="_self">
              <img src="../assets/se.jpg" alt="Software" style="width:100%">
              <div class="overlay">
                <div class="overlay-text">Develop Software</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="card" style="background-color:#009CDE !important">
      <div class="row mt-3" style="margin-left:1px; margin-right:1px; ">
        <div class="col-sm-6">
          <div class="card mb-3">
            <div class="row mt-3" style="margin-left:1px; margin-right:1px; ">
              <div class="col-sm-6">
                <div class="card mb-3">
                  <div style="height: 190px">
                    <img
                      class="img-fluid"
                      alt="Responsive image"
                      style="height: auto; width: auto; display: block;"
                      src="../assets/team_03.jpg"
                    >
                  </div>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="card mb-3">
                  <h4 class="card-header" style="background-color:#8DC8E8 !important">alumni</h4>
                  <div class="card-body">
                    <h5 class="card-title">alumni</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">alumni</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card mb-12">
            <h4 class="card-header" style="background-color:#8DC8E8 !important">alumni</h4>
          </div>
        </div>
      </div>
    </div>
    <h3 class="mt-5 display-4">Commonly Asked Questions</h3>
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
            >{{ qa.question }}</button>
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
    <div class="jumbotron2 mt-5 mb-5">
      <div class="jumbotron2-inside">
        <h3
          class="display-4"
          style="color: white; text-shadow: 0 3.5px 3.5px rgba(0, 0, 0, 0.6);"
        >Testimonials</h3>
      </div>
      <div
        id="inspirationCarousel"
        class="carousel2 slide mb-1 mt-1"
        data-ride="carousel"
        data-interval="6000"
        style="max-height: 550px; !important"
      >
        <div class="carousel2-inner">
          <div
            class="carousel-item item"
            v-for="(test, idx) in testimonials"
            :key="test.id"
            :class="{ active: idx == 0 }"
            width="auto"
          >
            <img
              class="d-block h-100 img-fluid img-responsive fill"
              :src="test.img"
              :alt="test.name"
              z-index="24"
              style=" box-shadow: 0px 0px 10px 5px rgba(255, 184, 28, .4);border-radius: 25% 10%; !important;"
            >
            <!--<div class="carousel2-content" style="background-color: #003865; opacity:0.9; min-height:100px; display: flex; text-align: center; justify-content: center; 
                    align-items: center;">
                <h2 class="caro-h2" >{{ test.blurb }}</h2>
            </div>-->
            <div
              class="carousel-caption d-none d-md-block rounded border-left"
              style="box-sizing: border-box;padding: 15px; max-width: 550px; background-color: rgba(0, 76, 151, 0.7);!important"
            >
              <h4>{{ test.blurb }}</h4>
              <h5>-{{ test.name }}</h5>
              <h6>{{ test.specialty }}</h6>
            </div>
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
          specialty: "Cybersecurity 2019",
          blurb:
            "Music wasn't paying the bills, so I skilled up and got an entry level developer position with a tier-1 defense contactor. Thanks Empower!",
          img: require("../assets/testimonials-6.jpg")
        },
        {
          id: 1,
          name: "Joe",
          specialty: "Database Systems 2019",
          blurb:
            "UWF Empower helped me kickstart my career change. With the mobile app development skills I learned, I was able to launch my Hat Hailing service and we just reached Unicorn status!",
          img: require("../assets/testimonials-4.jpg")
        },
        {
          id: 2,
          name: "DJ Sneezey",
          specialty: "Software engineering 2019",
          blurb:
            "I wrote my own mixing software. Now, no one can copy my sound!",
          img: require("../assets/security.jpg")
        },
        {
          id: 3,
          name: "@guiGal",
          specialty: "UX Design 2019",
          blurb: "Empower gave me the skills I needed, on my schedule!",
          img: require("../assets/testimonials-3.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.jumbotron2 {
  position: relative;
}
.jumbotron2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/making_waves_image.jpg");
  background-size: cover;
  image-rendering: pixelated;

  filter: sepia(20%) hue-rotate(190deg) saturate(8) opacity(0.6) grayscale(0.8)
    contrast(4) blur(1px);
}
.jumbotron2-inside {
  /* This will make it stack on top of the ::before */
  position: relative;
}
.carousel-caption {
  left: 43%;
  bottom: 35%;
  transform: translateX(10%);
  transform: translatey(-80%);
  color: white;
  text-shadow: 0 3px 3.5px rgba(0, 0, 0, 0.8);
}
.carousel {
  max-height: 370px;
  min-height: 250px;
  overflow: hidden;
}
.carousel2,
.item,
.active {
  height: 50%;
  overflow: hidden;
}
.carousel2-inner {
  height: 50%;
  overflow: hidden;
}
.fill {
  width: 100%;
  height: 100%;
  background-position: center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
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
.carousel2-content {
  position: absolute;
  font-weight: bolder;
  top: 0%;
  left: 5%;
  right: 5%;
  margin: 0 auto;
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
