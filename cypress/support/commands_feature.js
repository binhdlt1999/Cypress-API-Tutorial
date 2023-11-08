let header = {
    'Content-type': 'application/json; charset=UTF-8',
}

Cypress.Commands.add('getPost', postNum => {
    cy.request({
        url: Cypress.env("baseUrl") + "/" + postNum,
        method: "GET",
    })
})

Cypress.Commands.add('putPost', (postNum, postBody) => {
    cy.request({
        url: Cypress.env("baseUrl") + "/" + postNum,
        method: "PUT",
        headers: header,
        body: postBody,
    })
})

Cypress.Commands.add('delPost', postNum => {
    cy.request({
        url: Cypress.env("baseUrl") + "/" + postNum,
        method: "DELETE",
    })
})