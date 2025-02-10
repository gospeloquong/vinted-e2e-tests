import * as vintedPage from '../page-object-model/vintedPage';

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

describe('Vinted e2e Test', () => {
    it('should search, select, and add white trainers to bag and validate', () => {
        cy.visit('https://www.vinted.co.uk/');

        vintedPage.rejectCookies();
        cy.setCookie('OptanonAlertBoxClosed', '2025-02-04T09:32:01.592Z')
        cy.wait(9999999999999)
    
        vintedPage.searchProduct('Green Shirt');

        vintedPage.selectFirstProduct();
        
        vintedPage.buyProduct();
    });
});