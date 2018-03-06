<template>
  <div class="comment">
    <div class="EvaList" v-for="(item,index) in CommentList" :key="index">
      <div class="user">
        <img :src="item.stu_info.stu_avatar" alt="">
        <div class="msg">
          <b>{{item.stu_info.stu_username}}</b>
          <p>{{item.stu_info.stu_sign}}</p>
        </div>
      </div>
      <div class="cont">
        <p><b>报名此课程原因：</b><span>{{item.why_take_this_course}}</span></p>
        <p><b>为何选路飞：</b><span>{{item.why_choose_us}}</span></p>
        <p><b>你的期待：</b><span>{{item.your_expectation}}</span></p>
      </div>
      <span class="time">{{item.review_date}}</span>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  data () {
    return {
      limit: 1000,
      CommentList: ''
    }
  },
  mounted () {
    this.$http.get('/api/v1/degree_course/1/reviews/?limit='+ +this.limit +'').then(res => {
      this.CommentList = res.data.data.results
    })
  },
}
</script>

<style lang="scss" scoped>
  .comment {
    width: 100%;
    height: auto;
    margin-bottom: .6rem;
    .EvaList {
      width: 90%;
      height: auto;
      margin: 0 auto;
      border-bottom: 1px solid #DBDFE2;
      padding-top: .2rem;
      padding-bottom: .2rem;
      .user {
        display: flex;
        align-items: center;
        margin-bottom: .15rem;
        img {
          width: .5rem;
          height: .5rem;
          margin-right: .13rem;
        }
        .msg b {
          font-size: .16rem;
          color: #606264;
          padding-bottom: .04rem;
        }
        .msg p {
          font-size: .12rem;
          color: #9B9B9B;
        }
      }
      .cont {
        p {
          line-height: .24rem;
          padding-bottom: .15rem;
        }
        b {
          font-size: .14rem;
          color: #606264;
        }
        span {
          font-size: .12rem;
          color: #000028;
        }
      }
      .time {
        font-size: .14rem;
        color: #9D9D9D;
      }
    }
    .EvaList:last-child {
      border: none;
    }
  }

</style>
