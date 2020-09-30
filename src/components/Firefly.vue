<template>
  <div class="checkbox-wrap-firefly">
    <input class="checkbox" id="checkbox-firefly" type="checkbox" />
    <label class="firefly" for="checkbox-firefly">
      <div class="abdomen">
        <div class="thorax">
          <div class="head">
            <div class="eyes"></div>
            <div class="antennae"></div>
          </div>
        </div>
        <div class="wings">
          <div class="wing wing-a"></div>
          <div class="wing wing-b"></div>
        </div>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  setup () {
    return {};
  },
});
</script>

<style lang="scss">
.checkbox-wrap-firefly {
  flex: none;
  position: absolute;
  bottom: 20px;
  left: 0px;
  width: 10%;
  min-width: 8em;
  z-index: 1;
  font-size: 1px;
  &:after {
    content: "";
    display: block;
    padding-top: 50%;
  }

  .checkbox {
    display: none;
  }

  .checkbox:checked ~ .firefly .abdomen {
    background: #27231e;
    box-shadow: inset 0 0 1.5em rgba(150, 0, 0, 0.75);
    animation: flicker 4000ms ease infinite;
  }

  .checkbox:checked ~ .firefly .wing-a {
    transform: rotate(30deg);
  }

  .checkbox:checked ~ .firefly .wing-b {
    transform: rotate(-30deg);
  }

  .head {
    position: absolute;
    top: 15%;
    left: 60%;
    bottom: 15%;
    background: #27231e;
    width: 70%;
    border-radius: 40% 80% 80% 40%;
    box-shadow: inset -0.1em 0 0 0.3em rgba(14, 10, 10, 0.2);
  }

  .eyes {
    position: absolute;
    top: -5%;
    right: 10%;
    bottom: -5%;
    width: 35%;
  }

  .eyes:before,
  .eyes:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    border-radius: 100%;
    background: #0e0a0a;
    padding-top: 100%;
  }

  .eyes:before {
    top: 0;
  }

  .eyes:after {
    bottom: 0;
  }

  .antennae {
    position: absolute;
    top: 20%;
    left: -150%;
    bottom: 20%;
    width: 400%;
    z-index: -1;
  }

  .antennae:before,
  .antennae:after {
    content: "";
    display: block;
    position: absolute;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    border-color: #0e0a0a;
    border-style: solid;
    padding-top: 65%;
    border-width: 0.25em 0.25em 0.25em 0;
  }

  .antennae:before {
    top: 80%;
    border-radius: 0 100% 100% 100%;
  }

  .antennae:after {
    bottom: 80%;
    border-radius: 100% 100% 100% 0;
  }

  .thorax {
    position: absolute;
    top: 0;
    left: 100%;
    bottom: 0;
    background: #d43b1f;
    width: 30%;
    border-radius: 20% 80% 80% 20%;
    box-shadow: inset -0.1em 0 0.1em 0.3em rgba(0, 0, 0, 0.2);
  }

  .abdomen {
    position: absolute;
    top: 10%;
    right: 20%;
    bottom: 10%;
    background: #27231e;
    width: 100%;
    transition: all 1000ms ease;
    border-radius: 100% 30% 30% 100%;
    box-sizing: border-box;
  }

  .abdomen:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: repeating-linear-gradient(
      90deg,
      transparent 0,
      transparent 15%,
      rgba(0, 0, 20, 0.1) 15%,
      rgba(0, 0, 20, 0.1) 20%
    );
    mix-blend-mode: multiply;
    border-radius: 100% 30% 30% 100%;
    z-index: 0;
    box-shadow: inset -1em 0 0.2em 0.3em rgba(0, 0, 0, 0.1);
  }

  .wings {
    position: absolute;
    top: -20%;
    right: 0;
    bottom: -20%;
    left: -5%;
    z-index: 1;
  }

  .wings .wing {
    position: absolute;
    right: 0;
    background: repeating-linear-gradient(
      #27231e 0%,
      #27231e 40%,
      #191613 40%,
      #191613 60%
    );
    width: 100%;
    height: 50%;
    transition: all 200ms ease-out;
    border: 1px solid #40341d;
    box-sizing: border-box;
    box-shadow: inset 0.2em 0 0.1em 0.5em rgba(0, 0, 0, 0.5);
  }

  .wings .wing.wing-a {
    transform-origin: bottom right;
    top: 0;
    border-radius: 90% 30% 0 20%;
  }

  .wings .wing.wing-b {
    transform-origin: top right;
    top: 50%;
    border-radius: 20% 0 30% 90%;
  }

  @keyframes flicker {
    0%,
    100% {
      background: #fefa01;
      box-shadow: 0 0 1em #fefa01, inset -0.25em 0 0 0.5em rgba(14, 10, 10, 0.1);
    }

    30%,
    70% {
      background: #fffd99;
      box-shadow: -1em 0 8em 1em #fefa01,
        inset -0.25em 0 0 0.5em rgba(14, 10, 10, 0.1);
    }

    50% {
      box-shadow: -1em 0 8em 1em rgba(254, 250, 1, 0.8),
        inset -0.25em 0 0 0.5em rgba(14, 10, 10, 0.1);
    }
  }
}
</style>
