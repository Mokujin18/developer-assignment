import { useDispatch, useSelector, useStore } from 'react-redux'
import type { RootState, AppDispatch, AppStore } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector = <TSelected = unknown>(
    selector: (state: RootState) => TSelected
): TSelected => useSelector(selector)

export const useAppStore = () => useStore<AppStore>()