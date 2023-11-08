import {DEFAULT} from '../utils/Method'

describe('Test DELETE request', () => {

    it('should be able to send DELETE request', () => {
        let url = 'https://jsonplaceholder.typicode.com/posts/1'

        let requestObject = {
            url: url,
            method: DEFAULT.delete,
        }
        
        cy.request(requestObject).then(res => {
            
            // cy.log(JSON.stringify(res))
            let {status, body} = res
            
            // Verification
            expect(status).to.eq(200, 'Verifying status')
            expect(body).to.be.empty;

        })
    });

    afterEach(() => {
        // Xóa hết các kết quả (catch) sau mỗi bài kiểm tra
        cy.clearLocalStorage();
        cy.clearCookies();
    });

})
