<template>
  <div class="description">
    <p class="t1">LuffyX学位课程</p>
    <div class="cont">
      <p class="p1">{{bannerItem.name}}</p>
      <ul>
        <li>
          <p>{{bannerItem.titleOne}}</p>
          <span>{{bannerItem.time}}</span>
        </li>
        <li>
          <p>{{bannerItem.titleTwo}}</p>
          <span>{{bannerItem.num}}</span>
        </li>
        <li>
          <p>{{bannerItem.titleThree}}</p>
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
        li p {
          font-size: .14rem;
          padding-bottom: .1rem;
        }
        li span {
          font-size: .14rem;
          letter-spacing: .02rem;
        }
      }
    }
  }

</style>
