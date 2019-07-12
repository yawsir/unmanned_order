<template>
    <div class="detail">
        <router-link to="/home" tag="div" class="back_button">返回</router-link>

        <div class="detail_header">
            <img :src="api+detailData.img_url" alt />
            <h2 class="name">{{detailData.title}}</h2>
            <p class="price">￥{{detailData.price}}/份</p>
        </div>

        <div class="detail_content">
            <h3 class="content_title">商品详情</h3>
            <img :src="api+detailData.img_url" alt />
            <p class="content_introduce" v-html="detailData.content"></p>
        </div>

        <div class="detail_footer">
            <div class="footer_amount">
                <!-- 这里可能用ui库代替 先自己做练习 -->
                <span>数量:</span>
                <div class="amount_controler">
                    <div class="controler_inner">
                        <div class="sub" @click="onSub">-</div>
                        <input class="amount" type="number" v-model="num" disabled="disabled">
                        <div class="add" @click="onAdd">+</div>
                    </div>
                </div>
            </div>

            <div class="footer_into_cart"
                @click="onAddCart">加入购物车</div>
        </div>
    </div>
</template>

<script>
import Config from '../models/config.js'
import Stroage from '../models/storage.js'
export default {
    name:'detail',
    data(){
        return {
            api: Config.api,
            detailData: {},
            num: 1
        }
    },
    methods: {
        requestData(id){    //向后台请求数据
            this.$axios.get(this.api+'api/productcontent?id='+id)
            .then((res) => {
                console.log(res)
                this.detailData = res.data.result[0]
            })
            .catch((err) => {
                console.log(err)
            })
        },
        onSub(){
            if(this.num > 1){
                --this.num
            }
        },
        onAdd(){
            ++this.num
        },
        onAddCart(){    //点击添加至购物车
            this.$axios.post(this.api+'api/addcart',{
                uid: Stroage.get('uid'),    //扫描二维码获取暂时写死
                title: this.detailData.title,
                product_id: this.detailData._id,
                img_url: this.detailData.img_url,
                price: this.detailData.price,
                num: this.num
                // open_id: 'fjalkejkljwlkjflwkjf'
            })
            .then((res) => {
                if(res.data.success === 'true'){
                    this.$router.push({path: '/home'})
                }
                console.log(res)
                this.$socket.emit('addcart', 'I want to refresh')

            })
            .catch((err) => {
                console.log(err)
            })
        }

    },
    mounted(){
        this.requestData(this.$route.query.id)
    }
};
</script>

<style lang="scss" scoped>
.back_button {
    position: fixed;
    top: 1.5rem;
    left: 1.5rem;
    width: 5rem;
    height: 5rem;
    background: #000000bb;
    border-radius: 50%;
    color: #ffffff;
    line-height: 5rem;
    text-align: center;
    box-sizing: border-box;
    padding-left: 0.6rem;
    &::before {
        content: "";
        display: block;
        border-bottom: #ffffff solid 0.2rem;
        border-left: #ffffff solid 0.2rem;
        position: absolute;
        width: 0.8rem;
        height: 0.8rem;
        top: 2rem;
        left: 0.8rem;
        transform: rotate(45deg);
    }
}

.detail_header {
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    margin-bottom: 1rem;
    img {
        width: 100%;
        height: 18rem;
    }
    .name {
        margin-left: 0.5rem;
    }
    .price {
        color: red;
    }
}

.detail_content {
    background: #ffffff;
    width: 95%;
    margin: 0 auto;
    padding: 1rem 0 10rem 0;
    img {
        width: 95%;
        margin: 0 auto;
        display: block;
    }
    .content_title {
        margin-left: 2.5%;
    }
    .content_introduce {
        width: 95%;
        margin: 0 auto;
    }
}

.detail_footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 4.4rem;
    font-size: 1.6rem;
    background: #ffffff;
    line-height: 4.4rem;
    border-top: #eeeeee solid 1px;
    .footer_amount {
        position: absolute;
        left: 2rem;
        top: 0;
        width: 18rem;
       
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
                    display: block;
                    text-align: center;
                    background: #ffffff;
                }
                .sub,
                .add {
                    color: red;
                    font-size: 2rem;
                }
            }
        }
    }

    .footer_into_cart {
        position: absolute;
        right: 2rem;
        top: 0.5rem;
        height: 3rem;
        line-height: 3rem;
        background: #ff0000;
        border-radius: 0.5rem;
        color: #ffffff;
        font-size: 1.2rem;
        padding: 0 0.5rem;
    }
}
</style>

