import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      const selectedId = action.payload;
      state.data = state.data.filter((car) => {
        return car.id !== selectedId;
      });
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
