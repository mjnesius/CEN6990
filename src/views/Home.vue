<template>
  <div>
    <div class="container h-100">
      <div
        class="row p-5 h-100  text-center justify-content-center align-items-center"
      >
        <div class="col-md-6">
          <h1 class="display-4">
            Thousands of classes to fuel your creativity and career
          </h1>
          <p class="lead">100% online learning from our best instructors.</p>
          <router-link
            :to="{ name: 'features' }"
            type="button"
            class="btn btn-primary btn-large"
            role="button"
            >Learn More</router-link
          >
        </div>
        <div class="col-md-6">
          <img class="img-fluid" src="../assets/drawing.svg" alt />
        </div>
      </div>
    </div>

    <div class="container">
      <h1 class="mb-4">Trending Courses</h1>
      <carousel
        :scrollPerPage="true"
        :perPageCustom="[[50, 1], [768, 3], [1024, 4]]"
        class="mb-3"
      >
        <slide v-for="(card, i) in cards1" :key="i">
          <div class="card m-1">
            <img
              :src="require(`@/assets/${card.image}`)"
              class="card-img-top"
              alt
            />
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.content }}</p>
              <router-link
                :to="{ name: 'course', params: { id: card.link } }"
                type="button"
                class="btn btn-primary"
                role="button"
                >Start Course</router-link
              >
            </div>
          </div>
        </slide>
      </carousel>
    </div>

    <div class="container">
      <hr class="my-5" />
      <h1 class="mb-4">New Courses</h1>
      <carousel
        :scrollPerPage="true"
        :perPageCustom="[[50, 1], [768, 3], [1024, 4]]"
        class="mb-5"
      >
        <slide v-for="(card, i) in cards2" :key="i">
          <div class="card m-1">
            <img
              :src="require(`@/assets/${card.image}`)"
              class="card-img-top"
              alt
            />
            <div class="card-body">
              <h5 class="card-title">{{ card.title }}</h5>
              <p class="card-text">{{ card.content }}</p>
              <router-link
                :to="{ name: 'course', params: { id: card.link } }"
                type="button"
                class="btn btn-primary"
                role="button"
                >Start Course</router-link
              >
            </div>
          </div>
        </slide>
      </carousel>
    </div>

    <div class="container">
      <hr class="my-5" />
      <h1 class="mb-4">Browse By Topic</h1>
      <div class="row">
        <div class="col-md-4 mb-4">
          <div class="card mb-5 h-100">
            <img
              src="../assets/cyber1.jpg"
              class="card-img-top"
              alt="Area for Topic1"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="p1">Software Development</h5>
              <p class="card-text">
                Websites production and maintenance skills web graphic design
                included code and proprietary software included
              </p>
              <router-link
                :to="{ name: 'topic', params: { id: 0 } }"
                type="button"
                class="btn btn-primary mt-auto"
                role="button"
                >Find a Course</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card mb-5 h-100">
            <img
              src="../assets/cyber.jpg"
              class="card-img-top"
              alt="Area for Topic2"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="p1">Information Technology</h5>
              <p class="card-text">
                Maintaining computer infrastructures with emphasis on networking
                on-site servers and software-network interactions as well as
                network integrity/resilience
              </p>
              <router-link
                :to="{ name: 'topic', params: { id: 1 } }"
                type="button"
                class="btn btn-primary mt-auto"
                role="button"
                >Find a Course</router-link
              >
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card mb-5 h-100">
            <img
              src="../assets/cyber2.jpg"
              class="card-img-top"
              alt="Area for Topic3"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="p1">CyberSecurity</h5>
              <p class="card-text">
                Protection of computer systems from damage to their hardware
                software or electronic data keep from disruption of the services
              </p>
              <router-link
                :to="{ name: 'topic', params: { id: 2 } }"
                type="button"
                class="btn btn-primary mt-auto"
                role="button"
                >Find a Course</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <section id="team" class="mb-5 pt-5 text-center">
      <div class="container">
        <div class="row mb-3">
          <div class="col">
            <div class="info-header mb-5">
              <h1 class="text-primary pb-3">Instructors in the Spotlight</h1>
              <p class="lead pb-3">
                Nationally recognized experts in their fields.
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <img
                  src="../assets/team_01.jpg"
                  alt
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Dr. John Wright</h3>
                <h5 class="lead">Center for Cybersecurity</h5>
                <p>
                  Professor Wright has extensive expertise in cybersecurity
                  education, research, and workforce development and received
                  several awards related to cybersecurity education and
                  diversity.
                </p>
                <div class="d-flex flex-row justify-content-center"></div>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <img
                  src="../assets/team_02.jpg"
                  alt
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Dr. Carl Griffin</h3>
                <h5 class="lead">Professor</h5>
                <p>
                  Dr. Carl Griffin is a Professor in the Department of Computer
                  Science and a Research Scientist at the Florida Institute for
                  Artificial Intelligence. He teaches Computer Science courses
                  at UWF.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <img
                  src="../assets/team_03.jpg"
                  alt
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Dr. Susan Smith</h3>
                <h5 class="lead">Associate Professor</h5>
                <p>
                  Dr. Smith's research includes knowledge elicitation and
                  representation, web services and service oriented architecture
                  and computer science education in Robotics domain.
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="card h-100">
              <div class="card-body">
                <img
                  src="../assets/team_04.jpg"
                  alt
                  class="img-fluid rounded-circle w-50 mb-3"
                />
                <h3>Dr. William Jones</h3>
                <h5 class="lead">Lecturer</h5>
                <p>
                  Dr. William Jones, a Lecturer, has written award-winning books
                  on computer algorithms, data structures, and artificial
                  intelligence. He is also a popular conference speaker.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

export default {
  name: "Home",
  components: { Carousel, Slide },
  data() {
    return {
      cards1: [
        {
          image: "adults-chairs-class1.jpg",
          title: "Computer Network",
          content: `System for connecting hardware, software, resource sharing and
                information transmission of network with fully functional
                network software by using communication equipment and multiple computer systems.`,
          link: "aOVvI342VkNoHreQLX7Q"
        },
        {
          image: "action-blur-close-up.jpg",
          title: "Computer Composition",
          content: `Computer composition is an act or mechanism to combine 
                   simple functions.Refers to the logical realization of 
                   the system structure,including the composition of the 
                   data flow and control flow.`,
          link: "fnRp8ZUVeMhO3x3iSdsb"
        },
        {
          image: "T1.jpg",
          title: "Programming language",
          content: `A programming language is a language used to write computer
                programs. The basis of a language is a set of tokens and a set
                of rules. The whole of the token string consisting of tokens
                according to the rules is the language.`,
          link: "uEiLsLvTu9M7hNwXze9W"
        },
        {
          image: "art-artistic-attractive.jpg",
          title: "Computer Graphics",
          content: `The main research content of computer graphics is to study how
                to represent graphics in computers and the related principles
                and algorithms for computing, processing and displaying graphics
                using computers.`,
          link: "vvfcd2oxobbOmVsfWGER"
        },
        {
          image: "chart-data-desk.jpg",
          title: "Data Structure",
          content: `In computer science, a data structure is a particular way of organizing
           data in a computer so that it can be used efficiently. Data structures 
           can implement one or more particular abstract data types (ADT).`,
          link: "fTnle1f5502ysw5HOCXy"
        },
        {
          image: "calculating-calculator-economy.jpg",
          title: "Mathematical Logic",
          content: `Mathematical logic is a subfield of mathematics exploring the applications 
          of formal logic to mathematics. It bears close connections to metamathematics, 
          and foundations of mathematics. `,
          link: "jZF3J1Pt2dKWcKii2oKh"
        },
        {
          image: "chips-circuit-board-computer.jpg",
          title: "Analog Circuit",
          content: `Analogue electronics (or analog in American English) are electronic 
          systems with a continuously variable signal, in contrast to digital electronics 
          where signals usually take only two levels.  `,
          link: "nhOwC5ZvEdLl91nbhA2p"
        }
      ],
      cards2: [
        {
          image: "business-commerce-communication.jpg",
          title: "Web Development",
          content: `Learn how to design and create a website with our web
                          design tutorials，From hundreds of video courses,choose the right one
                          to help you embed video, format text, design in CSS, 
                          create a content strategy, and analyze user experience design.`,
          link: "ik59ShTQxHPYfrXBwSkR"
        },
        {
          image: "course2.jpg",
          title: "Become a Digital Marketer",
          content: `Use your analytical and tactical skills to help grow
                          and develop new opportunities for businesses as a
                          digital marketer.From marketing plans to content
                          strategy we teach the best practices and principles of
                          digital marketing.`,
          link: "83lrbnOtCOkYkEfHhFDC"
        },
        {
          image: "course3.jpg",
          title: "Business",
          content: `Explore a wide range of business skills from project
                          management and negotiation to leadership skills and
                          online marketing strategy. Our professional
                          development tutorials can help you learn SEO,
                          spreadsheets, word processing, and more.`,
          link: "n8wbTYgdEvcLdojzlfxx"
        },
        {
          image: "course4.jpg",
          title: "Become a Manager",
          content: `As a manager, success is predicated on your ability to
                          achieve goals working with your team. This path is
                          designed to provide you with the key considerations,
                          skills and competencies to help you become and succeed
                          as a manager.`,
          link: "IYIo8IPp2sw99ImNS5mx"
        },
        {
          image: "course5.jpg",
          title: "Master 2D Animation",
          content: `2D animators create the illusion of motion and change
                          via analog and digital media. Beginning with the
                          foundations of animation, learn everything you need to
                          know to get started in 2D animation and make it your
                          career.`,
          link: "0KUDWKANVsnQiSimEDkl"
        },
        {
          image: "course6.jpg",
          title: "Design",
          content: `Design can have different connotations of application,
                         Whether you want to design a logo or
                          just learn how to use a Pen tool, our in-depth design
                          tutorials can help. Get to know Illustrator and
                          InDesign, explore typography, and learn the nuances of
                          designing for print.`,
          link: "gLGPaWlYfkrbn9BwtJSy"
        },
        {
          image: "course7.jpg",
          title: "Become an Agile Project Manager",
          content: `Deliver projects with the highest level of performance
                         as an agile project manager. This path
                          will help you build a foundation in leading and
                          motivating agile project teams, from developing user
                          stories and agile charts.`,
          link: "S5XOxFIKCYqmKdAnevQZ"
        },
        {
          image: "course8.jpg",
          title: "Become an IT Security Specialist",
          content: `Learn the core concepts needed to secure your
                          organization's network as an IT security specialist.
                          Learn all the foundations of IT security: from
                          practical skills for securing hardware and network
                          data.`,
          link: "DAXzDcPRFG7UDBQVbROI"
        },
        {
          image: "course9.jpg",
          title: "Developer Training",
          content: `Our developer tutorials can help you learn to develop
                          and create mobile apps, work with PHP and MySQL
                          databases, get started with the statistical processing
                          language R. Our portfolio has over 280
                          courses covering programming languages.`,
          link: "Y9wqTuNZPC9w1euHS5LO"
        }
      ]
    };
  }
};
</script>

<style scoped>
#team img {
  margin-top: -50px;
}

#team .card:hover {
  background: #586b9e;
  color: #fff;
}
</style>
