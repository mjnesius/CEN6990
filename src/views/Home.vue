<template>
  <div class="container">
    <section>
      <div id="home-heading" class="jumbotron">
        <section class="dark-overlay">
          <h1 class="display-4">Get Ready to Learn!</h1>

          <p>Thousands of classes to fuel your creativity and career.</p>
          <figure>
            <button type="button">Get Started</button>
          </figure>
        </section>
      </div>
    </section>

    <hr />

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
            <h3 class="card-title mt-2">Web Design</h3>
            <p class="card-text mt-3">
              >Web design encompasses many different skills and disciplines in
              the production and maintenance of websites. The different areas of
              web design include web graphic design; interface design;
              authoring, including standardised code and proprietary software;
              user experience design; and search engine optimization. Often many
              individuals will work in teams covering different aspects of the
              design process, although some designers will cover them all.
            </p>
            <a href="#" class="btn btn-dark btn-sm float-right"
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
            <h3 class="card-title mt-2">Network Administration</h3>
            <p class="card-text mt-3">
              A network administrator is the person designated in an
              organization whose responsibility includes maintaining computer
              infrastructures with emphasis on networking. Responsibilities may
              vary between organizations, but on-site servers, software-network
              interactions as well as network integrity/resilience are the key
              areas of focus.
            </p>
            <a href="#" class="btn btn-dark btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img
              src="../assets/employer3.jpg"
              class="img-fluid"
              alt="Area for Topic3"
            />
            <h3 class="card-title mt-2">Cyber Security</h3>
            <p class="card-text mt-3">
              Computer security, cybersecurity[1] or information technology
              security (IT security) is the protection of computer systems from
              theft or damage to their hardware, software or electronic data, as
              well as from disruption or misdirection of the services they
              provide.
            </p>
            <a href="#" class="btn btn-dark btn-sm float-right"
              >Find A Course</a
            >
          </div>
        </div>
      </div>
    </div>
    <br />

    <br />

    <div class="Container mt-5">
      <h2 class="mb-5 text-left">New Courses</h2>
      <div class="bd-example">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-ride="carousel"
        >
          <section class="dark-overlay">
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                class="active"
              ></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
              <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
          </section>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="../assets/blurred-background-coffee-cup-computer-908284.jpg"
                class="d-block w-50"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h8>Web Development</h8>
                <p>
                  Learn how to design and create a website with our web design
                  tutorials. From hundreds of video courses, choose the right
                  one to help you embed video, format text, design in CSS,
                  create a content strategy, and analyze user experience design.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/achievement-agreement-arms-1068523.jpg"
                class="d-block w-50"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h8>Business</h8>
                <p>
                  Explore a wide range of business skills from project
                  management and negotiation to leadership skills and online
                  marketing strategy. Our professional development tutorials can
                  help you learn SEO, spreadsheets, word processing, and more.
                </p>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="../assets/creative-creativity-design-1266012.jpg"
                class="d-block w-50"
                alt="..."
              />
              <div class="carousel-caption d-none d-md-block">
                <h8>Design</h8>
                <p>
                  Whether you want to design a logo, create ebooks, or just
                  learn how to use a Pen tool, our in-depth design tutorials can
                  help. Get to know Illustrator and InDesign, explore
                  typography, and learn the nuances of designing for print.
                </p>
              </div>
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>

    <hr />
    <br />

    <div class="Container mt-5">
      <h2 class="mb-5 text-left">Trending Courses</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-primary">
              <div class="card-body">
                <h5 class="card-title">Course 1</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right"
                  >Learn more..</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-warning">
              <div class="card-body">
                <h5 class="card-title">Course 2</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right"
                  >Learn more..</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-success">
              <div class="card-body">
                <h5 class="card-title">Course 3</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right"
                  >Learn more..</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-danger">
              <div class="card-body">
                <h5 class="card-title">Course 4</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right"
                  >Learn more..</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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

button {
  padding: 15px 50px;
  border: 0;
  background: rgba(255, 253, 253, 0.767);
  color: rgb(14, 1, 12);
  cursor: pointer;
  position: absolute;
  top: 65%;
  left: 10%;
  -webkit-transform: translate(-10%, -10%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

button:hover {
  background: rgb(209, 203, 203);
}
</style>
