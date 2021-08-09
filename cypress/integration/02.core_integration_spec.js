describe("Core Integration", () => {
  before(() => {
    cy.intercept("GET", "https://wttr.in/Melbourne*", {
      fixture: "melbourne.json",
    }).as("fetchMelbourne");
    cy.visit("/");
  });

  it("should allow the user to search for a location and show them current weather information", () => {
    cy.get("form input[type='text']")
      .type("Melbourne")
      .get("form input[type='submit']")
      .click();

    cy.get(".display")
      .should("contain.text", "Melbourne")
      .should("contain.text", "Victoria")
      .should("contain.text", "Australia")
      .should("contain.text", "47");
  });

  it("should also show the user information for the next few days", () => {
    cy.get(".display")
      .should("contain.text", "49")
      .should("contain.text", "51")
      .should("contain.text", "52")
      .should("contain.text", "53")
      .should("contain.text", "54")
      .should("contain.text", "55")
      .should("contain.text", "57");
  });

  it("should also store searches with the name and current 'feels like' temperature in the sidebar", () => {
    cy.get(".history")
      .should("contain.text", "Melbourne")
      .should("contain.text", "47");
  });

  it("should update both the main section of the page and the sidebar if another search is made", () => {
    cy.intercept("GET", "https://wttr.in/Seattle*", {
      fixture: "seattle.json",
    }).as("fetchSeattle");

    cy.get("form input[type='text']")
      .type("Seattle")
      .get("form input[type='submit']")
      .click();

    cy.get(".display")
      .should("contain.text", "Seattle")
      .should("contain.text", "Washington")
      .should("contain.text", "United States of America")
      .should("contain.text", "56")
      .should("contain.text", "61")
      .should("contain.text", "64")
      .should("contain.text", "65")
      .should("contain.text", "67")
      .should("contain.text", "74")
      .should("contain.text", "78")
      .should("contain.text", "90");

    cy.get(".history")
      .children()
      .should("contain.text", "Melbourne")
      .should("contain.text", "Seattle");
  });

  it("if the sidebar link is clicked, the main section should be populated with that weather information", () => {
    cy.intercept("GET", "https://wttr.in/Melbourne*", {
      fixture: "melbourne.json",
    }).as("fetchMelbourne");

    cy.get(".history a").first().click();

    cy.get(".display")
      .should("contain.text", "Melbourne")
      .should("contain.text", "Victoria")
      .should("contain.text", "Australia")
      .should("contain.text", "47");
    cy.get(".display")
      .should("contain.text", "49")
      .should("contain.text", "51")
      .should("contain.text", "52")
      .should("contain.text", "53")
      .should("contain.text", "54")
      .should("contain.text", "55")
      .should("contain.text", "57");
  });

  it("after clicking the sidebar link, another entry for the same location should not be made", () => {
    cy.get(".history")
      .children()
      .should("contain.text", "Melbourne")
      .should("contain.text", "Seattle");
  });
});
