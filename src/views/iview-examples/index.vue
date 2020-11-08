<template>
  <div class="iview-examples-container">
    <TwoColsLayout class="iview-examples-container__layout">
      <div class="left" slot="left">
        <Menu active-name="1-2" :open-names="['1']" width="auto">
          <Submenu name="/table">
            <template slot="title">
              <Icon type="ios-analytics" />Table 表格
            </template>
              <MenuItem name="1-1">基础表格</MenuItem>
              <MenuItem name="1-2">Option 2</MenuItem>
              <MenuItem name="1-3">Option 3</MenuItem>
              <MenuItem name="1-4">Option 4</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-filing" />Navigation Two
            </template>
            <MenuItem name="2-1">Option 5</MenuItem>
            <MenuItem name="2-2">Option 6</MenuItem>
            <Submenu name="3">
              <template slot="title">Submenu</template>
              <MenuItem name="3-1">Option 7</MenuItem>
              <MenuItem name="3-2">Option 8</MenuItem>
            </Submenu>
          </Submenu>
          <Submenu name="4">
            <template slot="title">
              <Icon type="ios-cog" />Navigation Three
            </template>
            <MenuItem name="4-1">Option 9</MenuItem>
            <MenuItem name="4-2">Option 10</MenuItem>
            <MenuItem name="4-3">Option 11</MenuItem>
            <MenuItem name="4-4">Option 12</MenuItem>
          </Submenu>
        </Menu>
      </div>
      <div class="right" slot="right">
        <router-view />
      </div>
    </TwoColsLayout>
  </div>
</template>
<script>
import TwoColsLayout from "@/components/two-cols-layout";
export default {
  components: { TwoColsLayout }
};
</script>
<style lang="scss" scoped>
.iview-examples-container {
  height: 100%;
}
.iview-examples-container__layout {
  height: 100%;
  .left {
    background-color: #fff;
    height: 100%;
  }
  .right {
    padding: 24px;
  }
}
/deep/ .ivu-menu-vertical.ivu-menu-light:after {
  display: none;
}
</style>
