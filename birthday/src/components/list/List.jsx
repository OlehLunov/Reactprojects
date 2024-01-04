import React from 'react'
import "./List.css"

function iterate(data, flag){
    if (!data) return;
    const bgColor = flag ? {backgroundColor: "#ffe66d"} : {};
    return(
        <>
            {
                data.map((person, index) => {
           
                    return (
                        <li key={index}>
                            <div className="flex" style={bgColor}>
                                <img src={person.img} alt="img" />
                                <div className="title">
                                    <h3 className='name'>{person.name}</h3>
                                    <h5 className='age'>{Old(person.birthday)} years</h5>
                                </div>
                            </div>
                        </li>
                    )
                })
            }
        </>
    )
}

function Old(personAge){
    let year = new Date(personAge).getFullYear()
    let currentYear =  new Date().getFullYear();
    let age = currentYear - year;

    return age;
}

export default function List({info, upcoming}) {
  return (
        <ul>
            {iterate(info, upcoming)}
        </ul>
  )
}

