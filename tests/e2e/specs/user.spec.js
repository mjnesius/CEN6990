/// <reference types="Cypress" />

import { watchFile } from "fs";

describe("User e2e", function() {
  it("user signup error handling", () => {
    cy.visit("/");
    cy.get(":nth-child(2) > :nth-child(2) > .nav-link").click();
    cy.get(".form-group").within(() => {
      cy.get("input:first").should("have.attr", "placeholder", "Enter email");
      cy.get("#exampleInputPassword1").should(
        "have.attr",
        "placeholder",
        "Password"
      );
      cy.get("#alias").should("have.attr", "placeholder", "Alias");
    });
    cy.get(".btn").click();
    cy.get(".text-danger")
      .should("be.visible")
      .and("contain", "Please fill in all fields");
    cy.get("input:first").type("somebody@cox.net");
    cy.get("#exampleInputPassword1").type("somebody");
    cy.get("#alias").type("somebody");
    cy.get(".btn").click();
    cy.get(".text-danger")
      .should("be.visible")
      .and("contain", "This alias already exists");
    cy.get("#alias").type("somebody1");
    cy.get(".btn").click();
    cy.get(".text-danger")
      .should("be.visible")
      .and(
        "contain",
        "The email address is already in use by another account."
      );
    cy.visit("/");
  });
  it("user login error handling and success", () => {
    cy.visit("/");
    cy.get(":nth-child(3) > .nav-link").click();
    cy.get(".form-group").within(() => {
      cy.get("input:first").should("have.attr", "placeholder", "Enter email");
      cy.get("#exampleInputPassword1").should(
        "have.attr",
        "placeholder",
        "Password"
      );
    });
    cy.get(".btn").click();
    cy.get(".text-danger")
      .should("be.visible")
      .and("contain", "Please fill in both fields");
    cy.get("input:first").type("somebody1@cox.net");
    cy.get("#exampleInputPassword1").type("somebody");
    cy.get(".btn").click();
    cy.get(".text-danger")
      .should("be.visible")
      .and(
        "contain",
        "There is no user record corresponding to this identifier. The user may have been deleted."
      );
    cy.get("input:first")
      .clear()
      .type("somebody@cox.net");
    cy.get(".btn").click();
    cy.url().should("include", "/");
    cy.logoutUser();
  });
  it("user can view course", () => {
    cy.loginUser();
    cy.wait(500);
    cy.get(":nth-child(2) > #navbarDropdown").click();
    cy.get('.dropdown-menu > [href="/topic/0"]').click();
    cy.contains("Web Development").click();
    cy.wait(500);
    cy.url().should("include", "2A3ih8CdmgsyChLk43Mp");
    cy.logoutUser();
  });
  it("user can access profile", () => {
    cy.loginUser();
    cy.wait(500);
    cy.get(":nth-child(2) > .dropdown > #navbarDropdown").click();
    cy.get('[href="/profile"]').click();
    cy.get("#email > .form-group > label").should(
      "contain",
      "Current Email: somebody@cox.net"
    );
    cy.get("span").should("contain", "Somebody");
    cy.get("#email > .btn").click();
    cy.get("#emailFeedback")
      .should("be.visible")
      .and("contain", "Please fill in email field");
    cy.get("#password > .btn").click();
    cy.get("#passwordFeedback")
      .should("be.visible")
      .and("contain", "Please fill in password field");
    cy.logoutUser();
  });
  it("user can view history", () => {
    cy.loginUser();
    cy.wait(500);
    cy.get(":nth-child(2) > .dropdown > #navbarDropdown").click();
    cy.get('[href="/history"]').click();
    cy.url().should("include", "/history");
    cy.contains("Web Development").click();
    cy.url().should("include", "2A3ih8CdmgsyChLk43Mp");
    cy.logoutUser();
  });
  it("user can logout", () => {
    cy.loginUser();
    cy.logoutUser();
    cy.url().should("include", "login");
  });
});
