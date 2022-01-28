/* eslint-disable jsx-a11y/img-redundant-alt */
import Dropdown from "../LocationPage/components/Dropdown/Dropdown"
import './About.css'

export default function About(props) {

    const reliability = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respect = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const service = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const security = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    
    return (
        <div className="about">
            <div className="about-background">
                <img src="./../ABOUT_BACKGROUND.png" alt="A propos image background" />
            </div>
            <div className="about-dropdown">
                <Dropdown name="Fiabilité" data={reliability} />
                <Dropdown name="Respect" data={respect} />
                <Dropdown name="Service" data={service} />
                <Dropdown name="Sécurité" data={security} />
            </div>
        </div>
    )

}