<template>
  <el-dialog
    class="el-dialog__wrapper--bottom term"
    v-if="dialogVisible"
    :visible.sync="dialogVisible"
    :fullscreen="true"
    :show-close="false"
    :close-on-click-modal="false"
  >
    <div class="el-dialog__img mb-0">
      <el-image class="thumb" :src="`/images/img3.svg`"></el-image>
    </div>
    <div class="text-left term__content">
      （利用登録）<br>
      利用者は本サービスの利用にあたって、下記の事項を確認し、これに同意したものとします。<br>
      本規約を熟読し、その内容に同意したうえで、本サービスを利用すること。<br>
      氏名、電子メールアドレス、パスワード、LINE ID、その他の運営者が定める項目について、正確に真実の情報を登録すること。また、これらの情報を利用者の責任で保管すること。<br>
      利用者の通信環境、利用端末の設定等が本サービスの利用に支障がないことが確認できていること。<br>
      利用者が未成年の場合、本サービスの利用について親権者等の法定代理人の同意を得ていること。<br>
      本サービスの利用意思確認は、本ミニアプリの利用承認ページでの承諾許可手続きをもって完了するものとします。<br>
      （禁止行為）<br>
      利用者は本サービスの利用に際して以下の行為を行ってはなりません。<br>
      利用者が自分のアカウントを他者に利用させる行為。または本サービスを利用する権利を譲渡しもしくは担保に供する行為。<br>
      運営者の名誉、信用、著作権、肖像権等の知的財産権、プライバシーを侵害する行為。<br>
      安易な出会い、交際、性交渉を目的として本サービスを利用する行為、ならびにそれらに関するコンテンツを送信する行為。<br>
    </div>
    <div class="el-dialog__button text-center mb-0">
      <el-button type="primary" class="el-dialog__button--lg bg-blue text-white" @click="handleClickButton()" plain>
        はい、同意しました
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
  export default {
    name: "TermDialog",
    props: {

    },

    data() {
      return {
        dialogVisible: true
      }
    },
    mounted() {
      this.checkAgreeTerm();
    },
    methods: {
      handleClickButton() {
        localStorage.setItem("agreeTerm", 'true');
        this.dialogVisible = false;
      },
      checkAgreeTerm() {
        if (process.browser) {
          if (localStorage.getItem('agreeTerm') === 'true') {
            this.dialogVisible = false
          } else {
            this.dialogVisible = true
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
