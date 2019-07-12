<template>
    <div class="hot">
        <div class="hot_header">
            <p class="header_title">本店热销榜</p>
        </div>


        <div class="hot_content">
            <ul class="hot_list">
                <li class="hot_item">
                    <img src="../assets/images/1.jpg" alt />
                    <div class="item_content">
                        <h3 class="name">大蒜腊肉</h3>
                        <p class="price">￥26.00</p>
                        <p class="sale">已售:351份</p>
                    </div>
                </li>
                <li class="hot_item">
                    <img src="../assets/images/1.jpg" alt />
                    <div class="item_content">
                        <h3 class="name">大蒜腊肉</h3>
                        <p class="price">￥26.00</p>
                        <p class="sale">已售:351份</p>
                    </div>
                </li>
                <li class="hot_item">
                    <img src="../assets/images/1.jpg" alt />
                    <div class="item_content">
                        <h3 class="name">大蒜腊肉</h3>
                        <p class="price">￥26.00</p>
                        <p class="sale">已售:351份</p>
                    </div>
                </li>
            </ul>
        </div>


    </div>
</template>

<script>
    import VFooter from "../components/Footer.vue";
    export default {
        name: 'hot',
        components:{
            VFooter
        }
    };
</script>

<style lang="scss" scoped>
.menu_icon{
    width: 2rem;
    height: 2rem;
    color: #ffffff;
}
.hot_header{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    .header_title{
        width: 100%;
        text-align: center;
    }
}

.hot_content{
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    .hot_list{
        .hot_item{
            width: 100%;
            display: flex;
            border-top: 1px solid #eeeeee;
            box-sizing: border-box;
            padding: 1rem 1rem;
            img{
                width: 6rem;
                height: 6rem;
            }
            .item_content{
                margin-left: 1rem;
            }
        }
        
    }
}

 


    .menu_button{
        position: fixed;
        left: 50%;
        bottom: 1rem; 
        transform: translate(-50%, 0);
        width: 5rem;
        height: 5rem;
        color: #ffffff;
        text-align: center;
        border-radius: 50%;
        box-sizing: border-box;
        padding: 0.5rem 0 0 0;
        background: #000000;
        p {
            margin-top: -0.5rem;
        }
    }

    .cart_button {
    position: fixed;
    right: 2.5rem;
    bottom: 1rem; 
    width: 5rem;
    height: 5rem;
    color: #ffffff;
    text-align: center;
    border-radius: 50%;
    box-sizing: border-box;
    padding: 0.5rem 0 0 0;
    background: #ff0000;
    
    p {
        margin-top: -0.5rem;
    }
}

</style>

