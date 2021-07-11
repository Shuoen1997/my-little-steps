Feature("Add Step Z Entry")

Scenario("Make sure when I add new step Z, title and desc are saved", ({I}) => {
    I.amOnPage('/')
    I.click('#button-new-main-step')
    I.fillField('#editor-title > div > div', 'Hello')
    I.fillField('#editor-desc > div > div',
        "World")
    I.click('#button-save-main-step')
    I.see('Hello', '#readonly-editor-title-in-list > div > p')
    I.see('World', '#readonly-editor-desc-in-list > div > p')
    I.click('#entry-list > div > div > div > div')
    I.see('Hello', '#readonly-editor-title > div > p')
    I.see('World', '#readonly-editor-desc > div > p')
    I.dontSeeElement('#button-save-main-step')
})
