import { useSelector } from "react-redux";

function CarValue() {
    // const totalCost = useSelector(({ cars: { carList, searchTerm } }) => {
    //     const filteredCars = carList.filter((car) =>
    //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     );

    //     return filteredCars.reduce((acc, car) => acc += car.cost, 0);
    // })

    //Shorthand to above code
    const totalCost = useSelector(({ cars: { carList, searchTerm } }) =>
        carList.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        ).reduce((acc, car) => acc += car.cost, 0)
    )

    return (
        <div>
            Total Cost: ${totalCost}
        </div>
    )
}

export default CarValue;