import { mount } from '@vue/test-utils'
import zipCode from '../router-view/zip-code.vue'
import expect from 'expect'

describe('Input', () => {
  
  
  it('test', () => {
    let wrapper = mount(zipCode)
    expect(wrapper.vm.address).toBe('')
  })
})