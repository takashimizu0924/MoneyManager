<template>
  <div class="home">
    <!-- <v-content> -->
      <v-container>
        <v-row class="mt-12 pt-12">
          <v-col cols="4" class="mb-12">
            <v-card hover class="card grey lighten-3" @click="dialog = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold">商品登録</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card hover class="card grey lighten-3" @click="dialog1 = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold">在庫登録</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card hover class="card grey lighten-3" @click="dialog2 = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold" @click="salescardreset">売上登録</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card hover class="card grey lighten-3" @click="dialog3 = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold">経費登録</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card hover class="card grey lighten-3" @click="dialog4 = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold">取引先登録</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card hover class="card grey lighten-3" @click="dialog5 = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold">従業員登録</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
      <!-- 商品登録 -->
      <v-dialog v-model="dialog" width="400px">
        <v-card>
          <v-card-title>商品登録</v-card-title>
          <v-card-text>
              <v-text-field v-model="productcode" label="商品コードを数字で入力して下さい"></v-text-field>
              <v-select :items="productsections" v-model="productsection" label="商品区分"></v-select>
              <v-text-field v-model="productname" label="商品名"></v-text-field>
              <v-text-field v-model="getsalesprice" label="商品金額"></v-text-field>
              <v-menu>
                <v-text-field :value="due" slot="activator" label="登録日"></v-text-field>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
              <v-spacer></v-spacer>
              <v-btn class="blue mx-0 mt-3 white--text" @click="postProduct">登録</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      
      <v-dialog v-model="dialog1" width="400px">
        <v-card>
          <v-card-title>在庫登録</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="stockitem" label="商品名を登録"></v-text-field>
              <v-text-field v-model="stockquantity" label="数量を入力"></v-text-field>
              <v-select :items="stockyard" v-model="stockyard" label="保管場所を選択"></v-select>
              <v-menu>
                  <v-text-field :value="due" slot="activator" label="更新日"></v-text-field>
                  <v-date-picker v-model="due"></v-date-picker>
                </v-menu>
              <v-btn class="blue white--text" @click="postStockItem">登録</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" width="400px">
        <v-card>
          <v-card-title>売上登録</v-card-title>
          <v-card-text>
              <v-text-field v-model="receiptnumber" label="伝票番号を入力してください"></v-text-field>
              <v-text-field v-model="gestname" label="お客様名を入力してください"></v-text-field>
              <v-select :items="productsections" v-model="sectionname" label="商品区分"></v-select>
              <!-- <v-text-field v-model="salescode" label="商品コード"></v-text-field> -->
                <v-select :items="getproduct" item-text="productname" no-data-text="項目がありません" v-model="getproductname" label="商品名を選択してください">
                  <option value="" v-for="product in getproduct" :key="product.productname">
                    <span v-bind="product.productname">
                    {{product.productname}}
                    </span>
                  </option>
                </v-select>              <!-- <span>{{ getproduct }}</span> -->
              <v-text-field v-model="salesquantity" label="数量"></v-text-field>
              <span>{{ sumprice }}円</span>
              <v-menu>
                  <v-text-field :value="due" slot="activator" label="登録日"></v-text-field>
                  <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
              <v-text-field v-model="createdby" label="登録者名"></v-text-field>
              <v-btn class="blue white--text" @click="addsales">登録</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" width="400px">
        <v-card>
          <v-card-title>経費登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="expensename" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="expenseprice" label="経費金額を入力してください"></v-text-field>
            <v-menu>
                <v-text-field :value="due" slot="activator" label="登録日"></v-text-field>
                <v-date-picker v-model="due"></v-date-picker>
            </v-menu>
            <v-btn class="blue white--text" @click="submit">登録</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog4" width="400px">
        <v-card>
          <v-card-title>取引先登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="companyname" label="会社名を入力してください"></v-text-field>
            <v-text-field v-model="person" label="担当者名"></v-text-field>
            <v-text-field v-model="address" label="会社住所"></v-text-field>
            <v-text-field v-model="number" label="電話番号"></v-text-field>
            <v-btn class="blue white--text" @click="submit">登録</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog5" width="400px">
        <v-card>
          <v-card-title>従業員登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="staffname" label="従業員名"></v-text-field>
            <v-text-field v-model="staffaddress" label="住所"></v-text-field>
            <v-text-field v-model="staffnumber" label="電話番号"></v-text-field>
            <v-btn class="blue white--text" @click="submit">登録</v-btn>
          </v-card-text>
        </v-card>
      </v-dialog>
    <!-- </v-content> -->
      
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data(){
    return{
      productcode:'',
      productsection:'',
      productname:'',
      stockitem:'',
      stockquantity:'',
      salescode:'',
      receiptnumber:'',
      sectionname:'',
      gestname:'',
      createdby:'',
      salesquantity:'',
      getsalesprice:'',
      getproduct:[],
      getproductname:'',
      due:new Date().toISOString().substr(0,10),
      dialog:false,
      dialog1:false,
      dialog2:false,
      dialog3:false,
      dialog4:false,
      dialog5:false,

      productsections:[
        'エアコン','アンテナ','電気工事','食洗機','ウォシュレット','照明'
      ],
      stockyard:[
        '新栄倉庫','車内','軽バン'
      ],
     
    }
  },
  methods:{
    // update(){
    //   this.$forceUpdate();
    // },
    // 商品登録
    postProduct(){
      var params = new URLSearchParams()
      params.append('productcode',this.productcode)
      params.append('productsection',this.productsection)
      params.append('name',this.productname)
      params.append('price',this.getsalesprice)
      params.append('CreatedAt',this.due)
      axios.post("http://localhost:9090/product?" + params)
        // .then(res =>{
        // console.log(res.data.productcode)
        // console.log(res.data.productsection)
        // console.log(res.data.productname)
        // console.log(this.due)
      // });
      this.productcode = ''
      this.productsection = ''
      this.productname = ''
      this.getsalesprice = ''
    },
    // 在庫登録
    postStockItem(){
      var params = new URLSearchParams()
      params.append('itemname',this.stockitem)
      params.append('itemquantity',this.stockquantity)
      params.append('itemstockyard',this.stockyard)
      params.append('CreatedAt',this.due)
      axios.post("http://localhost:9090/stockitem?" + params).then(res =>{
        console.log(res.data.productcode)
        console.log(res.data.productsection)
        console.log(res.data.productname)
        console.log(this.due)
      });
    },
    // 売上登録 salescode
    addsales(){
      var params = new URLSearchParams()
      params.append('code',this.salescode)
      params.append('salesquantity',this.salesquantity)
      params.append('salesname',this.getproduct)
      params.append('salesprice',this.sumprice)
      params.append('gestname',this.gestname)
      params.append('receiptnumber',this.receiptnumber)
      params.append('sectionname',this.getproductname)
      params.append('gestname',this.gestname)
      params.append('created_by',this.createdby)
      params.append('CreatedAt',this.due)
      axios.post("http://localhost:9090/sales?" + params)
      this.salescode = ''
      this.salesquantity = ''
      this.getproduct = ''
      this.sumprice = ''
      this.gestname = ''
      this.receiptnumber = ''
      this.sectionname = ''
      this.gestname = ''
      this.created_by = ''
    },
    salescardreset(){
      this.salescode = ''
      this.salesquantity = ''
      this.getproduct = ''
      this.sumprice = ''
      this.gestname = ''
      this.receiptnumber = ''
      this.sectionname = ''
      this.gestname = ''
      this.created_by = ''
    },
    // testfunc(params){
    //   axios.get("http://localhost:9090/product?productcode=" + params).then(res =>(
    //   this.getproduct = res.data.productname
    //   ))
      
    // },
    getcode(){
      axios.get("http://localhost:9090/product?productname=" + this.getproductname).then(res =>(
      this.getsalesprice = res.data[0].price
      ))
    },
    getallproduct(){
      axios.get("http://localhost:9090/allproduct").then(res =>(
      console.log(res.data),
      this.getproduct = res.data
      // this.getsalesprice = res.data.price
      ))
    },
    postSales(){
      var params = new URLSearchParams()
      params.append('code',this.salescode)
      params.append('salesquantity',this.salesquantity)
      params.append('salesname',this.getproduct)
      params.append('salesprice',this.getsalesprice)
      params.append('Created_at',this.due)
      axios.post("http://localhost:9090/stockitem?" + params)
    },
    submit(){
      let res = axios.get('http://localhost:8888/todos')
      console.log(res.data)
      // console.log(this.title,this.quantity,this.due)
    }
    // getEvents ({ start, end }) {
    //     const events = []

    //     const min = new Date(`${start.date}T00:00:00`)
    //     const max = new Date(`${end.date}T23:59:59`)
    //     const days = (max.getTime() - min.getTime()) / 86400000
    //     const eventCount = this.rnd(days, days + 20)

    //     for (let i = 0; i < eventCount; i++) {
    //       const allDay = this.rnd(0, 3) === 0
    //       const firstTimestamp = this.rnd(min.getTime(), max.getTime())
    //       const first = new Date(firstTimestamp - (firstTimestamp % 900000))
    //       const secondTimestamp = this.rnd(2, allDay ? 288 : 8) * 900000
    //       const second = new Date(first.getTime() + secondTimestamp)

    //       events.push({
    //         name: this.names[this.rnd(0, this.names.length - 1)],
    //         start: this.formatDate(first, !allDay),
    //         end: this.formatDate(second, !allDay),
    //         color: this.colors[this.rnd(0, this.colors.length - 1)],
    //       })
    //     }

    //     this.events = events
    //   },
    //   getEventColor (event) {
    //     return event.color
    //   },
    //   rnd (a, b) {
    //     return Math.floor((b - a + 1) * Math.random()) + a
    //   },
    //   formatDate (a, withTime) {
    //     return withTime
    //       ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
    //       : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
    //   },
    },
    watch:{
      getproductname:{
        deep:true,
        handler(val){
          console.log(val)
          this.getcode();
        },
      },
      sectionname:{
        deep:true,
        handler(val){
          // console.log(val)
          if (val === 'エアコン')
          
          this.getallproduct();
        },
      }
    },
    
    computed:{
      // 小計と数量をかける
      sumprice:function(){
        return this.getsalesprice * this.salesquantity
      },
    }
    
}
</script>
