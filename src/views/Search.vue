<template>
    <div class="search">

        <div class="search_header">
            <input type="search" class="header_search" placeholder="在此搜索" />
        </div>

        <div class="search_content">
            <ul class="search_list">
                <li class="search_item">
                    <img src="../assets/images/1.jpg" alt />
                    <div class="item_content">
                        <h3 class="name">大蒜腊肉</h3>
                        <p class="price">￥26.00</p>
                        <p class="sale">已售:351份</p>
                    </div>
                </li>
                <li class="search_item">
                    <img src="../assets/images/1.jpg" alt />
                    <div class="item_content">
                        <h3 class="name">大蒜腊肉</h3>
                        <p class="price">￥26.00</p>
                        <p class="sale">已售:351份</p>
                    </div>
                </li>
                <li class="search_item">
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
    name: "search",
    components: {
        VFooter
    }
};
</script>

<style lang="scss" scoped>

.search_header {
   width: 95%;
    margin: 0 auto;
    height: 5rem;
    line-height: 5rem;
    text-align: center;
    .header_search{
        text-align: center;
        width: 90%;
        height: 3.8rem;
        border: 1px solid #eee;
        border-radius: .5rem;

    }
}

.search_content {
    width: 95%;
    margin: 0 auto;
    background: #ffffff;
    .search_list {
        .search_item {
            width: 100%;
            display: flex;
            border-top: 1px solid #eeeeee;
            box-sizing: border-box;
            padding: 1rem 1rem;
            img {
                width: 6rem;
                height: 6rem;
            }
            .item_content {
                margin-left: 1rem;
            }
        }
    }
}
</style>

