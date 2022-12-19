describe('ShipProduction', () => {
  it('produces ships', () => {
    cy.visit('/');
    cy.get('input[type=radio]').first().click();
    cy.get('input[type=number]').clear().type('2');
    cy.get('form button').click();
    cy.get('form button').click();
    cy.get('app-space-ship').should('have.length', 2);
  });
});
