<template>
  <div class="about container">
    <div
      class="jumbotron"
      style="position:relative; background-color:transparent !important;"
    >
      <h1
        class="display-3"
        style="text-align: center; justify-content: center;"
      >
        UWF Empowers!
      </h1>
      <a
        type="button"
        class="btn btn-light btn-lg btn-primary pull-left"
        href="Home"
        role="button"
        style="position:absolute;left:8%;  bottom:14%; z-index:50"
        >Start your journey!</a
      >
      <vueper-slides
        autoplay
        slide-image-inside
        :arrows="false"
        fixed-height="250px"
        :slide-ratio="1 / 2"
        class="no-shadow"
        :bullets-outside="true"
      >
        <vueper-slide
          v-for="(ins, idx) in inspire"
          :key="ins.id"
          :class="{ active: idx == 0 }"
          :title="ins.caption"
          :style="{ 'background-image': 'url(' + ins.img + ')' }"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
    <div class="jumbotron" style="background-color:transparent !important;">
      <h1
        class="display-3"
        style="text-align: center; justify-content: center;"
      >
        Start your IT journey!
      </h1>
      <p class="lead" style="text-align: center; justify-content: center;">
        Access world class coursework for free!
      </p>
      <hr class="my-4" />
      <div class="rowImg">
        <div class="columnImg">
          <div class="tile-container">
            <img
              src="../assets/skills.svg"
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
              src="../assets/inspiring-3.svg"
              alt="portrait"
              style="width:100%"
              target="_self"
            />
            <a href="/topic/1" alt="Meet our notable alumni">
              <div class="overlay">
                <div class="overlay-text">Become an IT Professional</div>
              </div>
            </a>
          </div>
        </div>
        <div class="columnImg">
          <div class="tile-container">
            <a href="https://uwf.edu/ihire/" alt="iHire UWF" target="_self">
              <img
                src="../assets/employer1.svg"
                alt="ihire project"
                style="width:100%"
              />
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
              <img
                src="../assets/testimonials-7.svg"
                alt="Top Scholars"
                style="width:100%"
              />
              <div class="overlay">
                <div class="overlay-text">
                  Get to Know UWF's Top&nbsp;Scholars
                </div>
              </div>
            </a>
          </div>
        </div>
        <div class="columnImg">
          <div class="tile-container">
            <a href="../topic/2" alt="Security" target="_self">
              <img
                src="../assets/security-3.svg"
                alt="Security"
                style="width:100%"
              />
              <div class="overlay">
                <div class="overlay-text">Become A Cybersecurity Expert</div>
              </div>
            </a>
          </div>
          <div class="tile-container">
            <a href="../topic/0" alt="Software" target="_self">
              <img src="../assets/se.svg" alt="Software" style="width:100%" />
              <div class="overlay">
                <div class="overlay-text">Develop Software</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="jumbotron2 mt-5 mb-5">
      <div class="jumbotron2-inside">
        <h3
          class="display-4"
          style=" text-shadow: 0 1.5px 2.5px rgba(0, 0, 0, 0.6); text-align: center; justify-content: center;"
        >
          Testimonials
        </h3>
        <vueper-slides
          bullets-outside
          autoplay
          slide-image-inside
          :arrows="false"
          :slide-ratio="1 / 2"
          class="no-shadow"
        >
          <vueper-slide
            v-for="(test, idx) in testimonials"
            :key="test.id"
            :class="{ active: idx == 0 }"
          >
            <div slot="slideContent">
              <div
                class="caption d-md-block rounded"
                style="box-sizing: border-box;padding: 5px;  background-color: rgba(0, 76, 151, 0.7); display: inline-block; text-align: center; justify-content: center;width:100%!important"
              >
                <p style=" ">{{ test.blurb }}</p>
                <p style="font-style: italic; !important">
                  - {{ test.name }} {{ test.specialty }}
                </p>
              </div>
              <div>
                <img
                  class="d-md-block img-fluid img-responsive"
                  style="display: block;"
                  :src="test.img"
                  :alt="test.name"
                />
              </div>
            </div>
          </vueper-slide>
        </vueper-slides>
      </div>
    </div>
    <div class="jumbotron" style="background-color:transparent !important;">
      <h1
        class="display-3"
        style="text-align: center; justify-content: center;"
      >
        UWF Alumni Association
      </h1>
      <div class="card" style="background-color:white !important">
        <h2
          class="card-header"
          style="background-color:#004C97 color: #B6ADA5 !important"
        >
          Fostering a spirit of fellowship with and loyalty to the University
        </h2>
        <div class="row mt-3 mb-3" style="margin-left:1px; margin-right:1px; ">
          <div class="col-sm-6">
            <div style="height: 100">
              <img
                class="img-fluid"
                alt="Responsive image"
                style="height: auto; width: auto; display: block;"
                src="../assets/team_03.jpg"
              />
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card mb-12" style="height: 100%;  display: block;">
              <h4
                class="card-header"
                style="background-color:#8DC8E8 !important"
              >
                80,000 Members Strong
              </h4>
              <div class="card-body">
                <h5 class="card-text">
                  The mission of the University of West Florida’s Alumni
                  Association is to create a lifelong and worldwide community of
                  alumni through increased opportunities for meaningful
                  engagement in order to increase awareness, pride,
                  participation, volunteer involvement, and philanthropic
                  commitment to the University of West Florida.
                </h5>
                <h5>
                  Membership is free and open to all graduates of the
                  university. Alumni Relations is pleased to provide networking
                  opportunities, affinity program discounts and rewards, alumni
                  chapter gatherings and special events to all our members of
                  the UWF Alumni Association.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row mt-6"
        style="margin-left:1px; margin-right:1px;margin-top:40px;"
      >
        <div
          class="col-4 mt-6"
          style="margin-top:40px; text-align: center; justify-content: center;"
        >
          <a
            href="https://uwf.edu/alumni/get-involved/events-calendar/"
            class="icon-block"
            ><span style="font-size: 3em; color: #004C97; ">
              <i class="far fa-calendar-alt fa-2x"> </i>
            </span>
            <div style="margin-top:20px;">
              <h4>Alumni Events</h4>
            </div></a
          >
        </div>
        <div
          class="col-4 mt-6"
          style="margin-top:40px; text-align: center; justify-content: center;"
        >
          <a
            href="https://uwf.edu/university-advancement/departments/development/give-now/donate/"
            class="icon-block"
            ><span style="font-size: 3em; color: #007A33;">
              <i class="fas fa-gift fa-2x"></i>
            </span>
            <div style="margin-top:20px;">
              <h4>Make a Gift</h4>
            </div></a
          >
        </div>
        <div
          class="col-4 mt-6"
          style="margin-top:40px; text-align: center; justify-content: center;"
        >
          <a
            href="https://issuu.com/universityofwestflorida/docs/connection_fall2018_issuu"
            class="icon-block"
            ><span style="font-size: 3em; color: #004C97;">
              <i class="fas fa-book-reader fa-2x"></i>
            </span>
            <div style="margin-top:20px;">
              <h4>Read Connection Magazine</h4>
            </div></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// In your VueJS component.
import { VueperSlides, VueperSlide } from "vueperslides";

// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import "vueperslides/dist/vueperslides.css";

export default {
  components: { VueperSlides, VueperSlide },
  name: "About",
  data() {
    return {
      testimonials: [
        {
          id: 0,
          name: "Joselle S.",
          specialty: "Cybersecurity 2019",
          blurb: "I aced the interview. Thanks Empower!",
          img: require("../assets/testimonials-1.svg")
        },
        {
          id: 1,
          name: "Joe R.",
          specialty: "Database Systems 2019",
          blurb:
            "UWF Empower helped me kickstart my career change, all on my schedule!",
          img: require("../assets/testimonials-2.svg")
        },
        {
          id: 2,
          name: "Jane C.",
          specialty: "Software engineering 2019",
          blurb:
            "My employer is reluctant to pay for training. Thanks to UWF Empowers free resource, I can learn anything!",
          img: require("../assets/testimonials-3.svg")
        }
      ],
      inspire: [
        {
          id: 0,
          caption:
            '<b style="display: inline-block; font-size: 1.5em;color: #ffffff;text-shadow: 1.3px 1.3px 6px #004C97; position: relative;  top: -5em; !important ">Your Dream, Our Mission </b>',
          img: require("../assets/areyouready.svg")
        },
        {
          id: 1,
          caption:
            '<span><b style="font-size: 1.5em;color: #ffffff;text-shadow: 1.3px 1.3px 6px #004C97; position: relative; top: -5em;">Take Charge, Reimagine</b></span>',
          img: require("../assets/inspiring-1.svg")
        },
        {
          id: 2,
          caption:
            '<b style="font-size: 1.5em;color: #ffffff;text-shadow: 1.3px 1.3px 6px #004C97; position: relative;  top: -5em;">Your Future Starts Today</b>',
          img: require("../assets/inspiring-4.svg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.caption {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-weight: bold;
}

.fas:hover,
.far:hover,
.icon-block:hover {
  color: #ffb81c;
}
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
  /*background-color: #8DC8E8 ;*/
  background-size: cover;
  image-rendering: pixelated;
  filter: opacity(0.6);
}
.jumbotron2-inside {
  /* This will make it stack on top of the ::before */
  position: relative;
}

.item,
.active {
  /*height: 50%;*/
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
  overflow: hidden;
}
@media screen and (max-width: 576) {
  p {
    font-size: 3vw;
  }
}

@media screen and (max-width: 1200) {
  h1,
  .display-3 {
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
    font-size: 3vw;
  }
  .columnImg {
    flex: 50%;
    max-width: 50%;
  }
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 768px) {
  .columnImg {
    flex: 100%;
    max-width: 100%;
  }
}

.btn-light {
  color: #009cde;
  background-color: #009cde;
  border-color: #97c800;
  fill: #8dc8e8;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  color: #97c800;
  background-color: #003865;
  border-color: #00abc8;
  fill: #009cde;
}

.rowImg {
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
}

/* Create 3 equal columns that sits next to each other */
.columnImg {
  flex: 33%;
  max-width: 33%;
  padding: 0 5px;
}

.columnImg img {
  margin-top: 8px;
  vertical-align: middle;
}

.overlay {
  position: absolute;
  top: 0;
  padding: 0 5px;
  margin-top: 8px;
  margin-bottom: 8px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #004c97;
  z-index: 20;
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
