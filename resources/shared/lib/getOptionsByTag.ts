export type TagPropsType = 'div' | 'a' | 'button' | 'label' | 'strong' | 'router-link'

export default function (tag: TagPropsType, href?: string): PartialRecord<TagPropsType, PartialRecord<string, unknown>> {
    const optionsMap: PartialRecord<TagPropsType, PartialRecord<string, unknown>> = {
        button: {
            role: 'button',
            type: 'button'
        },
        a: {
            href,
            // rel: 'noopener noreferrer',
            // target: '_blank'
        },
        'router-link': {
            to: href
        }
    }

    return optionsMap[tag] as PartialRecord<TagPropsType, PartialRecord<string, unknown>>
}
