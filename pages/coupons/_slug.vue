<template>
  <div class="box">
    <el-container style="flex-direction: column;" v-loading="loading">
      <el-main class="p-0">
        <el-row>
          <el-col>
            <el-image class="thumb" :src="coupon.couponImage"></el-image>
            <el-card class="border-transparent" shadow="never">
              <h2 class="el-card__title" v-if="coupon.shopLogo">
                <el-image :src="coupon.shopLogo"></el-image>
                {{ coupon.shopName }}
              </h2>
              <div class="el-dialog__img couponSubImg">
                <el-image class="thumb" :src="`/images/couponSubImg.png`"></el-image>
              </div>
              <div class="el-card__caption">
                {{ coupon.qponName }}
              </div>
              <div class="text-pink">
                <time class="time">
                  <i class="el-icon-alarm-clock"></i>
                  {{ formatDate(coupon.startDate) }} - {{ formatDate(coupon.endDate) }}
                </time>
              </div>
            </el-card>
          </el-col>
          <el-col>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="クーポン詳細" name="tab1">
                {{ coupon.qponDetail }}
              </el-tab-pane>
              <el-tab-pane label="注意事項" name="tab2">
                {{ coupon.qponNote }}
              </el-tab-pane>
            </el-tabs>
          </el-col>
        </el-row>
      </el-main>
    </el-container>

    <CameraDialogPink v-if="useType === 1" @scanSuccess="useType = 4"/>
    <QrClearingPink v-else-if="useType === 4" @useCoupon="useType = 5"/>
    <PinDialog v-else-if="useType === 3" />
    <QrCode v-else-if="useType === 2" @useQrCode="useType = 5"/>
    <QrSuccessPink v-else-if="useType > 4" />
    <TermDialog />
  </div>
</template>

<script>
  import PinDialog from "~/components/PinDialog";
  import CameraDialogPink from "~/components/CameraDialogPink";
  import QrClearingPink from "~/components/QrClearingPink";
  import QrSuccessPink from "~/components/QrSuccessPink";
  import QrCode from "~/components/QrCode";
  import TermDialog from "~/components/TermDialog";

  export default {
    components: {
      TermDialog,
      PinDialog,
      CameraDialogPink,
      QrClearingPink,
      QrSuccessPink,
      QrCode,
    },

    data() {
      return {
        activeName: "tab1",
        useType: 0,
        coupon: {},
        url: "/api/",
        loading: true,
      }
    },

    async mounted() {
      await this.getCoupon();
    },

    methods: {
      handleClick(event) {

      },

      handleClose(event) {
        return true;
      },

      async getCoupon() {
        try {
          const params = new URLSearchParams();
          params.append('token', 'dnp.Flower.Token');
          params.append('type', 'getQpon');
          params.append('QID', this.$route.params.slug);

          const data  = await this.$axios.post(this.url, params);

          this.loading = false;
          this.useType = parseInt(data.data.QID);
          this.coupon = data.data;
        } catch(e) {
          console.log(e)
        }
      },
      formatDate(date) {
        return date ? date.slice(0, 10).replaceAll('-', '/') : '';
      }
    }
  }
</script>

<style scoped lang="scss">
  .thumb {
    width: 100%;
  }
  .el-card {
    &__thumb {
      width: 100%;
    }
  }

</style>
