/// <reference types ="Cypress" />

describe("get user request", () => {
    let accessToken =
      "51f718fb51c48ce9ab39298b56ee12fea27e233d1a4d05d38d57d3111b5f38a6";
    it("get users function", () => {
      cy.request({
        method: "GET",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            "authorization": "Bearer " + accessToken,
        },
        failOnStatusCode: false
        }).as('users').then((response) => {
            cy.get('@users').its('status').should('equal', 200)
        });
    });
  });