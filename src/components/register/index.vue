<template>
  <div >
    <mt-field :state="phoneNumState" type="number" v-model="phoneNum" placeholder="请输入您的手机号"></mt-field>
    <mt-field placeholder="验证码" type="number" v-model="code" :state="codeState">
    <span @click.stop = "sendCode">{{ codeStr }}</span>
    </mt-field>
    <mt-field :state="passwordState" type="password" v-model="password" placeholder="密码:不能少于6位"></mt-field>
    <div class="registerBtn" @click = "register">注&nbsp;&nbsp;册</div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" src="./style.scss"></style>
