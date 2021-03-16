<template>
    <div id="app">
        <div class="le">
            <h3>商品类别</h3>
            <ul><li v-for="item in list1">
                <button @click="goitem(item)">{{item}}</button>
                </li>
            </ul>
        </div>
        <div class="ce">
            <router-view></router-view>
        </div>
        <div class="ri">

        </div>
    </div>
</template>

<script>
import Item from '@/views/r1/item.vue'
export default {

    name:'Home',
    data(){
        return{
            list1:['主板','显卡','内存','处理器','电源','机箱']
        } 
    },
    components:{
        Item
    },
    methods:{
        goitem:function(item){
            console.log(item);
            this.$router.push('/home/item/' + item);
        }
    }
}
</script>

<style>
.le{
    float: left;
    height: 100%;
    width: 10%;
    border: 1px black solid;
    margin-right: 60px;
}
.ce{
    float: left;
    height: 100%;
    width: 58%;
    border: 1px black solid;
    margin-right: 50px;
}
.ri{
    float: left;
    height: 100%;
    width: 25%;
    border: 1px black solid;
}
</style>