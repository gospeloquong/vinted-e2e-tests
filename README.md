# Vinted E2E Tests

## Project Overview
This project contains end-to-end (E2E) tests for Vinted's web platform using Cypress. The tests cover critical user journeys, ensuring a smooth and reliable experience for users.

## Tech Stack
- **Testing Framework**: Cypress
- **Language**: TypeScript/JavaScript
- **Test Design Pattern**: Page Object Model (POM)

## Folder Structure
```
📂 vinted-e2e-tests
├── 📂 cypress
│   ├── 📂 integration  # Test files
│   ├── 📂 support      # Custom commands and utilities
│   ├── 📂 selectors    # Page selectors
├── 📄 cypress.config.js  # Cypress configuration
├── 📄 package.json       # Dependencies and scripts
└── 📄 README.md          # Project documentation
```

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/vinted-e2e-tests.git
   cd vinted-e2e-tests
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Running Tests
- Run tests in **headed mode**:
  ```sh
  npx cypress open
  ```
- Run tests in **headless mode**:
  ```sh
  npx cypress run
  ```

## Key Test Scenarios
1. **Search for a Product**
2. **Select and Store Product Details** (Name & Price)
3. **Add Product to Basket**
4. **User Login Process**
5. **Basket Details Assertion**

## Example Test
```js
it('should search, select, and verify product details', () => {
    vintedPage.searchProduct('Blue Shirt');
    vintedPage.selectProduct(0);
    cy.get('@productName').then((name) => cy.log('Selected Product Name:', name));
    cy.get('@productPrice').then((price) => cy.log('Selected Product Price:', price));
    vintedPage.buyProduct();
    vintedPage.logIn(emailAddress, password);
    vintedPage.assertBasketDetails();
});
```

## Contribution
Feel free to open issues and submit PRs to improve test coverage and efficiency.

## License
MIT License

