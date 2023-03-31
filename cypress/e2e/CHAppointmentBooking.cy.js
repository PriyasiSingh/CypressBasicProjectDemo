/// <reference types='cypress' />
import { LoginPage } from "./PageObject/Login"

it("USer is able to book an appointment", () => {

    //visit the site
    cy.visit('https://katalon-demo-cura.herokuapp.com/')

    //click on "make appointment" button: #btn-make-appointment
    cy.get('#btn-make-appointment').click()


    //loginuser
    const login = new LoginPage()
    login.enterUsername('John Doe')
    login.enterPassword('ThisIsNotAPassword')
    login.clickLogin()



    //enter the facility from dropdown: #combo_facility
    cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')

    //chcekbox: cy.get('#chk_hospotal_readmission')
    cy.get('#chk_hospotal_readmission').check()

    //select the Healthcare prog from radio button: cy.get('#radio_program_medicaid')
    cy.get('#radio_program_medicaid').check()

    //select the visit date from dtae field: cy.get('#txt_visit_date') or cy.get('.input-group-addon')
    cy.get('#txt_visit_date').type('06/10/2023')


    //add a comment:cy.get('#txt_comment')
    cy.get('#txt_comment').click({ force: true })
    cy.get('#txt_comment').should('be.visible').type("first appointment")

    //click on book appointmnet: cy.get('#btn-book-appointment')
    cy.get('#btn-book-appointment').click()

    //verify h2: Appointment confirmation
    cy.get('h2').should('have.text', 'Appointment Confirmation')
    cy.get('#comment').should('have.text', 'first appointment')
    //verify comment
})