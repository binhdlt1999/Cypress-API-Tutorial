describe('Test PUT request', () => {

    it('should be able to send PUT request and verify the response', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/1'

        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let reqBody = {
            id: 1,
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestObject = {
            url: url,
            method: 'PUT',
            body: reqBody,
            headers: header,
        }
        
        cy.request(requestObject).then(res => {
            let {status, body} = res
            
            // cy.log(JSON.stringify(res.body))
            let {title, userId, id} = body
            let responseBody = body.body
            
            // Verification
            expect(status).to.eq(200, 'verifying Response header')
            expect(id).to.eq(reqBody.id, 'verifying id')
            expect(userId).to.eq(reqBody.userId, 'verifying userid')
            expect(title).to.eq(reqBody.title, 'verifying title')
            expect(responseBody).to.eq(reqBody.body, 'verifying body')

        })
    });

    afterEach(() => {
        // Xóa hết các kết quả (catch) sau mỗi bài kiểm tra
        cy.clearLocalStorage();
        cy.clearCookies();
    });

})
