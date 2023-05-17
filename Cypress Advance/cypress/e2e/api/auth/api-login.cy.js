describe('Test Login', () => {
    // Menggunakan custom command loginViaAPI dengan email dan password tertentu
    it('should be able to login via API with specific email and password', () => {
        // const email = 'eve.holt@reqres.in'
        // const password = 'cityslicka'
    
        cy.loginViaAPI() // login menggunakan email dan password yang ditentukan
        cy.url().should('contain', '/main') // cek apakah sudah login dan masuk ke halaman utama
    })
})