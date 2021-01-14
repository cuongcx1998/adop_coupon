<template>
  <div>
    <div v-if="!dialogVisible" class="box__panel--fixed-bottom" @click="dialogVisible = true">
      <div class="box__panel__inner bg-blue">
        クーポンを利用する
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom"
      title="クーポンを利用する"
      :visible.sync="dialogVisible"
      width="99%"
      :before-close="handleClose">
      <div class="el-dialog__img">
        <el-image class="thumb" :src="`/images/img3.svg`"></el-image>
      </div>
      <div class="el-dialog__text text-blue text-center">
        クーポンを利用する場合は <br>
        「使用する」ボタンを <br>
        押してください。
      </div>
      <p class="el-dialog__featured text-center text-pink">お一人様1回限り利用可能</p>
      <div class="el-dialog__button text-center">
        <el-button type="primary" class="el-dialog__button--lg bg-blue text-white" @click="$emit('useCoupon')" round>使用する</el-button>
      </div>
      <p class="el-dialog__note text-center">
        ※商品の取り扱いを確認してから <br>
        「使用する」ボタンを押してください。
      </p>
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
</style>



