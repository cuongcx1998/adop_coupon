<template>
  <div>
    <!-- DIALOG -->
    <div class="box__panel--fixed-bottom" @click="dialogVisible = true">
      <div class="box__panel__inner bg-blue">
        クーポンを使う
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom camera-dialog-pink"
      v-if="dialogVisible"
      :visible.sync="dialogVisible"
      :show-close="false"
    >
      <div class="el-dialog__img couponSubImg">
        <el-image class="thumb" :src="`/images/couponSubImg.png`"></el-image>
      </div>
      <div class="camera-dialog-pink__coupon-name">
        Try フラワー共通クーポン
      </div>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="ご利用方法" name="tab1">
          ここにキャンペーンの説明が入ります。ここにキャンペーンの 説明が入ります。ここにキャンペーンの説明が入ります。ここ にキャンペーンの説明が入ります。ここにキャンペーンの説明 が入ります。ここにキャンペーンの説明が入ります。
        </el-tab-pane>
        <el-tab-pane label="注意事項" name="tab2">
          タブを切り替えることで注意事項を表示します。タブを切り替 えることで注意事項を表示します。タブを切り替えることで注 意事項を表示します。タブを切り替えることで注意事項を表示 します。タブを切り替えることで注意事項を表示します。タブ を切り替えることで注意事項を表示します。 タブを切り替えることで注意事項を表示します。タブを切り替 えることで注意事項を表示します。タブを切り替えることで注 意事項を表示します。タブを切り替えることで注意事項を表示 します。タブを切り替えることで注意事項を表示します。タブ を切り替えることで注意事項を表示します。 タブを切り替えることで注意事項を表示します。タブを切り替 えることで注意事項を表示します。タブを切り替えることで注 意事項を表示します。タブを切り替えることで注意事項を表示
        </el-tab-pane>
      </el-tabs>

      <div class="box__panel--fixed-bottom" @click="openScan">
        <div class="box__panel__inner bg-blue">
          クーポンを使う
        </div>
      </div>
    </el-dialog>
    <div class="camera-dialog">
      <el-dialog
        class="el-dialog__wrapper--bottom"
        v-if="cameraVisible"
        :visible.sync="cameraVisible"
        :fullscreen="true"
        :show-close="false"
      >
        <client-only v-if="isOpen" :class="{ 'fullscreen': fullscreen }">
          <qrcode-stream @decode="onDecode" @init="onInit">
            <div class="camera-focus"></div>
          </qrcode-stream>
        </client-only>
        <div class="box__panel--fixed-bottom camera-dialog__button-group">
          <div class="box__panel__inner">
            <client-only>
              <qrcode-capture @decode="captureDecode" id="fileImage" :multiple="false" :style="{display: 'none'}"></qrcode-capture>
            </client-only>
            <el-button @click="handleClickOpenFile" id="openFile">
              ライブラリから読み込む
            </el-button>
            <el-button>
              マイ QR コード
            </el-button>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
let qr = {}, QrcodeStream = {}, QrcodeCapture = {}
if (process.browser) {
  qr = require('vue-qrcode-reader');
  QrcodeStream = qr.QrcodeStream;
  QrcodeCapture = qr.QrcodeCapture;
}

export default {
  props: {

  },

  components: {
    QrcodeStream,
    QrcodeCapture
  },

  data() {
    return {
      dialogVisible: true,
      cameraVisible: false,
      result: '',
      error: '',
      isOpen: false,
      activeName: 'tab1'
    }
  },
  methods: {
    handleClick(event) {

    },
    async handleClickOpenFile() {
      const fileInput = document.getElementById('fileImage');
      await fileInput.removeAttribute('capture');
      fileInput.click();
    },
    openScan() {
      this.cameraVisible = true
      this.isOpen = true;
    },

    onDecode (result) {
      this.cameraVisible = false
      this.isOpen = false;
      this.$emit('scanSuccess');
    },

    captureDecode(result) {
      this.$emit('scanSuccess');
    },

    async onInit (promise) {
      const liff = await this.$liff;
      try {
        await promise
      } catch (error) {
        if (error.name === 'NotAllowedError') {
          alert("ERROR: you need to grant camera access permisson");
          liff.openWindow({
            url: this.$nuxt.$route.path,
            external: true
          })
        } else if (error.name === 'NotFoundError') {
          alert("ERROR: no camera on this device");
          liff.openWindow({
            url: this.$nuxt.$route.path,
            external: true
          })
        } else if (error.name === 'NotSupportedError') {
          alert("ERROR: secure context required (HTTPS, localhost)");
          liff.openWindow({
            url: self.$nuxt.$route.path,
            external: true
          })
        } else if (error.name === 'NotReadableError') {
          alert("ERROR: is the camera already in use?");
          liff.openWindow({
            url: this.$nuxt.$route.path,
            external: true
          })
        } else if (error.name === 'OverconstrainedError') {
          alert("ERROR: installed cameras are not suitable");
          liff.openWindow({
            url: this.$nuxt.$route.path,
            external: true
          })
        } else if (error.name === 'StreamApiNotSupportedError') {
          alert("ERROR: Stream API is not supported in this browser");
          liff.openWindow({
            url: this.$nuxt.$route.path,
            external: true
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
