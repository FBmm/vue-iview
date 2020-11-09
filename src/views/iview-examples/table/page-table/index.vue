<template>
  <div>
    <Table :columns="columns" :data="data"></Table>
    <div class="page-table__page">
      <Page :total="100" show-sizer show-elevator show-total />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns: [
        {
          title: "人物",
          key: "name"
        },
        {
          title: "事迹",
          key: "deed"
        },
        {
          title: "时间",
          key: "time"
        },
        {
          title: "详细",
          key: "details"
        }
      ],
    };
  },
  computed: {
    data() {
      const list = []
      for (let i = 0; i < 10; i++) {
        list.push({
          name: "秦始皇-嬴政",
          deed: "统一六国",
          time: "2020-10-03",
        })
      }
      return list
    }
  }
};
</script>
<style lang="scss" scoped>
.page-table__page {
  margin-top: 24px;
  text-align: right;
}
</style>
