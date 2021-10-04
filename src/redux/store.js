import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import appReducer from "../redux/app-reducer";
import thunk from "redux-thunk";
// import logger from "redux-logger";

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
//   logger,
// ];
// const contactsPersistConfig = {
//   key: "root",
//   storage,
//   blacklist: ["filter"],
// };

// const store = configureStore({
//   reducer: {
//     contacts: persistReducer(contactsPersistConfig, appReducer),
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === "development",
// });

// const persistor = persistStore(store);

// export default { store, persistor };

const enhancer = applyMiddleware(thunk);

export const store = configureStore({
  reducer: {
    contacts: appReducer,
    enhancer,
  },
});
