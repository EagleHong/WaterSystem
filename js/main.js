Vue.component('data-div', {
  template: '\
  <el-col :xl="6" :lg="8" :md="12">\
    <div class="showdata" v-bind:class=\'{"blue-border":blue,"green-border":green,"purple-border":purple}\' v-on:click="$emit(\'jump\',item.id)">\
      <p class="itemName"> {{ item.name }} </p>\
      <p class="itemInfo"><span class="itemType">{{ title1 }}：</span>\
        <span class="itemData"> {{ item.data1 }} </span>\
        <span class="dataRange">正常范围：&nbsp{{ item.range1 }}</span>\
      </p>\
      <p class="itemInfo"><span class="itemType">{{ title2 }}：</span>\
        <span class="itemData"> {{ item.data2 }} </span>\
        <span class="dataRange">正常范围：&nbsp{{ item.range2 }}</span>\
      </p>\
    </div>\
  </el-col>',
  props: ['item', 'blue', 'green', 'purple', 'title1', 'title2','num'],
  data: function() {
    return {}
  },
  mounted: function() {}
})
var vm = new Vue({
  el: '#app',
  data: {
    items: [{
        id: 1,
        name: 'PH值',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 2,
        name: '电导率',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 3,
        name: '溶解氧',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 4,
        name: '浊度',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 5,
        name: 'COD-Mn',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 6,
        name: 'BOD',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 7,
        name: '氨氮',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 8,
        name: '总氮',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 9,
        name: '总磷',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      },
      {
        id: 10,
        name: 'TOC',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx',
      }
    ],
    items2: [{
        id: 11,
        name: '1号车间',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx'
      },
      {
        id: 12,
        name: '2号车间',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx'
      },
      {
        id: 13,
        name: '3号车间',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx'
      }
    ],
    items3: [
      {
        id: 14,
        name: '1号仓库',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx'
      },
      {
        id: 15,
        name: '2号仓库',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx'
      },
      {
        id: 16,
        name: '3号仓库',
        data1: '99',
        data2: '99',
        range1: 'xx-xx',
        range2: 'xx-xx'
      }
    ],
    options: [{
      value: '选项1',
      label: 'PH值'
    }, {
      value: '选项2',
      label: '水温'
    }, {
      value: '选项3',
      label: '电导率'
    }, {
      value: '选项4',
      label: '溶解氧'
    }, {
      value: '选项5',
      label: '浊度'
    }],
    value: '',
    pickerOptions2: {
      shortcuts: [{
        text: '最近一周',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: '最近一个月',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: '最近三个月',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        }
      }]
    },
    value6: '',
    value7: ''
  },
  methods: {
    jump: function(id) {
      location.href='charts.html'
    },
    toTemp:function(){
      if(location.href.indexOf('index.html')==-1){
        location.href='index.html'
      }
      var anchor = this.$el.querySelector('#temperature')
      document.documentElement.scrollTop = anchor.offsetTop
    },
    toTop:function(){
      if(location.href.indexOf('index.html')==-1){
        location.href='index.html'
      }
      document.documentElement.scrollTop = 0
    }
  }
})


// var Ctor = Vue.extend(Main)
// new Ctor().$mount('#app')
