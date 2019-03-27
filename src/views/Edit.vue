<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-md-8 mx-auto my-5">
        <h2 class="text-center mb-5">Edit Course</h2>
        <form @submit.prevent="editCourse">
          <div class="form-group">
            <label for="formGroupExampleInput">Course Title</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Course Title"
              maxlength="30"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Short Description</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Short Description"
              maxlength="50"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Long Description</label>
            <textarea
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Long Description"
              maxlength="250"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Instructor</label>
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput2"
              placeholder="Instructor"
              maxlength="30"
            >
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput">Instructor Bio</label>
            <textarea
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Instructor Bio"
              maxlength="200"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlSelect1">Topic</label>
            <select class="form-control" id="exampleFormControlSelect1">
              <option value="development">Development</option>
              <option value="security">CyberSecurity</option>
              <option value="it">Information Technology</option>
            </select>
          </div>
          <p v-if="formFeedback" class="text-center h5 my-3 text-danger">{{ formFeedback }}</p>
          <button class="btn btn-lg btn-primary btn-block my-5">Update Course</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>