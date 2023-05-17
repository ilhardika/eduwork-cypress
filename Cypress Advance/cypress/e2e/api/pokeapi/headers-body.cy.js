it.only('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    cy.get('@pokemon').its('headers').its('content-type')
    .should('include', 'application/json; charset=utf-8')
    // assert response body menggunakan expect
    cy.get('@pokemon').then((response) => {
        expect(response.body).to.have.property('name', 'ditto')
    })
});