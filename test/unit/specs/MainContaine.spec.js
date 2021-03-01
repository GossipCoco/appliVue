import Vue from 'vue'
import MainContain from '@/components/MainContain'

describe('MainContain.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainContain)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue MainContain.js App')
  })
})