export const initialState = {
    currentPlayer: 'X',
    isGameOver: false,
    isDrawing: false,
    field: ['', '', '', '', '', '', '', '', '']
};

export const useReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_GAME_STATUS': {
            return {
                ...state,
                currentPlayer: state.currentPlayer === 'X' ? '0' : 'X',
            }
        }
        case 'SET_GAME_STATUS': {
            return {
                ...state,
                isGameEnded: action.isGameEnded,
                isDraw: action.isDraw
            }
        }
        case 'UPDATE_GAME_STATUS': {
            console.log("Updated field:", action.field)
            return {
                ...state,
                field: action.field,
            }
        }
        case 'RESET_GAME_STATUS': {
            return initialState
        }
        default:
            return state
    }
}