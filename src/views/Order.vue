<template>
    <div id="order">
        <div class="order_header">
            <div class="table_number">
                <div class="wait_icon">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-dengdai" />
                    </svg>
                </div>
                <div class="instruction">
                    <h2>{{dataList.uid}}号桌待门店接单</h2>
                    <p>请及时联系服务员确认已点菜品信息</p>
                </div>
            </div>

            <div class="total">
                <h3>
                    已点菜品{{dataList.total_num}}份，合计：
                    <span class="price">{{dataList.total_price}}元</span>
                </h3>
            </div>
        </div>

        <div class="order_content">
            <h3 class="content_title">菜品详情</h3>
            <ul class="content_detail">
                <li class="detail_row" v-for="(item, index) in dataList.items" :key="index">
                    <p class="food_name">{{item.title}}</p>
                    <p class="food_count">{{item.num}}份</p>
                    <p class="price">{{Number.parseFloat(item.price) * item.num}}元</p>
                </li>
                
            </ul>
        </div>
        <nav-button
            :commands="['click1', 'click2', 'click3', 'click4']"
            @changeState="isNavOpen = !isNavOpen"
            @subClick="onSubClick"
        />

        <router-link to="/home" tag="div">
            <CircleButton
                iconHref="#icon-qicheqianlian-1"
                buttonName="菜单"
                backgroundColor="#000000"
                horizantalPosition="right"
                :onCircleButtonClick="onMenuClick"
                v-show="!isNavOpen"
            />
        </router-link>
    </div>
</template>

<script>
import NavButton from "../components/NavButton.vue";
import CircleButton from "../components/CircleButton.vue";
import Config from "../models/config.js";
import Storage from '../models/storage.js'
export default {
    name: "order",
    data() {
        return {
            isNavOpen: false,
            api: Config.api,
            uid: Storage.get('uid'),
            dataList: {}
        };
    },
    methods: {
        onMenuClick() {
            // alert("点击菜单");
            
        },
        onSubClick(command){
            console.log(command)
        },
        getOrder(){
            this.$axios.get(this.api+ 'api/getOrder?uid='+this.uid)
            .then(res => {
                this.dataList = res.data.result[0]
                console.log(this.dataList)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
    mounted(){
        this.getOrder()
    },
    components: {
        NavButton,
        CircleButton
    }
};
</script>

<style lang="scss" scoped>
.order_header {
    width: 95%;
    margin: 1rem auto;
    background: #ffffff;
    .table_number {
        display: flex;
        padding: 2rem 0;
    }
    .wait_icon {
        flex: 1;
        .icon {
            width: 5rem;
            height: 5rem;
        }
    }
    .instruction {
        flex: 4;
    }

    .total {
        padding: 1rem 0;
        .price {
            color: #ff0000;
            font-size: 2.5rem;
        }
    }
}

.order_content {
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    .content_title {
        padding: 0.5rem 0 0.5rem 0.5rem;
    }
    .content_detail {
        width: 95%;
        margin: 0 auto;
        .detail_row {
            display: flex;
            padding: 1rem 0;

            p {
                &:nth-child(1) {
                    flex: 3;
                }
                &:nth-child(2) {
                    flex: 1;
                }
                &:nth-child(3) {
                    flex: 1;
                }
            }
        }
    }
}
</style>

