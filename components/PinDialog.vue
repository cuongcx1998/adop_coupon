<template>
  <div>
    <!-- DIALOG -->
    <div v-if="!dialogVisible" class="box__panel--fixed-bottom" @click="dialogVisible = true">
      <div class="box__panel__inner bg-blue">
        クーポンを利用する
      </div>
    </div>
    <el-dialog
      class="el-dialog__wrapper--bottom el-dialog__pin header-blue"
      title="クーポンを利用する"
      :visible.sync="dialogVisible"
      width="100%"
    >
      <div class="el-dialog__pin-header">
        <p class="el-dialog__text text-center">
          店舗が提示したPINコードを入力してください。
        </p>
        <div class="el-dialog__pin-type mb-1">
          <el-input v-model="input1" maxlength="1" id="pinCode1"></el-input>
          <el-input v-model="input2" maxlength="1" id="pinCode2"></el-input>
          <el-input v-model="input3" maxlength="1" id="pinCode3"></el-input>
          <el-input v-model="input4" maxlength="1" id="pinCode4"></el-input>
        </div>
        <div class="el-dialog__button text-center">
          <el-button type="primary" class="el-dialog__button--lg bg-blue text-white" round>使用する</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    props: {

    },

    data() {
      return {
        dialogVisible: true,
        input1: "",
        input2: "",
        input3: "",
        input4: "",
      }
    },
    watch: {
      'input1': function (val) {
        this.input1 = /^\d+$/.test(val) ? val : '';
        if (this.input1) {
          document.getElementById('pinCode2').focus();
        }
      },
      'input2': function (val) {
        this.input2 = /^\d+$/.test(val) ? val : '';
        if (this.input2) {
          document.getElementById('pinCode3').focus();
        }
      },
      'input3': function (val) {
        this.input3 = /^\d+$/.test(val) ? val : '';
        if (this.input3) {
          document.getElementById('pinCode4').focus();
        }
      },
      'input4': function (val) {
        this.input4 = /^\d+$/.test(val) ? val : '';
      }
    }
  }
</script>
