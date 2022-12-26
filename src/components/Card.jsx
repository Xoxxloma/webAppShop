import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo from '../assets/happy.png'

export const ShopCard = ({ tariff, selectTariffHandler }) => {
  return (
    <Card
      style={{ width: '100%', maxWidth: '800px', background: 'white', marginBottom: 20, marginTop: 20, padding: 15, cursor: 'pointer', border: '3px solid #D9550D' }}
      onClick={selectTariffHandler(tariff)}
    >
      <div style={{position: "absolute", left: -30, transform: "rotate(-45deg)", fontSize: 18}}>ТЫК чтобы купить</div>
      <Card.Img variant="top" src={Logo} style={{width: '100%', borderRadius: '50%'}} />
      <Card.Body>
        <Card.Title>{tariff.text} по цене {tariff.price} ₽</Card.Title>
        <Card.Text>{tariff.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}
