<template>
  <div>
    <Menu class="main-menu" theme="primary" mode="horizontal" active-name="/home" @on-select="onMenuSelect">
      <MenuItem name="/home">
        <Icon type="md-home" />主页
      </MenuItem>
      <MenuItem name="/iview-examples">
        <Icon type="ios-people" />iview-examples
      </MenuItem>
      <Submenu name="3">
        <template slot="title">
          <Icon type="ios-stats" />统计分析
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem name="/test">
        <Icon type="logo-apple" />测试
      </MenuItem>
      <MenuItem name="4">
        <Icon type="ios-construct" />综合设置
      </MenuItem>
    </Menu>
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    onMenuSelect(path) {
      if (path === this.$route.path) return
      this.$router.push(path)
    }
  }
};
</script>
<style lang="scss" scoped>
.main-menu {
  background-color: #1890ff;
}
</style>