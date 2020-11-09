<template>
  <div class="iview-examples-container">
    <TwoColsLayout class="iview-examples-container__layout">
      <div class="left-layout" slot="left">
        <Menu class="iview-examples__menu" active-name="1-2" :open-names="['1']" width="auto">
          <Submenu name="/table">
            <template slot="title">
              <Icon type="ios-analytics" />Table 表格
            </template>
              <MenuItem name="1-1">基础表格</MenuItem>
              <MenuItem name="1-2">分页表格</MenuItem>
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
      <div class="right-layout" slot="right">
        <div class="iview-examples__content—header">
          <Breadcrumb class="iview-examples__bread-crumb">
            <BreadcrumbItem to="/">Home</BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">Components</BreadcrumbItem>
            <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
          </Breadcrumb>
          <h2>基础表格</h2>
        </div>
        <router-view class="iview-examples__content"/>
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
@import "@/styles/variables";
.iview-examples-container {
  height: 100%;
}
.iview-examples-container__layout {
  height: 100%;
  .left-layout {
    background-color: #fff;
    height: 100%;
    border-right: 1px solid $--border--color;
    padding-top: 16px;
  }
  .right-layout {
    height: 100%;
    overflow: auto;
  }
}
.iview-examples__content—header {
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid $--border--color;
}
.iview-examples__bread-crumb {
  margin-bottom: 16px;
}
.iview-examples__content {
  margin: 24px;
  padding: 24px;
  background-color: #fff;
}
/deep/ .ivu-menu-vertical.ivu-menu-light:after {
  display: none;
}
</style>
