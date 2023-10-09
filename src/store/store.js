import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from './slices/couter'
import { pokemonSlice } from './slices/pokemos';
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons:pokemonSlice.reducer
    },
    //primero se crea el store
})