import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import SocialIcons from './components/SocialIcons';
import Card from './components/Card/Card';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Portfolio extends React.Component {
    render() {
        const cards = [
            {
                title: "Tic Tac Toe",
                date: "2018-12-27",
                text: "Mitt första projekt i React.js, spelet Tic Tac Toe.",
                link: "https://github.com/bellaricko/tictactoe.git",
                category: "Project"
            },
            {
                title: "ToDo-list",
                date: "2018-12-28",
                text: "En enkel ToDo-list i React.js.",
                link: "https://github.com/bellaricko/todolist.git",
                category: "Project"
            },
            {
                title: "Portfolio",
                date: "2018-12-27",
                text: "Den här portfolion byggd i React.js.",
                link: "github.com",
                category: "Project"
            },
            {
                title: "Ett annat test",
                date: "2018-12-28",
                text: "Pupper gillar gos och pussar.",
                link: "github.com",
                category: "Blog"
            }
        ]

        return (
            <div>
                <div className="section group">
                    <div className="landing-page">
                        <div className="span_4_of_4 section">
                            <div className="title animation-target">Välkommen!</div>
                        </div>
                        <div className="span_4_of_4">
                            <div className="tagline">Izabella Lönnqvist</div>
                            <SocialIcons />
                            <div className="span_4_of_4 link-to-projects">
                                <a href="index.html#Projects"><FontAwesomeIcon icon={faAngleDoubleDown} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="section group" id="Projects">
                        <div className="span_4_of_4 content">
                            {cards.map((card) => <Card card={card}></Card>)}
                        </div>
                    </div>
                    <div className="section group" id="AboutMe">
                        <div className="span_4_of_4 footer">
                            <p>Sidan är skapad av mig, @izabellalonnqvist</p>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}


// ========================================

ReactDOM.render(
    <Portfolio />,
    document.getElementById('root')
);