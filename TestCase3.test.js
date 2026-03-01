//TestCase3.test.js
//@ts-check

import { test, expect } from '@playwright/test';

//get the login credentials from logindata.json file
const logincred = require('../tests/logindata.json');

//Create a test case
test('Test Case 3', async ({ page }) => {
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
	//Verify the "In Progress" column exist
	if (await page.getByText('In Progress (1)Design system').isVisible()) {
		await page.getByText('In Progress (1)Design system').click();
	} else {
		throw new Error("The target object does not exist."); 
	}
	//Verify "Design system updates" is in the "In Progress" column
	if (await page.getByRole('heading', { name: 'Design system updates' }).isVisible()) {
		await page.getByRole('heading', { name: 'Design system updates' }).click();
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



