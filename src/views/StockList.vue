 <template>
   <v-data-table
    :headers="headers"
    :items="datalists"
    class="elevation-1"
    >
    <template v-slot:top>
      <v-dialog v-model="dialog" max-width="700px">
        <v-card>
          <v-card-title class="headline">編集</v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.itemname" label="商品名"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.itemquantity" label="数量"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.itemstockyard" label="保管場所"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.UpdatedAt" label="更新日"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.created_by" label="登録者"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue" text @click="save">保存</v-btn>
              <v-btn color="red">削除</v-btn>
            </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
      <template v-slot:item.actions="{ item }">
        <v-icon class="mr-2" small @click="edit(item)">mdi-pencil</v-icon>
        <v-icon small slot="item.actions" @click="del">mdi-delete</v-icon>
      </template> 
   </v-data-table>
</template>

<script>
import axios from 'axios'
// import dateFilter from 'date-fns/format'

export default {
  // filters:{
  //   // date: dateFilter
  //   },
    data(){
        return{
          datalists:[],
          editedItem:{
            id:'',
            itemname:'',
            itemquantity:'',
            itemstockyard:'',
            UpdatedAt:'',
            created_by:'',
          },
          dialog:false,
          headers: [
          {
            text: '商品名',
            align: 'left',
            sortable: false,
            value: 'itemname',
          },
          { text: '数量', value: 'itemquantity' },
          { text: '保管場所', value: 'itemstockyard' },
          { text: '登録日', value: 'CreatedAt' },
          { text: '更新日', value: 'updated_at' },
          { text: '登録者', value: 'created_by' },
          { text: '操作',value:'actions'},
        ],
        
      }
        },
        async mounted(){
            await axios.get("http://localhost:9090/allstockitems").then(res =>{
            this.datalists = res.data
            })
          },
        methods:{
          edit(item){
            this.editedItem = Object.assign({},item)
            // this.editedItem.updated_at = Object.assign({},new Date().toISOString().substr(0,10),)
            this.editedItem.UpdatedAt = new Date().toISOString().substr(0,10)
            console.log(this.editedItem)
            this.dialog = true
            
          },
          del(){
            alert("hi! this is DELETE")
          },
          close(){
            this.dialog = false
          },
          async save(){
            // var params = new URLSearchParams()
            // params.append('itemname',this.stockitem)
            // params.append('itemquantity',this.stockquantity)
            // params.append('itemstockyard',this.stockyard)
            // params.append('CreatedBy',this.stockCreatedBy)
            // params.append('CreatedAt',this.due)
            // axios.post("http://localhost:9090/stockitem?" + params)
            var params = new URLSearchParams()
            params.append('itemname',this.editedItem.itemname)
            params.append('itemquantity',this.editedItem.itemquantity)
            params.append('itemstockyard',this.editedItem.itemstockyard)
            params.append('CreatedBy',this.editedItem.created_by)
            params.append('updated_at',this.editedItem.UpdatedAt)
            alert("保存します")
            console.log(this.editedItem.id)
            await axios.patch("http://localhost:9090/updateitem/" + this.editedItem.id + "?" + params).then(res => {
              console.log(res.data)
            }).catch(res =>{
              console.log(res)
            })
            window.location.reload()
            this.dialog = false

          },
          updateItem(){
            axios.patch("http://localhost:9090/")
          }
        },
        watch:{
          dialog(val){
            console.log(val)
            // this.close()
          }
        }
    }

</script>