import '../shared/lib/utils/other/object-assign.ts'
import 'es6-promise/auto'
import 'lazysizes'
import 'lazysizes/plugins/blur-up/ls.blur-up'


import Vue from 'vue'
import App from './App.vue'
import createRouter from './providers/router'
import createStore from './providers/store'

import './components'

import '@/shared/lib/directives'


const scrollLock = () => import(/* webpackChunkName: "chunks/utils/scroll-lock" */ 'scroll-lock')

scrollLock().then((response) => {
    Vue.prototype.$scrollLock = response.default
})

Vue.prototype.$os = getOs()

import device from '@/shared/lib/providers/device.ts'
import scrollPosition from '@/shared/lib/providers/scroll-position.ts'
import browsers from '@/shared/lib/providers/browsers.ts'
import getOs from '../shared/lib/getOs'

export default function createApp () {
    const router = createRouter()
    const store = createStore()
    const app = new Vue({
        name: 'App',
        router,
        store,
        mixins: [device, scrollPosition, browsers],
        provide: vm => ({
            $device: vm.device,
            $scroll: vm.scroll,
            $browsers: vm.browsers
        }),
        render: h => h(App)
    })
    return { app, router, store }
}
