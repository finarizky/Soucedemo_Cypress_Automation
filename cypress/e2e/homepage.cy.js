import loginPage from "../support/pageObjects/loginPage";
import homePage from "../support/pageObjects/homePage";

describe('Test Homepage Soucedemo', () => {

    beforeEach(() => {

        loginPage.visitLoginPage();
    });

    it('Filter Z to A', () => {

        loginPage.validLogin();

        //homePage.clickButtonFilter();
        homePage.filterZtoA();
    })

    it('Filter A to Z', () => {

        loginPage.validLogin();

       // homePage.clickButtonFilter();
        homePage.filterAtoZ();
    })

    it('Filter Low to High', () => {

        loginPage.validLogin();

        //homePage.clickButtonFilter();
        homePage.filterLowtoHigh();
    })

    it('Filter High to Low', () => {

        loginPage.validLogin();

       // homePage.clickButtonFilter();
        homePage.filterHightoLow();
    })

    it('Add Backpack to Cart', () => {

        loginPage.validLogin();

        homePage.addBackpacktoCart();
        homePage.validateCartHasItems("1");
        homePage.validateBtnRemoveBP();

    })

    it('Add Light Bike to Cart', () => {

        loginPage.validLogin();

        homePage.addLPtoCart();
        homePage.validateCartHasItems("1");
        homePage.validateBtnRemoveLP();

    })

    it('Remove Cart Backpack', () => {

        loginPage.validLogin();

        homePage.addBackpacktoCart();
        homePage.validateCartHasItems("1");
        homePage.removeCartBackpack();
        homePage.validateCartHasItems("0");
        homePage.validateBtnAddtoCartBP();

    })

    it('Remove Cart Light Bike', () => {

        loginPage.validLogin();

        homePage.addLPtoCart();
        homePage.validateCartHasItems("1");
        homePage.removeCartLB();
        homePage.validateCartHasItems("0");
        homePage.validateBtnAddtoCartLP();

    })

})