describe("Initial Page Layout", () => {
  before(() => {
    cy.intercept("GET", "https://wttr.in", {}).as("fetchWeather");
    cy.visit("/");
  });

  it("has a text heading with the project title", () => {
    cy.get("h1:first-of-type").should("have.text", "Weather App");
  });

  it("has a search form with a label, text input, submit input, and regular button", () => {
    cy.get("form")
      .should("exist")
      .get("form input[type='text']")
      .should("exist")
      .get("form input[type='submit']")
      .should("exist");
  });

  it("has a main section of the page with a class of `display` that requests the user to choose a location", () => {
    cy.get(".display").should("exist").not("have.text", "");
  });

  it("has a sidebar section of the page with a class of `history` that includes a 'Previous Searches' section", () => {
    cy.get(".history")
      .should("exist")
      .should("contain.text", "Previous Searches");
  });
});
