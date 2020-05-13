import {useState} from 'react';

export function useLocalStorage (key, initialValue) {
    const [storedValue, setStoredValue] = useState(() => {
        if(window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key));
        } else {
            return initialValue;
        }
    });

    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value);
    }

    console.log('dom', storedValue)

    return [storedValue, setValue ];
}