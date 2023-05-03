import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';
function ButtonPage() {
	const handleClick = () => {
		console.log('CLICK');
	};
	return (
		<div>
			<div>
				<Button className='mb-5' primary rounded outline onClick={handleClick}>
					<GoBell />
					CLICK ME
				</Button>
			</div>
			<div>
				<Button danger outline onMouseEnter={handleClick}>
					<GoCloudDownload />
					Buy Now!
				</Button>
			</div>
			<div>
				<Button warning onMouseLeave={handleClick}>
					See Deal!
				</Button>
			</div>
			<div>
				<Button secondary warning outline>
					<GoDatabase />
					Hide Ads!
				</Button>
			</div>
			<div>
				<Button primary rounded>
					Something!
				</Button>
			</div>
		</div>
	);
}

export default ButtonPage;
