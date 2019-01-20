<template>
  <div class="modal wrapper" @click.self="$emit('close')">
    <div class="block">
      <div class="close">
        <img @click="$emit('close')" src="@/assets/close.png" alt="">
      </div>
      <div class="title" v-html="title">
      </div>
      <div class="body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["title"],
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal {
  &.wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .block {
    max-width: 423px;
    width: 80%;
    position: relative;
    .close {
      img {
        width: 27px;
        position: absolute;
        top: -10px;
        right: -10px;
        cursor: pointer;
        z-index: 99;
      }
    }
    .title {
      background-color: #e66e6d;
      color: #fff;
      text-align: center;
      font-size: 19.7px;
      height: 60px;
      line-height: 60px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }
    .body {
      font-size: 16.9px;
      color: #5c5d5d;
      padding: 30px;
      background-color: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      line-height: 24px;
      min-height: 300px;
    }
    @media only screen and (max-width: 768px) {
      width: 90%;   
    }
  }
}
</style>
