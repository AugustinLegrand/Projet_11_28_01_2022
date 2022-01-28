import { useEffect, useState } from "react";
import LocalFetch from "../../utils/LocalFetch";
import LocationCard from "./components/locationCard";
import './Home.css'

export default function Home() {

    const [locations, setLocations] = useState([])

    useEffect(() => {

        (async function fetchData() {
            const data = await LocalFetch.get('../logements.json')
            setLocations(data)
        })()
        
    }, [])

    return (
        <div className="home">
            <div className="home-background">
                <img className="background-img" src="../HOME_background.png" alt="KASA PAGE HOME" />
                <p>Chez vous, partout et ailleurs</p>
            </div>

            <div className="cards">
                {locations.map((location) => <LocationCard key={location.id} location={location} />)}
            </div>
        </div>
    )

}