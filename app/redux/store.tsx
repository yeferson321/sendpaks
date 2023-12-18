import { configureStore } from '@reduxjs/toolkit';
import theme from './features/theme/theme';
import language from './features/language/language';

export const store = configureStore({
    reducer: {
        theme,
        language
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
