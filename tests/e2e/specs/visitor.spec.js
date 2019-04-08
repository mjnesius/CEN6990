/// <reference types="Cypress" />

import { watchFile } from "fs";

describe("Visitor e2e", () => {
  it("colapses nav bar on small screens", () => {
    cy.visit("/");
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").should("be.visible");
    cy.viewport(320, 480);
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").should(
      "not.be.visible"
    );
    cy.get(".navbar-toggler")
      .should("be.visible")
      .click();
    cy.get(".navbar-nav")
      .find("a")
      .should("be.visible");
    cy.viewport(1440, 1200);
  });
  it("navigate to About, Features, FAQs pages", () => {
    cy.visit("/");
    cy.viewport(1440, 1200);
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/about"]').click();
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/features"]').click();
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/faq"]').click();
    cy.get(":nth-child(2) > #navbarDropdown").click();
    cy.get('[href="/topic/0"]').click();
    cy.get(":nth-child(2) > #navbarDropdown").click();
    cy.get('[href="/topic/1"]').click();
    cy.get(":nth-child(2) > #navbarDropdown").click();
    cy.get('[href="/topic/2"]').click();
    cy.get(":nth-child(1) > #testCourseTitle").click();
    cy.url().should("include", "login");
    cy.go(-1);
    cy.get(":nth-child(2) > .dropdown > #navbarDropdown").click();
    cy.get('[href="/profile"]').click();
    cy.url().should("include", "login");
    cy.visit("/");
  });
  it("access denied to Account, Profile, History, Course pages", () => {
    cy.visit("/");
    cy.get(":nth-child(2) > .dropdown > #navbarDropdown").click();
    cy.get('[href="/profile"]').click();
    cy.url().should("include", "login");
    cy.go(-1);
    cy.get(":nth-child(2) > .dropdown > #navbarDropdown").click();
    cy.get('[href="/history"]').click();
    cy.url().should("include", "login");
    cy.visit("/");
  });
});
