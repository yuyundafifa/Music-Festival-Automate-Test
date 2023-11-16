/// <reference types="cypress" />

describe("Festyful Landing Page", () => {
    beforeEach(() => {
        cy.visit('https://www.festyful.com/');
    })

    it("Verify Festyful dropdown menu", () => {
        cy.get('#__next')
        .get('div')
        .find('#sub-menu-prelaunch-header').click({ force: true })
    })

    it("Verify Apply button can be clicked and redirect to the apply page", () => {
        cy.get('#__next')
        .get('div')
        .contains('APPLY').click()
        cy.url('https://www.festyful.com/festyful-pro')
    })

    it("Verify hamburger button can be clicked and showing hidden menu", () => {
        cy.get('span')
        .get('img')
        .get('[alt="menu"]').should('be.visible').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a')
        .invoke('attr', 'href')
        .should('eq','/')
    })

    it("Verify festyful logo can be clicked, and will stayed on the landing page when it's clicked", () => {
        cy.get('a')
        .get('span')
        .get('[alt="Festyful logo"]').should('be.visible').first().click()
        cy.url('https://www.festyful.com/')
    })

    it('Verify guides button can be clicked and redirect to the guides page', () => {
        cy.get('#__next')
        .get('div')
        .contains('Guides').click()
        cy.url('https://www.festyful.com/guides')
    })

    it('Verify festyful dropdown menu and clicking Vybeful', () => {
        cy.get('#sub-menu-prelaunch-header').trigger('mouseover')
        cy.get('div')
        .get('a').should('be.visible')
        .contains('Vybeful').click( {force: true} )
        cy.url('https://www.vybeful.com/')
    })

    it('Verify cocktayl in the festyful dropdown menu', () => {
        cy.get('#sub-menu-prelaunch-header').trigger('mouseover')
        cy.get('div')
        .get('a').should('be.visible')
        .contains('Cocktayl').click({ force: true})
        cy.url('https://www.cocktayl.co/')
    })

    it('Verify rooftopclub in the festyful dropdown menu', () => {
        cy.get('#sub-menu-prelaunch-header').trigger('mouseover')
        cy.get('div')
        .get('a').should('be.visible')
        .contains('RooftopClub').click({ force: true})
        cy.url('https://www.rooftopclub.co/')
    })

    it('Verify spaclub in the festyful dropdown menu', () => {
        cy.get('#sub-menu-prelaunch-header').trigger('mouseover')
        cy.get('div')
        .get('a').should('be.visible')
        .contains('SpaClub').click({ force: true})
        cy.url('https://www.spaclub.co/')
    })

    it('Verify beachful in the festyful dropdown menu', () => {
        cy.get('#sub-menu-prelaunch-header').trigger('mouseover')
        cy.get('div')
        .get('a').should('be.visible')
        .contains('Beachful').click({ force: true})
        cy.url('https://www.beachful.co/')
    })

    it('Verify home in the festyful dropdown on the hamburger button', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('Home').click()
        .invoke('attr', 'href')
        .should('eq','/')
        cy.url('https://www.festyful.com/')
    })

    it('Verify charts in the festyful dropdown on the hamburger button', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('Charts').click()
        .invoke('attr', 'href')
        .should('eq', '/charts/festivals')
        cy.url('https://www.festyful.com/charts/festivals?id=53&page=1')
    })

    it('Verify playlist in the festyful dropdown on the hamburger button can be clicked and redirect to the playlist page', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('Playlist').click()
        .invoke('attr', 'href')
        .should('eq', '/playlist')
        cy.url('https://www.festyful.com/playlist').should('eq', 'https://www.festyful.com/playlist')
    })

    it('Verify guides in the festyful dropdown on the hamburger button can be clicked and redirect to the guides page', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('Guides').click()
        .invoke('attr', 'href')
        .should('eq', '/guides')
        cy.url('https://www.festyful.com/guides').should('eq', 'https://www.festyful.com/guides')
    })

    it('Verify apply on the festyful inside the hamburger button can be clicked and redirect to the apply page', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('Apply').click()
        .invoke('attr', 'href')
        .should('eq', '/festyful-pro')
        cy.url('https://www.festyful.com/festyful-pro').should('eq', 'https://www.festyful.com/festyful-pro')
    })

    it('Verify about on the festyful inside the hamburger button can be clicked and redirect to the apply page', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('About').click()
        .invoke('attr', 'href')
        .should('eq', '/about')
        cy.url('https://www.festyful.com/about').should('eq', 'https://www.festyful.com/about')
    })

    it('Verify contact on the festyful inside the hamburger button can be clicked and redirect to the apply page', () => {
        cy.get('div')
        .get('span')
        .get('img')
        .get('[alt="menu"]').first().click()
        cy.get('div')
        .get('.pl-8')
        .get('a.block.text-base.text-white.font-regular.uppercase.py-3').should('be.visible')
        .contains('Contact').click()
        .invoke('attr', 'href')
        .should('eq', '/contact')
        cy.url('https://www.festyful.com/contact').should('eq', 'https://www.festyful.com/contact')
    })
    
    it('Verify search section by typing search input and clicking the buttons', () => {
        cy.get('div')
        .get('#home')
        //.get('button.flex.flex-row.justify-center.items-center.bg-gradient-to-bl.from-gradient3.via-gradient2.to-gradient1.h-50px.w-100px.-mr-1.rounded-full.cursor-pointer').click()
        .get('form[action="/explore/festivals"]').submit()
    })

    it('Verify search input text and clicking the search button', () => {
        cy.get('div')
        .get('#home').last()
        .get('input[name="search"]').last().type('shankra')
        cy.get('form[action="/explore/festivals"]').submit()
        cy.url('https://www.festyful.com/explore/festivals?search=shankra')
    })

    it('Verify explore button on the search section', () => {
        cy.get('div')
        .get('#home').last()
        .get('form[action="/explore/festivals"]')
        .get('div.flex.flex-row.justify-center.items-center.bg-gradient-to-bl.from-gradient3.via-gradient2.to-gradient1.h-50px.-mr-1.w-100px.w-full.rounded-full.cursor-pointer').last().click()
    })

    it('Verify festivals card can be clicked and redirect to the explore page (festivals tab)', () => {
        cy.get('div')
        .get('#home').last()
        .get('div.w-full.h-full.flex.flex-1.undefined')
        .get('.wrapper')
        .get('.flex')
        .get('.relative')
        .get('div.flex.flex-row.items-center')
        .get('a[href="/explore/festivals"]').last().click()
        cy.url('https://www.festyful.com/explore/festivals')
    })

    it('Verify artists card can be clicked and redirect to the explore page (artists tab', () => {
        cy.get('div')
        .get('#home').last()
        .get('div.w-full.h-full.flex.flex-1.undefined')
        .get('.wrapper')
        .get('.flex')
        .get('.relative')
        .get('div.flex.flex-row.items-center')
        .get('a[href="/explore/artists"]').last().click()
        cy.url('https://www.festyful.com/explore/artists')
    })

    it('Verify discover hyperlink in the second section', () => {
        cy.get('#__next')
        .get('div.bg-black').last()
        .get('a[href="/explore/festivals"]').contains('Discover').click()
        cy.url('https://www.festyful.com/explore/festivals')
    })

    it('Verify arrow-right button on the festivals card section', () => {
        cy.get('#__next')
        .get('div.bg-black').last()
        .get('div.mx-auto')
        .get('div.absolute.z-10')
        .get('img[src="/icons/ic_arrow_right.png').click().wait(60)
        .get('img[src="/icons/ic_arrow_left.png').click()
    })

    it('Verify the festival card is clickable and redirect to its page', () => {
        cy.get('a[href*="/festivals/shankra-festival-sri-lanka-2024/3545/about"]').click({
            force: true
        })
        cy.url('https://www.festyful.com/festivals/shankra-festival-sri-lanka-2024/3545/about')

        //const lol = cy.get('a[href*="/festivals"]').get()
        //cy.log("🚀 ~ file: festyful-landingpage.cy.js:253 ~ it.only ~ lol:", lol)
    })

    it.only('Verify discover on the artist card is clickable and redirect to the explore artist page', () => {
        cy.get('a[href="/explore/artists"]')
    })


});