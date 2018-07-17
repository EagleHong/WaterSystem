Vue.component('data-div',{
  template:'\
  <el-col :xl="6" :lg="8" :sm="12">\
    <div class="showdata" v-on:click="$emit(\'jump\',item.id)">\
      <p class="itemName"> {{ item.name }} </p>\
      <p class="itemInfo"><span class="itemType">&nbsp水源&nbsp&nbsp：</span>\
        <span class="itemData"> {{ item.Data1 }} </span>\
        <span class="dataRange">正常范围：&nbsp{{ item.range1 }}</span>\
      </p>\
      <p class="itemInfo"><span class="itemType">成品水：</span>\
        <span class="itemData">{{ item.Data2 }}</span>\
        <span class="dataRange">正常范围：&nbsp{{ item.range2 }}</span>\
      </p>\
    </div>\
  </el-col>',
  props:['item']
})
var vm = new Vue ({
  el:'#app',
  data:{
    items:[
      {
        id:1,
        name:'PH值',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:2,
        name:'电导率',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:3,
        name:'溶解氧',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:4,
        name:'浊度',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:5,
        name:'COD-Mn',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:6,
        name:'BOD',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:7,
        name:'氨氮',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:8,
        name:'总氮',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:9,
        name:'总磷',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      },
      {
        id:10,
        name:'TOC',
        Data1:'99',
        Data2:'99',
        range1:'xx-xx',
        range2:'xx-xx',
      }
    ]
  },
  methods: {
    jump: function (id) {
      alert(id)
    }
  }
})

//Vue.set(vm.items[1],'Data1',"88")
// var Ctor = Vue.extend(Main)
// new Ctor().$mount('#app')
