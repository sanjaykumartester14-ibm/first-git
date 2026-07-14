const { expect } = require('@playwright/test');

class DashboardPage {

    constructor(page) {

        this.page = page;

        this.customerName = page.locator("//span[@id='customerName']");
        this.accountNumber = page.locator("//span[@id='accountNumber']");
        this.availableBalance = page.locator("//span[@id='availableBalance']");
        this.logoutButton = page.locator("//button[@id='logout']");
    }

    async verifyCustomerName(name) {

        await expect(this.customerName).toHaveText(name);

    }

    async verifyAccountNumber(accountNo) {

        await expect(this.accountNumber).toHaveText(accountNo);

    }

    async verifyAvailableBalance(balance) {

        await expect(this.availableBalance).toHaveText(balance);

    }

    async clickLogout() {

        await this.logoutButton.click();

    }

}

module.exports = DashboardPage;