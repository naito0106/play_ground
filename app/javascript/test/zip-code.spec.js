import { mount } from '@vue/test-utils';
import _zipCode from '../router-view/zip-code.vue';
import expect from 'expect';
import axios from 'axios';
import sinon from 'sinon';
import Promise from 'bluebird';
import Vue from 'vue/dist/vue.esm';

const zipCode = Vue.extend(_zipCode)

describe('zip-codeコンポーネント', () => {
  
  it('fetchAddress()で住所を取得する', (done) => {
      let address = '千代田区'
      
      let resolved = new Promise.resolve({
        data: address 
      })
      
      let stub = sinon.stub(axios, 'get').withArgs('https://api.zipaddress.net/', 
      {
            params: {
              zipcode: '1000001'
            }}).returns(resolved)
      
      const vm = new zipCode()
      vm.fetchAddress();
      
      resolved.then(() => {
        expect(vm.address).toEqual(address)
        done()
      }).catch(done);
      
  }),
  
  it('testForAddress()で住所を書き換える', () => {
    
    const wrapper = mount(zipCode)
    
    wrapper.vm.testForAddress();
    expect(wrapper.vm.$data.address).toEqual('TEST')
  })
})