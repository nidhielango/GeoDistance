<template>
  <section class="form">
    <div class="ui form">
      <div class="ui message red small" v-show="error">{{error}}</div>
      <div class="two fields">
        <div class="field">
          <div class="ui left icon input">
            <i class="marker alternate icon"></i>
            <input type="text" placeholder="Origin" ref="origin" />
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="flag checkered icon"></i>
            <input type="text" placeholder="Destination" ref="destination" />
          </div>
        </div>
        <button
          class="ui button small red"
          :class="{loading:spinner}"
          @click="calculateButtonPressed"
        >Calculate</button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.form {
    position:relative;
    z-index:1;
    max-width: 610px;
    margin: 10px;

}

</style>