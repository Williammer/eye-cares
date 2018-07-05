// https://docs.cypress.io/api/introduction/api.html

describe('Home - Num Memory Game', () => {
  it('has basic UI elements', () => {
    cy.visit('/');
    cy.contains('h2', 'Number Memory Game');
  });
});

// TODO: add more...when has more time.
