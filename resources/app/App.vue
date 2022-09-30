<template lang="pug">
    .b-app(  id="app" )
        transition(
            name="fade-page"
            mode="out-in"
        )
            .__body(
            )
                main.__content
                    transition(
                        name="fade-page"
                        mode="out-in"
                    )
                        router-view(
                            :key="$route.name"
                        )
</template>

<script lang="ts">
import {Component, Mixins} from 'vue-property-decorator'
import MetaTitle from '@/shared/lib/mixins/utility/title'

@Component
export default class Root extends Mixins(MetaTitle) {

}

</script>

<style lang="scss">
@import './styles/critical';
@import './styles/main';
</style>
