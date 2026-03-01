//TestCase6.test.js
// @ts-check

import { test, expect } from '@playwright/test';

//get the login credentials from logindata.json file
const logincred = require('../tests/logindata.json');

//Create a test case
test('Test Case 6', async ({ page }) => {
	//Go to the Demo App URL
	await page.goto(logincred.URL);
	//Auto fill in the user credentials such as Username and Password
  	await page.getByRole('textbox', { name: 'Username' }).fill(logincred.username);
  	await page.getByRole('textbox', { name: 'Password' }).fill(logincred.password);
	//Submit the user credentials
  	await page.getByRole('button', { name: 'Sign in' }).click();
	//Navigate to "Mobile Application"
	if (await page.getByRole('button', { name: 'Mobile Application Native' }).isVisible()) {
		await page.getByRole('button', { name: 'Mobile Application Native' }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "Done" column exist
	if (await page.getByText('Done (1)App icon designCreate').isVisible()) {
		await page.getByText('Done (1)App icon designCreate').click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "App icon design" is in the "Done" column
	if (await page.getByRole('heading', { name: 'App icon design' }).isVisible()) {
		await page.getByRole('heading', { name: 'App icon design' }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Confirm tag: "Design"
	if (await page.getByText('Design', { exact: true }).isVisible()) {
		await page.getByText('Design', { exact: true }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
});



