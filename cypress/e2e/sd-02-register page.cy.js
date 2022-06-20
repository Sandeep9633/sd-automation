
import { getRandomName, getUniqueRef } from "../utils/common";

describe('Demo Automation Testing Register Page', () => {

  //Verify register page with details required
  it('Register Page', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')

    //verifying logo and title of the web.
    cy.get('img[alt="image not displaying"]').should('exist')
    cy.get('div[class="col-sm-8 col-xs-8 col-md-8"] h1').should('have.text', 'Automation Demo Site ')

    //verify the heading "Register"
    cy.get('div[class="container center"] h2').should('have.text', 'Register')

    //creating required details
    const yourFixturePath = 'download.jpg'
    const firstName = getRandomName();
    const lastName = getRandomName();
    const address = getRandomName();
    let emailID = firstName + lastName + "@demo.com"
    let phone = getUniqueRef(10)

    //Enter names, address, phone and email with random genarated nmae, 
    //skills, hobiles, country
    cy.get('input[placeholder="First Name"]').clear().type(firstName)
    cy.get('input[placeholder="Last Name"]').clear().type(lastName)
    cy.get('[ng-model="Adress"]').type(address)
    cy.get('[ng-model="EmailAdress"]').type(emailID)
    cy.get('input[type="tel"]').type(phone)
    cy.get('[type="radio"]').first().click()
    cy.get('[type="checkbox"]').check(['Cricket', 'Movies', 'Hockey'])
    cy.get('[type="radio"]').last().click()
    cy.get('[id="msdd"]').click()
    cy.contains('English').parent().click()
    cy.contains('French').parent().click()
    cy.get('div[id="msdd"] div span').eq(1).click()
    cy.get('[type="checkbox"]').uncheck(['Hockey', 'Movies'])
    cy.get('#Skills>option')
      .eq(1).then((val) => {
        cy.get('#Skills').select(val.val());
      });
    cy.get('#countries>option').eq(0).then((val) => {
      cy.get('#countries').select(val.val());
    });
    cy.get('span[role="presentation"]').click()
    cy.get('[id="select2-country-results"] li').eq(3).click()

    //Enter DOB year,month,day
    cy.get('#yearbox option').eq(77).then((val) => {
      cy.get('#yearbox').select(val.val());
    });
    cy.get('select[placeholder="Month"] option').eq(1).then((val) => {
      cy.get('select[placeholder="Month"]').select(val.val());
    });
    cy.get('#daybox option').eq(30).then((val) => {
      cy.get('#daybox').select(val.val());
    });

    //Entering the random password
    const Password = getRandomName() + "@" + getUniqueRef(1)
    cy.get('#firstpassword').type(Password)
    cy.get('#secondpassword').type(Password)

    //Uploading the image 
    cy.get('#imagesrc').attachFile(yourFixturePath)
    cy.get('#submitbtn').click()
  })
})