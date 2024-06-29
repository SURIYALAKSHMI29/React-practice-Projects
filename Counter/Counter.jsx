import react,{useState} from 'react';

function Counter(){

    const[count, setCount] = useState(0);
    const[warning, setWarning] = useState("");

    const increment = () => {
        if(count<100){
            setCount(count + 1);
            setWarning("");
        }
        else
            setWarning('Cannot increment above 100');
    }

    const decrement = () => {
        if(count>0){
            setCount(count -1);
            setWarning("");
        } 
        else
            setWarning('Cannot decrement below 0');
    }

    const reset = ()=>{
        setCount(0);
        setWarning("");
    }
    return (
        <>
            <h2>Counter</h2>

            <div className="count" >{count}</div>

            <div className="btn-container">
                <button className="increment" onClick={increment}>Increment</button>
                <button className="decrement"onClick={decrement} >Decrement</button>
                <button className="reset" onClick={reset}>Reset</button>
            </div>

            <p className="warning">{warning}</p>

        </>
    );
}

export default Counter
