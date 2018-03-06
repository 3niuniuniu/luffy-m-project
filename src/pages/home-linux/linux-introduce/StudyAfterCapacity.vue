<template>
  <div class="box">
    <img src="../../../assets/img/pageimgs/study-after中级.png" alt="" class="img1" v-if="$route.name == 'linux-medium'">
    <img src="../../../assets/img/pageimgs/study-after高级.png" alt="" class="img1" v-else>
    <div class="cont">
      <p class="p1">学完后达到的能力</p>
      <p class="p2">本课程从最基础的电脑知识开始，逐渐带你深入Linux命令参数、Linux系统结构、Linux磁盘、文件属性、Linux集群搭建、集群相关服务、以及云计算知识等。毕业后，你将至少掌握以下能力:
        1、熟练掌握云服务器使用和服务器硬件知识；<br>
        2、积累大量知名互联网企业故障案例以及故障处理方案；<br>
        3、熟练掌握大量企业实战命令参数，和企业实际应用无缝对接；<br>
        4、熟练掌握文件属性、用户权限、磁盘管理、正则表达式、三剑客命令、多种系统基础知识；<br>
        5、熟练掌握多种数据备份、同步、存储等技术；<br>
        6、熟练掌握多种网站搭建服务；<br>
        7、熟练掌握企业批量管理，批量部署等自动化管理服务；<br>
        8、熟练掌握多种数据存储和缓存；熟练掌握大量企业shell编程项目案例；<br>
        9、熟练掌握系统虚拟化，云计算环境部署与配置过程；<br>
        10、熟练掌握中大型企业上百台以上服务器集群架构真实案例搭建过程。<br>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
  .box {
    width: 90%;
    height: auto;
    margin: 0 auto;
    .img1 {
      width: 100%;
      height: 2.1rem;
      margin-bottom: .34rem;
    }
    .cont .p1 {
      font-size: .18rem;
      color: #4A4A4A;
    }
    .cont .p2 {
      font-size: .12rem;
      color: #5E5E5E;
      letter-spacing: 2px;
      line-height: .2rem;
      padding-top: .15rem;
      padding-bottom: .24rem;
    }
  }

</style>
