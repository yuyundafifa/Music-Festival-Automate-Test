describe('Discover Landing Page', () => {
  before(() => {
    cy.visit('https://www.soundclub.com/')
  })

  it('Contain logo', () => {
    cy.get('img[alt="soundclub logo"]')
  })

  it('Has search input', () => {
    cy.find('input[name="search"]')
  })

  it('Has venues, festivals, and artist title', () => {
    cy.contains('Venues').should('have.class', 'text-2xl')
    cy.contains('Festivals').should('have.class', 'text-2xl')
    cy.contains('Artists').should('have.class', 'text-2xl')
  })

// SEMANGAT MIMI UYUUUN <3 :****

  it('Has explore venues, festivals, and artist link', () => {
    cy.get('a[href="/explore/venues"]')
    cy.get('a[href="/explore/festivals"]')
    cy.get('a[href="/explore/artists"]')
  })
})
