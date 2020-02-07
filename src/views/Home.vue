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
                <v-card-title class="grey--text font-weight-bold">在庫更新</v-card-title>
              </v-layout>
            </v-card>
          </v-col>
          <v-col cols="4">
            <v-card hover class="card grey lighten-3" @click="dialog2 = true">
              <v-layout justify-center="">
                <v-card-title class="grey--text font-weight-bold">売上登録</v-card-title>
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
      <!-- <v-sheet
      tile
      height="54"
      color="grey lighten-3"
      class="d-flex"
    >
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.prev()"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
        v-model="type"
        :items="types"
        dense
        outlined
        hide-details
        class="ma-2"
        label="type"
      ></v-select>
      <v-select
        v-model="mode"
        :items="modes"
        dense
        outlined
        hide-details
        label="event-overlap-mode"
        class="ma-2"
      ></v-select>
      <v-select
        v-model="weekday"
        :items="weekdays"
        dense
        outlined
        hide-details
        label="weekdays"
        class="ma-2"
      ></v-select>
      <v-spacer></v-spacer>
      <v-btn
        icon
        class="ma-2"
        @click="$refs.calendar.next()"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn> -->
      <!--  Calendar -->
    <!-- </v-sheet>
      <v-sheet height="400">
        <v-calendar
        ref="calender"
        v-model="value"
        :weekdays="weekday"
        :type="type"
        :events="events"
        :event-overlap-mode="mode"
        :event-overlao-threshold="30"
        :event-color="getEventColor"
        @change="getEvents"
        >  
        </v-calendar> -->
      <!-- </v-sheet> -->
      <v-dialog v-model="dialog" width="400px">
        <v-card>
          <v-card-title>商品名登録</v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="title" label="商品名"></v-text-field>
              <v-text-field v-model="quantity" label="数量"></v-text-field>
              <v-menu>
                <v-text-field :value="due" slot="activator" label="登録日"></v-text-field>
                <v-date-picker v-model="due"></v-date-picker>
              </v-menu>
              <v-spacer></v-spacer>
              <v-btn class="blue mx-0 mt-3" @click="submit">登録</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog1" width="600px">
        <v-card>
          <v-card-title>在庫更新</v-card-title>
          <v-card-text>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog2" width="600px">
        <v-card>
          <v-card-title>売上登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog3" width="600px">
        <v-card>
          <v-card-title>経費登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog4" width="400px">
        <v-card>
          <v-card-title>取引先登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog5" width="600px">
        <v-card>
          <v-card-title>従業員登録</v-card-title>
          <v-card-text>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
            <v-text-field v-model="text" label="１０文字以内で入力してください"></v-text-field>
          </v-card-text>
        </v-card>
      </v-dialog>
    <!-- </v-content> -->
      
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data(){
    return{
      title:'',
      quantity:'',
      postdate:'',
      due:new Date().toISOString().substr(0,10),
      dialog:false,
      dialog1:false,
      dialog2:false,
      dialog3:false,
      dialog4:false,
      dialog5:false,
      // type:'month',
      // types:['month','week','day','4day'],
      // mode:'stack',
      // modes:['stack','column'],
      // weekday:[0,1,2,3,4,5,6],
      // weekdays:[
      //   {text:'Sun - Sat',value:[0,1,2,3,4,5,6]},
      //   {text:'Mon - Sun',value:[1,2,3,4,5,6,0]},
      //   {text:'Mon - Fri',value:[1,2,3,4,5]},        
      //   {text:'Mon,Wed,Fri',value:[1,3,5]},
      // ],
      // value:'',
      // events:[],
      // colors:['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      // names:['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
    }
  },
  methods:{
    submit(){
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
}
</script>
