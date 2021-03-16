<template>
  <div id="app" >
    
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {

        name:'app',

}
</script>

<style>
  #app{
    height: 100%;
  }
  .main{
    background-color: #ededed;
    overflow: hidden;
    width: 100%;
  }
  #building{
  background:url("assets/molv_back.jpeg");
  width:100%;	
  height:100%;		
  position:fixed;
  background-size:100% 100%;}
</style>
