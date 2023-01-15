import { AppDispatch, RootState } from '@/store/store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useTodoDispatch: DispatchFunc = useDispatch
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector
