import Button from '../components/Button'
//import { useCounterAndLog } from '../hooks/use-counter';
// import {useState} from 'react';
import { useReducer } from 'react';
import Panel from '../components/Panel';

const reducer = (state, action) => {
    //

    return {
        ...state,
        count: state.count + 1
    };
};

function CounterPage({ initialCount }) {
    // const { count, increment } = useCounterAndLog(initialCount);
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0); 
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    });

    const increment = () => {
        // setCount(count + 1);
        dispatch();
    };

    const decrement = () => {
        // setCount (count - 1);
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
    };
    
    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment}>Increment</Button>
                <Button onClick={decrement}>Decrement</Button>    
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input value={state.valueToAdd} onChange={handleChange} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;