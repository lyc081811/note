<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableDate" border show-summary style="width: 100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template>
                  <el-button type="text" size="small" @click="delGood(scope.row)">删除</el-button>
                  <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="totalDiv">
              数量: 0
            </div>
            <div class="div-btn">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAll">删除</el-button>
              <el-button type="success">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">
          </el-tab-pane>
          <el-tab-pane label="外卖">
          </el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often-goods" style="overflow: hidden;">
          <div class="title">常用列表</div>
          <ul  class="often-goods-list">
            <li v-for="food in oftenGoods"  class="often-goods-list" @click="addOrderList(food)">
              <span>{{food.goodsName}}</span>
              <span class="o-price">￥{{food.price}}元</span>
            </li>
          </ul>
        </div>
        <div class="goods-type" style="overflow: hidden;">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div>
                <ul class="cookList">
                  <li v-for="goods in type0Goods">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小吃">
              <ul class="cookList">
                  <li v-for="goods in type1Goods">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <ul class="cookList">
                  <li v-for="goods in type2Goods">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <ul class="cookList">
                  <li v-for="goods in type3Goods">
                      <span class="foodImg"><img :src="goods.goodsImg" width="100%"></span>
                      <span class="foodName">{{goods.goodsName}}</span>
                      <span class="foodPrice">￥{{goods.price}}元</span>
                  </li>
                </ul>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'pos',
  data () {
    return {
      tableDate: [],
      oftenGoods:[],
      type0Goods:[],
      type1Goods:[],
      type2Goods:[],
      type3Goods:[],
      totalMoney: 0,
      totalCount: 0
    }
  },
  created () {
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
    .then(rep => {
      // console.log(rep);
      this.oftenGoods = rep.data;
    })
    .catch(err => {
      alert('没网好不好!')
    })

    axios.get('http://jspang.com/DemoApi/typeGoods.php')
    .then(rep => {
      this.type0Goods = rep.data[0];
      this.type1Goods = rep.data[1];
      this.type2Goods = rep.data[2];
      this.type3Goods = rep.data[3];
    })
    .catch(err => {
      alert('没网好不好!')
    })
  },
  mounted () {
    var orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px';

  },
  methods: {
    addOrderList (goods) {
      // 商品是否存在
      let isHave = false;
      for (let i = 0; i < this.tableDate.length; i++) {
        if (goods.goodsId == this.tableDate[i].goodsId) {
          isHave = true;
        }
      }
      this.$message({
        message: '已添加!',
        type: 'success'
      })
      // 根据判断写逻辑
      if (isHave) {
        //改变列表中数组数量
        let arr = this.tableDate.filter(good => {
          return good.goodsId == goods.goodsId;
        })
        arr[0].count++;
      } else {
        //不存在就推入数组
        let newGoods = { goodsId: goods.goodsId, goodsName: goods.goodsName, price: goods.price, count: 1 };
        this.tableDate.push(newGoods);
      }
      this.tableDate.forEach(el => {
        this.totalCount += el.count;
        this.totalMoney = this.totalMoney + el.count * el.price;
      });
    },
    delGood (goods) {
      this.tableDate = this.tableDate.filter(a => {
        return a.goodsId != goods.goodsId;
      })
    },
    delAll () {
      if (this.tableDate.length === 0) {
        this.$message({
          message: '您还没有添加商品',
          type: 'error'
        })
      } else {
        this.tableDate = [],
          this.totalMoney = 1,
          this.totalCount = 0,
          this.$message({
            message: '已删除所有商品!',
            type: 'warning'
          })
      }

    }
  }
}
</script>

<style scoped>
  .pos-order {
    background-color: #f9fafc;
    border-right: 1px solid #c0ccda;
  }
  .totalDiv {
    background-color: #fff;
    padding: 10px;
  }

  .div-btn {
    margin-top: 20px;
    text-align: center;
  }
 .title{
    height: 20px;
    border-bottom:1px solid #D3DCE6;
    background-color: #F9FAFC;
    padding:10px;
   }
  .often-goods-list li{
    list-style: none;
    float:left;
    border:1px solid #E5E9F2;
    padding:10px;
    margin:5px;
    background-color:#fff;
    cursor: pointer;
   }
  .o-price{
    color:#58B7FF;
   }
   .cookList li{
       list-style: none;
       width: 23%;
       border: 1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float: left;
       margin: 2px;
       cursor: pointer;
   }
   .cookList li span{

        display: block;
        float: left;
   }
   .foodImg{
       width: 40%;
   }
   .foodName{
       font-size: 18px;
       padding-left: 10px;
       color:brown;

   }
   .foodPrice{
       font-size: 16px;
       padding-left: 10px;
       padding-top:10px;
   }
</style>

