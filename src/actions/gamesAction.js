import axios from 'axios';
import {popularGamesURL, upcommingGamesURL, newGamesURL} from '../api';

//Action creator 
export const loadGames = () => async (dispatch) => {
    // FETCH AXIOS
    const popularData = await axios.get(popularGamesURL());
    const upcommingData = await axios.get(upcommingGamesURL());
    const newGamesData = await axios.get(newGamesURL());

    dispatch({
            type: "FETCH_GAMES",
            payload: {
                popular: popularData.data.results,
                upcomming: upcommingData.data.results,
                newGames: newGamesData.data.results
            }
        })
}