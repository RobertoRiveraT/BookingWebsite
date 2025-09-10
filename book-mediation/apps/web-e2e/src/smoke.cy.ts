it("BM-TC-000 [REQ:BM-REQ-000] loads home", () => {
  cy.visit("/");
  cy.contains("Next").should("exist"); // adjust to something on your page
});
