import {useLocalStorage} from './useLocalStorage';
import { useEffect } from 'react';

export function useDarkMode () {
    const [value, setValue] = useLocalStorage('mykey', true)

    useEffect(()=>{
        const body = document.querySelector('body');
        if(value === true) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }, [value]);

    return [value, setValue];
}