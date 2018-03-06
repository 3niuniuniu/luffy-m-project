<template>
  <div class="description">
    <p class="t1">LuffyX学位课程</p>
    <div class="cont">
      <p class="p1">{{bannerItem.name}}</p>
      <ul>
        <li>
          <p>本期开课时间</p>
          <span>{{bannerItem.time}}</span>
        </li>
        <li>
          <p>本期限定席位</p>
          <span>{{bannerItem.num}}</span>
        </li>
        <li>
          <p>课程预览人数</p>
          <span>{{bannerItem.people}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bannerItem'],
  data () {
    return {

    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  .description {
    width: 100%;
    height: 2.1rem;
    position: relative;
    .banner {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    }
    .t1 {
      position: absolute;
      left: .2rem;
      top: .15rem;
      color: #FFFFFF;
    }
    .cont {
      width: 100%;
      color: #fff;
      padding-top: .62rem;
      position: absolute;
      .p1 {
        font-size: .24rem;
        padding-bottom: .2rem;
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
        padding: 0 .5rem;
        span {
          font-size: .18rem;
          text-align: left;
          padding-top: .12rem;
          display: inline-block;
          letter-spacing: 3px;
        }
      }
    }
  }

</style>
