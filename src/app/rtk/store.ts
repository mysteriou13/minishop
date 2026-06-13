import { configureStore } from "@reduxjs/toolkit";
import { apiUser } from "./api/apiUser";
import fromReducer from "./slice/slicerFrom";
import userReducer from "./slice/sliceuser";
export const store = configureStore({
  reducer: {
    [apiUser.reducerPath]: apiUser.reducer,
    from: fromReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiUser.middleware)
     
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch