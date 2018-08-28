<template>
  <div class="detil">
      <div class="txt">
        <h3>{{data.title}}</h3>
        <p>作者：{{data.author}}</p>
        <p>出版社：{{data.publisher}}</p>
        <p>价格：{{data.price}}</p>
      </div>
      <div class="img">
        <img :src="data.image" :alt="data.alt" />
      </div>
      <div>
      </div>
  </div>
</template>

<script src="./script.js"></script>

<style lang="scss" scoped src="./style.scss"></style>
