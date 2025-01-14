import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTasks = createAsyncThunk('tasks/getTasks', async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const response = await axios.get('/api/items');
        return response.data;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async (task, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const response = await axios.post('/api/items', task);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        await axios.delete(`/api/items/${id}`);
        return id;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const response = await axios.put(`/api/items/${task.id}`, task);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        selectedTask: null,
        pending: false
    },
    reducers: {},
    extraReducers: builder => {
        //GetTasks
        builder.addCase(getTasks.pending, (state) => {
            state.pending = true;
        });

        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
            state.pending = false;
        });
        builder.addCase(getTasks.rejected, (state, action) => {
            console.error(action.payload);
            state.pending = false;
        });

        //AddTask
        builder.addCase(addTask.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload);
            state.pending = false;
        });
        builder.addCase(addTask.rejected, (state, action) => {
            console.error(action.payload);
            state.pending = false;
        });

        //DeleteTask
        builder.addCase(deleteTask.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
            state.pending = false;
        });
        builder.addCase(deleteTask.rejected, (state, action) => {
            console.error(action.payload);
            state.pending = false;
        });

        //UpdateTask
        builder.addCase(updateTask.pending, (state) => {
            state.pending = true;
        });
        builder.addCase(updateTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? action.payload : task);
            state.pending = false;
        })
        builder.addCase(updateTask.rejected, (state, action) => {
            console.error(action.payload);
            state.pending = false;
        });
    }
})



export default tasksSlice.reducer;