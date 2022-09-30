// @ts-ignore
import fetch from 'isomorphic-fetch'
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class SendForm extends Vue {
    loading = false
    send = false
    error = false

    sendForm = ({ data, url = '/order' }: {
        data: Record<string, unknown>;
        url?: string
    }): Promise<boolean> => new Promise((resolve, reject) => {
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((r: Response) => r.json())
            .then((response: Response & { status: string }) => {
                if (document) {
                    ;(document.activeElement as HTMLInputElement).blur()
                }

                if (response.status === 'ok') {
                    resolve(true)
                } else {
                    reject(new Error)
                }
            })
            .catch(() => {
                reject(new Error)
            })
    })
}
