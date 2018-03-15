<template>
	<div class="blob">
		<h1>{{ msg }}</h1>
		<Blob />
	</div>
</template>

<script>
import Blob from "./Blob";
export default {
  components: { Blob },
  name: "hello",
  data() {
    return {
      msg: "Sound Blob"
    };
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.blob {
  display: "flex";
  alignitems: "center";
  justifycontent: "center";
  position: "absolute";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
