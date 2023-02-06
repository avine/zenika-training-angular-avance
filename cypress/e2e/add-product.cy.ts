describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');

    cy.get('[data-test="product-btn"]').first().click();

    cy.get('[data-test="basket-amount"]').contains('€20.00');
  });
});
