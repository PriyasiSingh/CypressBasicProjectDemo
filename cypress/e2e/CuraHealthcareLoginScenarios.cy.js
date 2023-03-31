/// <reference types ='cypress'/>
import { LoginPage } from "./PageObject/Login"

describe('Appointment booking', () => {
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })

    afterEach(() => {


        const login = new LoginPage()
        login.clickLogout()

    })

    it('User should be able to login first and is able to click on make appointment button ', () => {
        //login using the top-right menu
        cy.get('#menu-toggle').click()
        cy.contains('Login').click()

        const login = new LoginPage()
        login.enterUsername('John Doe')
        login.enterPassword('ThisIsNotAPassword')
        login.clickLogin()

        cy.get('#btn-make-appointment').click()

        //verify Make appointment page is loaded with form
        cy.get('h2').should('have.text', 'Make Appointment')


    })

    it('User should be able click on make appointment button & then asked for login', () => {
        cy.get('#btn-make-appointment').click()

        const login = new LoginPage()
        login.enterUsername('John Doe')
        login.enterPassword('ThisIsNotAPassword')
        login.clickLogin()

        //verify Make appointment page is loaded with form
        cy.get('h2').should('have.text', 'Make Appointment')


    })
})