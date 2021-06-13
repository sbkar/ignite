const initState = {
    popular: [],
    newGames: [],
    upcomming: [],
    searched: []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type) {
        case "FETCH_GAMES" :
            return{...state,
                 popular: action.payload.popular,
                 upcomming: action.payload.upcomming,
                 newGames: action.payload.newGames 
                }
        default:
            return{...state}    
    }
}

export default gamesReducer;