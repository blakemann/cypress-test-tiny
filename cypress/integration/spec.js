/// <reference types="cypress" />
describe('page', () => {
  it('works with an external url using url', () => {
    cy.route2({ url: 'https://example.cypress.io/example-path', method: 'GET' }, { fixture: 'example.json' }).as('example');
    cy.visit('index.html');
    cy.contains('Hello');
  })

  it('works with an external url using path', () => {
    cy.route2({ path: '/example-path', method: 'GET' }, { fixture: 'example.json' }).as('example');
    cy.visit('index.html');
    cy.contains('Hello');
  })

  it('works with an external url using hostname', () => {
    cy.route2({ hostname: 'example.cypress.io', method: 'GET' }, { fixture: 'example.json' }).as('example');
    cy.visit('index.html');
    cy.contains('Hello');
  })

  it('works with an external url using hostname and path', () => {
    cy.route2({ hostname: 'example.cypress.io', path: '/example-path', method: 'GET' }, { fixture: 'example.json' }).as('example');
    cy.visit('index.html');
    cy.contains('Hello');
  })
})
