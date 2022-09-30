import { Field, FieldProps } from '@/Field'

export default {
    title: 'Field',
    component: Field,
    argTypes: {},
}

const Template = (args: FieldProps) => ({
    props: Object.keys(args),
    components: {Field},
    methods: {},
    template: '<Field v-bind="$props"/>',
})

export const Default = Template.bind({})
// @ts-ignore
Default.args = {}
