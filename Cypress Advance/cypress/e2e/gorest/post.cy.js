/// <reference types ="Cypress" />

describe("post user request", () => {
    let token =
      "51f718fb51c48ce9ab39298b56ee12fea27e233d1a4d05d38d57d3111b5f38a6";
    it("create user function", () => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users",
        headers: {
            "authorization": "Bearer " + token,
        },
        body: {
            name: 'Tenali Ramakrishna003',
            gender: 'male',
            email: 'ten003@15ce.com',
            status: 'active'
        },
        // failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201)
        });
    });
  });