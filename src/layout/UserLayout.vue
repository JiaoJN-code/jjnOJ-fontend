<template>
  <div id="userLayout">
    <a-layout style="height: 400px">
      <a-layout-header class="header">
        <h1>登录布局</h1>
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="">智慧教育平台判题系统</a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#userLayout {
}

#userLayout .header {
  margin-bottom: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#userLayout .content {
  background-color: bisque;
  margin-bottom: 16px;
  padding: 20px;
}

#userLayout .footer {
  background-color: #eee;
  padding: 16px;
  position: fixed;
  bottom: 0px;
  left: 0px;
  right: 0px;
  text-align: center;
  font-size: 20px;
}
</style>
