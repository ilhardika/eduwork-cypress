describe('create user', () => {
    it('Add a new user', () => {
        let user = {
        "name": 'Ilham',
        "job": 'Software Tester'
    }
    cy.request('PUT', 'https:reqres.in/api/users', user).then((response) => {
        expect(response.status).equal(201)
        expect(response.body.name).to.eq(user.name)
        })
    })
})