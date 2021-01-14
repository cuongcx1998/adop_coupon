<template>
  <div>
    <div v-if="!dialogVisible" class="box__panel--fixed-bottom" @click="dialogVisible = true">
      <div class="box__panel__inner bg-blue">
        クーポンを利用する
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom qr-clearing-pink"
      title="クーポンを利用する"
      :visible.sync="dialogVisible"
      :before-close="handleClose">
      <div class="el-dialog__img">
        <el-image class="thumb" :src="`/images/Group 94.png`"></el-image>
      </div>
      <div class="el-dialog__text text-center">
        クーポンを<br>
        利用する
      </div>
      <p class="el-dialog__dotted text-center"></p>
      <div class="el-dialog__button text-center">
        <el-button type="primary" class="el-dialog__button--lg bg-blue text-white" @click="$emit('useCoupon')" plain>こちらをクリック <span class="arrow-right">></span></el-button>
      </div>
      <div class="el-dialog__img">
        <el-image class="thumb" :src="`/images/Group 94.png`"></el-image>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      activeName: "tab1",
      dialogVisible: true
    }
  },

  methods: {
    handleClick(event) {

    },

    handleClose(hide) {
      this.$emit('handle-close');
      this.dialogVisible = false;
    }
  }
}
</script>

<style scoped lang="scss">
.el-dialog {
  background-color: $blue;
  &__text {
    @include fontSize(18px);
    @include fontHiragino("6");
  }
  &__note {
    @include fontSize(12px);
    @include fontHiragino("3");
  }
  &__featured {
    @include fontSize(14px);
    @include fontHiragino("3");
  }
}
.qr-clearing-pink {

}
</style>



