<template>
  <div class="message">
    <div class="box">
      <p class="p1">基本信息</p>
      <p class="p2" v-html="message.contone"></p>
      <p class="p2 p3" v-html="message.conttwo"></p>
      <table border="1">
        <tr v-for="(item,index) in msgTab" :key="index">
          <th width="30%" align="center">{{item.name}}</th>
          <td>{{item.cont}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message','msgTab'],
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .message {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding-bottom: .1rem;
    margin-bottom: .3rem;
    background: #FFFFFF;
    box-shadow: 0 .02rem .08rem 0 #D0D0D0;
    .box {
      margin: .15rem;
    }
    .p1 {
      font-size: .18rem;
      padding-top: .27rem;
      padding-bottom: .17rem;
      color: #4A4A4A;
    }
    .p2 {
      color: #4A4A4A;
      line-height: .18rem;
    }
    .p3 {
      padding-top: .2rem;
      padding-bottom: .4rem;
    }
    table {
      width: 100%;
      height: auto;
      border: 1px solid #D0D0D0;
      tr {
        height: auto;
        th {
          text-align: center;
        }
        td{
          padding: .1rem 0;
          padding-left: .1rem;
        }

      }
    }
  }

</style>
