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
  it("user can submit a contact form", () => {
    cy.visit("/");
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/contact"]').click();
    cy.get(".form-group").within(() => {
      cy.get("input:first").should("have.attr", "placeholder", "Enter name");
      cy.get("#exampleInputEmail1").should(
        "have.attr",
        "placeholder",
        "Enter email"
      );
      cy.get("#message").should("have.attr", "placeholder", "Message...");
    });
    cy.get(".btn").click();
    cy.get(".text-danger")
      .should("be.visible")
      .and("contain", "Please fill in all fields");
    cy.get("input:first").type("somebody");
    cy.get("#exampleInputEmail1").type("somebody@cox.net");
    cy.get("#message").type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    );
    cy.get(".btn").click();
    cy.get(".text-success")
      .should("be.visible")
      .and(
        "contain",
        "Your questions and suggestions are important to us. We will respond within 48hrs"
      );
    cy.get(".btn").should("have.class", "disabled");
  });
  it("navigate to Home, About, Features, FAQs, Topics pages denied Course, Profile, responsive", () => {
    cy.visit("/");
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/about"]').click();
    cy.viewport(1200, 1200);
    cy.wait(1000);
    cy.get(".col > .lead").scrollIntoView();
    cy.wait(1000);
    cy.get(".navbar-brand").scrollIntoView();
    cy.viewport(992, 1200);
    cy.wait(1000);
    cy.viewport(768, 1200);
    cy.wait(1000);
    cy.viewport(576, 1200);
    cy.wait(1000);
    cy.viewport(1200, 1200);
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/features"]').click();
    cy.viewport(1200, 1200);
    cy.wait(1000);
    cy.get(".col > .lead").scrollIntoView();
    cy.wait(1000);
    cy.get(".navbar-brand").scrollIntoView();
    cy.viewport(992, 1200);
    cy.wait(1000);
    cy.viewport(768, 1200);
    cy.wait(1000);
    cy.viewport(576, 1200);
    cy.wait(1000);
    cy.viewport(1200, 1200);
    cy.get(".mr-auto > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/faq"]').click();
    cy.viewport(1200, 1200);
    cy.wait(1000);
    cy.get(".col > .lead").scrollIntoView();
    cy.wait(1000);
    cy.get(".navbar-brand").scrollIntoView();
    cy.viewport(992, 1200);
    cy.wait(1000);
    cy.viewport(768, 1200);
    cy.wait(1000);
    cy.viewport(576, 1200);
    cy.wait(1000);
    cy.viewport(1200, 1200);
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
