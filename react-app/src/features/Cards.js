import React from 'react';
import './card.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = () => {
    const cardInfo = [
        { Image: "", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" }
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="box">
                <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>
                        {card.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
    return (
        <>
        <h3>History</h3>
        <div className="container-box">{cardInfo.map(renderCard)}</div>
        </>
    )
    
}


export default Cards;