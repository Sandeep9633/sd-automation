const path = require('path');

describe('Demo Automation Testing Interaction', () => {

    //Verify the Resize the text area with different values
    it('Resizable', () => {
        cy.visit('http://demo.automationtesting.in/Resizable.html')
        cy.url().should('include', 'Resizable.html')
        cy.get('[id="resizable"]')
            .invoke('attr', 'style', 'width: 300px; height: 300px')
            .should('have.attr', 'style', 'width: 300px; height: 300px')
        cy.get('[id="resizable"]')
            .invoke('attr', 'style', 'width: 400px; height: 200px')
            .should('have.attr', 'style', 'width: 400px; height: 200px')
    })


    //Verify the youtube/video inside the iframe
    it('video', () => {
        cy.visit('http://demo.automationtesting.in/Youtube.html')
        cy.url().should('include', 'Youtube.html')
        cy.get('[src="https://www.youtube.com/embed/wPECeNP1BoY"]').iframe()
            .find('#player').should('be.visible')
    })

    //Verify the Download text file and validate the text inside
    it('More- download', () => {
        cy.visit('http://demo.automationtesting.in/FileDownload.html')
        cy.url().should('include', 'FileDownload.html')
        cy.get('#textbox').type('Automation Testing user')
        cy.get('[id="createTxt"]').click()
        cy.get('#link-to-download').click()
        const downloadsFolder = Cypress.config("downloadsFolder");
        cy.readFile(path.join(downloadsFolder, 'info.txt')).should("exist");
    })

    //Verify the Progress bar with the completion
    it('More -JqueryProgressBar', () => {
        cy.visit('http://demo.automationtesting.in/JqueryProgressBar.html')
        cy.url().should('include', 'JqueryProgressBar.html')
        cy.get('[id="downloadButton"]').click().then(() => {
            cy.get('[class="progress-label"]').should('have.text', 'Complete!')
        })
        cy.get('div[class="ui-dialog-buttonset"] button[type="button"]')
            .click()
    })

    //Verify the action loading until it complete and save the changes
    it('More -Loader', () => {
        cy.visit('http://demo.automationtesting.in/Loader.html')
        cy.url().should('include', 'Loader.html')
        cy.get('[id="loader"]').click()
        cy.get('.modal-title').should('have.text', 'Modal title').then(() => {
        cy.get('div[class="modal-footer"] button[class="btn btn-primary"]')
        }) 
                cy.url().should('include', 'Loader.html') 
    })

    //Verify the Progress bar for the dowload and verify its completed.
    it('More -ProgressBar', () => {
        cy.visit('http://demo.automationtesting.in/ProgressBar.html')
        cy.url().should('include', 'ProgressBar.html')
        cy.get('[class="btn btn-block btn-primary active"]').click().then(() => {
            cy.get('[class="progressbar-text"]').should('have.text', '100')
        })
    })
})