export class LoginPage {
    loginPage_textbox_username = '#txt-username'
    loginPage_textbox_password = '#txt-password'
    loginPage_button_login = '#btn-login'


    enterUsername(uname) {
        cy.get(this.loginPage_textbox_username).type(uname)
    }

    enterPassword(paswd) {
        cy.get(this.loginPage_textbox_password).type(paswd)

    }

    clickLogin() {
        cy.get(this.loginPage_button_login).click()

    }

    clickLogout() {
        cy.get('#menu-toggle').invoke('show').click()
        cy.contains('Logout').click()
    }

}