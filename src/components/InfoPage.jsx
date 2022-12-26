import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from "axios";
import {ListItem} from "./ListItem";
import Alert from 'react-bootstrap/Alert';
import {restOfSubscription} from "../utils";
import dayjs from "dayjs";
import {useTelegram} from "../hooks/useTelegram";


export const InfoPage = () => {
  const { tgUser } = useTelegram()
  const [processState, setProcessState] = React.useState('BLANK')
  const [user, setUser] = React.useState(null)

  React.useEffect(() => {
    if (tgUser) {
      setProcessState("LOADING")
      try {
        axios.get(`https://pepavpn.ru:4004/getClientByTelegramId/${tgUser.id}`).then(({data}) => setUser(data))
        setProcessState('SUCCESS')
      } catch (e) {
        setProcessState("FAILURE")
      }
    }
  }, [tgUser])
  console.log(user, 'user')

  if (processState === 'LOADING' || processState === 'BLANK') return <div>ZAGRUZ OCHKA</div>
  if (processState === 'FAIURE') return <div>PIZDOS BANDOS</div>
  return (
    <div className="container">
    {user && (
      <>
        <ListGroup as="ol" numbered className="mt-4">
          <ListItem header="Пользователь" description={user.name} />
          <ListItem header="№ подписки" description={user.telegramId} />
          {user.isSubscriptionActive
            ? <ListItem header="Подписка" description={`Срок действия до: ${dayjs(user.expiresIn).format('DD.MM.YYYY')}`} badge={{bg: 'info', text: `Осталось ${restOfSubscription(user.expiresIn)} дней`}} />
            : <ListItem header="Подписка" description="" badge={{ bg: 'danger', text: 'Не активна'}} />
          }
        </ListGroup>
        <Accordion defaultActiveKey="0" className="mt-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Инструкция. Если не знаешь что делать ТЫК сюда</Accordion.Header>
            <Accordion.Body>
              <p>
                Если у вас телефон на базе Android - просто скачайте наше приложение <Alert.Link href="https://play.google.com/store/apps/details?id=com.pepavpn">Pepa VPN</Alert.Link>.
                В нем реализовано все что Вам требуется для пользования сервисом.
              </p>
              <p>
                В остальных случаях, для того чтобы начать пользоваться VPN - купите подписку в Лавке.
                После оплаты бот в течение нескольких минут пришлет вам файл ******.ovpn.
              </p>
              <p>
                Далее Вам необходимо установить программу OpenVPN.
                Ссылки на официальные источники для скачивания:
                <ul>
                  <li>
                    <Alert.Link href="https://apps.apple.com/ru/app/openvpn-connect/id590379981">AppleStore</Alert.Link>
                  </li>
                  <li>
                    <Alert.Link href="https://openvpn.net/community-downloads/">Desktop</Alert.Link>
                  </li>
                </ul>
              </p>
              <p>
                Далее:
                <ul>
                  <li>скачиваете файл, присланный ботом (далее Конфигурационный файл)</li>
                  <li>открываете OpenVpn</li>
                  <li>Мобильные устройства выбираете вкладку File(Файл), в появившемся списке файлов находите свой Конфигурационный файл, нажимаете кнопку Import(Импорт), на следующем экране нажимаете на кнопку справа вверху Add(Добавить)</li>
                  <li>Стационарные компьютеры правой кнопкой мыши кликаете по иконке в панели задач, далее нажимаете импорт конфигурации, указываете свой Конфигурационный файл, после успешного импорта снова правой кнопкой мыши кликаете по иконке в панели задач и выбираете свежедобавленный профиль с таким же именем как и ваш Конфигурационный файл, далее выбираете опцию подключиться</li>
                  <li>Ваш профиль работает</li>
                </ul>
              </p>
              <p>
                Для отключения впн на мобильных устройствах достаточно сдвинуть слайдер влево, на Стационарных компьютерах правой кнопкой мыши кликаете по иконке в панели задач и находите свой профиль и выбираете опцию отключиться
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    )}
    </div>
  );
}
