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

<script>
export default {
  mounted() {
    /* autocomplete search feature */

    const originAutocomplete = new google.maps.places.Autocomplete(
      this.$refs["origin"],
      {
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(45,-75)
        )
      }
    );

    originAutocomplete.addListener("place_changed", () => {
      console.log(originAutocomplete.getPlace());
    });

    const destinationAutocomplete = new google.maps.places.Autocomplete(
      this.$refs["destination"],
      {
        bounds: new google.maps.LatLngBounds(
          new google.maps.LatLng(45,-75)
        )
      }
    );

    destinationAutocomplete.addListener("place_changed", () => {
      console.log(destinationAutocomplete.getPlace());
    });
  }
};
</script>
