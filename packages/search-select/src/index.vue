<template>
  <div class="search-select">
    <el-dropdown
      trigger="hover"
      placement="bottom"
      @command="dropdownOptChange"
    >
      <el-button class="search-btn">
        {{ curOpt.col_name.length ? curOpt.col_name : "请选择" }}
        <i class="el-icon-arrow-down"></i>
      </el-button>
      <el-dropdown-menu>
        <el-input
          v-model="input_searchText"
          placeholder="搜索"
          class="input_searchText_project_add"
          @keyup.native="searchInOption"
        ></el-input>
        <div class="base-search-select-dropdown-container">
          <template v-for="(item, index) in selectOptions">
            <el-dropdown-item :key="index" :command="item">
              <span>{{ item.col_name }}</span>
            </el-dropdown-item>
          </template>
        </div>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop,  } from "vue-property-decorator";

interface DatasetKeyLinkListItem {}

@Component({
  name: "BaseSearchSelect",
  components: {
  },
})
export default class extends Vue {
  /** 预览选择下拉菜单 */
  @Prop({ required: true })
  private options!: { col_name: string; col_type: string }[];

  @Prop({ required: false })
  private initOption!: { col_name: string; col_type: string };

  /** 当前选择 */
  // @ModelSync("opt", "dropdownChange", {type: Object})
  curOpt: any = { col_name: "", col_type: "" };

  /** dropdown 选择 */
  private dropdownOptChange(command: any) {
    this.curOpt = command;
    this.$emit("dropdownChange", command);
  }
  /** v-model: input 搜索框文本 */
  private input_searchText = "";

  /** 下拉菜单搜索选项变化：keyup触发 */
  private searchInOption() {
    const text = this.input_searchText;
    const result = this.options.filter((option) => {
      if (option.col_name.search(text) !== -1) {
        return option;
      }
    });
  }
  /** 选项列表 */
  get selectOptions() {
    const text = this.input_searchText.toLowerCase();
    const result = this.options.filter((option) => {
      if (option.col_name.search(text) !== -1) {
        return option;
      }
    });
    return result;
  }

  created() {
    if (this.initOption) {
      this.curOpt = this.initOption;
    }
  }
}
</script>

<style lang="scss">
.base-search-select-dropdown-container {
  height: 230px;
  overflow-y: auto;
}
.search-select {
  .el-button {
    border-radius: 9999em;
    border: unset;
    display: inline-block;
    box-sizing: border-box;
    height: 25px;
    padding: 0 10px;
    svg {
      display: none;
    }
  }
  .el-button:hover,
  .el-button:focus {
    color: #242323;
    background: #f0f0f0;
    svg {
      display: inline;
    }
  }
  .IconDropdown {
    transform: translateY(2px);
  }
}
.input_searchText_project_add {
  input {
    width: 140px;
    height: 32px;
    margin: 10px 12px;
  }
}
</style>
