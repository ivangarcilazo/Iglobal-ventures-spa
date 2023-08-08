export const INITIAL_STATE = []

export const ReducerAuth = (state,action) => {
    
    switch(action.type){
        case('ADD_DATA'):
            return { ...state, ...action.payload }
        case('DELETE_DATA'):
            return []
    }
}

