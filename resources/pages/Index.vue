<template lang="pug">
    field-component
</template>

<script>

import { Component, Vue } from 'vue-property-decorator'
import Field from '@/shared/components/Field/Field'

@Component({
    components: {
        'field-component': Field
    }
})
export default class Index extends Vue {

}
</script>

