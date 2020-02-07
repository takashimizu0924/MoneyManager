<template>
    <nav >
        <v-app-bar app flat class="light-blue darken-4" height="50">
            <v-app-bar-nav-icon class="white--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">
                <span class="font-weight-bold" >経営管理アプリ</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="grey lighten-3">
                <span class="text-capitalize">Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" app class="light-blue darken-4">
            <v-layout column align-center>
                <span class="white--text mt-5 font-weight-bold headline">DashBord</span>
                    <v-flex class="mt-8 mb-8">
                        <Popup />
                    </v-flex>
            </v-layout>
            <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                <v-icon class="white--text" left>{{ link.icon }}</v-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-7 mb-9 "></v-divider>
            <v-list-item v-for="link in links2" :key="link.text" router :to="link.route">
                <v-icon class="white--text" left>{{ link.icon }}</v-icon>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components:{ Popup },
    data(){
        return{
            drawer: false,
            links:[
                {icon:'mdi-border-outside',text:'ホーム',route:'/'},
                {icon:'mdi-folder-outline',text:'在庫一覧',route:'/stocklist'},
                {icon:'mdi-human-male',text:'Team',route:'/team'},
            ],
            links2:[
                {icon:'mdi-folder-outline',text:'売上',route:'/sales'},
                {icon:'mdi-human-male',text:'経費',route:'/team'},
                {icon:'mdi-border-outside',text:'取引先',route:'/'},
                {icon:'mdi-folder-outline',text:'書類',route:'/stocklist'},
            ]
        }
    }
}
</script>