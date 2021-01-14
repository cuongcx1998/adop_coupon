<template>
  <div class="camera-dialog">
    <!-- DIALOG -->
    <div class="box__panel--fixed-bottom" @click="openScan()">
      <div class="box__panel__inner bg-blue">
        カメラを起動してクーポンを利用する
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom"
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      :show-close="false"
    >
      <client-only v-if="isOpen" :class="{ 'fullscreen': fullscreen }" class="camera">
        <qrcode-stream @decode="onDecode" @init="onInit" />
      </client-only>
    </el-dialog>
  </div>
</template>

<script>
  let qr = {}, QrcodeStream = {};
  if (process.browser) {
    qr = require('vue-qrcode-reader');
    QrcodeStream = qr.QrcodeStream;
  }

  export default {
    props: {

    },

    components: {
      QrcodeStream
    },

    data() {
      return {
        dialogVisible: false,
        result: '',
        error: '',
        isOpen: false,
      }
    },
    methods: {
      openScan() {
        this.dialogVisible = true
        this.isOpen = true;
      },

      onDecode (result) {
        this.dialogVisible = false
        this.isOpen = false;
        this.$emit('scanSuccess');
      },

      async onInit (promise) {
        try {
          await promise
        } catch (error) {
          if (error.name === 'NotAllowedError') {
            alert("ERROR: you need to grant camera access permisson");
            const self = this;
            this.$liff.then(liff => {
              liff.openWindow({
                url: self.$nuxt.$route.path,
                external: true
              })
            })
          } else if (error.name === 'NotFoundError') {
            alert("ERROR: no camera on this device");
            const self = this;
            this.$liff.then(liff => {
              liff.openWindow({
                url: self.$nuxt.$route.path,
                external: true
              })
            })
          } else if (error.name === 'NotSupportedError') {
            alert("ERROR: secure context required (HTTPS, localhost)");
            const self = this;
            this.$liff.then(liff => {
              liff.openWindow({
                url: self.$nuxt.$route.path,
                external: true
              })
            })
          } else if (error.name === 'NotReadableError') {
            alert("ERROR: is the camera already in use?");
            const self = this;
            this.$liff.then(liff => {
              liff.openWindow({
                url: self.$nuxt.$route.path,
                external: true
              })
            })
          } else if (error.name === 'OverconstrainedError') {
            alert("ERROR: installed cameras are not suitable");
            const self = this;
            this.$liff.then(liff => {
              liff.openWindow({
                url: self.$nuxt.$route.path,
                external: true
              })
            })
          } else if (error.name === 'StreamApiNotSupportedError') {
            alert("ERROR: Stream API is not supported in this browser");
            const self = this;
            this.$liff.then(liff => {
              liff.openWindow({
                url: self.$nuxt.$route.path,
                external: true
              })
            })
          }
        }
      }
    }
  }
</script>

<style type="scss" scoped>
.fullscreen {
  position: fixed;
  z-index: 99999;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
