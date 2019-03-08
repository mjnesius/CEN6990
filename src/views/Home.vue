<template>
  <div class="home container">
    <div class="jumbotron">
      <h1 class="display-3">Home Page</h1>
      <img
        class="d-block w-100 img-fluid img-responsive"
        src="../assets/students.jpg"
        alt="First slide"
      />
      <p class="lead">This is the home page!</p>
      <hr class="my-4" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
        consequatur aliquam saepe qui. Dolor rem corporis pariatur deleniti
        accusamus quos!
      </p>
    </div>
    <hr />
    <div class="Home container2">
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Topic 1</h5>
              <p class="card-text">Supporting text for topic description.</p>
              <a href="#" class="btn btn-primary">Go to Topic 1</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Topic 2</h5>
              <p class="card-text">Supporting text for topic description.</p>
              <a href="#" class="btn btn-primary">Go to Topic 2</a>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Topic 3</h5>
              <p class="card-text">Supporting text for topic description.</p>
              <a href="#" class="btn btn-primary">Go to Topic 3</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />

    <br />

    <div class="jumbotron">
      <h1 class="display-3">New Courses!</h1>
      <div class="Home container3">
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <img src="../assets/bubbles.jpg" class="img-fluid" />
              <div class="card-body">
                <h5 class="card-title">Course 1</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-primary">Go to Topic 1</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../assets/bubbles.jpg" class="img-fluid" />
              <div class="card-body">
                <h5 class="card-title">Course 2</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-primary">Go to Topic 2</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../assets/bubbles.jpg" class="img-fluid" />
              <div class="card-body">
                <h5 class="card-title">Course 3</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <button class="btn btn-link">Link</button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <img src="../assets/bubbles.jpg" class="img-fluid" />
              <div class="card-body">
                <h5 class="card-title">Course 2</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <button class="btn btn-link">Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <br />

    <div class="Home container4">
      <div class="jumbotron">
        <h1 class="display-3">Trending Courses!</h1>
        <div class="row">
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Course 1</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-primary">Go to Topic 1</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Course 2</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <a href="#" class="btn btn-primary">Go to Topic 2</a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Course 3</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <button class="btn btn-link">Link</button>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Course 4</h5>
                <p class="card-text">Supporting text for topic description.</p>
                <button class="btn btn-link">Link</button>
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
export default {
  name: "Home"
};
</script>

<style scoped>
.jumbotron1 {
  background-image: url(../assets/areyourready.jpg);
  background-size: cover;
}
</style>
