import sinon from "sinon";
import { mount } from "@vue/test-utils";
import Topic from "@/views/Topic.vue";
import Course from "@/views/Course.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
// import flushPromises from "flush-promises";

describe("Topic.vue", () => {
  const $route = {
    params: {
      id: 0
    }
  };
  const wrapper = mount(Topic, {
    mocks: { $route },
    methods: {
      updateId() {
        this.currentTopic = this.topics[this.$route.params.id];
        this.courses = [
          {
            title: "Test Title",
            shortDescription: "Test Short Description",
            instructor: "Test Instructor",
            timestamp: "2 Apr 2019"
          }
        ];
      }
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders Topic", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders topic title", () => {
    let title = wrapper.find("h1");
    expect(title.text()).toBe("Software Development");
  });
  it("renders courses titles", () => {
    let title = wrapper.find("#testCourseTitle");
    expect(title.text()).toBe("Test Title");
  });
  it("renders course table", () => {
    expect(wrapper.findAll("tr").length).toBe(2);
  });
  it("click on course calls pushToCoursePage(id)", () => {
    wrapper.setMethods({ pushToCoursePage: clickMethodStub });
    wrapper.find("#testCourseClick").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("Load More btn calls loadMore()", () => {
    wrapper.setMethods({ loadMore: clickMethodStub });
    wrapper.find("button").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
});

describe("Signup.vue", () => {
  const wrapper = mount(Signup);
  const clickMethodStub = sinon.stub();
  it("renders Signup", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("displays error message if missing fields", () => {
    wrapper.find("form").trigger("submit");
    const errorMessage = wrapper.find(".text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("Signup calls signup()", () => {
    wrapper.setMethods({ signup: clickMethodStub });
    wrapper.find("form").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
});

describe("Login.vue", () => {
  const wrapper = mount(Login);
  const clickMethodStub = sinon.stub();
  it("renders Login", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("displays error message if missing fields", () => {
    wrapper.find("form").trigger("submit");
    const errorMessage = wrapper.find(".text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("Login calls login()", () => {
    wrapper.setMethods({ login: clickMethodStub });
    wrapper.find("form").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
});

describe("Course.vue", () => {
  const $route = {
    params: {
      id: "123456"
    }
  };
  const wrapper = mount(Course, {
    mocks: { $route },
    methods: {
      addComment() {
        if (this.newContent) {
          let comment = "this comment";
        } else {
          this.feedback = "You must enter a comment to add it";
        }
      }
    },
    computed: {
      firebaseUser() {
        return { uid: "1234" };
      }
    },
    created() {
      this.course = {
        title: "Test Title",
        longDescription: "Test Long Description",
        instructor: "Test Instructor",
        instructorBio: "Test Instructor Bio",
        lectures: [
          {
            title: "Test Lecture Title",
            id: "789"
          }
        ]
      };
      this.comments = [
        {
          alias: "Test Alias",
          date: "4 Apr 2019",
          content: "Test Lecture Content"
        }
      ];
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders Course", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("reads route param", () => {
    let paramCourseId = $route.params.id;
    expect(paramCourseId).toBe("123456");
  });
  it("renders course title", () => {
    let title = wrapper.find("h1");
    expect(title.text()).toBe("Test Title");
  });
  it("renders courses titles", () => {
    let instructor = wrapper.find("h4");
    expect(instructor.text()).toBe("Instructor: Test Instructor");
  });
  it("renders lecture list", () => {
    expect(wrapper.findAll("button").length).toBe(1);
  });
  it("click on lecture calls loadVideo", () => {
    wrapper.setMethods({ loadVideo: clickMethodStub });
    wrapper.find("button").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("comments display error message if missing fields", () => {
    wrapper.find("form").trigger("submit");
    const errorMessage = wrapper.find(".text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("comment form calls addComment", () => {
    wrapper.setMethods({ addComment: clickMethodStub });
    wrapper.find("form").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
  it("renders lecture alias", () => {
    let alias = wrapper.find("span.lead");
    expect(alias.text()).toBe("Test Alias");
  });
});
