<template>
    <!-- <v-app class="grey lighten-4"> -->
        <v-container>
            <v-layout>
                <v-row >
                    <v-col cols="8" class="grey lighten-3 ml-10">
                        <h2 class="mb-10 mt-4">総売上</h2>
                        <v-list-item v-for="list in lists" :key="list.title">
                            <v-list-item-content>
                                <v-list-item-title class="mb-5 mt-3">{{ list.title }}</v-list-item-title>
                                <v-list-item-title class="mb-3 mt-3 text-right">{{ list.dataname }}</v-list-item-title>
                                <v-divider></v-divider>
                            </v-list-item-content>
                        </v-list-item>
                    </v-col>
                </v-row>
                <v-row justify="center">
                    <v-col cols="9" md="10">
                        <sales-chart />
                    </v-col>
                </v-row>
            </v-layout>
        </v-container>
    <!-- </v-app> -->
</template>




  <script>
 import SalesChart from './SalesChart.vue'
//  import axios from 'axios'

 export default {
     components:{ SalesChart },
     data(){
         return{
             lists:[
                 {title:'日次売上',dataname:'1000円'},
                 {title:'週次売上',dataname:'100000円'},
                 {title:'月次売上',dataname:'1000000円'},
                 {title:'年次売上',dataname:'10000000円'},
             ]
         }
     },
     
 }
 </script>