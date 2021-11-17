class AccessoriesPage {
    open() {
        cy.visit(`${Cypress.env("googleURL")}/collection/accessories_wall?hl=en-US`);
    }

    get searchIcon() {
        return cy.get("div[data-test='header-search']");
    }

    get searchInput() {
        return cy.get("input[placeholder='Search Google Store']");
    }

    performSearch(productToSearch) {
        this.searchIcon.click();
        this.searchInput.type(`${productToSearch}{enter}`);
    }

}

export default new AccessoriesPage();