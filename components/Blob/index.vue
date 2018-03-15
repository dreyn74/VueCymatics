<template>
  <canvas class="cymatics" ref="el" />
</template>

<script>
import startRender from "./render";

// Blob which reacts to sound through the microphone.
export default {
  data() {
    return {
      // el: "#cymatics"
    };
  },
  mounted() {
    this.onRef(this.$refs.el);
  },
  methods: {
    onRef: el => {
      startRender(el);
    }
  }
};
</script>

<style>
.cymatics {
  height: "100vmin";
  width: "100vmin";
}
</style>
