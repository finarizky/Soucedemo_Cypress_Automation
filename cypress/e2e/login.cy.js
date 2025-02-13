
import homepage from "../support/pageObjects/homepage";
import loginPage from "../support/pageObjects/loginPage";

describe('Test Login Soucedemo', () => {

  beforeEach(() => {

    loginPage.visitLoginPage();
  });

  it('Successfuly Login', () => {

   loginPage.validLogin();
   homepage.validateInHomepage();
  })

  it('Empty Login', () => {

      cy.fixture("messages").then((messages) => {
        loginPage.clickButtonLogin();
        loginPage.validateErrorMessage(messages.emptyUsername);
    });
  })

  it('Login With Invalid Username', () => {

      cy.fixture("messages").then((messages) => {
          loginPage.inputUsername(Cypress.env("invalid_username"));
          loginPage.inputPassword(Cypress.env("password"));
          loginPage.clickButtonLogin();
          loginPage.validateErrorMessage(messages.doesntMatch);
      });
  })

  it('Login With Invalid Password', () => {

      cy.fixture("messages").then((messages) => {
          loginPage.inputUsername(Cypress.env("username"));
          loginPage.inputPassword(Cypress.env("invalid_password"));
          loginPage.clickButtonLogin();
          loginPage.validateErrorMessage(messages.doesntMatch);
      });
  })

  it('Login With Invalid Username Password', () => {

      cy.fixture("messages").then((messages) => {
          loginPage.inputUsername(Cypress.env("invalid_username"));
          loginPage.inputPassword(Cypress.env("invalid_password"));
          loginPage.clickButtonLogin();
          loginPage.validateErrorMessage(messages.doesntMatch);
      });
  })
  
})