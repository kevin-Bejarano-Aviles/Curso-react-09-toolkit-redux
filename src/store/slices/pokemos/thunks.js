import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, starLoadingPokemons } from "./pokemonSlice";

export const getPokemons = ( page = 0 ) => {
    return async (dispatch, getState) =>{
        dispatch(starLoadingPokemons());
        //TODO: Realizar peticion http

        const resp = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`);
        // console.log(resp);

        dispatch( setPokemons({
            pokemons: resp.data.results,page:page+1
        }) );
    }
}