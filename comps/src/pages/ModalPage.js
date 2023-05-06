import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
	const [showModal, setShowModal] = useState(false);
	const handleClick = () => {
		setShowModal(true);
	};
	const handleClose = () => {
		setShowModal(false);
	};
	const actionBar = (
		<div>
			<Button primary onClick={handleClose}>
				I Accept
			</Button>
		</div>
	);
	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is an important agreement for you to accept.</p>
		</Modal>
	);
	return (
		<div className='relative'>
			<Button onClick={handleClick} primary>
				Open Modal
			</Button>
			{showModal && modal}
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
			<p>
				The standard Lorem Ipsum passage, used since the 1500s "Lorem ipsum
				dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit
				esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
				id est laborum."
			</p>
		</div>
	);
}

export default ModalPage;
