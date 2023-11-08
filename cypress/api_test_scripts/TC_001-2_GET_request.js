describe('Test GET request', () => {

    beforeEach(() => {
        // cy.visit('/');
    });

    it('should be able to send GET request', () => {
        cy.request({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'GET',
            
        }).then(res => {
            let {status, body} = res
            expect(status).to.eq(200)
            expect(body).to.have.lengthOf(100);
            expect(body.length).to.eq(100);

            // Get random element from array object
            let randomIndex = Math.floor(Math.random() * body.length)
            let randomObject = body[randomIndex]
            
            // Verification
            verifyNotEmpty('userID', randomObject.userId)
            verifyNotEmpty('ID', randomObject.id)
            verifyNotEmpty('title', randomObject.title)
            verifyNotEmpty('body', randomObject.body)
        })
    });

    afterEach(() => {
        // Xóa hết các kết quả (catch) sau mỗi bài kiểm tra
        cy.clearLocalStorage();
        cy.clearCookies();
    });

})

let verifyNotEmpty = (name, data) => {
    if (!data) {
        expect(true).to.eq(false, `${name} data is empty`)
    }
}