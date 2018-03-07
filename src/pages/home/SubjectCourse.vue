<template>
  <div class="subject">
    <p class="model">专题课程</p>
    <div class="list">
      <dl v-for="(item,index) in HomeCourse" :key="index">
        <dt><img :src="item.img" alt=""></dt>
        <dd>
          <p>{{item.name}}</p>
          <p>难度：{{item.level}}</p>
          <p>¥ {{item.price}}</p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import HomeCourse from '../../mock/home/HomeCourse.json'
export default {
 data () {
   return {
     HomeCourse: HomeCourse
   }
 },
 mounted () {
 }
}
</script>

<style lang="scss" scoped>
  .subject {
    margin-top: .2rem;
    margin-left: .1rem;
    margin-right: .1rem;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,0.10);
    border-radius: 5px;
    .model {
      font-size: .14rem;
      color: #2B333B;
      padding-left: .2rem;
      padding-top: .2rem;
      padding-bottom: .14rem;
    }
    .list {
      padding-left: .2rem;
      padding-right: .2rem;
      padding-bottom: .1rem;
      dl {
        display: flex;
        margin-bottom: .22rem;
        dt {
          width: 1rem;
          height: .67rem;
          border-radius: 4px;
          img {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        }
        dd {
          flex: 1;
          padding-left: .1rem;
          p:nth-of-type(1) {
            font-size: .15rem;
            color: #131F3C;
            letter-spacing: 0;
            padding-bottom: .07rem;
          }
          p:nth-of-type(2) {
            font-size: .12rem;
            color: #909CB7;
            padding-bottom: .05rem;
          }
          p:nth-of-type(3) {
            font-size: .12rem;
            color: #FA6240;
          }
        }
      }
    }
  }

</style>
