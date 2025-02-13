describe('Login Test Soucedemo', () => {

    const baseUrl = Cypress.config("baseUrl");
    const username = Cypress.env("username");
    const password = Cypress.env("password");

  it('Successfuly Login', () => {

    cy.visit(baseUrl);

    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="title"]').should("have.text", "Products");

  })

  it('Empty Login', () => {

    cy.visit(baseUrl);

    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should("be.visible")
    .and("contain.text", "Epic sadface: Username is required");

  })

  it('Login With Invalid Username', () => {

     cy.visit(baseUrl);

     cy.get('[data-test="username"]').type("nanabi");
     cy.get('[data-test="password"]').type(password);
     cy.get('[data-test="login-button"]').click();

     cy.get('[data-test="error"]').should("be.visible")
     .and("contain.text", "Epic sadface: Username and password do not match any user in this service");

  })

  it('Login With Invalid Password', () => {

    cy.visit(baseUrl);

    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type("1234");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should("be.visible")
    .and("contain.text", "Epic sadface: Username and password do not match any user in this service");

  })

  it('Login With Invalid Password', () => {

    cy.visit(baseUrl);

    cy.get('[data-test="username"]').type("nanabi");
    cy.get('[data-test="password"]').type("1234");
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]').should("be.visible")
    .and("contain.text", "Epic sadface: Username and password do not match any user in this service");

  })
  
})