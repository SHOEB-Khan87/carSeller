

let initialState = []

export const carReducer = (state = initialState, action) => {
    switch (action.type) {
        case "searchedCars":
            state.push(action.payload)
            return state

        case "poping":
            return {
                state: []
            }

        default:
            return state

    }
}
