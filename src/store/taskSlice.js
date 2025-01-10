import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const getTasks = createAsyncThunk('tasks/getTasks', async (_, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const response = await fetch('https://json-server-vercel-main-4yuqgjyop-alito1998s-projects.vercel.app/task');
        const tasks = await response.json()
        return tasks;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});

export const addTask = createAsyncThunk('tasks/addTask', async (task, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const response = await fetch('https://json-server-vercel-main-4yuqgjyop-alito1998s-projects.vercel.app/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const data = await response.json()
        return data;
    } catch (error) {
        return rejectWithValue(error.massage);
    }

});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        await fetch(`https://json-server-vercel-main-4yuqgjyop-alito1998s-projects.vercel.app/task/${id}`, {
            method: 'DELETE',
        });
        return id;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});

export const updateTask = createAsyncThunk('tasks/updateTask', async (task, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
        const response = await fetch(`https://json-server-vercel-main-4yuqgjyop-alito1998s-projects.vercel.app/task/${task.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(task),
        });
        const data = await response.json()
        return data;
    } catch (error) {
        return rejectWithValue(error.massage);
    }
});


const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        selectedTask: null,
    },
    reducers: {},
    extraReducers: builder => {
        //GetTasks
        builder.addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload;
        });
        builder.addCase(getTasks.rejected, (state, action) => {
            console.error(action.payload);
        });

        //AddTask
        builder.addCase(addTask.fulfilled, (state, action) => {
            state.tasks.push(action.payload);
        });
        builder.addCase(addTask.rejected, (state, action) => {
            console.error(action.payload);
        });

        //DeleteTask
        builder.addCase(deleteTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        });
        builder.addCase(deleteTask.rejected, (state, action) => {
            console.error(action.payload);
        });

        //UpdateTask
        builder.addCase(updateTask.fulfilled, (state, action) => {
            state.tasks = state.tasks.map(task => task.id === action.payload.id ? action.payload : task);
        });
        builder.addCase(updateTask.rejected, (state, action) => {
            console.error(action.payload);
        });
    }
})



export default tasksSlice.reducer;