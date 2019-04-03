import { mount } from "@vue/test-utils";
import Topic from "@/views/Topic.vue";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";
import History from "@/views/History.vue";
import Add from "@/views/Add.vue";
import Edit from "@/views/Edit.vue";
import Manage from "@/views/Manage.vue";
import Statistics from "@/views/Statistics.vue";
import Features from "@/views/Features.vue";
import Faq from "@/views/Faq.vue";
import Course from "@/views/Course.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import sinon from "sinon";

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
      },
      getCourses() {
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
      },
      upDateTrending() {},
      upDateHistory() {},
      listenToComments() {
        this.comments = [
          {
            alias: "Test Alias",
            date: "4 Apr 2019",
            content: "Test Lecture Content"
          }
        ];
      }
    },
    computed: {
      firebaseUser() {
        return { uid: "1234" };
      }
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
  it("renders comment alias", () => {
    let alias = wrapper.find("span.lead");
    expect(alias.text()).toBe("Test Alias");
  });
});

describe("Profile.vue", () => {
  const wrapper = mount(Profile, {
    computed: {
      user() {
        return { uid: "1234" };
      }
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders Profile", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("displays email error message if missing fields", () => {
    wrapper.find("form#email").trigger("submit");
    const errorMessage = wrapper.find("#emailFeedback.text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("Update email calls updateEmail()", () => {
    wrapper.setMethods({ updateEmail: clickMethodStub });
    wrapper.find("form#email").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
  it("displays password error message if missing fields", () => {
    wrapper.find("form#password").trigger("submit");
    const errorMessage = wrapper.find("#passwordFeedback.text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("Update password calls updatePassword()", () => {
    wrapper.setMethods({ updatePassword: clickMethodStub });
    wrapper.find("form#password").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
});

describe("History.vue", () => {
  const wrapper = mount(History, {
    methods: {
      getHistoryList() {
        this.historyList = [
          {
            title: "Test Title",
            shortDescription: "Test Short Description",
            instructor: "Test Instructor",
            timestamp: "2 Apr 2019"
          }
        ];
      }
    },
    computed: {
      user() {
        return { uid: "1234" };
      }
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders History", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders History title", () => {
    let title = wrapper.find("h1");
    expect(title.text()).toBe("History of Courses");
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
  it("displays message when list is empty", () => {
    wrapper.setData({ historyList: [] });
    expect(wrapper.find(".text-muted").exists()).toBe(true);
  });
});

describe("Statistics.vue", () => {
  const wrapper = mount(Statistics, {
    methods: {
      getTrending() {
        this.courses = [
          {
            id: "1234",
            title: "Test Title",
            instructor: "Test Instructor",
            count: "2"
          }
        ];
      }
    }
  });
  it("renders Statistics", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders Statistics title", () => {
    let title = wrapper.find("h1");
    expect(title.text()).toBe("Statistics");
  });
  it("renders courses titles", () => {
    let title = wrapper.find("#testCourseTitle");
    expect(title.text()).toBe("Test Title");
  });
  it("renders Statistics count", () => {
    let title = wrapper.find("#testCourseCount");
    expect(title.text()).toBe("2");
  });
  it("renders course table", () => {
    expect(wrapper.findAll("tr").length).toBe(2);
  });
});

describe("Manage.vue", () => {
  const wrapper = mount(Manage, {
    computed: {
      user() {
        return { uid: "1234" };
      }
    },
    methods: {
      searchDb() {
        this.courses = [
          {
            id: "1234",
            title: "Test Title",
            instructor: "Test Instructor",
            timestamp: "2"
          }
        ];
      }
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders Manage", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders Manage title", () => {
    let title = wrapper.find("h1");
    expect(title.text()).toBe("Manage Courses");
  });
  it("renders courses titles", () => {
    let title = wrapper.find("#testCourseTitle");
    expect(title.text()).toBe("Test Title");
  });
  it("renders course table", () => {
    expect(wrapper.findAll("tr").length).toBe(2);
  });
  it("click on view calls pushToCoursePage(id)", () => {
    wrapper.setMethods({ pushToCoursePage: clickMethodStub });
    wrapper.find("#testViewClick").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("click on edit calls edit(id)", () => {
    wrapper.setMethods({ edit: clickMethodStub });
    wrapper.find("#testEditClick").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("click on delete calls delete(id)", () => {
    wrapper.setMethods({ setDeleteId: clickMethodStub });
    wrapper.find("#testDeleteClick").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("click on add calls add()", () => {
    wrapper.setMethods({ add: clickMethodStub });
    wrapper.find("#testAddClick").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("submit search for course calls searchForCourse()", () => {
    wrapper.setMethods({ searchForCourse: clickMethodStub });
    wrapper.find("#testSearchCourse").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
  it("click on clear1 calls searchDb(user.uid)", () => {
    wrapper.setMethods({ searchDb: clickMethodStub });
    wrapper.find("#testClear1").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("submit search by owner calls searchOwner()", () => {
    wrapper.setMethods({ searchOwner: clickMethodStub });
    wrapper.find("#testSearchOwner").trigger("submit");
    expect(clickMethodStub.called).toBe(true);
  });
  it("click on clear2 calls searchDb(user.uid)", () => {
    wrapper.setMethods({ searchDb: clickMethodStub });
    wrapper.find("#testClear2").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
});

describe("Add.vue", () => {
  const wrapper = mount(Add, {
    computed: {
      user() {
        return { uid: "1234" };
      }
    },
    methods: {
      addCourse() {
        if (
          this.course.title &&
          this.course.shortDescription &&
          this.course.longDescription &&
          this.course.instructor &&
          this.course.instructorBio &&
          this.course.lectures &&
          this.course.owner_id
        ) {
          this.feedback = null;
          this.course.date = new Date();
        } else {
          this.feedback = "You must enter values in all fields to add course.";
        }
      }
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders Add", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders Add title", () => {
    let title = wrapper.find("h2");
    expect(title.text()).toBe("Add Course");
  });
  it("displays add course error message if missing fields", () => {
    wrapper.find("form#addCourse").trigger("submit");
    const errorMessage = wrapper.find("#addCourseFeedback.text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("binds course title", () => {
    let title = wrapper.find("#testCourseTitle");
    title.setValue("Test Title");
    expect(wrapper.vm.course.title).toBe("Test Title");
  });
  it("click on Cancel calls backToManage()", () => {
    wrapper.setMethods({ backToManage: clickMethodStub });
    wrapper.find("#backToManage").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("displays add lecture error message if missing fields", () => {
    wrapper.find("#addLectureButton").trigger("click");
    const errorMessage = wrapper.find("#addCourseFeedback.text-danger");
    expect(errorMessage.text()).toBe(
      "You must enter values to add another lecture."
    );
  });
  it("adds lecture", () => {
    let id = wrapper.find("#lectureId");
    id.setValue("1234");
    let lectureTitle = wrapper.find("#lectureTitle");
    lectureTitle.setValue("Lecture Title");
    wrapper.find("#addLectureButton").trigger("click");
    expect(wrapper.vm.lecture).toEqual({});
  });
  it("deletes lecture", () => {
    wrapper.find("#deleteButton").trigger("click");
    expect(wrapper.find("#displayedVideoId").exists()).toBe(false);
    expect(wrapper.find("#displayedLectureTitle").exists()).toBe(false);
  });
});

describe("Edit.vue", () => {
  const wrapper = mount(Edit, {
    methods: {
      getCourses() {
        this.course = {
          title: "Test Title",
          shortDescription: "short description",
          longDescription: "long description",
          instructor: null,
          instructorBio: "instructor bio",
          lectures: [{ id: "abcde", title: "lecture" }],
          owner_id: "12345"
        };
      },
      editCourse() {
        if (
          this.course.title &&
          this.course.shortDescription &&
          this.course.longDescription &&
          this.course.instructor &&
          this.course.instructorBio &&
          this.course.lectures &&
          this.course.owner_id
        ) {
          this.feedback = null;
        } else {
          this.feedback = "You must enter values in all fields to add course.";
        }
      }
    }
  });
  const clickMethodStub = sinon.stub();
  it("renders Edit", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders Edit title", () => {
    let title = wrapper.find("h2");
    expect(title.text()).toBe("Edit Course");
  });
  it("displays add course error message if missing fields", () => {
    wrapper.find("form#editCourse").trigger("submit");
    const errorMessage = wrapper.find("#editCourseFeedback.text-danger");
    expect(errorMessage.exists()).toBe(true);
  });
  it("binds course title", () => {
    expect(wrapper.vm.course.title).toBe("Test Title");
  });
  it("click on Cancel calls backToManage()", () => {
    wrapper.setMethods({ backToManage: clickMethodStub });
    wrapper.find("#backToManage").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
  it("displays add lecture error message if missing fields", () => {
    wrapper.find("#addLectureButton").trigger("click");
    const errorMessage = wrapper.find("#editCourseFeedback.text-danger");
    expect(errorMessage.text()).toBe(
      "You must enter values to add another lecture."
    );
  });
  it("adds lecture", () => {
    let id = wrapper.find("#lectureId");
    id.setValue("1234");
    let lectureTitle = wrapper.find("#lectureTitle");
    lectureTitle.setValue("Lecture Title");
    wrapper.find("#addLectureButton").trigger("click");
    expect(wrapper.vm.lecture).toEqual({});
  });
  it("deletes lecture", () => {
    wrapper.find("#deleteButton").trigger("click");
    expect(wrapper.find("#displayedVideoId").exists()).toBe(false);
    expect(wrapper.find("#displayedLectureTitle").exists()).toBe(false);
  });
});

describe("About.vue", () => {
  const wrapper = mount(About);
  it("renders About", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});

describe("Faq.vue", () => {
  const wrapper = mount(Faq);
  it("renders Faq", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});

describe("Features.vue", () => {
  const wrapper = mount(Features);
  it("renders Features", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});

describe("Home.vue", () => {
  const wrapper = mount(Home);
  it("renders Home", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });
});
