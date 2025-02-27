import * as selectors from './selectors';

export const searchProduct = (product: string) => {
    cy.get(selectors.PRODUCT_SEARCH).first().type(product).type('{enter}');
};

export const selectProduct = (index: number) => {
    cy.get(selectors.PRODUCT_SELECTION).eq(index).click();
    
    cy.get(selectors.PRODUCT_NAME).invoke('text').as('productName');
    cy.get(selectors.PRODUCT_PRICE).invoke('text').as('productPrice');
};

export const buyProduct = () => {
    cy.get(selectors.BUY_BUTTON).click();
};

export const logIn = (email: string, password: string) => {
    cy.get(selectors.LOGIN_BUTTON).click()
    cy.get(selectors.LOGIN_EMAIL_BUTTON, { timeout: 10000 }).click();
    cy.get(selectors.EMAIL_INPUT).type(email);
    cy.get(selectors.PASSWORD_INPUT).type(password);
    cy.get(selectors.CONTINUE_BUTTON).click();
 };

 export const assertBasketDetails = () => {
    cy.get('@productName').then((name) => {
        cy.get(selectors.PRODUCT_NAME).should('contain', name);
    });

    cy.get('@productPrice').then((price) => {
        cy.get(selectors.PRODUCT_PRICE).should('contain', price);
    });
};
