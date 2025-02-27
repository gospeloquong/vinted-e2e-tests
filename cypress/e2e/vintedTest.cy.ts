import * as vintedPage from '../page-object-model/vintedPage';

const emailAddress = 
const password = 

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});


describe('Vinted e2e Test', () => {
    beforeEach (
        () => {
            cy.visit('/');
            cy.setCookie('OptanonAlertBoxClosed', '2025-02-04T09:32:01.592Z');
        }
    )

    it('should search, select, and add a product', () => {
        vintedPage.searchProduct('Green Shirt');
        vintedPage.selectProduct(0);
        vintedPage.buyProduct();
        vintedPage.logIn(emailAddress, password);
     })

     it('should search, select, and add a brown shirt', () => {
        vintedPage.searchProduct('Green Shirt');
        vintedPage.selectProduct(0);
        vintedPage.buyProduct();
        vintedPage.logIn(emailAddress, password);
     });

     it('should search, select, and search again', () => {
        vintedPage.searchProduct('Blue Shirt');
        vintedPage.selectProduct(0);
        cy.get('@productName').then((name) => cy.log('Selected Product Name:', name));
        cy.get('@productPrice').then((price) => cy.log('Selected Product Price:', price));
        vintedPage.buyProduct();
        vintedPage.logIn(emailAddress, password);   
        vintedPage.assertBasketDetails();
     });
});
