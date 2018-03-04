<template>
	<div class="header">
    <img src="../assets/img/pageimgs/back_arrow.png" alt="" @click="goBack">
		<span>{{message}}</span>
	</div>
</template>
<script type="text/javascript">
  import Vue from 'vue'

	export default {
    props: ['message'],
    methods: {
      goBack () {
        this.$router.go(-1)
      }
    }
	}
</script>
<style lang="scss" scoped>
  .header {
    width: 100%;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    font-size: .17rem;
    color: #fff;
    background-image: linear-gradient(-90deg, #72D98F 0%, #72D9CE 100%);
    position: fixed;
    left: 0;top:0;
    z-index: 999;
    img {
      width: .15rem;
      height: .16rem;
      position: absolute;
      left: .1rem;
      bottom: .15rem;
    }
  }
</style>
