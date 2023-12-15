import { useSelector } from "react-redux";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const term = searchTerm.toLowerCase();
    return data.reduce((sum, car) => {
      return car.name.toLowerCase().includes(term) ? sum  + car.cost : sum;
    }, 0);
  });
  return <div className="car-value"> Total Cost: ${totalCost}</div>;
}

export default CarValue;