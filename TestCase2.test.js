//TestCase2.test.js
// @ts-check

import { test, expect } from '@playwright/test';

//get the login credentials from logindata.json file
const logincred = require('../tests/logindata.json');

//Create a test case
test('Test Case 2', async ({ page }) => {
	//Go to the Demo App URL
	await page.goto(logincred.URL);
	//Auto fill in the user credentials such as Username and Password
  	await page.getByRole('textbox', { name: 'Username' }).fill(logincred.username);
  	await page.getByRole('textbox', { name: 'Password' }).fill(logincred.password);
	//Submit the user credentials
  	await page.getByRole('button', { name: 'Sign in' }).click();
	//Navigate to "Web Application"
	if (await page.getByRole('button', { name: 'Web Application Main web' }).isVisible()) {
		await page.getByRole('button', { name: 'Web Application Main web' }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "To Do" column exist
	if (await page.getByText('To Do (2)Implement user').isVisible()) {
		await page.getByText('To Do (2)Implement user').click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "Fix navigation bug" is in the "To Do" column
	if (await page.getByRole('heading', { name: 'Fix navigation bug' }).isVisible()) {
		await page.getByRole('heading', { name: 'Fix navigation bug' }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Confirm tag: "Bug"
	if (await page.getByText('Bug', { exact: true }).isVisible()) {
		await page.getByText('Bug', { exact: true }).click();
	} else {
		throw new Error("The target object does not exist."); 
	}
});


