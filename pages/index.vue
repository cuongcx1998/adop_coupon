<template>
  <div class="box">
    <div class="item-sm">
      <CategoryComponent v-for="(category, index) in categories" :category="category" :key="index" @CID="CID = $event"/>
    </div>
    <el-container style="flex-direction: column;" v-loading="loading">
      <el-main>
        <el-row>
          <el-col v-for="(coupon, index) in couponsDisplay" v-if="coupon.couponImage" :key="coupon.QID">
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
    <TermDialog />
  </div>
</template>

<script>
  import CategoryComponent from "~/components/Category";
  import TermDialog from "~/components/TermDialog";

  export default {
    components: {
      TermDialog,
      CategoryComponent
    },
    data() {
      return {
        categories: [],
        coupons: [],
        couponsDisplay: [],
        loading: true,
        CID: "",
        url: "/api/",
      };
    },
    watch: {
      'CID': async function(val) {
        this.loading = true;
        setTimeout(() => {
          this.couponsDisplay = {...this.coupons.filter(o => o.CID === val)}
          this.loading = false;
        }, 500);
      }
    },
    async mounted() {
      await Promise.all([
        this.getCategories(),
        this.getCoupons()
      ]);
      this.loading = false;
    },

    methods: {
      async getCategories() {
        try {
          const params = new URLSearchParams();
          params.append('token', 'dnp.Flower.Token');
          params.append('type', 'getCategory');

          const data = await this.$axios.post(this.url, params);
          this.categories = data.data;
        } catch (e) {
          console.log(e);
        }
      },
      async getCoupons() {
        try {
          const params = new URLSearchParams();
          params.append('token', 'dnp.Flower.Token');
          params.append('type', 'getQponList');

          const data  = await this.$axios.post(this.url, params);

          this.coupons = data.data;
          this.couponsDisplay = data.data;
        } catch(e) {
          console.log(e);
        }
      },
    }
  }
</script>
