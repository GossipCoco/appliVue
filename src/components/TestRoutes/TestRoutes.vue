<template>
    <div>
        <p>
        Test Routes
        <router-link to="/foo">Aller à Foo</router-link>
        <br>
        <router-link to="/bar">Aller à Bar</router-link>
        </p>
        
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'TestRoutes'
}
</script>