import './Stars.css'

export default function Stars(props) {

    return (
        <div className="stars-content">
            {Array.from({length: parseInt(props.star)}, (v, ids) => <img key={'v-' + ids} src="./../star.svg" alt="star svg" />)}
            {Array.from({length: 5 - parseInt(props.star)}, (v, ids) => <img key={'e-' + ids} src="./../star-emply.svg" alt="star svg" />)}
        </div>
    )

}