<template>
  <div class="catalogue">
    <div class="box" v-for="(item,index) in CatalogueList" :key="index">
      <p>PROJECT {{index+1}}</p>
      <b>{{item.title}}</b>
      <ul v-for="(it,ind) in item.list" :key="ind">
        <li>{{it}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['CatalogueList'],
}
</script>

<style lang="scss" scoped>
  .catalogue {
    width: 100%;
    height: auto;
    margin-bottom: .5rem;
    .box {
      width: 100%;
      height: auto;
      padding: .3rem;
      box-sizing: border-box;
      margin-bottom: .2rem;
      background: #fff;
      p {
        font-size: .14rem;
        color: #9B9B9B;
        letter-spacing: 1.98px;
        font-family: PingFangSC-Regular;
      }
      b {
        font-size: .18rem;
        color: #333333;
        padding-top: .3rem;
        padding-bottom: .2rem;
        display: inline-block;
      }
      ul li {
        font-size: .12rem;
        color: #5E5E5E;
        line-height: .26rem;
        font-family: PingFangSC-Regular;
      }
    }
  }

</style>
