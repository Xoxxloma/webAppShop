import {ShopCard} from "./Card";
import React from "react";
import {useTelegram} from "../hooks/useTelegram";
import axios from "axios";

export const ShopScreen = () => {
  const { tg } = useTelegram();
  const [tariffs, setTariffs] = React.useState({})
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
    axios.get('https://pepavpn.ru:4004/getConfig').then((res) => setTariffs(res.data.tariffs))
  }, [])

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
