//writing tests here
describe('Lambda Eats', () => {
    beforeEach(() =>
    cy.visit('http://localhost:3000/pizza'))

    //grab name field
    it('check that elements exist', () => {
    nameInput().should('exist')
    })

    it('testing name input', () => {
        nameInput().type('Johnathan')
    })
 })

    //ensuring Cypress is setup
    it('sanity check for making sure everything is setup',()=>{
        //check some assertions here
        expect(1+2).to.equal(3)     //strict
        expect(2+2).not.to.equal(5)
    })

    const nameInput = () => cy.get('input[name="name"]')
    const toppingCheck = () => cy.get()