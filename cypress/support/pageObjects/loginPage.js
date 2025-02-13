
class loginPage {

    usernameInput = '[data-test="username"]';
    passwordInput = '[data-test="password"]';
    loginButton = '[data-test="login-button"]';
    errorMessage = '[data-test="error"]';

    visitLoginPage(){

        cy.visit("/");
    }

    validLogin() {

        cy.get(this.usernameInput).clear().type(Cypress.env("username"));
        cy.get(this.passwordInput).clear().type(Cypress.env("password"));
        cy.get(this.loginButton).click();
    }

    inputUsername(username){

        cy.get(this.usernameInput).clear().type(username);
    }

    inputPassword(password){

        cy.get(this.passwordInput).clear().type(password);
    }

    clickButtonLogin() {

        cy.get(this.loginButton).click();
      }

    validateErrorMessage(expectedMessage) {
        cy.get(this.errorMessage).should("contain", expectedMessage);
      }
}


export default new loginPage;