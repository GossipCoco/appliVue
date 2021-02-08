<template>
    <div>
        <p>
        <!-- utilisez le composant router-link pour la navigation. -->
        <!-- spécifiez le lien en le passant à la prop `to` -->
        <!-- `<router-link>` sera rendu en tag `<a>` par défaut -->
        <router-link to="/foo">Aller à Foo</router-link>
        <router-link to="/bar">Aller à Bar</router-link>
        </p>
        <!-- balise pour le composant router-view -->
        <!-- le composant correspondant à la route sera rendu ici -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'TestRoutes'
}
</script>