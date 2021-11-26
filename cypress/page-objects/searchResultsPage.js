class SearchResultsPage {
    getProductByDocId(docId) {
        return cy.get(`a[href='/product/${docId}']`)
    }

    chooseProductByHeader(fullName) {
        cy.get("h2").contains(fullName, {timeout: 8000}).parent().parent().click()
    }
}

export default new SearchResultsPage()