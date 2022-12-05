import { createSlice } from "@reduxjs/toolkit";

export const toDoSlider = createSlice({
  name: "toDo",
  initialState: {
    todoList: [
      { id: 1, title: "Hit the gym", isShow: false, taskCard: [] },
      { id: 2, title: "Meet George", isShow: false, taskCard: [] },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      state.todoList.push(action.payload);
    },
    deleteToDo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload
      );
    },
    // editTodo: (state, action) => {
    //   state.todoList = state.todoList.map((item) =>
    //     item.id === action.payload.id ? action.payload : item
    //   );
    // },
    toggleForm: (state, action) => {
      state.todoList.map((el) =>
        el.id === action.payload ? (el.isShow = !el.isShow) : el
      );
    },
    addTaskIntrello(state, action) {
      state.todoList.map((el) =>
        el.id === action.payload.idCard ? el.taskCard.push(action.payload) : el
      );
    },
    deleteInTrello(state, { payload }) {
      const currentTodo = state.todoList.findIndex(
        (el) => el.id === payload.idCard
      );
      console.log(currentTodo);
      state.todoList[currentTodo].taskCard = state.todoList[
        currentTodo
      ].taskCard.filter((el) => el.id !== payload.id);
    },
  },
});

export const {
  addToDo,
  toggleForm,
  deleteToDo,
  editTodo,
  deleteInTrello,
  addTaskIntrello,
} = toDoSlider.actions;
export default toDoSlider.reducer;
