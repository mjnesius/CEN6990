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
  cy.get(":nth-child(3) > .nav-link").click();
  cy.url().should("include", "login");
});
