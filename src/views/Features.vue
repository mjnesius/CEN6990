<template>
  <div class="container">
    <div class="row p-5 justify-content-center">
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/undraw_Outer_space_drqu.svg" alt>
      </div>
      <div class="col-md-6 mt-3 text-center">
        <h1 class="dispay-3 mt-5 mb-3 text-primary">Launch Your IT Career with UWF Empowers</h1>
        <p class="lead">Learn from some of the nations top professors.</p>
        <p>Study leading-edge technologies on your schedule.</p>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-4 mb-5 text-center px-5">
        <font-awesome-icon icon="book-reader" class="text-primary" size="5x"/>
        <h4 class="mt-3">Free Online Classes</h4>
        <p>Sodales ut etiam sit amet nisl purus. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
      <div class="col-md-4 mb-5 text-center px-5">
        <font-awesome-icon icon="book-reader" class="text-primary" size="5x"/>
        <h4 class="mt-3">Top Professors</h4>
        <p>
          Sodales ut etiam sit amet nisl purus. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.
        </p>
      </div>
      <div class="col-md-4 mb-5 text-center px-5">
        <font-awesome-icon icon="book-reader" class="text-primary" size="5x"/>
        <h4 class="mt-3">Leading-edge Technologies</h4>
        <p>Sodales ut etiam sit amet nisl purus. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 align-self-center px-5">
        <h3>Software Development</h3>
        <p>
          Viverra mauris in aliquam sem fringilla ut morbi. Curabitur gravida arcu ac tortor dignissim. Tortor dignissim convallis aenean et tortor at. Dui sapien eget mi proin sed libero. Ut tortor pretium viverra suspendisse potenti nullam. Sapien eget mi proin sed libero enim sed. Congue quisque egestas diam in.
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/undraw_creative_team_r90h.svg" class="img-fluid" alt>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 order-last order-md-first">
        <img src="../assets/undraw_monitor_iqpq.svg" class="img-fluid" alt>
      </div>
      <div class="col-md-6 align-self-center px-5 order-first order-md-last">
        <h3>Information Technology</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ultrices tincidunt arcu. Diam maecenas sed enim ut sem viverra. Vel risus commodo viverra maecenas accumsan lacus. Euismod quis viverra nibh cras pulvinar. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius.
        </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 align-self-center px-5">
        <h3>CyberSecurity</h3>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet dui accumsan sit amet nulla facilisi. Diam maecenas sed enim ut sem viverra. Vel risus commodo viverra maecenas accumsan lacus. Euismod quis viverra nibh cras pulvinar. Et ligula ullamcorper malesuada proin libero nunc consequat interdum varius. 
        </p>
      </div>
      <div class="col-md-6">
        <img src="../assets/undraw_authentication_fsn5.svg" class="img-fluid" alt>
      </div>
    </div>
    <div id="callToAction" class="row text-center mb-5 pb-5">
      <div class="col">
        <div class="container pt-5">
          <h1>Are You Ready To Launch Your Career?</h1>
          <p class="mb-4 lead">
           Lorem ipsum dolor sit amet tincidunt arcu.
          </p>
          <router-link
            :to="{ name: 'home' }"
            type="button"
            class="btn btn-primary btn-large"
            role="button"
          >Get Started</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Features"
};
</script>

<style scoped>
#callToAction {
  background-color: rgb(243, 237, 237);
}
</style>
