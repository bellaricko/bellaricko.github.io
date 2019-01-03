import React from 'react';
import PropTypes from 'prop-types'
import './Card.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faAdjust } from '@fortawesome/free-solid-svg-icons';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
        date: PropTypes.date,
        text: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }).isRequired
}

const RandomBorderColor = () => {
    let ColorValues = ["#FFAAAA", "#D46A6A", "#801515", "#669999", "#407F7F"];
    return ColorValues[Math.floor(Math.random() * ColorValues.length)];
}

const CategoryIcon = (value) => {
    if (value === "Project") {
        return faCoffee;
    }

    else if (value === "Blog") {
        return faAdjust;
    }

    else {
        return faCamera;
    }
}

const Card = (props) => {
    return (
        <div className="col span_1_of_4 cards" style={{ borderColor: RandomBorderColor(), borderWidth: 3, borderStyle: "solid" }}>
            <h4>{props.card.title}</h4>
            <div className="icon"><FontAwesomeIcon icon={CategoryIcon(props.card.category)} /></div>
            <ul id="card-categories">
                <li>Upplagd {props.card.date} | <a href={props.card.link}>GitHub</a></li>
            </ul>
            <p>{props.card.text}</p>
        </div>
    )
}

Card.propTypes = propTypes

export default Card