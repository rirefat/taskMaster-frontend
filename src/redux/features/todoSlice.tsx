import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TTodo = {
    _id: string;
    title: string;
    description: string;
    isCompleted?: boolean;
    priority: string;
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: []
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter((item) => item._id !== action.payload)
        },
        editTodo: () => {

        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            const task = state.todos.find((item) => item._id === action.payload)
            task!.isCompleted = !task?.isCompleted
        },
    }
});

export const { addTodo, removeTodo, editTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;