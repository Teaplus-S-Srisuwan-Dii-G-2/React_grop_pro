import React from 'react';
import './card.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Cards = () => {
    const cardInfo = [
        { Image: "/image/Naruto.jpg", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/one piece.jpg", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/Naruto.jpg", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/one piece.jpg", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/Naruto.jpg", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/one piece.jpg", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/Naruto.jpg", title: "Naruto", text: "asdfghjklqwertyuiopzxcvbnm" },
        { Image: "/image/one piece.jpg", title: "One piece", text: "asdfghjklqwertyuiopzxcvbnm" }
    ];

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index} className="grid-item">
                <Card.Img variant="top" src="holder.js/100px180" src={card.Image}/>
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
        <div className="grid-template">{cardInfo.map(renderCard)}</div>
        </>
    )
    
}


export default Cards;