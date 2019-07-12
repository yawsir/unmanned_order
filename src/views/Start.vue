<template>
    <div class="start">
        <div class="loading" v-if="showloading">
            
            <div class="wrap">
                <span>❤</span>
                <span>❤</span>
                <span>❤</span>
                <span>❤</span>
                <span>❤</span>
                <p>加载中</p>

            </div>
        </div>

        <div class="start_header">
            <svg class="icon cutlery" aria-hidden="true">
                <use xlink:href="#icon-cutlery" />
            </svg>
            用餐人数
        </div>

        <div class="start_content">
            <p class="noticed">请选择正确的用餐人数，小二马上给你送餐具</p>
            <ul>
                <li v-for="index in 12" :key="index" @click="choosePeopleNumber(index)">
                    <span
                        class="people_number"
                        :class="{active: index == currentPeopleNumber}"
                    >{{index}}人</span>
                </li>
            </ul>

            <div class="content_mark">
                <input type="text" class="mark_input" v-model="mark" placeholder="请填写您的口味、偏好等" />
                <ul class="mark_tag_list">
                    <li
                        class="mark_tag_item"
                        v-for="(item, index) in markList"
                        :key="index"
                        @click="getMark(item)"
                    >{{item}}</li>
                </ul>
            </div>
        </div>

        <div class="start_footer">
            <!-- <router-link to="/home" tag="div" class="start">开始点餐</router-link> -->
            <div class="start" @click="onStart">开始点餐</div>
        </div>
    </div>
</template>

<script>
import Config from "../models/config.js";
import Storage from "../models/storage.js";
export default {
    name: "start",
    data() {
        return {
            currentPeopleNumber: 1,
            mark: "",
            markList: ["不要辣椒", "打包带走", "不要蒜"],
            api: Config.api,
            showloading: true
        };
    },
    methods: {
        choosePeopleNumber(number) {
            this.currentPeopleNumber = number;
            console.log(this.currentPeopleNumber);
        },
        getMark(mark) {
            //更新备注信息
            this.mark += mark + " ";
        },
        onStart() {
            //点击开始点餐按钮
            let uid = this.uid;
            this.$axios
                .post(this.api + "api/addPeopleInfo", {
                    uid,
                    p_num: this.currentPeopleNumber,
                    p_mark: this.mark
                })
                .then(res => {
                    console.log(res);
                    if (res.data.success === "true") {
                        this.$router.push({ path: "/home" });
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getPeopleInfo() {
            //获取用餐人数等信息
            this.$axios
                .get(this.api + "api/peopleInfoList?uid=" + this.uid)
                .then(res => {
                    console.log(res);
                    if(res.data.result.length > 0){
                        console.log('加载动画')
                        this.$router.push({ path: "/home" });
                    }else{
                        this.showloading = false
                    }
                    // this.mark = res.data.result[0].p_mark;
                    // this.currentPeopleNumber = Number.parseInt(
                    //     res.data.result[0].p_num
                    // );
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    created() {
        const uid = window.location.search.split("=")[1]
        if( !uid ) {
            this.$router.push('/error')
            return
        }
        Storage.set("uid", uid);

        this.uid = Storage.get("uid");
        // this.loadingAnimation()
        this.getPeopleInfo()
    },
    mounted() {
        
    }
};
</script>

<style lang="scss" scoped>
.icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
@keyframes move{
    from{
        top: 0px;
    }
    to{
        top: -2rem;
    }
}
.loading{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    z-index: 100;
    .wrap{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        p{
            position: relative;
            top: -6rem;
            text-align: center;
        }
        span{
            position: relative;
			font: 2rem "微软雅黑";
            animation: move .5s alternate infinite;
            &:nth-child(1){
                animation-delay: .1s;
                color: red;
            }
            &:nth-child(2){
                animation-delay: .2s;
                color: orange;
            }
            &:nth-child(3){
                animation-delay: .3s;
                color: yellow;
            }
            &:nth-child(4){
                animation-delay: .4s;
                color: green;
            }
            
            &:nth-child(5){
                animation-delay: .5s;
                color: cyan;
            }
        }
    }
}
.start_header {
    width: 30%;
    height: 3rem;
    line-height: 3rem;
    background: #000000;
    color: #ffffff;
    margin: 4rem auto 2rem auto;
    border-radius: 0.5rem;
    text-align: center;
    .cutlery {
        font-size: 2rem;
    }
}
.start_content {
    .noticed {
        color: #f00;
        text-align: center;
        margin-bottom: 2rem;
    }
    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        li {
            width: 25%;
            box-sizing: border-box;
            padding: 0.5rem 0.5rem;
            .people_number {
                display: block;
                text-align: center;
                height: 3rem;
                line-height: 3rem;
                border: solid 1px #cdcdcd;
                background: #ffffff;
                border-radius: 0.5rem;
            }
            .active {
                background: #f00;
                color: #fff;
            }
        }
    }
    .content_mark {
        text-align: center;
        margin-top: 3rem;
        input {
            width: 95%;
            height: 3rem;
            border: 1px solid #cdcdcd;
        }
        .mark_tag_list {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 2rem;
            .mark_tag_item {
                width: 8rem;
                background: #fff;
                border: 1px solid #cdcdcd;
                margin: 0 1rem;
                border-radius: 1rem;
            }
        }
    }
}
.start_footer {
    position: fixed;
    display: block;
    bottom: 10rem;
    left: 50%;
    transform: translateX(-50%);
    width: 6rem;
    height: 6rem;
    line-height: 6rem;
    border-radius: 50%;
    background: #f00;
    color: #ffffff;
    text-align: center;
}
</style>

