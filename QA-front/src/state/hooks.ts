import { useDispatch } from 'react-redux';
import { AutoMateDispatch } from './store';

export const useAutoMateDispatch: () => AutoMateDispatch = useDispatch;
