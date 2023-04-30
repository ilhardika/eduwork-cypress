const URL = 'http://zero.webappsecurity.com/'
const searchType = '#searchTerm'

class SearchPage {
    static visit() {
        cy.visit(URL)
    }
    static searchType() {
        cy.get(searchType).type('bank{enter}')
    }
}

export default SearchPage