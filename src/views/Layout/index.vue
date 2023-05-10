<script setup lang="ts">
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'

</script>

<template>
    <div>
        <!-- 二级路由出口 -->
        <LayoutFixed/>
        <LayoutNav/>
        <LayoutHeader/>
        <RouterView/>
        <LayoutFooter/>
    </div>
</template>

<style lang="less"></style>