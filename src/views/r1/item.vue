<template>
    <div id="app">
        <div>{{$route.params.name}}</div>
        <div class="imgs">
            <ul>
                <li v-for="imgg in imglist[$route.params.name]">
                    <div>
                        <img v-bind:src="imgg.url">
                        <div>名称：{{imgg.name}}</div>
                        <div>价格：{{imgg.value}}￥</div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="center">
  <ul class="pagination">
    <li><a href="#">«</a></li>
    <li><a href="#">1</a></li>
    <li><a class="active" href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li><a href="#">6</a></li>
    <li><a href="#">7</a></li>
    <li><a href="#">»</a></li>
  </ul>
</div>
    </div>
</template>

<script>
export default {
    name:'Item',
    data(){
        return{
            itname:this.$route.params.name,
            imglist:{
                主板:[
                    {name:'华硕TUF GAMING B460M-PRO',value:'998',url:require('@/assets/ZB/B460M-PRO.png')},
                    {name:'AMD锐龙R5 3600',value:'999',url:require('@/assets/ZB/AMD锐龙R5.png')},
                    {name:'捷硕 x79',value:'268',url:require('@/assets/ZB/捷硕x79.png')},
                ],
                显卡:[
                    {name:'GTX1650',value:'1769',url:require('@/assets/XK/GTX1650.png')},
                    {name:'GTX970',value:'738',url:require('@/assets/XK/GTX970.png')},
                    {name:'RTX2060',value:'3499',url:require('@/assets/XK/RTX2060.png')},
                    {name:'RTX3060',value:'4299',url:require('@/assets/XK/RTX3060.png')},
                    {name:'RTX3080',value:'16199',url:require('@/assets/XK/RTX3080.png')}
                ],
                内存:[
                    ['1052','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                ],
                处理器:[
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                ],
                电源:[
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                ],
                机箱:[
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                    ['1050','3700',''],
                ],
                    
               
            },
            props:{
                itname:String
            }
        } 
    }
}
</script>

<style scoped>
.imgs{
    display: flex;
    flex-wrap: wrap;
    justify-content:flex-start;
    width: 100%;
    height: 85%;
}
.imgs img{
    width: 200px;
    height: 200px; 
}
.imgs ul li{
float:left;
margin:10px 22px;
list-style:none;
display:block;
}
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {display: inline;}

ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    transition: background-color .3s;
    border: 1px solid #ddd;
}

ul.pagination li a.active {
    background-color: #4CAF50;
    color: white;
    border: 1px solid #4CAF50;
}

ul.pagination li a:hover:not(.active) {background-color: #ddd;}

div.center {text-align: center;}
</style>