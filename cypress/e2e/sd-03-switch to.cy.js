describe('Demo Automation Testing SwitchTo', () => {

    it('Alert with ok', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')

        cy.get('img[alt="image not displaying"]').should('exist')
        cy.get('div[class="col-sm-8 col-xs-8 col-md-8"] h1').should('have.text', 'Automation Demo Site ')

        //Alert with ok
        cy.get('.btn.btn-danger').click()


    })
    it('Alert with Ok and Cancel click ok', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')

        //Alert with ok and cancel press ok
        cy.get('.analystic[href="#CancelTab"]').click()
        cy.get('.btn.btn-primary').click()
        cy.on("window:confirm", (str) => {
            return true;
        });

        cy.get('#demo').should('have.text', 'You pressed Ok')
    })
    it('Alert with Ok and Cancel click cancel', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Alerts.html"]').click()
        cy.url().should('include', 'Alerts.html')
        cy.get('.analystic[href="#CancelTab"]').click()
        //Alert with ok and cancel press cancel
        cy.get('.btn.btn-primary').click()
        cy.on("window:confirm", (str) => {
            return false;
        });
        cy.get('#demo').should('have.text', 'You Pressed Cancel')
    })


    it('Alert with Text', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
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

    it('Windows-tab', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Windows.html"]').click()
        cy.url().should('include', 'Windows.html')
        //Target
        cy.get('a[href*=selenium]')
            .invoke('removeAttr', 'target').click()
        cy.url().should('includes', 'selenium.dev/');
    })

    it('Windows-new window', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Windows.html"]').click()
        cy.url().should('include', 'Windows.html')
        //Target
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


    it('Frames -Single Frames', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Frames.html"]').click()
        cy.url().should('include', 'Frames.html')
        cy.get('[id="singleframe"]').iframe()
            .find('input[type="text"]').first().type('testing text')


    })
    it('Frames -iFrame with in an iFrame', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Frames.html"]').click()
        cy.url().should('include', 'Frames.html')
        cy.get('.analystic[href="#Multiple"]').click()
        cy.get('[src="MultipleFrames.html"]').iframe()
            .find('[src="SingleFrame.html"]').iframe()
            .find('input[type="text"]').last().type('testing text')



    })

    it.only('Windows-Multiple window', () => {

        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')

        //SwitchTo
        cy.get('a[href="SwitchTo.html"]').first().click()


        cy.get('a[href="Windows.html"]').click()
        cy.url().should('include', 'Windows.html')
        //Target
        cy.get('.analystic[href="#Multiple"]').click()

        cy.window().then((win) => {
            cy.spy(win, 'open').as('redirect');
        });

        cy.get('button[onclick="multiwindow()"]')
            .click();


    })

})