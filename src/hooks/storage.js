import {useState} from 'react';

function Input() {
    const [data, setData] = useState(["huyen ", "ha ", "hoang ", "hai "]);
    
    const add = (x) => {
        setData(data.concat(x));
    }
    return [data, add];
}

export default Input;