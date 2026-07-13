class LoginPage {

    constructor(page) {
        this.page = page;

        this.username = page.locator("//input[@id='username']");
        this.password = page.locator("//input[@id='password']");
        this.loginButton = page.locator("//button[@id='login']");
        this.otp = page.locator("//input[@id='otp']");
        this.verifyButton = page.locator("//button[@id='verify']");
    }

    async enterUsername(userName) {
        await this.username.fill(userName);
    }

    async enterPassword(passWord) {
        await this.password.fill(passWord);
    }

    async clickLogin() {
        await this.loginButton.click();
    }

    async enterOTP(otpValue) {
        await this.otp.fill(otpValue);
    }

    async clickVerify() {
        await this.verifyButton.click();
    }

    async login(userName, passWord, otpValue) {

        await this.enterUsername(userName);

        await this.enterPassword(passWord);

        await this.clickLogin();

        await this.enterOTP(otpValue);

        await this.clickVerify();

    }

}

module.exports = LoginPage;