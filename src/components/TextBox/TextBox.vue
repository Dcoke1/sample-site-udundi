<script>
export default {
  data() {
    return {
      zoom: "zoomInLeft",
    };
  },
  methods: {
    addClass: function () {
      this.zoom = "zoomOutLeft";
      setTimeout(() => {
        this.zoom = "zoomInLeft";
      }, 1000)
    },
  },
};
</script>

<template>
  <div class="TextBoxModal">
    <div
      class="modal fade"
      id="vue-modal"
      tabindex="-1"
      aria-labelledby="modal-label"
      aria-hidden="true"
      @click="addClass"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content" v-bind:class="zoom">
          <div class="modal-header fadeIn">
            <h5 class="modal-title" id="modal-label">Explore</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body fadeIn">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit
            amet libero placerat ligula rhoncus tincidunt at non ex. Curabitur
            sed tristique metus, sed vulputate diam. Nam eu feugiat libero.
            Pellentesque mi justo, imperdiet sed vulputate vel, porttitor id
            turpis. Suspendisse nec nunc at mauris rutrum ornare. Aliquam
            imperdiet maximus dui, nec posuere nibh. Maecenas scelerisque rutrum
            venenatis. Vestibulum varius viverra ultricies. Aliquam quis urna
            hendrerit eros condimentum aliquet. Ut varius est eget lorem
            aliquet, sed egestas diam euismod.
          </div>
          <div class="modal-footer fadeIn">
            <button type="button" class="btn btn-primary red">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
