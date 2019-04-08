// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("loginUser", () => {
  cy.visit("/");
  cy.get(":nth-child(3) > .nav-link").click();
  cy.get("input:first").type("somebody@cox.net");
  cy.get("#exampleInputPassword1").type("somebody");
  cy.get(".btn").click();
});
Cypress.Commands.add("loginInstructor", () => {
  cy.visit("/");
  cy.get(":nth-child(3) > .nav-link").click();
  cy.get("input:first").type("ebwwmd@cox.net");
  cy.get("#exampleInputPassword1").type("stephan");
  cy.get(".btn").click();
});
Cypress.Commands.add("logoutInstructor", () => {
  cy.get(":nth-child(4) > .nav-link").click();
  cy.url().should("include", "login");
});
Cypress.Commands.add("logoutUser", () => {
  cy.get(':nth-child(3) > .nav-link').click();
  cy.url().should("include", "login");
});
//
//cy.get(':nth-child(3) > .nav-link')
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
