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

  it('Home page - email', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')
    cy.get('#logo').should('exist')
    cy.get('#email').type(email)
    cy.get('#enterimg').click()
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')

  })
  it('Home page - skip sign in', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')
    cy.get('#btn2').click()
    cy.url().should('include', 'Register.html')

  })
  it('Home page - sign in', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')
    cy.get('#btn1').click()
    cy.url().should('include', '/SignIn.html')
    cy.get('#logo').should('exist')
    cy.get('input[placeholder="E mail"]').type(loginEmail)
    cy.get('input[placeholder="Password"]').type(Password)
    cy.get('#enterbtn').click()

  })
  it('Home page -  incorrect sign in details', () => {
    cy.visit('http://demo.automationtesting.in/Register.html')
    cy.url().should('include', 'Register.html')
    cy.get('a[href="Index.html"]').click()
    cy.url().should('include', '/Index.html')
    cy.get('#btn1').click()
    cy.url().should('include', '/SignIn.html')
    cy.get('#logo').should('exist')
    cy.get('input[placeholder="E mail"]').type(loginEmail)
    cy.get('input[placeholder="Password"]').type(Password)
    cy.get('#enterbtn').click()
    cy.get('#errormsg').should('have.text',' Invalid User Name or PassWord ')

  })


  
})