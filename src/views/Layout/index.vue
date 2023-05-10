<script setup lang="ts">

import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from '@/views/Layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/Layout/components/LayoutFooter.vue'
import LayoutFixed from '@/views/Layout/components/LayoutFixed.vue'

// 触发获取导航列表的action

import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<template>
    <div>
        <LayoutFixed />
        <LayoutNav />
        <LayoutHeader />
        <!-- 二级路由出口 -->
        <RouterView />
        <!-- <RouterView :key="$route.fullPath" /> -->
        <LayoutFooter />
    </div>
</template>

<style lang="less"></style>