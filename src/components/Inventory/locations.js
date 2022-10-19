import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"





export const Location = () => {
    const [locations, setLocations] = useState([])
    
    
    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((locationArray) => {
                setLocations(locationArray)
            })
        },
        []
    )
    return <>

        <h2>Kandy Korner Locations</h2>
    
    <article className="locations">
            {
                locations.map(
                    (location) => {
                        return <section key={location.id}className="location">
                        <header>{location.name}</header>
                        <p>Address: {location.address}</p>
                        <p>Store Size: {location.squareFootage} Square Feet</p>
                        
                        </section>
                    }
                )
            }
        </article>
     </>
}