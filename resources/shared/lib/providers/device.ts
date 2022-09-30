import { Component, Mixins } from 'vue-property-decorator'

import Resize from '@/shared/lib/mixins/utility/resize'

const device = {
    size: {
        maxMobile: false,
        maxTabletLate: false,
        maxTablet: false,
        tablet: false,
        tabletLate: false,
        desktop: false
    },
    type: {
        desktop: false,
        mobile: false
    }
}

export type DeviceProviderValue = typeof device

@Component
export default class DeviceProvider extends Mixins(Resize) {

    device = device

    isMobile (): boolean {
        return Boolean(navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i))
    }

    beforeMount (): void {
        this.$nextTick(() => {
            this.setSize()
            this.setType()
            this.addResizeWidthEvent(this.setSize)
        })
    }

    beforeDestroy (): void {
        this.removeResizeWidthEvent()
    }

    setSize (): void {
        const width = window.innerWidth

        const breakpoints = {
            tablet: 650,
            tabletLate: 768,
            desktop: 1200
        }

        this.device.size.maxMobile = width < breakpoints.tablet
        this.device.size.maxTabletLate = width < breakpoints.tabletLate
        this.device.size.maxTablet= width < breakpoints.tablet
        this.device.size.tablet = width >= breakpoints.tablet
        this.device.size.tabletLate = width >= breakpoints.tabletLate
        this.device.size.desktop = width >= breakpoints.desktop
    }

    setType (): void {
        this.device.type.desktop = !this.isMobile()
        this.device.type.mobile = this.isMobile()
    }
}
