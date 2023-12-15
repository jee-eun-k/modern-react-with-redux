

import { configureStore } from "@reduxjs/toolkit";
import {
  carsReducer,
  addCar,
  changeSearchTerm,
  removeCar,
} from "./slices/carsSlice";
import { formReducer, changeName, changeCost } from "./slices/formSlice";

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, changeCost, changeName, addCar, removeCar, changeSearchTerm };
