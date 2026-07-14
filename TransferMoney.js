const { expect } = require('@playwright/test');

class TransferMoneyPage {

    constructor(page) {

        this.page = page;

        this.transferMenu = page.locator("//a[@id='transferMenu']");

        this.beneficiaryDropdown = page.locator("//select[@id='beneficiary']");

        this.amount = page.locator("//input[@id='amount']");

        this.remarks = page.locator("//textarea[@id='remarks']");

        this.transferButton = page.locator("//button[@id='transfer']");

        this.otp = page.locator("//input[@id='otp']");

        this.confirmButton = page.locator("//button[@id='confirmTransfer']");

        this.successMessage = page.locator("//div[@id='successMessage']");

    }

    async openTransferPage() {

        await this.transferMenu.click();

    }

    async selectBeneficiary(name) {

        await this.beneficiaryDropdown.selectOption({ label: name });

    }

    async enterAmount(amount) {

        await this.amount.fill(amount);

    }

    async enterRemarks(remarks) {

        await this.remarks.fill(remarks);

    }

    async clickTransfer() {

        await this.transferButton.click();

    }

    async enterOTP(otp) {

        await this.otp.fill(otp);

    }

    async clickConfirmTransfer() {

        await this.confirmButton.click();

    }

    async verifyTransferSuccess() {

        await expect(this.successMessage)
            .toHaveText("Transfer Successful");

    }

    async transferMoney(name, amount, remarks, otp) {

        await this.openTransferPage();

        await this.selectBeneficiary(name);

        await this.enterAmount(amount);

        await this.enterRemarks(remarks);

        await this.clickTransfer();

        await this.enterOTP(otp);

        await this.clickConfirmTransfer();

    }

}

module.exports = TransferMoneyPage;