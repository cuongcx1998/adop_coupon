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
      :before-close="handleClose"
      v-loading="loading">
      <div class="el-dialog__img">
        <el-image class="thumb" :src="`/images/Group 94.png`"></el-image>
      </div>
      <div class="el-dialog__text text-center">
        ご利用ありがとう<br>
        ございました。
      </div>
      <p class="el-dialog__dotted text-center"></p>
      <div class="el-dialog__note el-dialog__note--drop text-center">
        <p class="el-dialog__note--inline-flex">
          2020.00.00　利用済み <br>
          発券番号／000000
        </p>
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
      dialogVisible: true,
      loading: true,
      url: '/api/'
    }
  },

  async mounted() {
    await this.checkUseQpon();
  },

  methods: {
    handleClick(event) {

    },

    handleClose(hide) {
      this.$emit('handle-close');
      this.dialogVisible = false;
    },

    async checkUseQpon() {
      try {
        const liff = await this.$liff;
        const profile = await liff.getProfile();
        const params = new URLSearchParams();
        params.append('token', 'dnp.Flower.Token');
        params.append('type', 'chkUseQpon');
        params.append('QID', this.$route.params.slug);
        params.append('userId', profile.userId);

        const data  = await this.$axios.post(this.url, params);
        this.loading = false;
        console.log(data.data)
      } catch (e) {
        console.log(e);
      }
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
    @include fontSize(14px);
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



