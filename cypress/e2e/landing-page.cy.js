/// <reference types="cypress" />

describe("Vybeful Landing Page Scenario Test", () => {
  // beforeEach("Visit Soundclub site", () => {
  //   cy.visit('https://www.vybeful.com/')
  // })

  before(() => {
    cy.visit("https://www.vybeful.com/");
  });

  it("Verify the landing page have header", () => {
    cy.get(".pr-4").contains("Vybeful").should("have.class", "text-sm")
    cy.get(".px-4").contains("Mag").should("have.class", "text-sm")
    cy.get(".px-3").contains("APPLY").should("have.class", "text-sm")
  });

  it("Verify the landing page have hamburger menu", () => {
    cy.get('.sm\:block.cursor-pointer > span > img')
  });

  it("Verify the landing page have Soundclub logo", () => {
    cy.get('.sm\:block > span > img')
  });

  
});
