import { useState } from 'react';
import { GoChevronDown, GoChevronLeft } from 'react-icons/go';

function AccordionPage({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1);
	const handleClick = (nextIndex) => {
		//setExpandedIndex(expandedIndex === nextIndex ? -1 : nextIndex);
		setExpandedIndex((currentExpandedIndex) => {
			return currentExpandedIndex === nextIndex ? -1 : nextIndex;
		});
	};
	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex;
		const icon = (
			<span className='text-2xl'>
				{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
			</span>
		);
		return (
			<div key={item.id}>
				<div
					className='flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer'
					onClick={() => handleClick(index)}>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className='border-b p-5'>{item.content}</div>}
			</div>
		);
	});
	return <div className='border-x border-t rounded'>{renderedItems}</div>;
}
export default AccordionPage;
