import Input from '../hooks/storage';
import {useState} from 'react';

function Main () {
    
    const [data, add] = Input();
    
    const [name, setName] = useState();
    const handleChange = e => setName(e.target.value);
    
    
    return (
        <div> 
          <div>{data}</div>
          <div>
          <input 
            type = "text"
            value = {name}
            onChange = {handleChange}
          />
          <p> {name} </p>
          <button onClick={()=>{add(name)}}>次に</button>
          </div>
        </div>
        );
}

export default Main;