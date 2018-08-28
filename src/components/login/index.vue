<template>
  <div >
    <mt-field :state="phoneNumState" type="number" v-model="phoneNum" placeholder="请输入您的手机号"></mt-field>
    <mt-field  type="password" v-model="password" placeholder="密码:"></mt-field>
    <div class="registerBtn" @click = "login">登&nbsp;&nbsp;录</div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
