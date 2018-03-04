<template>
  <!-- <div class="exchange" v-show="exchange"> -->
    <x-dialog
      v-model="exchange"
      >
      <div class="box" >
        <p>兑换优惠劵</p>
        <input type="text" placeholder="输入兑换码">
        <p><span @click="exchangeHide">取消</span><span>兑换</span></p>
      </div>
    </x-dialog>
  <!-- </div> -->
</template>

<script>
import {XDialog} from 'vux'

export default {
  props: ['exchange'],
  components: {
    XDialog
  },
  data () {
    return {
      exchange1: false,
    }
  },
  mounted () {
  },
  methods: {
    exchangeHide () {
      this.$emit('Exchange',false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .exchange {
    width: 100%;
    height: 100%;
    background: rgba(51,51,51,0.50);
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
  }
  .box {
    height: 1.6rem;
    background: #FFFFFF;
    border-radius: 3px;
    p:first-child {
      padding-top: .25rem;
      color: #666666;
    }
    input {
      width: 82%;
      height: .36rem;
      border: 1px solid #E8E8E8;
      border-radius: 2px;
      margin-top: .17rem;
      text-indent: .1rem;
    }
    p:last-child{
      float: right;
      color: #909CB7;
      margin-top: .2rem;
      margin-right: .25rem;
      span:first-child {
        margin-right: .23rem;
      }
      span:last-child {
        color: #72D9C2;
      }
    }
  }
</style>
