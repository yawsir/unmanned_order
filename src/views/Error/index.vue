<template>
    <div class="error">
        <p class="msg">请使用手机扫码进入</p>
        <div class="qr-box">
            <div class="qr-wrap">
                <img src="../../assets/images/a001.png" alt="a001桌" title="a001桌">
                <p class="title">a001桌</p>
            </div>
             <div class="qr-wrap">
                <img src="../../assets/images/a002.png" alt="a002桌">
                <p class="title">a002桌</p>
            </div>
             <div class="qr-wrap">
                <img src="../../assets/images/a003.png" alt="a003桌">
                <p class="title">a003桌</p>
            </div>
             <div class="qr-wrap">
                <img src="../../assets/images/b001.png" alt="b001桌">
                <p class="title">b001桌</p>
            </div>
             <div class="qr-wrap">
                <img src="../../assets/images/b002.png" alt="b002桌">
                <p class="title">b002桌</p>
            </div>
             <div class="qr-wrap">
                <img src="../../assets/images/b003.png" alt="b003桌">
                <p class="title">b003桌</p>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .error {
        width: 100;
        .msg {
            padding-top: 1rem;
            font-size: 3rem;
            text-align: center;
        }
        .qr-box {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            .qr-wrap {
                flex-basis: 150px;
                text-align: center;
                margin: 3rem;
            }
            .title {
                font-size: 3rem;
            }

            img {
                width: 150px;
                height: 150px;
                display: block;
                flex: 1;
            }
        }
    }
</style>