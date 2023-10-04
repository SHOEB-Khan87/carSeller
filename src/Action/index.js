export const searchedCars = (data) => {
    return {
        type: "searchedCars",
        payload: data
    }
}

export const poping = (data) => {
    return {
        type: "poping",
        payload: data
    }
}
