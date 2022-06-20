import { todaysDate } from "../utils/common";

describe('Demo Automation Testing Wingets', () => {

    //Verify the Wingets -collapes/Expand
    it('collape', () => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.url().should('include', 'Register.html')
        cy.get('.dropdown-toggle[href="Widgets.html"]').click()
        cy.get('a[href="Accordion.html"]').click()
        cy.url().should('include', 'Accordion.html')
        cy.get('a[href="#collapse1"]').click()
        cy.get('div[id="collapse1"][class="panel-collapse collapse in"]')
            .should('not.exist')
        cy.get('div[id="collapse1"][class="panel-collapse collapse"]')
            .should('exist')
        cy.get('a[href="#collapse1"]').click()
        cy.get('div[id="collapse1"][class="panel-collapse collapse"]')
            .should('not.exist')
        cy.get('div[id="collapse1"][class="panel-collapse collapse in"]')
            .should('exist')
    })

    //Verify the Wingets -cdate picker with text disabled
    it('date picker disabled', () => {
        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.url().should('include', 'Datepicker.html')
        cy.get('[id="datepicker1"]').click();
        cy.contains('Prev').click();
        cy.contains('Next').click();
        cy.contains('22').click();
    })


    //Verify the Wingets -cdate picker with text enabled
    it('date picker enabled', () => {
        cy.visit('http://demo.automationtesting.in/Datepicker.html')
        cy.url().should('include', 'Datepicker.html')
        let date = todaysDate() 
        cy.get('[id="datepicker2"]').clear().type(date)
        cy.get('.datepick-cmd-close').click()
    })

    //Verify the Winget - slider with different values
    it('slider', () => {
        cy.visit('http://demo.automationtesting.in/Slider.html')
        cy.url().should('include', 'Slider.html')
        cy.get('div[id="slider"] a[href="#"]')
        .invoke('attr','style','left:50%;')
        .should('have.attr','style','left:50%;')
        cy.get('div[id="slider"] a[href="#"]')
        .invoke('attr','style','left:99%;')
        .should('have.attr','style','left:99%;')
        cy.get('div[id="slider"] a[href="#"]')
        .invoke('attr','style','left:0%;')
        .should('not.have.attr','style','left:99%;')
    })
})