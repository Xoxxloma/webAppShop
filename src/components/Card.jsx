import React from 'react';
import diamond from '../assets/diamond.png'
import joker from '../assets/joker.png'
import pepe_batman from '../assets/pepe_batman.png'
import witcher from '../assets/witcher.png'
import './Card.css'

const subscribes = {
    "15 дней": witcher,
    "1 месяц": joker,
    "3 месяца": diamond,
    "6 месяцев": pepe_batman,
}

const descriptions = {
    "15 дней": "Toss the coin to the witcher",
    "1 месяц": "Я думал, что моя жизнь трагедия, пока не купил впн",
    "3 месяца": "Это как два месяца, но на один побольше",
    "6 месяцев": "Специальный тариф для миллиардеров из Готэма",
}


export const ShopCard = ({ tariff, selectTariffHandler }) => {
  return (
      <article class="profile">
        <div class="profile-image">
          <img src={subscribes[tariff.text]} />
        </div>
        <h2 class="profile-username">{tariff.text} за {tariff.price} ₽</h2>
        <small class="profile-user-handle">{descriptions[tariff.text]}</small>
        <div class="profile-actions">
          <button onClick={selectTariffHandler(tariff)} class="btn btn--primary">Купить</button>
        </div>
      </article>
  )
}
