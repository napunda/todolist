<template>
  <div class="home">
    <v-container class="pt-16">
      <div
        class="d-flex justify-center text-h3 font-weight-medium primary--text"
      >
        Todo List
      </div>
      <div class="d-flex flex-column mt-5 todo-box">
        <div class="d-flex">
          <v-form @submit.prevent="addTodo(todo)">
            <v-text-field
              v-model="todo.description"
              height="20px"
              outlined
              required
              dense
              id="todo"
            >
            </v-text-field>
            <v-btn
              type="submit"
              height="40px"
              color="primary"
              depressed
              class="text-none ml-2"
              >Adicionar</v-btn
            >
          </v-form>
        </div>
        <div>
          <div
            class="d-flex justify-lg-space-between mt-3 align-center"
            v-for="item in todos"
            :key="item.id"
          >
            <v-icon color="primary">fas fa-clock</v-icon>
            <div class="text-body-2 px-2 text-start d-flex justify-start w-100">
              {{ item.description }}
            </div>
            <div class="d-flex">
              <v-btn color="primary" depressed text class="text-none"
                >Concluído</v-btn
              >
              <v-btn color="secondary" depressed text class="text-none"
                >Remover</v-btn
              >
            </div>
          </div>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      todos: [],
      todo: { checked: false },
    };
  },
  methods: {
    addTodo(todo) {
      todo.id = Date.now();
      this.todos.push(todo);
      this.todo = { checked: false };
      const todofocus = document.querySelector("#todo");
      todofocus.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  height: 100%;
  width: 100vw;
  background-color: rgb(241, 241, 241);
  .todo-box {
    max-width: 600px;
    margin: 0 auto;
  }
  .v-form {
    display: flex;
    width: 100%;
  }
}
</style>
