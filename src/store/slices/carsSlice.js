import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        carList: []
    },
    reducers: {
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.carList.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid(),
            })
        },
        removeCar(state, action) {
            console.log(action.payload)
            const updatedCars = state.carList.filter((car) => {
                return car.id !== action.payload
            });
            console.log(updatedCars)
            state.carList = updatedCars;
        }
    }
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;

export const carsReducer = carsSlice.reducer;