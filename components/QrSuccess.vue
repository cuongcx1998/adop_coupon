<template>
  <div>
    <div v-if="!dialogVisible" class="box__panel--fixed-bottom" @click="dialogVisible = true">
      <div class="box__panel__inner bg-blue">
        クーポンを利用する
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom el-dialog__wrapper--success"
      title="クーポンを利用する"
      :visible.sync="dialogVisible"
      width="99%"
      :before-close="handleClose">
      <div class="el-dialog__text text-center text-blue">
        ご利用ありがとうございます
      </div>
      <div class="el-dialog__background-gradient text-center">
        <div class="el-dialog__background-gradient__text">
          お会計前にお店に提示
        </div>
        <div class="el-dialog__background-gradient__box">
          クーポン名
        </div>
        <div class="el-dialog__background-gradient__text">
          Gotoトラベル 地域共通クーポン
        </div>
      </div>
      <div class="el-dialog__notice-used text-pink">
        <div class="el-dialog__notice-used__line"></div>
        <div class="el-dialog__notice-used__text">
          クーポン使用済み
        </div>
        <div class="el-dialog__notice-used__line"></div>
      </div>
      <div class="el-dialog__note el-dialog__note--drop text-center">
        <p class="el-dialog__note--inline-flex">
          2020.00.00　利用済み <br>
          発券番号／000000
        </p>
      </div>
      <div class="el-dialog__button text-center">
        <el-button type="primary" class="el-dialog__button--lg bg-blue text-white" @click="$router.push({name: 'index'})" round>
          クーポン一覧に戻る
        </el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
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

</style>






