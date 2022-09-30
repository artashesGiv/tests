import Vue from 'vue'
import {DeviceProviderValue} from '@/shared/lib/providers/device'
import {ScrollPositionProviderValue} from "@/shared/lib/providers/scroll-position";
import { BrowserProviderValue } from '@/shared/lib/providers/browsers'

declare module '*.vue' {
    // @ts-ignore
    export default Vue
}

declare module 'vue/types/vue' {


    interface Vue {
        $device: DeviceProviderValue
        $browsers: BrowserProviderValue
        $scroll: ScrollPositionProviderValue
        $scrollLock: {
            disablePageScroll: () => void
            enablePageScroll: () => void
            addFillGapTarget: (element: HTMLElement) => void
            setFillGapMethod: (method: 'margin' | 'padding') => void
        }
        $os: string
        prototype: {
            $scrollLock: {
                disablePageScroll: () => void
                enablePageScroll: () => void
                addFillGapTarget: (element: HTMLElement) => void
                setFillGapMethod: (method: 'margin' | 'padding') => void
            }
            $os: string
        }
    }
}

