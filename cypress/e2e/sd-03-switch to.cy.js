describe('Demo Automation Testing SwitchTo', () => {


    //SwithTo -Alert with Ok
    it('Alert with ok', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')
        cy.get('img[alt="image not displaying"]').should('exist')
        cy.get('div[class="col-sm-8 col-xs-8 col-md-8"] h1').should('have.text', 'Automation Demo Site ')
        cy.get('.btn.btn-danger').click()
    })

    //Verify Alert with ok na d cancel  
    //Press ok
    it('Alert with Ok and Cancel click ok', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')
        cy.get('.analystic[href="#CancelTab"]').click()
        cy.get('.btn.btn-primary').click()
        cy.on("window:confirm", (str) => {
            return true;
        });
        cy.get('#demo').should('have.text', 'You pressed Ok')
    })

    //Press Cancel
    it('Alert with Ok and Cancel click cancel', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')
        cy.get('.analystic[href="#CancelTab"]').click()
        cy.get('.btn.btn-primary').click()
        cy.on("window:confirm", (str) => {
            return false;
        });
        cy.get('#demo').should('have.text', 'You Pressed Cancel')
    })


    //Verfiy Alert with Text
    it('Alert with Text', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')
        //Alert with text
        cy.get('.analystic[href="#Textbox"]').click()
        cy.window().then(($win) => {
            cy.stub($win, 'prompt').returns('user')
            cy.get('.btn.btn-info ').click()
        })
        cy.get("#demo1").should("have.text", 'Hello user How are you today')
    })

    //Verify the Window opeing an new tab
    it('Windows-tab', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Windows.html"]').click()
        cy.url().should('include', 'Windows.html')
        cy.get('a[href*=selenium]')
            .invoke('removeAttr', 'target').click()
        cy.url().should('includes', 'selenium.dev/');
    })

   //Verify the Window opeing an new window
    it('Windows-new window', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Windows.html"]').click()
        cy.url().should('include', 'Windows.html')
        cy.get('.analystic[href="#Seperate"]').click()
        cy.window().then((win) => {
            cy.stub(win, 'open', url => {
                win.location.href = 'http://www.selenium.dev/';
            }).as("popup")
        })
        cy.get('.btn.btn-primary').click()
        cy.get('@popup')
            .should("be.called")
        cy.url().should('includes', 'selenium.dev/');
    })


    //verify the single iFrame inside text box
    it('Frames -Single Frames', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Frames.html"]').click()
        cy.url().should('include', 'Frames.html')
        cy.get('[id="singleframe"]').iframe()
            .find('input[type="text"]').first().type('testing text')
    })

    //verify the iFrame with in an iFrame inside text box
    it('Frames -iFrame with in an iFrame', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Frames.html"]').click()
        cy.url().should('include', 'Frames.html')
        cy.get('.analystic[href="#Multiple"]').click()
        cy.get('[src="MultipleFrames.html"]').iframe()
            .find('[src="SingleFrame.html"]').iframe()
            .find('input[type="text"]').last().type('testing text')
    })

    //Verify the Window opeing an multi tabs
    it('Windows-Multiple window', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('a[href="SwitchTo.html"]').first().click()
        cy.get('a[href="Windows.html"]').click()
        cy.url().should('include', 'Windows.html')
        cy.get('.analystic[href="#Multiple"]').click()
        cy.window().then((win) => {
            cy.spy(win, 'open').as('redirect');
        });
        cy.get('button[onclick="multiwindow()"]')
            .click();
    })
})