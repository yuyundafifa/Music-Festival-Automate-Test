// Cypress.Commands.add('clickAndHandleException', (selector) => {
//   cy.get(selector).click().then(() => {
//     // Perform actions after the element is clicked
//   }).catch((error) => {
//     // Handle the error, e.g., log it
//     cy.log(`Caught an error: ${error}`);
//   });
// });

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})