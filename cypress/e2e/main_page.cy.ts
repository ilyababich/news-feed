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

  it("renders 6 item on initial render", () => {
    cy.get('[data-cy="bundle-items"]').children().should("have.length", "6");
  });

  it("adds additional items when reach bottom", () => {
    cy.get('[data-cy="loading"]').scrollIntoView();
    cy.get("main").children().eq(1).children().should("have.length", "12");
  });

  it("renders the first item correctly", () => {
    cy.get('[data-cy="bundle-item"]')
      .eq(0)
      .find("a")
      .invoke("attr", "href")
      .should(
        "eq",
        "https://www.rtlboulevard.nl/entertainment/showbizz/artikel/4245471/trijntje-oosterhuis-onherkenbaar-veel-afgevallen"
      );

    cy.get('[data-cy="bundle-item"]')
      .eq(0)
      .find("img")
      .invoke("attr", "src")
      .should(
        "eq",
        "https://www.rtlboulevard.nl/sites/default/files/styles/square_medium/public/content/images/2018/06/19/ANP-56919532.jpg?itok=TE8J4FE3"
      );

    cy.get('[data-cy="bundle-item"]')
      .eq(0)
      .contains("De uitschieters van 2018");

    cy.get('[data-cy="bundle-item"]')
      .eq(0)
      .contains("Trijntje Oosterhuis onherkenbaar veel afgevallen");
  });
});

export {};
