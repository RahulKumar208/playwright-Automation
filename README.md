**Playwright Project**
This repository contains a simple Playwright project for automating browser actions and testing web applications. The code includes scripts for navigating websites, clicking elements, filling forms, and verifying UI elements.

**Prerequisites**
Before you begin, ensure you have the following installed:

- Node.js (version 14 or later): Download here
- npm (Node Package Manager): Comes with Node.js
- Git: For version control and repository management Download here
  
**Installation**
**Clone the Repository:**
git clone https://github.com/your-username/playwright-project.git
cd playwright-project

**Install Dependencies:**
Run the following command to install the necessary Node.js packages, including Playwright:
npm install

**Run the Tests:**
Execute the scripts using Node.js:
node <script-name>.js

Or, if using Playwright's test runner:
npx playwright test

**Project Overview**
- **Script 1:** Automates navigation and interactions on the Playwright website, including clicking headings, links, and buttons.
- **Script 2:** Tests the login functionality of the DemoBlaze website by filling in credentials and verifying successful login.
  
**Example Usage**
Run the Playwright Navigation Script:
node playwright-script.js

Run the DemoBlaze Login Test:
npx playwright test demoblaze-login-test.js

**Key Features**
- Automated Browser Control: Scripts interact with web elements like buttons, links, and input fields.
- Assertions: Validates UI elements' presence and visibility using Playwright's built-in assertions.
