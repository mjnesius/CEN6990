import sinon from "sinon";
import { shallowMount } from "@vue/test-utils";
import Topic from "@/views/Topic.vue";
import Signup from "@/views/Signup.vue";
import Login from "@/views/Login.vue";
import flushPromises from "flush-promises";

describe("Topic.vue", () => {
  const $route = {
    params: {
      id: 0
    }
  };
  const wrapper = shallowMount(Topic, {
    mocks: { $route }
  });
  const clickMethodStub = sinon.stub();
  it("renders Topic", async () => {
    await flushPromises();
    expect(wrapper.isVueInstance()).toBe(true);
  });
  it("renders topic title", () => {
    expect(wrapper.text()).toContain("Software Development");
  });
  it("renders course table", () => {
    expect(wrapper.findAll("tr").length).toBe(1);
  });
  it("Load More btn calls loadMore()", () => {
    wrapper.setMethods({ loadMore: clickMethodStub });
    wrapper.find("button").trigger("click");
    expect(clickMethodStub.called).toBe(true);
  });
});

describe("Signup.vue", () => {
  const wrapper = shallowMount(Signup);
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
  const wrapper = shallowMount(Login);
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
