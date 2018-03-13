<template>
  <x-dialog
    v-model="exchange"
    >
    <div class="box" >
      <p>兑换优惠劵</p>
      <input type="text" placeholder="输入兑换码" v-model="number">
      <p><span @click="exchangeHide">取消</span><span @click="getPre">兑换</span></p>
    </div>
    <cell @click.native="showModuleAuto" v-show="onShow"></cell>
  </x-dialog>
</template>

<script>
import {XDialog, AlertModule, Alert, Group, XSwitch, Cell, TransferDomDirective as TransferDom} from 'vux'

export default {
  props: ['exchange'],
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    Alert,
    Group,
    XSwitch,
    Cell
  },
  data () {
    return {
      number: '',
      onShow: false,
      content: '',
    }
  },
  mounted () {
  },
  methods: {
    exchangeHide () {
      this.$emit('Exchange',false)
    },
    showModule () {
      AlertModule.show({
        content: this.content,
      })
    },
    showModuleAuto () {
      this.showModule()
    },
    getPre () {
      this.$http.post('/api/v1/coupon/',{
        number: this.number
      }).then(res => {
        this.exchangeHide()
        this.content = res.data.error_msg
        this.showModuleAuto()
      })
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
