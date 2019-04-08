/// <reference types="Cypress" />

import { watchFile } from "fs";

describe("Statistics page", function() {
  it("instructor can view statistics", () => {
    cy.loginInstructor();
    cy.wait(2000);
    cy.get(":nth-child(2) > :nth-child(1) > #navbarDropdown").click();
    cy.get('[href="/statistics"]').click();
    cy.url().should("include", "statistics");
    cy.logoutInstructor();
  });
});
