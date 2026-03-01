//TestCase4.test.js
// @ts-check

import { test, expect } from '@playwright/test';

//get the login credentials from logindata.json file
const logincred = require('../tests/logindata.json');

//Create a test case
test('Test Case 4', async ({ page }) => {
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
	//Verify "To Do" column exist
	if (await page.getByText('To Do (1)Push notification').isVisible()) {
		await page.getByText('To Do (1)Push notification').click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "Push notification system" is in the "To Do" column
	if (await page.getByRole('heading', { name: 'Push notification system' }).isVisible()) {
		await page.getByRole('heading', { name: 'Push notification system' }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Confirm tag: "Feature"
	if (await page.getByText('Feature').first().isVisible()) {
		await page.getByText('Feature').first().click();
	} else {
		throw new Error("The target object does not exist."); 
	}	
});


