<template>
  <div id="home">
    <h1>Yuma Naito</h1>
    <h1>Self-introduction</h1>
    <div class="social">
      <a href="https://twitter.com/yumauma20" class="link twitter" target="_brank">
        <span class="fa fa-twitter"></span>
      </a>
      <a href="https://github.com/yumauma20" class="link github" target="_brank">
        <span class="fab fa-github"></span>
      </a>
    </div>
  </div>
</template>

<style>
  .social {
  padding-top: 5em;
  width: 100%;
  top: 50%;
  text-align: center;
}
.social .link {
  display: inline-block;
  vertical-align: middle;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid black;
  background-clip: content-box;
  padding: 10px;
  transition: .5s;
  color: #D7D0BE;
  margin: 30px;
  font-size: 70px;
}
.social .link span {
  display: block;
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.social .link:hover {
  padding: 20px;
  margin-left: -5px;
}
.social .link.github {
  color: black;
}
.social .link.twitter {
  color: rgb(0, 183, 255);
}

</style>
