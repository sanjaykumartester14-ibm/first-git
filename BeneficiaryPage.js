const { expect } = require('@playwright/test');

class BeneficiaryPage {

    constructor(page) {

        this.page = page;

        this.beneficiaryMenu = page.locator("//a[@id='beneficiaryMenu']");

        this.addBeneficiaryButton = page.locator("//button[@id='addBeneficiary']");

        this.beneficiaryName = page.locator("//input[@id='beneficiaryName']");

        this.accountNumber = page.locator("//input[@id='accountNumber']");

        this.ifscCode = page.locator("//input[@id='ifscCode']");

        this.saveButton = page.locator("//button[@id='saveBeneficiary']");

        this.successMessage = page.locator("//div[@id='successMessage']");

        this.searchBeneficiary = page.locator("//input[@id='searchBeneficiary']");

        this.deleteButton = page.locator("//button[@id='deleteBeneficiary']");

        this.confirmDelete = page.locator("//button[@id='confirmDelete']");

    }

    async openBeneficiaryPage() {

        await this.beneficiaryMenu.click();

    }

    async clickAddBeneficiary() {

        await this.addBeneficiaryButton.click();

    }

    async enterBeneficiaryName(name) {

        await this.beneficiaryName.fill(name);

    }

    async enterAccountNumber(accountNo) {

        await this.accountNumber.fill(accountNo);

    }

    async enterIFSC(ifsc) {

        await this.ifscCode.fill(ifsc);

    }

    async clickSave() {

        await this.saveButton.click();

    }

    async verifyBeneficiaryAdded() {

        await expect(this.successMessage)
            .toHaveText("Beneficiary Added Successfully");

    }

    async searchBeneficiaryName(name) {

        await this.searchBeneficiary.fill(name);

    }

    async deleteBeneficiary() {

        await this.deleteButton.click();

        await this.confirmDelete.click();

    }

    async addBeneficiary(name, accountNo, ifsc) {

        await this.openBeneficiaryPage();

        await this.clickAddBeneficiary();

        await this.enterBeneficiaryName(name);

        await this.enterAccountNumber(accountNo);

        await this.enterIFSC(ifsc);

        await this.clickSave();

    }

}

module.exports = BeneficiaryPage;