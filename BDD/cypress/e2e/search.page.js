const URL = 'http://zero.webappsecurity.com/'
const searchType = '#searchTerm'

class searchPage {
    static visit() {
        cy.visit(URL)
    }
    static searchType(text){
        cy.get(searchType).type(text)
    }
}

export default searchPage