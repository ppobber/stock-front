<template>
  <div class="div_content">
    <div class="left-menu">
      <img src="../../../static/logo/stbw.png" alt="logo" width="40" height="40">
      <router-link tag="a" id="t-mpt" to="home">
        <li class="ali">首页</li>
      </router-link>
      <router-link id="t-stp" tag="a" to="stock">
        <li class="ali">股票</li>
      </router-link>
      <router-link id="t-abt" tag="a" to="about">
        <li class="ali">关于</li>
      </router-link>
    </div>
<!--    <div>there should be a.</div>-->
  </div>
</template>

<script>

import my_home from "../my_home";

export default {

}
</script>

<style scoped>
.left-menu {
  /*background: rgb(78, 194, 182);*/
  padding-left: 20px;
  padding-top: 6px;
  padding-bottom: 6px;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}

.ali {
  display: inline-block;
  font-size: 14px;
  color: #f0f8ff;
  font-weight: 100;
}

#t-mpt {
  padding-left: 20px;
}

#t-stp, #t-abt {
  padding-left: 44px;
}

/*a {*/
/*  display: inline-block;*/
/*}*/


</style>