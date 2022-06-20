let email, loginEmail, Password;

describe('Home page', () => {

  beforeEach(() => {
    cy.fixture('sd-data/data.json').then(function (data) {
      this.data = data;
      email = this.data.homePage.email;
      loginEmail = this.data.homePage.loginEmail;
      Password = this.data.homePage.Password;
    })
  })

  //verify the email 
  it('Home page - email', () => {

    //URL
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')

    //Navigate to Home page
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')

    //Validating Logo and Email
    cy.get('#logo').should('exist')
    cy.get('#email').type(email)
    cy.get('#enterimg').click()

    //when click on enter it navigate to register page
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')
  })

  //Verify skip sign in
  it('Home page - skip sign in', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')

    //Navigate to Home page
    cy.url().should('include', 'Register.html')
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')

    //when click on skip sign in it navigate to register page
    cy.get('#btn2').click()
    cy.url().should('include', 'Register.html')
  })

  //verify the sign in 
  it('Home page - sign in', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')

    //Navigate to Home page
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')

    //Navigate to sign in and enter email and password
    cy.get('#btn1').click()
    cy.url().should('include', '/SignIn.html')
    cy.get('#logo').should('exist')
    cy.get('input[placeholder="E mail"]').type(loginEmail)
    cy.get('input[placeholder="Password"]').type(Password)
    cy.get('#enterbtn').click()
  })

  //verify sign in with incorrect details
  it('Home page -  incorrect sign in details', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')

    //Navigate to Home page
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')

    //Navigate to sign in and enter incorrect email and password
    cy.get('#btn1').click()
    cy.url().should('include', '/SignIn.html')
    cy.get('#logo').should('exist')
    cy.get('input[placeholder="E mail"]').type(loginEmail)
    cy.get('input[placeholder="Password"]').type(Password)
    cy.get('#enterbtn').click()
    cy.get('#errormsg').should('have.text', ' Invalid User Name or PassWord ')

  })
})