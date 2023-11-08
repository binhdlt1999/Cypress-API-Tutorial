import {DEFAULT} from '../utils/Method'

describe('Handling async request in Cypress - just for single request', () => {

    it('should be able to wait until a request resolved', async () => {
        
        //-------------------------------------------------------------------------------
        
        // use await
        // let response = await cy.request({
        //     url: 'https://jsonplaceholder.typicode.com/posts',
        //     method: 'GET',
        // })
        // expect(response.status).to.eq(200)
        // expect(response.body.length).to.eq(100);
        
        // // asyn await just use for single request
        // // let deleteRes = await new Cypress.Promise((resolve, reject) => 
        // //     cy.request({
        // //         method: DEFAULT.delete,
        // //         url: "https://jsonplaceholder.typicode.com/posts/1"
        // //     }).then(val => resolve(val))
        // // )
        // // cy.log(JSON.stringify(deleteRes))

        //-------------------------------------------------------------------------------
        //-------------------------------------------------------------------------------

        // let url = 'https://jsonplaceholder.typicode.com/posts'
        // let url = Cypress.env("baseUrl")
        // let header = {
        //     'Content-type': 'application/json; charset=UTF-8',
        // }
        let createdPostBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }
        let updatedPostBody = {
            id: 1,
            title: 'foo updated',
            body: 'bar updated',
            userId: 3,
        }

        cy.createPost(createdPostBody).then(res => {
            cy.getPost((Number(res.body.id) - 1).toString()).then(res => {
                cy.putPost(res.body.id, updatedPostBody).then(res => {
                    let {status, body} = res
                    let {id, userId, title} = body
                    let resBody = body.body

                    // Verification
                    expect(status).to.eq(200, 'verifying Response header')
                    expect(id).to.eq(id, 'verifying id')
                    expect(userId).to.eq(updatedPostBody.userId, 'verifying userid')
                    expect(title).to.eq(updatedPostBody.title, 'verifying title')
                    expect(resBody).to.eq(updatedPostBody.body, 'verifying body')
                    cy.delPost(res.body.id).then(res => {
                        let {status, body} = res

                        // Verification
                        expect(status).to.eq(200, 'Verifying status')
                        expect(body).to.be.empty;
                    })
                })
            })
        })
        

    });
})
