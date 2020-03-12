<template>
  <v-data-table
    :headers="headers"
    :items="datalists"
    :items-per-page="5"
    class="elevation-1"
  ><template slot="items" slot-scope="props">
    <td class="text-xs-center">{{ props.item.itemname }}</td>
    <td class="text-xs-center">{{ props.item.itemquantity }}</td>
    <td class="text-xs-center">{{ props.item.itemstockyard }}</td>
    </template>
  </v-data-table>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
          datalists:[],

          headers: [
          {
            text: '商品名',
            align: 'left',
            sortable: false,
            value: 'itemname',
          },
          { text: '数量', value: 'itemquantity' },
          { text: '保管場所', value: 'itemstockyard' },
          { text: '登録日', value: 'carbs' },
          { text: '更新日', value: 'protein' },
          { text: '登録者', value: 'iron' },
        ],
        itemlists: [
          {
            name: '200Vコンセント',
            calories: 5,
            fat: '新栄倉庫',
            carbs: '2020年1月20日',
            protein: '2020年1月22日',
            iron: '清水',
          },
          {
            name: '100Vコンセント',
            calories: 5,
            fat: '新栄倉庫',
            carbs: '2020年1月20日',
            protein: '2020年1月22日',
            iron: '清水',
          },
          {
            name: '200Vコンセント',
            calories: 5,
            fat: '新栄倉庫',
            carbs: '2020年1月20日',
            protein: '2020年1月22日',
            iron: '清水',
          },
          {
            name: '200Vコンセント',
            calories: 5,
            fat: '新栄倉庫',
            carbs: '2020年1月20日',
            protein: '2020年1月22日',
            iron: '清水',
          },
          {
            name: '200Vコンセント',
            calories: 5,
            fat: '新栄倉庫',
            carbs: '2020年1月20日',
            protein: '2020年1月22日',
            iron: '清水',
          },
          {
            name: '200Vコンセント',
            calories: 5,
            fat: '新栄倉庫',
            carbs: '2020年1月20日',
            protein: '2020年1月22日',
            iron: '清水',
          },
          
        ],
      }
        },
        mounted(){
            axios.get("http://localhost:9090/allstockitems").then(res =>{
            this.datalists = res.data;
            console.log(this.datalists)
            })
          },
    }

</script>