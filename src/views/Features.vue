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
        <font-awesome-icon icon="laptop" class="text-primary" size="5x"/>
        <h4 class="mt-3">Free Online Classes</h4>
        <p>Free, as in no charge and no subscription. UWF Empowers offers professional-level instruction and certification preparation.</p>
      </div>
      <div class="col-md-4 mb-5 text-center px-5">
        <font-awesome-icon icon="school" class="text-primary" size="5x"/>
        <h4 class="mt-3">Top Professors</h4>
        <p>Recognized experts in their fields, our professors are also great teachers. Learn the latest from the best.</p>
      </div>
      <div class="col-md-4 mb-5 text-center px-5">
        <font-awesome-icon icon="code" class="text-primary" size="5x"/>
        <h4 class="mt-3">Leading-edge Technologies</h4>
        <p>From SecDevOps to Blockchain, UWF Empowers has the latest technologies taught by the industry experts.</p>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-6 align-self-center px-5">
        <h3>Software Development</h3>
        <p>Get access to a range of Software Development Courses like Java, .Net, Javascript, C#, Python, Vue, and Cypress, all designed by Industry Experts. UWF Empowers gives you a platform to do just that with our high-quality Mobile and Software Development courses. Enroll now!</p>
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
        <p>Information moves a mile a minute, thanks to nonstop developments in technology. As the information technology industry grows, so do career and learning opportunities—and you’ve got to keep up! Get up to speed with our IT courses from top Professors.</p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col-md-6 align-self-center px-5">
        <h3>CyberSecurity</h3>
        <p>Whether you want to keep yourself safe while browsing the internet or brush up on your penetration testing and network security analysis skills, UWF Empowers helps you take the right training. We offer a broad range of CyberSecurity courses taught by top-rated and approachable instructors.</p>
      </div>
      <div class="col-md-6">
        <img src="../assets/undraw_authentication_fsn5.svg" class="img-fluid" alt>
      </div>
    </div>
    <div id="callToAction" class="row text-center mb-5 pb-5">
      <div class="col">
        <div class="container pt-5">
          <h1>Are You Ready To Launch Your Career?</h1>
          <p class="mb-4 lead">Lorem ipsum dolor sit amet tincidunt arcu.</p>
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
