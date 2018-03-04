<template>
  <div class="evaluate">
    <div class="grade">
      <div>
        <p class="starlevel">
          <span>综合评分</span>
          <span>10.0
            <img src="../../assets/img/icon/xingxing.png" alt="">
            <img src="../../assets/img/icon/xingxing.png" alt="">
            <img src="../../assets/img/icon/xingxing.png" alt="">
            <img src="../../assets/img/icon/xingxing.png" alt="">
            <img src="../../assets/img/icon/xingxing.png" alt="">
          </span>
          <span>30人评价</span>
        </p>
        <ul>
          <li>
            <p>通俗易通</p>
            <p>10分</p>
          </li>
          <li>
            <p>内容实用</p>
            <p>10分</p>
          </li>
          <li>
            <p>讲解清晰</p>
            <p>10分</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="comment">
      <div class="commList">
        <dl>
          <dt><img src="../../assets/img/pageimgs/Close.png" alt=""></dt>
          <dd>
            <p>WYN289让5789575-</p>
            <p>评论具体内容评论具体内容评论一二三四五六七八九</p>
            <p>30天前</p>
            <div class="reply">
              <p><span>[讲师回复]：</span>感谢对我们的支持，希望学完之后能达到</p>
            </div>
          </dd>
        </dl>
      </div>
      <div class="commList">
        <dl>
          <dt><img src="../../assets/img/pageimgs/Close.png" alt=""></dt>
          <dd>
            <p>WYN289让5789575-</p>
            <p>评论具体内容评论具体内容评论一二三四五六七八九</p>
            <p>30天前</p>
            <div class="reply">
              <p><span>[讲师回复]：</span>感谢对我们的支持，希望学完之后能达到</p>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .evaluate {
    width: 100%;
    height: auto;
    .grade {
      width: 100%;
      height: 1.28rem;
      background: #fff;
      padding-bottom: .12rem;
      margin-bottom: .2rem;
      div {
        padding-left: .3rem;
        padding-right: .3rem;
        .starlevel {
          font-size: .14rem;
          color: #4A4A4A;
          padding-top: .27rem;
          padding-bottom: .17rem;
          border-bottom: 1px solid #DBDFE2;
          span {
            display: inline-block;
          }
          span:nth-of-type(1) {
            font-size: .14rem;
            color: #4A4A4A;
            padding-right: .11rem;
          }
          span:nth-of-type(2) {
            font-size: .24rem;
            color: #FF9000;
            img {
              width: .1rem;
              height: .1rem;
              margin-bottom: .02rem;
              margin-right: .01rem;
              margin-left: .02rem;
            }
          }
          span:nth-of-type(3) {
            font-size: .12rem;
            color: #4A4A4A;
            float: right;
            margin-top: .1rem;
          }
        }
        ul {
          display: flex;
          justify-content: space-between;
          li {
            font-size: .12rem;
            p:nth-of-type(1){
              color: #9B9B9B;
              padding-top: .13rem;
              padding-bottom: .04rem;
            }
            p:nth-of-type(2){
              color: #5E5E5E;
            }
          }
        }
      }
    }
    .comment {
      width: 100%;
      height: auto;
      background: #fff;
      margin-top: .2rem;
      margin-bottom: .5rem;
      .commList:last-child {
        border: none;
      }
      .commList {
        margin: 0 .2rem;
        background: #FFFFFF;
        box-shadow: 0 0 0 0 #DBDFE2;
        border-bottom:1px solid #dfe3e6;
        padding-bottom: .12rem;
        dl {
          display: flex;
          font-size: .12rem;
          padding-top: .2rem;
          dt {
            width: .4rem;
            height: .4rem;
            border-radius: 100%;
            overflow: hidden;
            img{
              width: 100%;
              height: 100%;
            }
          }
          dd {
            flex: 1;
            margin-left: .12rem;
            p:nth-of-type(1) {
              color: #9B9B9B;
              padding-bottom: .05rem;
            }
            p:nth-of-type(2) {
              color: #4A4A4A;
              padding-bottom: .06rem;
            }
            p:nth-of-type(3) {
              color: #999;
              padding-bottom: .06rem;
            }
            .reply {
              width: 100%;
              height: auto;
              background: #F3F5F7;
              padding: .08rem;
              span {
                color: #FA6240;
              }
            }
          }
        }
      }
    }
  }
</style>
