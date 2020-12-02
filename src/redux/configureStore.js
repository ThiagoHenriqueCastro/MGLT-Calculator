import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import starshipReducer from "./Starships";

const persistConfig = {
  key: "swStorage",
  storage,
  whitelist: ["starshipsReducer"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    starshipReducer,
  })
);

const store = createStore(persistedReducer);

const persistor = persistStore(store);

export { store, persistor };
