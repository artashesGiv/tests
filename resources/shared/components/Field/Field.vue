<template lang="pug">
    .b-field(
        :style="fieldStyle"
    )
        .__cell(
            v-for="item in cellContent"
        ) {{item.id}}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

export type FieldProps = {
    xCount?: number
    yCount?: number
}

@Component
export default class Field extends Vue {
    @Prop({default: 10}) x!: FieldProps['xCount']
    @Prop({default: 5}) y!: FieldProps['yCount']

    fieldStyle = {
        maxWidth: `${this.x! * 40}px`,
    }

    get cellContent() {
        let array = new Array(this.x! * this.y!).fill({id: 1})

        array = array.map((item, index) => ({
            id: index + 1,
        }))

        return array
    }

}
</script>
