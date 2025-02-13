
class homePage{

    homepageTittle = '.title';
    buttonFilter = '[data-test="product-sort-container"]';
    productBackpack = '#item_4_title_link';
    productTshirt = '#item_3_title_link';
    productOnesie = '#item_2_title_link';
    productJacket = '#item_5_title_link';
    badgeCart = '.shopping_cart_badge';
    addCartBackpack = '#add-to-cart-sauce-labs-backpack';
    addCartLightBike = '#add-to-cart-sauce-labs-bike-light';
    addCartBoltTshirt = '#add-to-cart-sauce-labs-bolt-t-shirt';
    addCartFleeceJacket = '#add-to-cart-sauce-labs-fleece-jacket';
    addChartOnesie = '#add-to-cart-sauce-labs-onesie';
    addChartTshirtRed = '#add-to-cart-test.allthethings()-t-shirt-(red)';
    btnRemoveBackpack = '#remove-sauce-labs-backpack';
    btnRemoveLightBike = '#remove-sauce-labs-bike-light';
    btnRemoveBoltTshirt = '#remove-sauce-labs-bolt-t-shirt';
    btnRemoveFleeceJacket = '#remove-sauce-labs-fleece-jacket';
    btnRemoveOnesie = '#remove-sauce-labs-onesie';
    btnRemoveTshirtRed = '#remove-test.allthethings()-t-shirt-(red)';

    validateInHomepage(){

        cy.get(this.homepageTittle).should("have.text", "Products");
    }

    validateCartHasItems(expectedCount) {

        cy.get(this.badgeCart).should("have.length", expectedCount);
    }

    filterZtoA() {

        cy.get(this.buttonFilter).select("az");
        cy.get(this.productTshirt).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    }

    filterAtoZ() {

        cy.get(this.buttonFilter).select("za");
        cy.get(this.productBackpack).should("have.text", "Sauce Labs Backpack");
    }

    filterLowtoHigh() {

        cy.get(this.buttonFilter).select("lohi");
        cy.get(this.productOnesie).should("have.text", "Sauce Labs Onesie");
    }

    filterHightoLow() {

        cy.get(this.buttonFilter).select("hilo");
        cy.get(this.productJacket).should("have.text", "Sauce Labs Fleece Jacket");
    }

    addBackpacktoCart(){

        cy.get(this.addCartBackpack).click();
    }

    validateBtnRemoveBP() {

        cy.get(this.btnRemoveBackpack).should("have.text", "Remove");
    }

    addLPtoCart(){

        cy.get(this.addCartLightBike).click();
    }

    validateBtnRemoveLP() {

        cy.get(this.btnRemoveLightBike).should("have.text", "Remove");
    }

    removeCartBackpack(){

        cy.get(this.btnRemoveBackpack).click();
    }

    validateBtnAddtoCartBP(){

        cy.get(this.addCartBackpack).click();
    }

    removeCartLB(){

        cy.get(this.btnRemoveLightBike).click();
    }

    validateBtnAddtoCartLP(){

        cy.get(this.addCartLightBike).click();
    }

}

export default new homePage;