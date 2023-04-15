import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';
let animals = ['cow', 'cat', 'dog', 'horse', 'gator', 'bird'];
let animal1 = ['cow', 'cat', 'dog', 'horse', 'gator', 'bird'];

function App() {
	const [count, setCount] = useState(0);

	const handleClick = () => {
		setCount(count + 1);
		let newAnimal = animal1[Math.round(Math.random() * 6 - 1)];
		animals.push(newAnimal);
		console.log('animals', animals, newAnimal);
	};
	const renderedAnimals = animals.map((animal, index) => {
		return <AnimalShow type={animal} key={index} />;
	});
	return (
		<div className='app'>
			<button onClick={handleClick}>Add Animal</button>
			<div className='animal-list'>{renderedAnimals}</div>
		</div>
	);
}

export default App;
