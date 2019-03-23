<template>
  <div class="container">
    <section>
      <div id="home-heading" class="jumbotron">
        <section class="dark-overlay">
          <h1 class="display-4">Get Ready to Learn!</h1>
          <p>Thousands of classes to fuel your creativity and career.</p>
          <!-- <figure> -->
          <!-- <button type="button" href="About">Learn More</button> -->
          <a
            class="button btn-light btn-lg btn-primary"
            href="About"
            role="button"
            >Learn More</a
          >

          <!-- </figure> -->
        </section>
      </div>
    </section>
    <hr />
    <div class="Container mt-5">
      <h2 class="mb-5 text-left">Trending Courses</h2>
      <div class="card-deck">
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/adults-chairs-class-515166.jpg"
              class="img-fluid"
              alt="Area for Topic1"
            />
            <h3 class="card-title mt-2">Computer Network</h3>
            <p class="card-text mt-3">
              System for connecting hardware, software, resource sharing and
              information transmission of network with fully functional network
              software by using communication equipment and lines to connect
              multiple computer systems with different geographical locations
              and functions independently.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/employerShowcase.jpg"
              class="img-fluid"
              alt="Area for Topic2"
            />
            <h3 class="card-title mt-2">Computer Composition</h3>
            <p class="card-text mt-3">
              Computer composition refers to the logical realization of the
              system structure, including the composition of the data flow and
              control flow within the machine and the logic design.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/boss-brainstorming-business-1093913.jpg"
              class="img-fluid"
              alt="Area for Topic3"
            />
            <h3 class="card-title mt-2">Advanced programming language</h3>
            <p class="card-text mt-3">
              A programming language is a language used to write computer
              programs. The basis of a language is a set of tokens and a set of
              rules. The whole of the token string consisting of tokens
              according to the rules is the language.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/se.jpg"
              class="img-fluid"
              alt="Area for Topic3"
            />
            <h3 class="card-title mt-2">Computer Graphics</h3>
            <p class="card-text mt-3">
              The main research content of computer graphics is to study how to
              represent graphics in computers and the related principles and
              algorithms for computing, processing and displaying graphics using
              computers.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
      </div>
    </div>

    <!--<div class="Container mt-5">
      <h2 class="mb-5 text-left">Trending Courses</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/inspiring-2.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                <h5 class="card-title">Computer Network</h5>
                <p class="card-text"> System for connecting hardware, 
                       software and resource sharing and information
                        transmission of network with fully functional 
                        network software by using communication equipment
                         and lines to connect multiple computer systems with
                          different geographical locations and functions independently</p>
                <a href="#" class="btn btn-dark btn-sm float-right"
                  >Learn more..</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
           <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/inspiring-2.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                <h5 class="card-title">Computer Composition</h5>
                <p class="card-text"> Computer composition refers to the logical realization of 
                        the system structure, including the composition of the data 
                        flow and control flow within the machine and the logic design.</p>
                <a href="#" class="btn btn-dark btn-sm float-right"
                  >Learn more..</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
           <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/inspiring-2.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                <h5 class="card-title">Advanced programming language</h5>
                <p class="card-text">A programming language is a language used to write 
                        computer programs. The basis of a language is a set 
                        of tokens and a set of rules. The whole of the token 
                        string consisting of tokens according to the rules is the language.</p>
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
           <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/inspiring-2.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                <h5 class="card-title">Computer Graphics</h5>
                <p class="card-text">The main research content of computer 
                  graphics is to study how to represent graphics in computers
                   and the related principles and algorithms for computing, 
                   processing and displaying graphics using computers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
    <br />
    <br />
    <div class="container">
      <h2 class="mb-5 text-left">New Courses</h2>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/adults-business-coffee-1323592.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Web Development</h5>
                      <p class="card-text">
                        Learn how to design and create a website with our web
                        design tutorials. From hundreds of video courses, choose
                        the right one to help you embed video, format text,
                        design in CSS, create a content strategy, and analyze
                        user experience design.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/boss-brainstorming-business-1093913.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Become a Digital Marketer</h5>
                      <p class="card-text">
                        Use your analytical and tactical skills to help grow and
                        develop new opportunities for businesses as a digital
                        marketer. From marketing plans and content strategy to
                        lead generation and SEO, we through the best practices
                        and principles of digital marketing.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/adult-analyzing-boss-1080865.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Business</h5>
                      <p class="card-text">
                        Explore a wide range of business skills from project
                        management and negotiation to leadership skills and
                        online marketing strategy. Our professional development
                        tutorials can help you learn SEO, spreadsheets, word
                        processing, and more.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/blurred-background-coffee-cup-computer-908284.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Become a Manager</h5>
                      <p class="card-text">
                        As a manager, success is predicated on your ability to
                        achieve goals working with your team. The good news is
                        that management is a skill that can be learned. This
                        path is designed to provide you with the key
                        considerations, skills and competencies to help you
                        become and succeed as a manager.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/apple-class-conference-7102.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Master 2D Animation</h5>
                      <p class="card-text">
                        2D animators create the illusion of motion and change
                        via analog and digital media. Beginning with the
                        foundations of animation, learn everything you need to
                        know to get started in 2D animation.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/book-business-business-woman-68761.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Design</h5>
                      <p class="card-text">
                        Whether you want to design a logo, create ebooks, or
                        just learn how to use a Pen tool, our in-depth design
                        tutorials can help. Get to know Illustrator and
                        InDesign, explore typography, and learn the nuances of
                        designing for print.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="card-deck">
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/achievement-adult-agreement-1153213.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        Become an Agile Project Manager
                      </h5>
                      <p class="card-text">
                        Deliver projects with the highest level of performance
                        and quality as an agile project manager. This path will
                        help you build a solid foundation in leading and
                        motivating agile project teams, from developing user
                        stories and agile charts to driving productive meetings.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/accounts-applications-apps-267350.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">
                        Become an IT Security Specialist
                      </h5>
                      <p class="card-text">
                        Learn the core concepts needed to secure your
                        organization's network as an IT security specialist.
                        Learn all the foundations of IT security: from practical
                        skills for securing hardware and network data to the
                        basics of cryptography and cybercrime investigation and
                        response.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img
                      src="../assets/adults-analysis-banking-1451447.jpg"
                      class="card-img"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Developer Training</h5>
                      <p class="card-text">
                        Our developer tutorials can help you learn to develop
                        and create mobile apps, work with PHP and MySQL
                        databases, get started with the statistical processing
                        language R, and much more.
                      </p>
                      <p class="card-text">
                        <small class="text-muted"
                          >Last updated 3 mins ago</small
                        >
                      </p>
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
      <div class="card-deck">
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/employer3.jpg"
              class="img-fluid"
              alt="Area for Topic1"
            />
            <h3 class="card-title mt-2">Software Development</h3>
            <p class="card-text mt-3">
              >Web design encompasses many different skills and disciplines in
              the production and maintenance of websites. The different areas of
              web design include web graphic design; interface design;
              authoring, including standardised code and proprietary software;
              user experience design; and search engine optimization. Often many
              individuals will work in teams covering different aspects of the
              design process, although some designers will cover them all.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/workplace.jpg"
              class="img-fluid"
              alt="Area for Topic2"
            />
            <h3 class="card-title mt-2">Information Technology</h3>
            <p class="card-text mt-3">
              A network administrator is the person designated in an
              organization whose responsibility includes maintaining computer
              infrastructures with emphasis on networking. Responsibilities may
              vary between organizations, but on-site servers, software-network
              interactions as well as network integrity/resilience are the key
              areas of focus.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/adult-aged-blur-834863.jpg"
              class="img-fluid"
              alt="Area for Topic3"
            />
            <h3 class="card-title mt-2">CyberSecurity</h3>
            <p class="card-text mt-3">
              Computer security, cybersecurity[1] or information technology
              security (IT security) is the protection of computer systems from
              theft or damage to their hardware, software or electronic data, as
              well as from disruption or misdirection of the services they
              provide.
            </p>
            <a href="#" class="btn btn-primary btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.jumbotron {
  position: absolute;
  top: 80%;
  left: 0%;
  color: white;
}

.jumbotron h1 {
  display: block;
  font-weight: bold;
  font-size: 50px;
  color: white;
  padding-left: 40px;
  padding-top: 300px;
}
.jumbotron p {
  color: white;
  font-size: 20px;
  padding-left: 40px;
}

tbody tr {
  cursor: pointer;
}

.btn {
  min-height: 40px;
  min-width: 150px;
  position: relative;
}

/* button.btn {
  margin-top: auto;
} */

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

.button {
  padding: 15px 50px;
  border: 0;
  background: rgba(255, 253, 253, 0.767);
  color: rgb(14, 1, 12);
  cursor: pointer;
  position: absolute;
  top: 65%;
  left: 12%;
  -webkit-transform: translate(-10%, -10%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

button:hover {
  background: rgb(209, 203, 203);
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

.card-deck {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 0.5rem;
}
</style>
