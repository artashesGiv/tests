// import '../src/shared/assets/scss/critical.scss'
// import '../src/shared/assets/scss/main.scss'
// import '../src/shared/assets/scss/animations.scss'
import createRouter from '../resources/app/providers/router'
import '../resources/app/styles/critical.scss'
import '../resources/app/styles/main.scss'

import Vue from 'vue'
import clickOutside from '@/shared/lib/directives/click-outside'
import lazysizesDirective from '@/shared/lib/directives/lazysizes'
import 'lazysizes'
import 'lazysizes/plugins/blur-up/ls.blur-up'
import { CardProject } from '@/shared/ui/CardProject'

Vue.directive('click-outside', clickOutside)
Vue.directive('lazysizes', lazysizesDirective)

import '../resources/app/components'
import RouterLink from './RouterLink.vue'
import { provideFunc } from './libs/stories-utils'

Vue.component('router-link', RouterLink)

export const decorators = [
    story => ({
        components: { story },
        router: createRouter(),
        ...provideFunc(),
        template: '<story />'
    })
]

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    },
    viewport: {
        viewports: {
            mobile: {
                name: 'Mobile 320px',
                type: 'mobile',
                styles: {
                    width: '320px',
                    height: '600px'
                }
            },
            tablet: {
                name: 'Tablet 650px',
                type: 'tablet',
                styles: {
                    width: '650px',
                    height: '600px'
                }
            },
            tabletLate: {
                name: 'Tablet Late 768px',
                type: 'tablet',
                styles: {
                    width: '768px',
                    height: '600px'
                }
            },
            desktop: {
                name: 'Desktop 1200px',
                type: 'desktop',
                styles: {
                    width: '1200px',
                    height: '600px'
                }
            }
        }
    }
}
