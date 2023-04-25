import NotFound from '../src/components/Not_Found.vue'

describe('<NotFound />', () => {
  it('renders', () => {
    cy.mount(NotFound)
  })
})