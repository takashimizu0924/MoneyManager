<script>
import { Bar } from 'vue-chartjs';
import axios from 'axios'
// import { ReactivePropMixin } from 'vue-chartjs/types/mixins';


export default {
  extends: Bar,
  data(){
    return{
      datacollection:null,
      price:[],
      salelabel:[],
      // chartPrice:[]
    }
  },
  async mounted(){
    await this.getRandomInt()
    this.fillData()
    this.renderChart(this.datacollection)
  },
  methods:{
    fillData(){
      
      this.datacollection = {
        labels: this.label,
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              data:this.chartPrice
            }
          ]
      }
      console.log("a")
    },
    async getRandomInt () {
        await axios.get("http://localhost:9090/allsales?").then(res => {
        // this.price = res.data[1].salesprice
        // var base = res.data
        // console.log("データ",base)
        var p = []
        var l = []
        for(var i = 0;i<res.data.length;i ++){
          var aaa = res.data[i].salesprice
          var ccc = res.data[i].CreatedAt.split('T',1)
          p.push(aaa)
          l.push(ccc)
        }
        // var aaa = res.data[0].salesprice
        // var bbb = res.data[1].salesprice
        // var ccc = res.data[0].CreatedAt.split('T',1)
        // var ddd = res.data[1].CreatedAt.split('T',1)
        // p.push(aaa)
        // p.push(bbb)
        // l.push(ccc)
        // l.push(ddd)
        this.price = p
        this.salelabel = l
        console.log(this.price)
        })
      }
    },
    watch:{
      price:function(){
        this.chartPrice = this.price
      },
      salelabel:function(){
        this.label = this.salelabel
      }
    }
  }

</script>