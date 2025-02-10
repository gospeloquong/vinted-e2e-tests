import * as selectors from './selectors';

export const rejectCookies = () => {
    cy.get(selectors.COOKIE_REJECTION).click();
};

export const searchProduct = (product: string) => {
    cy.get(selectors.PRODUCT_SEARCH).first().type(product).type('{enter}');
};

export const selectFirstProduct = () => {
    cy.get(selectors.PRODUCT_SELECTION).eq(0).click();
};

export const buyProduct = () => {
    cy.get(selectors.BUY_BUTTON).click()
}