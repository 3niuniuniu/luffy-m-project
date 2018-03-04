<template>
  <div class="catalog">
    <div class="chapter">
      <p class="num">第1章-Python基础语法</p>
      <ul class="list">
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
      </ul>
      <div class="more" @click="More($event)">点击查看更多</div>
    </div>
    <div class="chapter">
      <p class="num">第1章-Python基础语法</p>
      <ul class="list">
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
      </ul>
      <div class="more" @click="More($event)">点击查看更多</div>
    </div>
    <div class="chapter">
      <p class="num">第1章-Python基础语法</p>
      <ul class="list">
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
        <li>
          <p>1-1 Python全栈开发课程开课Python全栈开发课程开课Python全栈开发课程开课</p>
          <p><span>43:20</span></p>
        </li>
      </ul>
      <div class="more" @click="More($event)">点击查看更多</div>
    </div>
  </div>
</template>

<script>
import { ViewBox } from 'vux'

export default {
  data () {
    return {
      allH: false,
    }
  },
  components: {
    ViewBox
  },
  methods: {
    More (e) {
      this.allH = !this.allH
      if (this.allH) {
        e.target.innerHTML = '点击收起'
        e.target.previousElementSibling.style.height = 'auto'
        e.target.style.color = '#9B9B9B'
      } else {
        e.target.innerHTML = '点击查看更多'
        e.target.previousElementSibling.style.height = '2.05rem'
        e.target.style.color = '#4a4a4a'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .catalog {
    height: auto;
    background: #f3f5f7;
    .chapter {
      margin-bottom: .2rem;
      background: #fff;
      .num {
        font-size: .14rem;
        color: #9B9B9B;
        padding: .11rem .2rem;
      }
      .list {
        width: 100%;
        height: 2.05rem;
        overflow: hidden;
        border-top: 1px solid #dfe3e6;
        border-bottom: 1px solid #dfe3e6;
        li {
          padding-top: .2rem;
          padding-left: .2rem;
          font-size: .12rem;
          color: #4A4A4A;
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          p:nth-of-type(1) {
            width: 2.2rem;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(2) {
            color: #9B9B9B;
            padding-right: .1rem;
          }
        }
        li:last-child {
          padding-bottom: .2rem;
        }
      }
      .more {
        padding: .12rem 0;
        text-align: center;
        color: #4A4A4A;
      }
      .allH {
        height: auto;
      }
      .packCol {
        color: #9B9B9B;
      }
    }
  }
  .chapter:last-child {
    margin-bottom: 0;
  }
</style>
