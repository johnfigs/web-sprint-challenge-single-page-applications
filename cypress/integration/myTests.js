//writing tests here
describe('Lambda Eats', () => {
    beforeEach(() =>
    cy.visit('http://localhost:3000/pizza'))

    //grab name field
    it('check that nameInput elements exist', () => {
    nameInput().should('exist')
    toppingChicken().should('exist')
    })

    //check chicken topping checkbox exists
    it('check that chickenCheck elements exist', () => {
        toppingChicken().should('exist')
        })

    //check pineapple topping checkbox exists
    it('check that pineappleCheck elements exist', () => {
        toppingPineapple().should('exist')
        })

    it('testing name input', () => {
        nameInput().type('Johnathan')
    })
    it('testing select size', () => {
        pizzaSize().select('Small')
    })
    it('test to ensure submit btn exist', () => {
        submitButton().should('exist')
    })
    it('ensuring an order can be submitted', () => {
        nameInput().type('Johnathan')
        pizzaSize().select('Small')
        toppingChicken().check()
        toppingPineapple().check()
        submitButton().click()
    })
 })

    //ensuring Cypress is setup
    it('sanity check for making sure everything is setup',()=>{
        //check some assertions here
        expect(1+2).to.equal(3)     //strict
        expect(2+2).not.to.equal(5)
    })

    const nameInput = () => cy.get('input[name="name"]')
    const toppingChicken = () => cy.get('#chicken')
    const toppingPineapple = () => cy.get('#pineapple')
    const pizzaSize = () => cy.get('select')
    const submitButton = () => cy.get('button[id="order-button"]')