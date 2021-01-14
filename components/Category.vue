<template>
  <div class="item" @click="$emit('CID', category.CID)">
    <el-image :src="url">
      <div slot="error" class="image-slot">
        <i class="el-icon-picture-outline"></i>
      </div>
    </el-image>
    <div class="item-title">
      {{ name }}
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      category : {
        type: Object,
        required: true,
        default: () => {}
      },

      urlProperty: {
        type: String,
        default: "categoryIcon"
      },

      nameProperty: {
        type: String,
        default: "categoryName"
      }
    },

    computed: {
      url() {
        return this.category && this.category.hasOwnProperty(this.urlProperty) ? this.category[this.urlProperty] : "";
      },

      name() {
        return this.category && this.category.hasOwnProperty(this.nameProperty) ? this.category[this.nameProperty] : "";
      }
    }
  }
</script>

<style scoped lang="scss">
  $padding-x: toRem(10px);
  .item {
    text-decoration: none;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    padding: .25rem #{$padding-x};
    transition: ease 200ms all;
    .el-image {
      border-radius: 50%;
      width: $item-sm-width;
      height: $item-sm-height;
      margin-bottom: .75rem;
      border: 1px solid $secondary;
      .image-slot {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
    .item-title {
      @include fontSize(12px);
      @include fontHiragino("3");
      line-clamp: 1;
      line-height: 1.2rem;
      min-height: 1.4rem;
      max-height: 1.4rem;
      color: $dark;
      text-decoration: none;
      white-space: normal;
      word-wrap: break-word;
      word-break: break-word;
      transition: .15s ease-in-out;
      cursor: pointer;
      box-sizing: border-box;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      flex: 1;
    }
    &:hover,
    &:focus,
    &.active {
      text-decoration: none;
      transition: ease 200ms all;
      .el-image {
        border-color: $orange;
      }
      .item-title {
        color: $orange;
      }
    }
  }
</style>
