<template>
  <div>
    <div class="slider-content">
      <div class="avatar">
        <img :src="avatarImg" />
      </div>
      <div class="user-info">
        <div class="name">myway</div>
        <div class="desc">web developer</div>
        <div class="github-follow-btn"  v-ripple>
          <i class="iconfont icon-github"></i> github
        </div>
      </div>
      <Menu />
      <Firefly />
    </div>
    <div class="main-content">
    <q-scroll-area class="scroll-content">
      <router-view></router-view>
    </q-scroll-area>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import avatarImg from '../assets/avatar.jpeg';
import Firefly from '../components/Firefly.vue';
import { queryArticleList } from '../service';
import Menu from '../components/Menu.vue';

export default defineComponent({
  components: { Firefly,Menu },
  setup: () => {
    // const res = await queryArticleList({
    //   current: 1,
    //   pageSize: 10,
    // });
    return {
      avatarImg,
    };
  },
});
</script>

<style lang="scss">
body {
  background-color: #2f3138;
  min-height: 100vh;
}

.card-user {
  margin: 50px;
  width: 400px;
  height: 300px;
  border-radius: 6px;
  transition: all 0.2s ease;
  border-color: #d1d9e6;
  background: linear-gradient(145deg, #fefefe, #d5d5d5);
  box-shadow: 3px 3px 6px #b8b9be, -3px -3px 6px #fff;
}

.slider-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  bottom: 0;
  padding-top: 30px;

  .avatar {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    border-radius: 50%;
    overflow: hidden;
    padding: 8px;
    background-color: #c5c0c0;
    // box-shadow: 8px 8px 6px rgba(255, 255, 255, .5), -8px -8px 16px rgba(0, 0, 0, .2), -8px 8px 16px rgba(0, 0, 0, .2), 8px -8px 16px rgba(0, 0, 0, .2);
    box-shadow: inset 5px 5px 28px #070808, inset -9px -9px 38px #070808,
      5px 5px 8px #2c2e31, -5px -5px 8px #3e4140;

    img {
      width: 100%;
      opacity: 0.7;
      border-radius: 50%;
    }
  }

  .user-info {
    padding: 10px 0;
    text-align: center;

    .name {
      text-align: center;
      font-size: 16px;
      color: #fdfdfd;
      font-weight: bold;
    }

    .desc {
      text-align: center;
      font-size: 12px;
      color: #dfdcd9;
    }
  }

  .github-follow-btn {
    transform: scale(0.9);
    display: inline-block;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    text-align: center;
    color: #fefefe;
    background: #454547;
    border-radius: 6px;
    font-size: 12px;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid #696a6d;
    box-shadow: 6px 6px 48px #1f2025, -6px -6px 48px #3f424b;
    background: linear-gradient(145deg, #2a2c32, #32343c);
    box-shadow: 6px 6px 13px #18191c, -6px -6px 13px #3e4046;

    .icon-github {
      float: left;
      margin-right: 6px;
    }
  }
}

.main-content {
  position: absolute;
  top: 0;
  left: 300px;
  right: 0;
  bottom: 0;
  background-color: #43474b;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  box-shadow: 0 5px 6px -3px rgba(0, 0, 0, 0.5),
    0 9px 12px 1px rgba(0, 0, 0, 0.6), 0 3px 16px 2px rgba(0, 0, 0, 0.5);
    // overflow-y: auto;
    // padding: 40px 0;
    overflow: hidden;
}
.scroll-content{
  height: 100%;
}
</style>
