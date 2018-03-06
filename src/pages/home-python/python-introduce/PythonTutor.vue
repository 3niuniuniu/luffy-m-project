<template>
  <div class="tutor">
    <p class="title"><span>讲师团队</span></p>
    <div class="box">
      <dl>
        <dt><img src="../../../assets/img/pageimgs/teacher1.png" alt=""></dt>
        <dd>
          <p>Alex</p>
          <p>路飞学城导师</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="../../../assets/img/pageimgs/teacher1.png" alt=""></dt>
        <dd>
          <p>Alex</p>
          <p>路飞学城导师</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="../../../assets/img/pageimgs/teacher1.png" alt=""></dt>
        <dd>
          <p>Alex</p>
          <p>路飞学城导师</p>
        </dd>
      </dl>
      <dl>
        <dt><img src="../../../assets/img/pageimgs/teacher1.png" alt=""></dt>
        <dd>
          <p>Alex</p>
          <p>路飞学城导师</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    if (this.$route.name == 'python-advanced') {
      $('.tutor').css('margin-bottom','.8rem')
    }
  }
}
</script>

<style lang="scss" scoped>
  .tutor {
    width: 90%;
    height: auto;
    margin: 0 auto;
    margin-bottom: .2rem;
    .title {
      font-size: .16rem;
      color: #4A4A4A;
      border-bottom: 1px solid #E9E9E9;
      padding-bottom: .05rem;
      margin-bottom: .2rem;
      span {
        padding-bottom: .05rem;
        border-bottom: 1px solid #333;
      }
    }
    .box {
      width: 100%;
      height: auto;
      background: #FFFFFF;
      border: 1px solid #E1E1E1;
      display: flex;
      flex-wrap: wrap;
      padding-bottom: .2rem;
      dl {
        width: 33.3%;
        text-align: center;
        padding: 0 .2rem;
        padding-top: .2rem;
        box-sizing: border-box;
        img {
          width: .5rem;
          height: .5rem;
          padding-bottom: .05rem;
        }
        dd p:nth-of-type(1) {
          font-size: .14rem;
          color: #4A4A4A;
        }
        dd p:nth-of-type(2) {
          font-size: .12rem;
          color: #9B9B9B;
        }
      }
    }
  }

</style>
