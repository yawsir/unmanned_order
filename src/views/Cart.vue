<template>
    <div id="cart">
        <div class="cart_header" v-if="dataList.length != 0">
            <h2 class="header_title">购物车</h2>
            <div class="cart_info">
                <p class="meal_number">用餐人数:{{peopleInfo.p_num}}人</p>
                <p class="mark">备注:{{peopleInfo.p_mark}}</p>
                <p class="food_number">购物车中总共{{totalNumber}}个菜</p>
                <p class="total">
                    合计
                    <span class="price">￥{{totalPrice}}</span>
                </p>
                <router-link to="/updateInfo" tag="div" class="modify_button">
                    <svg class="icon menu_icon" aria-hidden="true">
                        <use xlink:href="#icon-wendangxiugaicopy" />
                    </svg>
                    <p>修改</p>
                </router-link>
            </div>
        </div>
        <div class="cart_tip" v-else>
            <h2>购物车空空的</h2>
            <p>您可以点击下面的菜单开始点菜</p>
        </div>
        

        <div class="cart_content">
            <ul class="cart_list">
                <li class="cart_item" v-for="(item, index) in dataList" :key="index">
                    <img :src="api+item.img_url" alt />
                    <div class="item_content">
                        <h3 class="name">{{item.title}}</h3>
                        <p class="price">￥{{item.price}}</p>
                    </div>
                    <div class="item_amount">
                        <!-- 这里可能用ui库代替 先自己做练习 -->
                        <div class="amount_controler">
                            <div class="controler_inner">
                                <div class="sub" @click="onSub(item,index)">-</div>
                                <div class="amount">{{item.num}}</div>
                                <div class="add" @click="onAdd(item)">+</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <nav-button
            @changeState="isNavOpen = !isNavOpen"
            :commands="['click1', 'click2', 'click3', 'click4']"
            @subClick="onSubClick"
        />
            <CircleButton
                iconHref="#icon-qicheqianlian-1"
                buttonName="下单"
                backgroundColor="#ff0000"
                horizantalPosition="right"
                :onCircleButtonClick="onOkClick"
                v-show="!isNavOpen"
            />

        <router-link to="/home" tag="div">
            <CircleButton
                iconHref="#icon-qicheqianlian-1"
                buttonName="菜单"
                backgroundColor="#000000"
                horizantalPosition="center"
                :onCircleButtonClick="onMenuClick"
                v-show="!isNavOpen"
            />
        </router-link>
    </div>
</template>

<script>
import NavButton from "../components/NavButton.vue";
import CircleButton from "../components/CircleButton.vue";
import Config from "../models/config.js"
import Storage from "../models/storage.js";
export default {
    name: "cart",
    data() {
        return {
            isNavOpen: false,
            api: Config.api,
            dataList: [],   //购物车菜品数据
            peopleInfo: {},  //用餐人数 备注等数据
            uid: Storage.get('uid')
        };
    },
    methods: {
        onOkClick() {
            this.$axios.post(this.api+'api/addOrder', {
                uid: this.uid,
                p_num: this.peopleInfo.p_num,
                p_mark: this.peopleInfo.p_mark,
                order: JSON.stringify(this.dataList),
                total_price: this.totalPrice,
                total_num: this.totalNumber
            })
            .then((res) => {
                console.log(res)
                this.$router.push({path: '/order'})
            })
            .catch((err) => {
                console.log(err)
            })
        },
        onMenuClick() {
            // alert("点击菜单");
        },
        onSubClick(command){
            console.log(command)
        },
        getCartData(){
            this.$axios.get(this.api+'api/cartlist?uid='+this.uid)
            .then((res) => {
                // console.log(res)
                this.dataList = res.data.result
            })
            .catch((err) => {
                console.log(err)
            })
        },
        onAdd(item){
            
            this.$axios.get(`${this.api}api/incCart?uid=${this.uid}&product_id=${item.product_id}&num=${item.num}`)
            .then((res) => {
                // console.log(res)
                ++item.num
                this.$socket.emit('addcart', 'I want to refresh')   //更新购物车数据信息
            })
            .catch((err) => {
                console.log(err)
            })
        },
        onSub(item,index){
            this.$axios.get(`${this.api}api/decCart?uid=${this.uid}&product_id=${item.product_id}&num=${item.num}`)
                .then((res) => {
                    // console.log(res)
                    if(item.num > 1){
                        --item.num
                    }else{
                        this.dataList.splice(index, 1)
                    }
                    this.$socket.emit('addcart', 'I want to refresh')   //更新购物车数据信息
                })
                .catch((err) => {
                    console.log(err)
                })
            
        },
        getPeopleInfo(){    //获取用餐人数等信息
            this.$axios.get(this.api+'api/peopleInfoList?uid='+this.uid)
            .then((res) => {
                console.log(res)
                this.peopleInfo = res.data.result[0]
            })
            .catch((err) => {
                console.log(err)
            })
        }
    },
    sockets: {
        addcart(){
            this.getCartData()
        }
    },
    computed: {
        totalPrice(){   //购物车内菜品总价
            let tp = 0
            for(let item of this.dataList){
                tp += Number.parseFloat(item.price) * Number.parseInt(item.num)
            }
            return tp
        },
        totalNumber(){  //购物车内菜品总数
            let tn = 0
            for(let item of this.dataList){
                tn += Number.parseInt(item.num)
            }
            return tn
        },
        
    },
    mounted(){
        this.getCartData()
        this.getPeopleInfo()
    },
    components: {
        NavButton,
        CircleButton
    }
};
</script>

<style lang="scss" scoped>
.menu_icon {
    width: 2rem;
    height: 2rem;
    color: #ffffff;
}

.cart_header {
    width: 95%;
    margin: 1rem auto;
    background: #ffffff;
    padding-bottom: 0.3rem;
    .header_title {
        width: 95%;
        margin: 0 auto;
        text-align: center;
        padding: 1.5rem 0rem;
        border-bottom: 1px solid #eeeeee;
    }
    .cart_info {
        width: 95%;
        margin: 0 auto;
        position: relative;
        p {
            margin: 0.5rem 0;
        }
        .meal_number {
            color: #ff0000;
        }
        .mark {
            border-bottom: 1px solid #eeeeee;
            padding-bottom: 0.5rem;
        }
        .total {
            padding-bottom: 0.5rem;
            border-bottom: 1px solid #eeeeee;
            .price {
                color: #ff0000;
                font-size: 2.5rem;
            }
        }
        .modify_button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            height: 3.5rem;
            overflow: hidden;
            text-align: center;
            p {
                position: relative;
                top: -1rem;
                text-align: center;
            }
        }
    }
}

.cart_content {
    width: 95%;
    background: #ffffff;
    margin: 1rem auto;
    .cart_list {
        .cart_item {
            width: 100%;
            display: flex;
            border-top: 1px solid #eeeeee;
            box-sizing: border-box;
            padding: 1rem 1rem;
            position: relative;
            img {
                width: 6rem;
                height: 6rem;
            }
            .item_content {
                margin-left: 1rem;
            }
            .item_amount {
                position: absolute;
                right: 1rem;
                bottom: 0.5rem;
                // width: 18rem;
                text-align: center;
                .amount_controler {
                    display: inline-block;
                    .controler_inner {
                        display: flex;
                        width: 9rem;
                        text-align: center;
                        .sub,
                        .amount,
                        .add {
                            flex: 1;
                            width: 3rem;
                            height: 3rem;
                            line-height: 3rem;
                            border: solid #eeeeee 1px;
                        }
                        .sub,
                        .add {
                            color: red;
                            font-size: 2rem;
                        }
                    }
                }
            }
        }
    }
}

.cart_tip{
        width: 100%;
        background: #f7f7f7;
        margin: .5rem auto;
        h2{
            text-align: center;
            padding: 4rem 0 1.5rem 0;
        }
        p{
            text-align: center;
        }
}
</style>

