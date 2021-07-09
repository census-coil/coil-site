const headers = [
  'our-work', 'happening-now', 'the-opportunity-project',
  'top-prize-challenge', 'enterprise-innovation-efforts', 
  'civic-digital-fellowship', 'our-products-and-toolkits',
  'creative-toolkits',
  'data-curation-hub',
  'design-thinking-toolkit',
  'topx-toolkit',
  'product-development-toolkit',
  'other-initiatives',
  'census-accelerate',
  'human-centered-design-training',
  'census-solutions-workshops',
  'work-with-us',
  'meet-the-team',
]

describe('Homepage test', () => {
  it('contains ids for all projects and section titles', () => {
    cy.visit('/')
    headers.forEach( header => cy.get(`#${header}`))
  })
})