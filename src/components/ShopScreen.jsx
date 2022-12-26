import {ShopCard} from "./Card";
import React from "react";
import {useTelegram} from "../hooks/useTelegram";

const tariffs = {
    "15 дней": {
      text: '15 дней', termUnit: "day", term: 15, price: 1, description: 'Это небольшие деньги, но честные',
    },
    "1 месяц": {
      text: '1 месяц', termUnit: "month", term: 1, price: 150, description: 'Между чашкой кофе и Pepa-VPN на месяц выбор очевиден',
    },
    "3 месяца": {
      text: '3 месяца', termUnit: "month", term: 3, price: 400, description: 'Это как два месяца, но на один побольше',
    },
    "6 месяцев": {
      text: '6 месяцев', termUnit: "month", term: 6, price: 800, description: 'Возможно у Вас в роду были лепреконы или русские олигархи, ПООООООЛГОДА PEPA-VPN',
    },
    "1 год": {
      text: '1 год', termUnit: "year", term: 1, price: 3000, description: 'Подписку на год пока не продаем, только показываем. Но скоро точно будем продавать, когда нарисуем лягушку-рэпера, чтобы подчеркнуть всю роскошь и богатство этой опции',
    },
  }

export const ShopScreen = () => {
  const { tg } = useTelegram();
  const [selectedTariff, setSelectedTariff] = React.useState(null)

  const selectTariffHandler = (tariff) => () => {
    if (tariff.text === selectedTariff?.text) {
      setSelectedTariff(null)
    } else {
      setSelectedTariff(tariff)
    }
  }

  const onSendDataHandler = React.useCallback(() => {
    tg.sendData(JSON.stringify(selectedTariff))
  }, [selectedTariff])

  React.useEffect(() => {
    tg.MainButton.onClick(onSendDataHandler)

    return () => tg.MainButton.offClick(onSendDataHandler)
  }, [selectedTariff])

  React.useEffect(() => {
    if (selectedTariff) {
      tg.MainButton.setParams({
        text: `Оплатить ${selectedTariff.price} ₽`
      })
      tg.MainButton.show()
    } else {
      tg.MainButton.hide()
    }
  }, [selectedTariff])

  return (
    <>
      <div style={{padding: 15, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {Object.keys(tariffs).map((key) => <ShopCard key={key} tariff={tariffs[key]} selectTariffHandler={selectTariffHandler} />)}
      </div>
    </>
  )
}
