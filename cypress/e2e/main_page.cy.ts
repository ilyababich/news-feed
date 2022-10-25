describe("The Main Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });

  it("contains title in header", () => {
    cy.contains("NEWS FEED");
  });

  it("contains title, label and description in main section", () => {
    cy.get("main").contains("best gelezen");
    cy.get("main").contains("De uitschieters van 2018");
    cy.get("main").contains(
      "Waar hadden we het dit jaar allemaal over? Je leest het in dit overzicht met de best gelezen artikelen."
    );
  });

  it("should render 6 item on initial render", () => {
    cy.get("main").children().eq(1).children().should("have.length", "6");
  });

  it("should add additional items when reach bottom", () => {
    cy.get('[data-cy="loading"]').scrollIntoView();
    cy.get("main").children().eq(1).children().should("have.length", "12");
  });
});

export {};
