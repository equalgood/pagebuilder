import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { builderReducer } from "../modules/pagebuilder/store/builderReducer";

const rootReducer = combineReducers({
  builderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });
