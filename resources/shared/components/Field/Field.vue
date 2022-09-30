<template lang="pug">
    .b-field(
        :style="fieldStyle"
    )
        .__cell(
            v-for="item in cellContent"
            :style="{background: item.select ? 'blue' : 'white'}"
            v-on:click="select(item.id)"
        ) {{item.value}}
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

    values = ['1', '2', '3', '4']
    fieldStyle = {
        maxWidth: `${this.x! * 40}px`,
    }
    content = []

    getCellContent() {
        this.content = new Array(this.x! * this.y!).fill({id: 1})
            .map((item, index) => ({
                id: index + 1,
                value: this.values[this.generateRandomValue(this.values)],
                select: false
            }))
    }

    generateRandomValue(array: string[]) {
        return Math.floor(Math.random() * array.length)
    }

    mounted() {
        this.getCellContent()
    }

}
</script>
