<template>
  <div class="catalog">
    <div class="chapter" v-for="(item,index) in courseItem" :key="index">
      <p class="num">{{courseItem[index].name}}</p>
      <ul class="list">
        <li v-for="(itm,ind) in item.coursesections" :key="ind">
          <p>{{itm.name}}</p>
          <p><span>{{itm.video_time}}</span></p>
        </li>
      </ul>
      <div class="more" @click="More($event)">点击查看更多</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['courseItem'],
  data () {
    return {
      allH: false,
    }
  },
  mounted () {

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
        li:hover {
          color: #72D9C2;
        }
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
            width: 3rem;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p:nth-of-type(2) {
            color: #9B9B9B;
            padding-right: .1rem;
            span {
              width: .35rem;
              display: inline-block;
              letter-spacing: 1px;
            }
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
    .chapter:last-child {
      margin-bottom: 0;
    }
    .chapter:first-child {
      .num {
        padding-top: .3rem;
      }
    }
  }
  .empty {
    padding-top: .8rem !important;
  }
</style>
