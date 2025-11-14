import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

type User = {
    id: string
    name: string
    email: string
}

type AuthState = {
    user: User | null
    token: string | null
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: null,
    token: null,
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (
            state,
            action: PayloadAction<{ user: User; accessToken: string }>
        ) => {
            state.user = action.payload.user
            state.token = action.payload.accessToken
            state.isAuthenticated = true
        },

        logOut: (state) => {
            state.user = null
            state.token = null
            state.isAuthenticated = false
        },
    },
})

export const { setCredentials, logOut } = authSlice.actions

export default authSlice.reducer

export const selectIsAuthenticated = (state: RootState) =>
    state.auth.isAuthenticated
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token