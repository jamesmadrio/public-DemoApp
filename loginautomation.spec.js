//loginautomation.spec.js
// @ts-check

//Rename test for auto login purpose
import { test , expect } from '@playwright/test';

//get the login credentials from logindata.json file
const logincred = require('../tests/logindata.json');

test('Login Automation', async ({ page }) => {
	//Go to the Demo App URL
	await page.goto(logincred.URL);
	//Auto fill in the user credentials such as Username and Password
  	await page.getByRole('textbox', { name: 'Username' }).fill(logincred.username);
  	await page.getByRole('textbox', { name: 'Password' }).fill(logincred.password);
	//Submit the user credentials
  	await page.getByRole('button', { name: 'Sign in' }).click();
});



