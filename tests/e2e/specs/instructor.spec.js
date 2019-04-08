/// <reference types="Cypress" />

import { watchFile } from "fs";

describe("Instructor e2e", function() {
  beforeEach(function() {
    cy.loginInstructor();
    cy.wait(2000);
    cy.get(":nth-child(2) > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/manage"]').click();
    cy.url().should("include", "manage");
  });
  afterEach(function() {
    cy.logoutInstructor();
  });
  it("instructor can search courses and instructors", () => {
    cy.get("#testSearchCourse > .form-control").type("2A3ih8CdmgsyChLk43Mp");
    cy.get("#testSearchCourse > .btn-outline-success").click();
    cy.get("tbody > tr > :nth-child(1)").should(
      "contain",
      "2A3ih8CdmgsyChLk43Mp"
    );
    cy.get("#testClear1").click();
    cy.get("tbody").should("contain", "Stephan Urbanczyk");
    cy.get("#testSearchOwner > .form-control").type(
      "f69CcIKOmwPC8qzJlMwFYoVMc4j2"
    );
    cy.get("#testSearchOwner > .btn-outline-success").click();
    cy.get("tbody").should("contain", "Michael Nesius");
    cy.get("#testClear2").click();
    cy.get("tbody").should("contain", "Stephan Urbanczyk");
  });
  it("instructor can add a course", () => {
    cy.get("#testAddClick").click();
    cy.url().should("include", "add");
    cy.get("#backToManage").click();
    cy.url().should("include", "manage");
    cy.get("#testAddClick").click();
    cy.url().should("include", "add");
    cy.get("#addCourse > .btn-lg").click();
    cy.get("#addCourseFeedback").should(
      "contain",
      "You must enter values in all fields to add course."
    );
    cy.get("#addLectureButton").click();
    cy.get("#addCourseFeedback").should(
      "contain",
      "You must enter values to add another lecture."
    );
    cy.get("#testCourseTitle").type("Test Course Title");
    cy.get("#shortDescription").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
    );
    cy.get("#longDescription").type(
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
    );
    cy.get("#instructor").type("Martin Fowler");
    cy.get("#instructorBio").type(
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );
    cy.get("#lectureId").type("12345");
    cy.get("#lectureTitle").type("Duis aute");
    cy.get("#addLectureButton").click();
    cy.get("#deleteButton").click();
    cy.get("#lectureId").type("12345");
    cy.get("#lectureTitle").type("Duis aute");
    cy.get("#addLectureButton").click();
    cy.get("#addCourseButton").click();
    cy.url().should("include", "manage");
    cy.get("tbody > :nth-child(1) > :nth-child(3)").should(
      "contain",
      "Martin Fowler"
    );
  });
  it("instructor can view course in list", () => {
    cy.get(":nth-child(1) > :nth-child(5) > #testViewClick").click();
    cy.url().should("include", "course");
  });
  it("instructor can edit course in list", () => {
    cy.get("#testEditClick").click();
    cy.get("#testCourseTitle").should("have.value", "Test Course Title");
    cy.get("#backToManage").click();
    cy.url().should("include", "manage");
    cy.get("#testEditClick").click();
    cy.get("#testCourseTitle").clear();
    cy.get("#saveEditsButton").click();
    cy.get("#editCourseFeedback").should(
      "contain",
      "You must enter values in all fields to edit course."
    );
    cy.get("#testCourseTitle").type("Test Course Title");
    cy.get("#courseInstructor")
      .clear()
      .type("new instructor");
    cy.get("#addLectureButton").click();
    cy.get("#editCourseFeedback").should(
      "contain",
      "You must enter values to add another lecture."
    );
    cy.get("#lectureId").type("6789");
    cy.get("#lectureTitle").type("Edit test");
    cy.get("#addLectureButton").click();
    cy.get("#deleteButton").click();
    cy.get("#lectureId").type("6789");
    cy.get("#lectureTitle").type("Edit test");
    cy.get("#addLectureButton").click();
    cy.get("#saveEditsButton").click();
  });
  it("instructor can delete course in list", () => {
    cy.get(":nth-child(1) > :nth-child(5) > #testDeleteClick").click();
    cy.get("#exampleModalCenterTitle").should("be.visible");
    cy.wait(200);
    cy.get("#cancelButton")
      .scrollIntoView()
      .click();
    cy.get("#exampleModalCenterTitle").should("be.not.visible");
    cy.get(":nth-child(1) > :nth-child(5) > #testDeleteClick").click();
    cy.get("#exampleModalCenterTitle").should("be.visible");
    cy.wait(200);
    cy.get(".modal-footer > .btn-danger")
      .scrollIntoView()
      .click();
    cy.wait(1000);
    cy.get("#exampleModalCenterTitle").should("be.not.visible");
  });
});
