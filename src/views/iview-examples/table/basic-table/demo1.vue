<template>
  <Table :columns="columns1" :data="data"></Table>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
    };
  },
  computed: {
    data() {
      const list = []
      for (let i = 0; i < 20; i++) {
        list.push({
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        })
      }
      return list
    }
  }
};
</script>
