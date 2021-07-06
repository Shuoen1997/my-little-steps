// Imports
import EntryList from '../../components/EntryList'
import Vuetify from 'vuetify'

// Utilities
import {createLocalVue, mount} from '@vue/test-utils'

describe('EntryList.vue', () => {
    // DO NOT use Vuetify on the localInstance
    // This is bootstrapped in the jest setup
    // file located in ./tests/setup.js
    // localVue.use(Vuetify)


    const localVue = createLocalVue()

    let vuetify

    beforeEach(() => {
        vuetify = new Vuetify()
    })

    it('should contain the new main step button', () => {
        const wrapper = mount(EntryList, {
            localVue,
            vuetify
        })
        const buttonNewMainStep = wrapper.find('#button-new-main-step')
        expect(buttonNewMainStep.text()).toBe('NEW STEP Z')
    })

    it('should trigger edit mode event when new main step button is clicked', () => {
        const wrapper = mount(EntryList, {
            localVue,
            vuetify
        })
        const event = jest.fn()
        wrapper.vm.$on('editModeIsOn', event)
        expect(event).toHaveBeenCalledTimes(0)
        const buttonNewMainStep = wrapper.find('#button-new-main-step')
        buttonNewMainStep.trigger('click')
        expect(event).toHaveBeenCalledTimes(1)

    })
})
