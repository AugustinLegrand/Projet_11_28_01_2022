import { Link } from "react-router-dom"
import './locationCard.css'

export default function LocationCard(props) {
    return (
        <div className="locationCard">
            <Link to={`/locations/`+props.location.id}>
                <h5>{props.location.title}</h5>
            </Link>
            <img src={props.location.pictures[0]} alt={props.location.title} />
        </div>
    )
}