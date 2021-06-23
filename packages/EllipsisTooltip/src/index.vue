<template>
  <el-tooltip
    :effect="effect"
    :disabled="isDisabledTooltip"
    :content="content"
    :placement="placement"
  >
    <div class="ellipsis-tooltip" :class="className" @mouseover="onMouseOver">
      <span :ref="refName">{{ content || "-" }}</span>
    </div>
  </el-tooltip>
</template>

<script>
export default {
  name: "EllipsisTooltip",
  props: {
    // 显示的文字内容
    content: String,
    // 设置父元素的样式：比如宽度字体等，需可以自己在组件内部配置样式比如字体大小
    className: String,
    // 子元素标识（如在同一页面中调用多次组件，此参数不可重复）
    refName: String,
    // 默认提供的主题 dark/light
    effect: {
      type: String,
      default: () => {
        return "dark";
      },
    },
    placement: {
      type: String,
      default: () => {
        return "top";
      },
    },
  },
  data() {
    return {
      isDisabledTooltip: true, // 是否需要禁止提示
    };
  },
  methods: {
    // 移入事件: 判断内容的宽度contentWidth是否大于父级的宽度
    onMouseOver() {
      const parentWidth = this.$refs[
        this.refName
      ].parentNode.getBoundingClientRect().width;
      const contentWidth = this.$refs[this.refName].getBoundingClientRect()
        .width;
      // 判断是否禁用tooltip功能
      this.isDisabledTooltip = contentWidth <= parentWidth;
    },
  },
};
</script>

<style lang="scss">
.ellipsis-tooltip {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
