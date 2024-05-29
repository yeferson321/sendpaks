import { configureStore } from '@reduxjs/toolkit';
import counterReduce from '@/app/lib/redux/features/theme/mediaState'

export const makeStore = () => {
    return configureStore({
        reducer: {
            counterReduce
        },
    });
} 


export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']; 
