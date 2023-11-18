let chai = require("chai")
let chaiHttp = require("chai-http")
let expect = chai.expect;

chai.use(chaiHttp)

// describe("Testing my rest api", () => {
//     it("Should return result status code as 200 for /", function (done) {
//         chai.request("http://localhost:5500").get("/")
//             .then(function (res) {
//                 expect(res).to.have.status(200);
//                 done();
//             })
//             .catch(function (err) {
//                 throw err;
//             })
//     })
//     it("Should return result status code as 200 for /movies", function (done) {
//         chai.request("http://localhost:5500").get("/movies")
//             .then(function (res) {
//                 expect(res).to.have.status(200);
//                 done();
//             })
//             .catch(function (err) {
//                 throw err;
//             })
//     })
//         .it("should fail", function (done) {
//             chai.request("http://localhost:5500").get("/movies")
//                 .then(function (res) {
//                     expect.fail(res).to.have.status(400);
//                     done();
//                 })
//                 .catch(function (err) {
//                     throw err;
//                 })


//         })
// })




describe("testing beforeEach", () => {
    beforeEach(function () {
        console.log("Before Each initialized")
    })
    it("test1", function () {
        console.log("success")
    })
    it("test2", function () {
        console.log("fail")
    })

})