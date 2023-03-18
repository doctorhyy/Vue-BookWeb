<template>
    <Table :columns="columns" :data="data" :border="false" style="width: 1024px;">
      <template #name="{ row, index }">
        <Input type="text" v-model="editName" v-if="editIndex === index" />
        <span v-else>{{ row.name }}</span>
      </template>
  
      <template #age="{ row, index }">
        <Input type="text" v-model="editAge" v-if="editIndex === index" />
        <span v-else>{{ row.age }}</span>
      </template>
  
      <template #birthday="{ row, index }">
        <Input type="text" v-model="editBirthday" v-if="editIndex === index" />
        <span v-else>{{ getBirthday(row.birthday) }}</span>
      </template>
  
      <template #address="{ row, index }">
        <Input type="text" v-model="editAddress" v-if="editIndex === index" />
        <span v-else>{{ row.address }}</span>
      </template>
  
      <template #action="{ row, index }">
        <div v-if="editIndex === index">
          <Button @click="handleSave(index)">保存</Button>
          <Button @click="editIndex = -1" style="margin-left: 15px;">取消</Button>
        </div>
        <div v-else>
          <Button @click="handleEdit(row, index)">操作</Button>
        </div>
      </template>
    </Table>
    <!-- 后端来的数据如何分页 -->
    <Page :total="data.length" :page-size="2" show-elevator />
  </template>
  <script>
    export default {
      data () {
        return {
          columns: [
            {
              title: '姓名',
              slot: 'name'
            },
            {
              title: '年龄',
              slot: 'age'
            },
            {
              title: '出生日期',
              slot: 'birthday'
            },
            {
              title: '地址',
              slot: 'address'
            },
            {
              title: '操作',
              slot: 'action'
            }
          ],
          data: [
            {
              name: '王小明',
              age: 18,
              birthday: '919526400000',
              address: '北京市朝阳区芍药居'
            },{
              name: '王小明',
              age: 18,
              birthday: '919526400000',
              address: '北京市朝阳区芍药居'
            },{
              name: '王小明',
              age: 18,
              birthday: '919526400000',
              address: '北京市朝阳区芍药居'
            },{
              name: '王小明',
              age: 18,
              birthday: '919526400000',
              address: '北京市朝阳区芍药居'
            }, 
            {
              name: '张小刚',
              age: 25,
              birthday: '696096000000',
              address: '北京市海淀区西二旗'
            },
            {
              name: '李小红',
              age: 30,
              birthday: '563472000000',
              address: '上海市浦东新区世纪大道'
            },
            {
              name: '周小伟',
              age: 26,
              birthday: '687024000000',
              address: '深圳市南山区深南大道'
            }
          ],
          editIndex: -1,  // 当前聚焦的输入框的行数
          editName: '',  // 第一列输入框，当然聚焦的输入框的输入内容，与 data 分离避免重构的闪烁
          editAge: '',  // 第二列输入框
          editBirthday: '',  // 第三列输入框
          editAddress: '',  // 第四列输入框
        }
      },
      methods: {
        handleEdit (row, index) {
          this.editName = row.name;
          this.editAge = row.age;
          this.editAddress = row.address;
          this.editBirthday = row.birthday;
          this.editIndex = index;
        },
        handleSave (index) {
          this.data[index].name = this.editName;
          this.data[index].age = this.editAge;
          this.data[index].birthday = this.editBirthday;
          this.data[index].address = this.editAddress;
          this.editIndex = -1;
        },
        getBirthday (birthday) {
          const date = new Date(parseInt(birthday));
          const year = date.getFullYear();
          const month = date.getMonth() + 1;
          const day = date.getDate();
          return `${year}-${month}-${day}`;
        }
      }
    }
  </script>

<style scoped>

.ivu-menu-vertical .ivu-menu-item, .ivu-menu-vertical .ivu-menu-submenu-title{
    position: relative;
    cursor: pointer;
    padding: 13px;
    z-index: 1;
    transition: all .2s ease-in-out;
    width: 191px;
}



</style>