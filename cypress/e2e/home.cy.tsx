describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#About").click();
    cy.get("#Projects").click();
    cy.get("#Skills").click();
    cy.get("#Certificates").click();
    cy.get("#Contact").click();

    for (let index = 0; index < 5; index++) {
      cy.get("#prevSkillsBtn").click();
    }
    for (let index = 0; index < 5; index++) {
      cy.get("#nextSkillsBtn").click();
    }
  });
});
