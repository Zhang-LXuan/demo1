<template>
    <div id="app" >
        <header>
            <div class="daohang">
                <button @click="gohome">商城首页</button>
                <button @click="goact">活动详情</button>
                <button @click="goinfo">个人信息</button>
                <button @click="gocontact">联系我们</button>

            </div>
            <div class="title"><h1>辛烷的小店</h1></div>

        </header>

        <main>
        <router-view></router-view>

        </main>

        <footer>

        </footer>
        <h3></h3>
    </div>
</template>

<script>
export default {

        name:'Index',

        methods:{
            gocontact:function(){
                this.$router.push('/contact');
            },
            goact:function(){
                this.$router.push('/act');
            },
            goinfo:function(){
                this.$router.push('/info');
            },
            gohome:function(){
                this.$router.push('/home');
            },
        }

}
</script>

<style>
header main footer{
    width: 100%;
}
header{
    height: 110px;
    border: 1px red solid;
    margin-bottom: 20px;
}

.daohang{
    height: 30px;
    width:90%;
    margin-left: 5%;
    margin-right: 5%;
    display: flex;
    justify-content: space-around;
    
}
.daohang button{
    color: black;
    font-size: 24px;
    margin-top: 10px;
    height: 35px;
    width: 400px;
    background-color:beige;
}
.daohang button:hover{
    color:#777777;

}
.title{
    height: 60px;
    display: flex;
    justify-content: center;
}
main{
    height: 640px;
    border: 1px red solid;
    margin-bottom: 20px;
}
footer{
    height: 105px;
    border: 1px red solid;
}
</style>