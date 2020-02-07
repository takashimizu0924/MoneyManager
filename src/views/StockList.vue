<template>
  <v-data-table
    :headers="headers"
    :items="itemlists"
    :items-per-page="5"
    class="elevation-1"
  ></v-data-table>
</template>

<script>
export default {
    data(){
        return{
            headers: [
          {
            text: '商品名',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: '数量', value: 'calories' },
          { text: '保管場所', value: 'fat' },
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
        }
    }

</script>