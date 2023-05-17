it('Validate Header', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
    // assert headers
    cy.get('@pokemon').its('headers').its('content-type')
    .should('include', 'application/json; charset=utf-8')
    
    // assert response body
    cy.get('@pokemon').its('body').should('include', {name: "ditto"})
    // assert response body menggunakan expect
    cy.get('@pokemon').then((response) => {
        expect(response.body.abilities[0].ability.name).to.eq("limber")
        expect(response.body.abilities[0].ability.url).to.eq('https://pokeapi.co/api/v2/ability/7/');
    })

    //assert status
    cy.get('@pokemon').its('status').should('equal', 200)
});
it('Validate Negative Response', () => {
    cy.request({
        method: 'GET',
        url: 'https://pokeapi.co/api/v2/pokemon/eduwork',
        failOnStatusCode: false
    }).as('pokemon')
    cy.get('@pokemon').its('status').should('equal', 404)
});