/// <reference types ="Cypress" />

describe("update user request", () => {
    let token =
      "51f718fb51c48ce9ab39298b56ee12fea27e233d1a4d05d38d57d3111b5f38a6";
    it("create user function", () => {
      cy.request({
        method: "POST",
        url: "https://gorest.co.in/public/v2/users/",
        headers: {
            "authorization": "Bearer " + token,
        },
        body: {
          name: 'Tenali Ramakrishna004',
          gender: 'male',
          email: 'ten013@15ce.com',
          status: 'active'
        },
        // failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property("id")
          }).then((response) =>{
            const userId = response.body.id
            cy.log("user id is: " + userId)
            cy.request({
            method: "PUT",
            url: 'https://gorest.co.in/public/v1/users/'+userId,
            headers: {
                "authorization": "Bearer " + token,
            },
            body: {
              name: 'Tenali Ramakrishna005',
              gender: 'male',
              email: 'ten014@15ce.com',
              status: 'active'
            }
          }).then((response) => {
            expect(response.status).to.eq(200)
          })
        })
    })
  })