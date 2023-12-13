import { configureStore } from '@reduxjs/toolkit';
import theme from './features/theme';
import showModal from './features/modalAlert'

export const store = configureStore({
    reducer: {
        theme,
        showModal
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
