import { useEffect, useState } from "react";
import { Redirect, useParams } from "react-router";
import LocalFetch from "../../utils/LocalFetch";
import Avatar from "./components/Avatar/Avatar";
import Dropdown from "./components/Dropdown/Dropdown";
import SlideShow from "./components/SlideShow/SlideShow";
import Stars from "./components/Stars/Stars";
import Tags from "./components/Tags/Tags";
import './LocationPage.css'

export default function LocationPage() {

    const [location, setLocation] = useState({})

    const { id } = useParams()

    useEffect(() => {

        (async function fetchData() {
            const data = await LocalFetch.get("../logements.json")
            const article = data.filter((logement) => logement.id === id)[0]

            setLocation(article)
        })()

    }, [id])

    if (!location) {
        return <Redirect to='/' />
    }


    console.log("title", location.title);

    return (
        <div className="LocationPage">
            <div className="LocationPage-main">
                <SlideShow img={location.pictures} />
                <div className="LocationPage-header">
                    <div className="LocationPage-info">
                        <h1 className="LocationPage-title">{location.title && location.title}</h1>
                        <p className="LocationPage-location">{location.location && location.location}</p>
                        <Tags tags={location.tags && location.tags} />
                    </div>
                    <div className="LocationPage-host">
                        <Avatar img={location.host && location.host.picture} name={location.host && location.host.name} />
                        <Stars star={location.rating && location.rating} />
                    </div>
                </div>
                <div className="LocationPage-dropdown">
                    <Dropdown name="Description" data={location.description && location.description} />
                    <Dropdown name="Équipements" data={location.equipments && location.equipments} />
                </div>
            </div>
        </div>
    )

}