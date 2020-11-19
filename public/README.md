# Backbase Front End Assignment: Make A Transaction

## Assignment Purpose

The purpose of this test is to show off your level of front-end development skills and to show your knowledge of modern front-end frameworks and practices.

## Brief Description

For this assignment, you need to develop a single page application according to the provided design with the functionality of transferring money and showing the past transactions in a historical transactions list.

## Functional Requirements

### Transfer Money

As a user, I should be able to transfer money using the Transfer Money form as shown in the UI Design.

---

As a user I should be able to:

1. Fill in the "TO ACCOUNT" and "AMOUNT" fields of the form. 
    - Assume that the "FROM ACCOUNT" field is pre-filled with the data shown in the UI Design and is DISABLED.
2. Press "Submit" and preview the entered data.
3. Press "Transfer" on the preview screen. 
    - When the transfer is pressed the new transfer should appear at the top of the transactions list, and the balance in the "FROM ACCOUNT" field should have decreased by the amount of the transfer.

Non-functional requirements:

- Reset the form to its initial state after the transfer has been completed successfully.
- A user shouldn't be able to overdraft their account beyond a balance of $ -500.00.

### Transaction History

As a user, I should be able to view recent transactions in an ordered list.

As a user, I should be able to search my recent transactions by typing a keyword in the search field.

As a user, I should be able to sort by recent transactions by Date, Amount and Beneficiary by clicking the corresponding sorting action.

---

As a user I should be able to:

1. View a list of my recent transactions.
    - Mock data is provided in the "mock" folder.
2. See the transactions list updated with the new transaction when a new money transfer has taken place.
3. Filter the transactions list by typing a keyword in the Search field.
    - The transactions list should update immediately at every keystroke.
4. Clear the filter by clicking an 'x' icon in the Search field.
4. Sort the transactions list by Date, Beneficiary and Amount.

Non-functional requirements (bonus points):

- The Sorting order (ascending/descending) should be persistent across all sorting options; i.e. If you are sorting by beneficiary ASC and switch the sorting option to Amount, the sorting order should stay ASC
- i18n: add multi-language support
- a11y: WCAG level A
- Share your solution on the remote repository; i.e. Github, Bitbucket, GitLab...
- deploy to a static hosting platform of your choice; i.e. Netlify, Firebase, Vercel, Github pages or Heroku
- decent test coverage


## Technology Restrictions

### Read Carefully!

- Architect your application any way you want, focus on clean, reusable code. Your code should be DRY, with a focus on front-end best practices.
- We are open to seeing applications written in any modern framework, but we prefer the latest Angular. Explain why you've chosen a different framework in the README.
- You can use any CSS framework, but we prefer if you don't.
- Responsiveness is required in this assignment.
- Create a "README.md" file explaining:
    - how to set up and run/test the app
    - choice of the framework (if not Angular)
    - application structure

## Helpful Information

- The design to be developed is provided as a PNG for quick reference in the "design" folder.
- Images and icons have been provided in the assets folder. Transaction images are provided as base64 images in the transaction JSON.
- The font for the UI Design can be found on Google fonts: https://fonts.google.com/specimen/Kanit


## Good luck!

... and show us what you got!
