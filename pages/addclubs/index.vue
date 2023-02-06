<template>
  <div>
    <Headertop><img class="w100 h100 obfit" src="/img/std.jpg" /></Headertop>
    <Addclubs/>
  </div>
</template>
<style scoped>
section ul li {
  width: 200px;
  height: 200px;
  background-image: linear-gradient(45deg, var(--bg1), var(--bg3));
  border-radius: 50%;
}
section ul li:hover {
  transform: scale(1.1);
  transition: all 0.5s;
}

section ul li a {
  width: 96%;
  height: 96%;
  background-color: var(--bg2);
  color: var(--opa);
  border-radius: 50%;
  font-size: 30px;
}
</style>