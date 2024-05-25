import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    title:"",
    date:"",



};

export const movieSlice = createSlice({
    name: 'movie' ,
    initialState,
    reducers:{
        getMovies:( state, action) => {
            const{ title, date} = action.payload;
            state.title = title;
            state.date = date;
            
        },

    }
});

export const {getMovies} = movieSlice.actions;
export default movieSlice.reducer;