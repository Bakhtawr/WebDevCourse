import React from 'react'

export const CarCode = `export default function CarsExampleCode() {
  const Cars = [
    {title: 'City', id : 1, Year : '2020', Latest : false},
    {title: 'Cultus', id : 2, Year : '2022', Latest : false},
    {title: 'Mitsubishi Pajero Sport ', id : 3, Year : '2023', Latest : true},
    {title: 'Nissan Kicks', id : 4, Year : '2023', Latest : true},
    {title: 'Borgward BX7', id : 5, Year : '2023', Latest : true}
  ]
return (
<div>
    <ul>
    {Cars.map(Car => (
      <li style={{color : Car.Latest ? 'Blue' : 'Gray'}}>{Car.title}, {Car.Year} {Car.Latest}</li>
     ))}
    </ul>
</div>
)
}`


export default function CarsExample() {
    const Cars = [
        {title: 'City', id : 1, Year : '2020', Latest : false},
        {title: 'Cultus', id : 2, Year : '2022', Latest : false},
        {title: 'Mitsubishi Pajero Sport ', id : 3, Year : '2023', Latest : true},
        {title: 'Nissan Kicks', id : 4, Year : '2023', Latest : true},
        {title: 'Borgward BX7', id : 5, Year : '2023', Latest : true}
    ]
  return (
    <div>
        <ul>
        {Cars.map(Car => (
          <li style={{color : Car.Latest ? 'Blue' : 'Gray'}}>{Car.title}, {Car.Year} {Car.Latest}</li>
         ))}
        </ul>
      
    </div>
  )
}
