describe('Test POST request', () => {

    it('should be able to send POST request and verify the response', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts'

        let header = {
            'Content-type': 'application/json; charset=UTF-8',
        }

        let requestBody = {
            title: 'foo',
            body: 'bar',
            userId: 1,
        }

        let requestObject = {
            url: url,
            method: 'POST',
            body: requestBody,
            headers: header,
        }
        
        cy.request(requestObject).then(res => {
            let {status, body} = res
            expect(status).to.eq(201, 'Status is not 201')

            // cy.log(JSON.stringify(res))
            let {title, userId, id} = body
            let responseBody = body.body
            
            // Verification
            expect(id).to.eq(101, 'id is not correct')
            expect(userId).to.eq(requestBody.userId, 'userid is not correct')
            expect(title).to.eq(requestBody.title, 'title is not correct')
            expect(responseBody).to.eq(requestBody.body, 'body is not correct')

        })
    });

    afterEach(() => {
        // Xóa hết các kết quả (catch) sau mỗi bài kiểm tra
        cy.clearLocalStorage();
        cy.clearCookies();
    });

})

