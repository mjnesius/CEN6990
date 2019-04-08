<template>
  <div class="about container">
    <div
      class="jumbotron"
      style="position:relative; background-color:transparent !important;"
    >
      <h3
        class="display-3"
        style=" text-shadow: 0 1.5px 2.5px rgba(0, 0, 0, 0.6); text-align: center; justify-content: center;font-size: 4.7em;"
      >
        UWF Empowers!
      </h3>
      <div id="inspirationTitle" style="text-align:right;">
        <h3 id="inspirationTitleH3"></h3>
      </div>
      <a
        type="button"
        class="btn btn-light btn-lg btn-primary pull-left"
        href="Home"
        role="button"
        style="position:absolute;left:8%;  bottom:14%; z-index:50"
        @click="$router.push('home')"
        >Get started!</a
      >
      <vueper-slides
        @ready="updateHeading"
        @slide="updateHeading"
        autoplay
        slide-image-inside
        :arrows="false"
        fixed-height="250px"
        :slide-ratio="1 / 2"
        class="no-shadow"
        :bullets-outside="true"
        style="text-align: left; justify-content: left; !important"
      >
        <vueper-slide
          slide-content-outside-class="title"
          v-for="ins in inspire"
          :key="ins.caption"
          :title="ins.caption"
          :style="{ 'background-image': 'url(' + ins.img + ')' }"
        >
        </vueper-slide>
      </vueper-slides>
    </div>
    <div class="jumbotron" style="background-color:transparent !important;">
      <h3
        class="display-3"
        style=" text-shadow: 0 1.5px 2.5px rgba(0, 0, 0, 0.6); text-align: center; justify-content: center;font-size: 4.7em;"
      >
        Start your IT journey!
      </h3>
      <p style="text-align: center; font-size: 2em;justify-content: center;">
        Access world class coursework for free!
      </p>
      <hr class="my-4" />
      <div class=" row">
        <div class="col-md-4" style="padding: 4px 4px 4px 4px">
          <div class="tile-container">
            <img
              src="../assets/skills-optimized.jpg"
              alt="Books_03"
              style="width:100%"
              display="block"
              target="_self"
            />
            <a @click="$router.push({ path: 'home' })">
              <div class="overlay">
                <div class="overlay-text">Search our course library</div>
              </div>
            </a>
          </div>
          <div class="tile-container">
            <img
              src="../assets/inspiring-3-optimized.jpg"
              alt="portrait"
              style="width:100%"
              target="_self"
            />
            <a @click="$router.push('topic/1')">
              <div class="overlay">
                <div class="overlay-text">Become an IT Professional</div>
              </div>
            </a>
          </div>
        </div>
        <div class="col-md-4" style="padding: 4px 4px 4px 4px">
          <div class="tile-container">
            <a href="https://uwf.edu/ihire/" alt="iHire UWF" target="_blank">
              <img
                src="../assets/employer1-optimized.jpg"
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
              target="_blank"
            >
              <img
                src="../assets/testimonials-7-optimized.jpg"
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
        <div class="col-md-4" style="padding: 4px 4px 4px 4px">
          <row>
            <div class="tile-container">
              <a @click="$router.push('topic/2')" alt="Security">
                <img
                  src="../assets/security-3-optimized.jpg"
                  alt="Security"
                  style="width:100%"
                />
                <div class="overlay">
                  <div class="overlay-text">Become A Cybersecurity Expert</div>
                </div>
              </a>
            </div>
          </row>
          <row>
            <div class="tile-container">
              <a @click="$router.push('topic/0')" alt="Software">
                <img
                  src="../assets/se-optimized.jpg"
                  alt="Software"
                  style="width:100%"
                />
                <div class="overlay">
                  <div class="overlay-text">Develop Software</div>
                </div>
              </a>
            </div>
          </row>
        </div>
      </div>
    </div>

    <div class="jumbotron" style="background-color:transparent !important;">
      <h3
        class="display-4"
        style=" text-shadow: 0 1.5px 2.5px rgba(0, 0, 0, 0.6); text-align: center; justify-content: center; font-size: 4.7em;"
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
              class="slideCaption d-md-block rounded"
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
    <div class="jumbotron" style="background-color:transparent !important;">
      <h4
        class="display-3"
        style=" text-shadow: 0 1.5px 2.5px rgba(0, 0, 0, 0.6); text-align: center; justify-content: center; font-size: 4.7em;"
      >
        UWF Alumni Association
      </h4>
      <div class="card" style="background-color:white !important">
        <h2
          class="card-header"
          style="background-color:#004C97 color: #B6ADA5; text-align: center !important"
        >
          Proud Sponsor of UWF-Empowers
        </h2>
        <div class="row mt-3 mb-3" style="margin-left:1px; margin-right:1px; ">
          <div class="col-lg-6 mb-3">
            <img
              class="img-fluid"
              alt="Responsive image"
              style="height: auto; margin: auto; display: block;"
              src="../assets/team_o3-optimized.jpg"
            />
          </div>
          <div class="col-lg-6">
            <div class="card mb-12" style="height: auto;  display: block;">
              <h4
                class="card-header"
                style="background-color:#8DC8E8 !important"
              >
                Fostering a spirit of fellowship
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
            target="_blank"
            ><span style="font-size: 3em; color: #004C97; ">
              <font-awesome-icon :icon="['far', 'calendar-alt']" size="2x" />
              <!--<i class="far fa-calendar-alt fa-2x"></i>-->
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
            target="_blank"
            ><span style="font-size: 3em; color: #007A33;">
              <font-awesome-icon icon="gift" size="2x" />
              <!--<i class="fas fa-gift fa-2x"></i>-->
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
            target="_blank"
            ><span style="font-size: 3em; color: #004C97;">
              <font-awesome-icon icon="book-reader" size="2x" />
              <!--<i class="fas fa-book-reader fa-2x"></i>-->
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
  methods: {
    updateHeading(eventName, params) {
      document.getElementById(
        "inspirationTitle"
      ).innerHTML = params.currentSlide.title.replace("display:none;", "");
    }
  },
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
            '<b style="display: inline-block; font-size: 1.7em;color: #ffffff;text-shadow: 1px 1px 12px #004C97; position: relative; z-index:31; bottom: -2em;left:-2em; display:none; !important ">Your Dream, Our Mission </b>',
          img: require("../assets/areyourready-optimized.jpg")
        },
        {
          id: 1,
          caption:
            '<span><b style="font-size: 1.7em;color: #ffffff;text-shadow: 1px 1px 12px #004C97; position: relative; z-index:31; bottom: -2em;left:-2em; display:none; !important">Take Charge, Reimagine</b></span>',
          img: require("../assets/inspiring-1-optimized.jpg")
        },
        {
          id: 2,
          caption:
            '<b style="font-size: 1.7em;color: #ffffff;text-shadow: 1px 1px 12px #004C97; position: relative; z-index:31; bottom: -2em;left:-2em; display:none; !important">Your Future Starts Today</b>',
          img: require("../assets/inspiring-4-optimized.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
.jumbotron {
  padding: 0.5rem 0.5rem; /* override bootstrap's padding*/
}
.slideCaption {
  /* position testimonial carousel's floating caption*/
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

.btn-light {
  color: #ffffff;
  background-color: #009cde;
  border-color: #004c97;
  fill: #004c97;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  color: #ffffff;
  background-color: #8dc8e8;
}

/* Start Your IT Journey styling */
.overlay {
  position: absolute;
  top: 0;
  vertical-align: middle;
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

  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 24;
  line-height: 1.2em;
}
.tile-container:hover .overlay {
  opacity: 0.9;
}
.tile-container {
  margin-top: 8px;
  position: relative;
  width: 100%;
  z-index: 22;
}
</style>
