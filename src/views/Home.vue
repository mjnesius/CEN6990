<template>
  <div class="hero">
    <div class="container h-40">
      <div class="row p-5 justify-content-center align-items-right">
        <div class="col-md-6">
          <div class="hero-content">
            <h1 class="display-5-text headline">
              Thousands of classes to fuel your creativity and career
            </h1>
            <p class="lead">
              100% online learning from our best instructors.
            </p>
            <div class="hero-btn mt-5">
              <button
                @click="$router.push('Features')"
                button
                class="btn custom-btn btn-info mr-4"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="graphics">
            <img class="img-fluid" src="../assets/drawing.svg" alt="" />
          </div>
        </div>
      </div>

      <div class="Container mt-5">
        <h2 class="mb-5 text-left">Trending Courses</h2>
        <div class="card-deck1 m-1">
          <div class="card">
            <img
              src="../assets/adults-chairs-class-515166.jpg"
              class="card-img-top"
              alt="Trending Course1"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Computer Network</h5>
              <p class="card-text">
                System for connecting hardware, software, resource sharing and
                information transmission of network with fully functional
                network software by using communication equipment and lines to
                connect multiple computer systems with different geographical
                locations and functions independently.
              </p>
              <a href="#" class="btn btn-primary btn mt-auto">Find A Course</a>
            </div>
          </div>
          <div class="card">
            <img
              src="../assets/employerShowcase.jpg"
              class="card-img-top"
              alt="Trending Course2"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Computer Composition</h5>
              <p class="card-text">
                Computer composition refers to the logical realization of the
                system structure, including the composition of the data flow and
                control flow within the machine and the logic design.
              </p>
              <a href="#" class="btn btn-primary btn mt-auto">Find A Course</a>
            </div>
          </div>
          <div class="card">
            <img
              src="../assets/boss-brainstorming-business-1093913.jpg"
              class="card-img-top"
              alt="Trending Course3"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Advanced programming language</h5>
              <p class="card-text">
                A programming language is a language used to write computer
                programs. The basis of a language is a set of tokens and a set
                of rules. The whole of the token string consisting of tokens
                according to the rules is the language.
              </p>
              <a href="#" class="btn btn-primary btn mt-auto">Find A Course</a>
            </div>
          </div>
          <div class="card">
            <img
              src="../assets/se.jpg"
              class="card-img-top"
              alt="Trending Course4"
            />
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">Computer Graphics</h5>
              <p class="card-text">
                The main research content of computer graphics is to study how
                to represent graphics in computers and the related principles
                and algorithms for computing, processing and displaying graphics
                using computers.
              </p>
              <a href="#" class="btn btn-primary btn mt-auto">Find A Course</a>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <br />
      <br />
      <div class="container">
        <h2 class="mb-5 text-left">New Courses</h2>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
          data-interval="false"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="card-deck m-1">
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/adults-business-coffee-1323592.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Web Development</h5>
                        <p class="card-text">
                          Learn how to design and create a website with our web
                          design tutorials. From hundreds of video courses,
                          choose the right one to help you embed video, format
                          text, design in CSS, create a content strategy, and
                          analyze user experience design.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/boss-brainstorming-business-1093913.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Become a Digital Marketer</h5>
                        <p class="card-text">
                          Use your analytical and tactical skills to help grow
                          and develop new opportunities for businesses as a
                          digital marketer.From marketing plans to content
                          strategy we teach the best practices and principles of
                          digital marketing.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/adult-analyzing-boss-1080865.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Business</h5>
                        <p class="card-text">
                          Explore a wide range of business skills from project
                          management and negotiation to leadership skills and
                          online marketing strategy. Our professional
                          development tutorials can help you learn SEO,
                          spreadsheets, word processing, and more.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-deck m-1">
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/blurred-background-coffee-cup-computer-908284.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Become a Manager</h5>
                        <p class="card-text">
                          As a manager, success is predicated on your ability to
                          achieve goals working with your team. This path is
                          designed to provide you with the key considerations,
                          skills and competencies to help you become and succeed
                          as a manager.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/apple-class-conference-7102.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Master 2D Animation</h5>
                        <p class="card-text">
                          2D animators create the illusion of motion and change
                          via analog and digital media. Beginning with the
                          foundations of animation, learn everything you need to
                          know to get started in 2D animation and make it your
                          career.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/book-business-business-woman-68761.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Design</h5>
                        <p class="card-text">
                          Whether you want to design a logo, create ebooks, or
                          just learn how to use a Pen tool, our in-depth design
                          tutorials can help. Get to know Illustrator and
                          InDesign, explore typography, and learn the nuances of
                          designing for print.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="card-deck m-1">
                <div class="card">
                  <div class="row no-gutters">
                    <div class="col-md-4">
                      <img
                        src="../assets/achievement-adult-agreement-1153213.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">
                          Become an Agile Project Manager
                        </h5>
                        <p class="card-text">
                          Deliver projects with the highest level of performance
                          and quality as an agile project manager. This path
                          will help you build a solid foundation in leading and
                          motivating agile project teams, from developing user
                          stories and agile charts to driving productive
                          meetings.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col">
                      <img
                        src="../assets/accounts-applications-apps-267350.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">
                          Become an IT Security Specialist
                        </h5>
                        <p class="card-text">
                          Learn the core concepts needed to secure your
                          organization's network as an IT security specialist.
                          Learn all the foundations of IT security: from
                          practical skills for securing hardware and network
                          data to the basics of cryptography and cybercrime
                          investigation and response.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-3">
                  <div class="row no-gutters">
                    <div class="col">
                      <img
                        src="../assets/adults-analysis-banking-1451447.jpg"
                        class="card-img"
                        alt="..."
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body d-flex flex-column">
                        <h5 class="card-title">Developer Training</h5>
                        <p class="card-text">
                          Our developer tutorials can help you learn to develop
                          and create mobile apps, work with PHP and MySQL
                          databases, get started with the statistical processing
                          language R, and much more. Our portfolio has over 280
                          courses covering programming languages, best practices
                          and management and deployment.
                        </p>
                        <a href="#" class="btn btn-primary btn mt-auto"
                          >Find Course</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <hr />
      <br />

      <div class="Container mt-5">
        <h2 class="mb-5 text-left">Browse By Topic</h2>
        <div class="carousel-inner1">
          <div class="card-deck m-1">
            <div class="card">
              <img
                src="../assets/Fotolia_112185258_Subscription_Monthly_M-479x237.jpg"
                class="card-img-top"
                alt="Area for Topic1"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="p1">Software Development</h5>
                <p class="card-text">
                  websites production and maintenance skills
                  <br />
                  web graphic design included
                  <br />
                  code and proprietary software included
                  <br />
                </p>
                <a
                  href="/topic/0"
                  alt="Development"
                  class="btn btn-primary btn mt-auto"
                  >Find Course</a
                >
              </div>
            </div>
            <div class="card">
              <img
                src="../assets/advocacy7.jpg"
                class="card-img-top"
                alt="Area for Topic2"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="p1">Information Technology</h5>
                <p class="card-text">
                  maintaining computer infrastructures with emphasis on
                  networking
                  <br />
                  on-site servers and software-network
                  <br />
                  interactions as well as network integrity/resilience
                  <br />
                </p>
                <a href="/topic/1" alt="IT" class="btn btn-primary btn mt-auto"
                  >Find Course</a
                >
              </div>
            </div>
            <div class="card">
              <img
                src="../assets/cybersecurity-graphic.jpg"
                class="card-img-top"
                alt="Area for Topic3"
              />
              <div class="card-body d-flex flex-column">
                <h5 class="p1">CyberSecurity</h5>
                <p class="card-text">
                  protection of computer systems from damage to their hardware
                  <br />
                  software or electronic data
                  <br />
                  keep from disruption of the services
                  <br />
                </p>
                <a
                  href="/topic/2"
                  alt="CyberSecurity"
                  class="btn btn-primary btn mt-auto"
                  >Find Course</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />

      <section id="team">
        <div class="container my-3 py-5 text-center">
          <div class="row mb-5">
            <div class="col">
              <h1>Our Instructors In Spotlight</h1>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="../assets/professor1.svg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Prof. John Wright</h3>
                  <h5>Director of the Center for Cybersecurity</h5>
                  <p>
                    Professor Wright has extensive expertise in cybersecurity
                    education, research and workforce development and received
                    several awards related to cybersecurity education and
                    diversity.
                  </p>
                  <div class="d-flex flex-row justify-content-center"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="../assets/professor2.svg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Prof. Carl Griffin</h3>
                  <h5>Professor</h5>
                  <p>
                    Dr. Carl Griffin is a Professor in the Department of
                    Computer Science and a Research Scientist at the Florida
                    Institute for Artificial Intelligence. He teaches Computer
                    Science courses and seminars at UWF and works on projects
                    for AI.
                  </p>
                  <div class="d-flex flex-row justify-content-center"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="../assets/professor3.svg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Dr. Susan Smith</h3>
                  <h5>Associate Professor</h5>
                  <p>
                    Dr. Smith's research includes knowledge elicitation and
                    representation, web services and service oriented
                    architecture and computer science education in Robotics
                    domain.
                  </p>
                  <div class="d-flex flex-row justify-content-center"></div>
                </div>
              </div>
            </div>

            <div class="col-lg-3 col-md-6">
              <div class="card">
                <div class="card-body">
                  <img
                    src="../assets/professor4.svg"
                    alt=""
                    class="img-fluid rounded-circle w-50 mb-3"
                  />
                  <h3>Prof. William Jones</h3>
                  <h5>Lecturer</h5>
                  <p>
                    Dr. William Jones, a Lecturer, has written in-depth books
                    about algorithms, data structures and artificial
                    intelligence.
                  </p>
                  <div class="d-flex flex-row justify-content-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-inner {
  background-color: #cc6666;
}
.carousel-inner1 {
  background-color: #b6ada5;
}

.card:hover {
  -webkit-box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
}

#home-heading {
  position: relative;
  height: 700px;
  background: url(../assets/students.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border-bottom: 1px solid #ff6a00;
}

.dark-overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.item img {
  width: auto;
  height: auto;
  overflow: hidden;
}

#instructor .container-fluid {
  padding: 100px;
  background-color: #c0c0ba;
}

.carousel-inner .carousel-item .img-box {
  width: 135px;
  height: 135px;
}

.carousel-indicator {
  bottom: 40px;
}

.carousel-control {
  width: 4%;
}

.card-deck1 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5rem;
  background-color: #669999;
}
.p1 {
  font-size: 20px;
}
.p2 {
  font-size: 16px;
}

body {
  font-family: "Raleway", sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #777;
}

h1 {
  font-size: 36px;
  color: #555;
  font-weight: bold;
}

h3 {
  font-size: 24px;
  color: #333;
  font-weight: bold;
}

#team img {
  margin-top: -50px;
}

#team i {
  font-size: 26px;
  color: #555;
}

#team p {
  font-weight: 500;
  color: #555;
}

#team .card {
  border-radius: 0;
  box-shadow: 5px 5px 15px #e74c3c;
  transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
}

#team .card:hover {
  background: #e74c3c;
  color: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 10px #9e9e9e;
}

#team .card:hover h3,
#team .card:hover i {
  color: #fff;
}
</style>
