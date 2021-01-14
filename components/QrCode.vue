<template>
  <div>
    <!-- DIALOG -->
    <div v-if="!dialogVisible" class="box__panel--fixed-bottom" @click="dialogVisible = true">
      <div class="box__panel__inner bg-blue">
        クーポンを利用する
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom header-blue"
      title="クーポンを利用する"
      :visible.sync="dialogVisible"
      width="100%"
    >
      <p class="el-dialog__featured text-pink">この画面を係員にご提示ください。</p>
      <p class="el-dialog__text text-center">
        クーポン名が入ります
      </p>
      <div class="el-dialog__qr">
        <vue-qr text="Hello world!" :size="150"></vue-qr>
      </div>
      <div class="el-dialog__button text-center">
        <el-button type="primary" class="el-dialog__button--lg bg-blue text-white" @click="$emit('useQrCode')" round>使用する</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import VueQr from "vue-qr";
  export default {
    components: {
      VueQr
    },

    props: {

    },

    data() {
      return {
        dialogVisible: false
      }
    }
  }
</script>
