<template>
  <div>
    <div>Tasks</div>
    <div>{{ title }}</div>

    <div>
      table
      <table class="w-full">
        <thead>
          <tr>
            <th v-for="column in database.columns" :key="`database-header-${column._id}`" class="px-2 py-0 border border-gray-500 text-left">
              <div class="flex justify-between h-full font-medium">
                <div class="flex-1 flex text-xs">
                  <span class="self-center mr-2 text-xs text-gray-500">
                    <span v-if="column.type === columnTypes.STRING">Abc</span>
                    <span v-else-if="column.type === columnTypes.NUMBER">123</span>
                  </span>
                  <select v-model="column.type">
                    <option v-for="option in typeSelect" :key="`database-header-${column._id}-select-${option.type}`" :value="option.type">{{ option.label }}</option>
                  </select>
                  <input type="text" v-model="column.title" class="flex-1 hover:bg-gray-200 border border-transparent focus:border-gray-500 focus:outline-none">
                </div>
                <button class="block h-full px-2 hover:bg-gray-200" @click="deleteColumn(column)">X</button>
              </div>
            </th>
            <th width="60px">
              <button class="w-full hover:bg-gray-200" @click="addColumn">+</button>
            </th>
          </tr>
        </thead>
        <tr v-for="item in database.items" :key="`database-row-${item._id}`" class="">
          <td v-for="column in database.columns" :key="`database-row-${item._id}-cell-${column._id}`" class="p-0 border border-gray-500">
            <input v-if="column.type === columnTypes.STRING" type="text" v-model="item[column.property]" class="w-full hover:bg-gray-200 border border-transparent focus:border-gray-500 focus:outline-none">
            <input v-if="column.type === columnTypes.NUMBER" type="number" v-model.number="item[column.property]" class="w-full hover:bg-gray-200 border border-transparent focus:border-gray-500 focus:outline-none">
          </td>
        </tr>
      </table>
      <button class="w-full hover:bg-gray-200" @click="addNewItem">+ Add new item</button>

      <div v-for="item in database.items" :key="`item-${item._id}`">
        <div>{{ item.name }}</div>
        <div>{{ item.age }}</div>
      </div>
    </div>
  </div>
</template>

<script>

function newId() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let autoId = '';
  for (let i = 0; i < 20; i++) {
    autoId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return autoId;
}

const columnTypes = {
  STRING: 'STRING',
  NUMBER: 'NUMBER'
};

class Database {
  constructor(params) {
    const { columns, items } = params;
    this.columns = columns.map((column) => {
      return new Column(column, this);
    });
    this.items = items.map((item) => {
      return new Item(item, this);
    });
  }

  addColumn() {
    this.columns.push(new Column({
      title: 'New',
      property: 'new',
      type: columnTypes.STRING
    }, this));
    this.items.forEach(item => {
      item.new = '';
    });
  }
  deleteColumn(column) {
    // ToDo: Delete Column
  }

  addNewItem() {
    const item = {};
    this.columns.forEach(column => {
      item[column.property] = '';
    });
    this.items.push(new Item(item, this));
  }
}

class Item {
  constructor(params, database) {
    this._id = newId();
    this._database = database;

    for (const key in params) {
      this[key] = params[key];
    }
  }
}

class Column {
  get title() {
    return this._title;
  }

  set title(val) {
    this._title = val;
    console.log('this', this);
    const oldProperty = this.property;
    this.property = val.toLowerCase();
    this._database.items.forEach((item) => {
      const value = item[oldProperty];
      item[this.property] = value;
      delete item[oldProperty];
    });
  }

  constructor(params, database) {
    const defaultParams = {
      title: 'New column',
      property: 'new-column',
      type: columnTypes.STRING
    };
    const mergedParams = {
      ...defaultParams,
      ...params
    };
    const { title, property, type } = mergedParams;
    this._id = newId();
    this._title = title;
    this._database = database;
    this.property = property;
    this.type = type;
  }
}

export default {
  data() {
    const typeSelect = [
      {
        type: columnTypes.STRING,
        label: 'String'
      },
      {
        type: columnTypes.NUMBER,
        label: 'Number'
      }
    ];

    const database = new Database({
      columns: [
        {
          title: 'Name',
          property: 'name',
          type: columnTypes.STRING
        },
        {
          title: 'Age',
          property: 'age',
          type: columnTypes.NUMBER
        }
      ],
      items: [
        {
          name: 'John',
          age: 25
        },
        {
          name: 'Lara',
          age: 21
        }
      ]
    });

    return {
      title: 'sad',

      columnTypes,
      typeSelect,

      database
    };
  },

  methods: {
    addColumn() {
      this.database.addColumn();
    },
    addNewItem() {
      this.database.addNewItem();
    },
    deleteColumn(column) {
      this.database.deleteColumn(column);
    }
  }
};
</script>

<style>

</style>
