import './Avatar.css'

export default function Avatar(props) {

    return (
        <div className="avatar">
            <img src={props.img} alt="Avatar " />
            <p>{props.name}</p>
        </div>
    )

}