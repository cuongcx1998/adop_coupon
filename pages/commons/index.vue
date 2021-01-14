<template>
  <el-container style="flex-direction: column;">
    <el-main>
      <el-row>
        <el-col>
          <nuxt-link class="text-decoration-none" :to="`/coupons/${coupon.QID}`">
            <el-card class="el-card--no-padding" shadow="never">
              <el-image class="el-card__thumb" :src="coupon.couponImage"></el-image>
              <h2 v-if="coupon.shopLogo" class="el-card__title">
                <el-image :src="coupon.shopLogo"></el-image>
                {{ coupon.shopName }}
              </h2>
              <div class="el-card__caption">
                <div class="bottom clearfix">
                  <time class="time">{{ coupon.QponName }}</time>
                </div>
              </div>
            </el-card>
          </nuxt-link>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      coupon: {
        "QID": "1",
        "EID": "1",
        "QponName": "クーポン名が入ります",
        "shopLogo": "/images/avatar01.png",
        "shopName": "ショップ名01",
        "couponImage": "/images/img1.svg"
      },
      url: "/api/",
    };
  }
}
</script>

<style scoped>

</style>
