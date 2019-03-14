<template>
  <div class="container">
    <section>
      <div id="home-heading" class="jumbotron">
        <section class="dark-overlay">
          <h1 class="display-3 mt-3">{{ topic }}</h1>
          <p class="lead">{{ phrase }}</p>
          <p class="mb-5">{{ description }}</p>
        </section>
      </div>
    </section>

    <hr>

    <div class="Container mt-5">
      <h2 class="mb-5 text-left">Featured Topics</h2>
      <div class="card-deck">
        <div class="card cardSet1 text">
          <div class="card-body">
            <img src="../assets/employer3.jpg" class="img-fluid" alt="Area for Topic1">
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
            <a href="#" class="btn btn-dark btn-sm float-right">Read more..</a>
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img src="../assets/workplace.jpg" class="img-fluid" alt="Area for Topic2">
            <h3 class="card-title mt-2">Network Administration</h3>
            <p class="card-text mt-3">
              A network administrator is the person designated in an
              organization whose responsibility includes maintaining computer
              infrastructures with emphasis on networking. Responsibilities may
              vary between organizations, but on-site servers, software-network
              interactions as well as network integrity/resilience are the key
              areas of focus.
            </p>
            <a href="#" class="btn btn-dark btn-sm float-right">Read more..</a>
          </div>
        </div>
        <div class="card cardSet1 text">
          <div class="card-body">
            <img src="../assets/employer3.jpg" class="img-fluid" alt="Area for Topic3">
            <h3 class="card-title mt-2">Cyber Security</h3>
            <p class="card-text mt-3">
              Computer security, cybersecurity[1] or information technology
              security (IT security) is the protection of computer systems from
              theft or damage to their hardware, software or electronic data, as
              well as from disruption or misdirection of the services they
              provide.
            </p>
            <a href="#" class="btn btn-dark btn-sm float-right">Read more..</a>
          </div>
        </div>
      </div>
    </div>
    <br>

    <div class="Container mt-5">
      <h2 class="mb-5 text-left">New Courses</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-primary">
              <div class="card-body text-center">
                <h5 class="card-title">Course 1</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-warning">
              <div class="card-body text-center">
                <h5 class="card-title">Course 2</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-primary">
              <div class="card-body text-center">
                <h5 class="card-title">Course 3</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-warning">
              <div class="card-body text-center">
                <h5 class="card-title">Course 4</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <hr>
    <br>

    <div class="Container mt-5">
      <h2 class="mb-5 text-left">Trending Courses</h2>
      <div class="row">
        <div class="col-md-3">
          <div class="card-deck">
            <div class="card bg-primary">
              <div class="card-body">
                <h5 class="card-title">Course 1</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
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
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
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
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
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
                <a href="#" class="btn btn-dark btn-sm float-right">Learn more..</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      id: "",
      topic: "",
      phrase: "",
      description: "",
      image: "",
      courses: [],
      topics: [
        {
          search: "development",
          topic: "Software Development",
          phrase:
            "From Java to Javascript, you will quickly gain the knowledge and skills to code like a pro!",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti accusamus quos!",
          image: "url(../assets/areyourready.jpg)"
        }
      ]
    };
  }
};
</script>

<style scoped>
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
  min-height: 200px;
  background: url(../assets/students.jpg);
  background-attachment: fixed;
  background-repeat: no-repeat;
  text-align: center;
  color: #fff;
}

.dark-overlay {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
