//TestCase5.test.js
// @ts-check

import { test, expect } from '@playwright/test';

//get the login credentials from logindata.json file
const logincred = require('../tests/logindata.json');

//Create a test case
test('Test Case 5', async ({ page }) => {
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
	//Verify "In Progress" column exist
	if (await page.getByText('In Progress (1)Offline').isVisible()) {
		await page.getByText('In Progress (1)Offline').click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "Offline mode" is in the "In Progress" column
	if (await page.getByRole('heading', { name: 'Offline mode' }).isVisible()) {
		await page.getByRole('heading', { name: 'Offline mode' }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Confirm tags: "Feature" & "High Priority"
	if (await page.getByText('Feature').nth(1).isVisible()) {
		await page.getByText('Feature').nth(1).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	if (await page.getByText('High Priority').isVisible()) {
		await page.getByText('High Priority').click();
	} else {
		throw new Error("The target object does not exist."); 
	}
});


