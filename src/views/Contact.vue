<template>
  <div class="container">
    <div class="row text-center my-5">
      <div class="col">
        <div class="info-header">
          <h1 class="text-primary pb-3">Contact Us</h1>
          <p class="lead pb-3">We enjoy answering your questions and hearing your suggestions.</p>
        </div>
      </div>
    </div>
    <div class="row my-5">
      <div class="col-md-6">
        <h2 class="mb-3">Contact Details</h2>
        <h5 class="mb-4">
          UWF Empowers
          <br>11100 University Pkwy bldg 32
          <br>Pensacola, FL 32514
        </h5>
        <h5 class="mb-4">(850) 456-7890</h5>
        <h5 class="mb-4">
          <a href="mailto:uwfempowers@google.com">uwfempowers@google.com</a>
        </h5>
        <h5 class="mb-4">Monday - Friday: 9:00 AM to 5:00 PM</h5>
        <img class="img-fluid w-75 mb-sm-5" src="../assets/undraw_contact_us_15o2.svg" alt>
      </div>
      <div class="col-md-6">
        <form @submit.prevent="send">
          <h2 class="text-center mb-4">Contact Form</h2>
          <div class="form-group mb-4">
            <label for="name">Name</label>
            <input
              type="text"
              v-model="name"
              class="form-control form-control-lg"
              id="name"
              aria-describedby="name"
              placeholder="Enter name"
              autofocus
            >
          </div>
          <div class="form-group mb-4">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              v-model="email"
              class="form-control form-control-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            >
          </div>
          <div class="form-group">
            <label for="longDescription">Message</label>
            <textarea
              type="text"
              class="form-control form-control-lg"
              id="longDescription"
              placeholder="Message..."
              maxlength="400"
              rows="4"
              v-model="message"
            ></textarea>
          </div>
          <p v-if="feedback" class="text-danger text-center h5 my-3">{{ feedback }}</p>
          <p v-if="confirmation" class="text-success text-center h5 my-3">{{ confirmation }}</p>
          <button class="btn btn-lg btn-primary btn-block mb-5">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";

export default {
  name: "Contact",
  data() {
    return {
      name: null,
      email: null,
      message: null,
      confirmation: null,
      feedback: null
    };
  },
  methods: {
    send() {
      if (this.name && this.email && this.message) {
        this.feedback = null;
        let contact = {
          name: this.name,
          email: this.email,
          message: this.message
        };
        if (!this.confirmation) {
          db.collection("contacts")
            .add(contact)
            .then(() => {
              this.confirmation =
                "Your questions and suggestions are important to us. We will respond within 48hrs";
            })
            .catch(err => {
              console.log(err);
            });
        }
      } else {
        this.feedback = "Please fill in all fields";
      }
    }
  }
};
</script>

<style scoped>
.info-header {
  width: 50%;
  margin: auto;
  border-bottom: 1px solid #ddd;
}
</style>
