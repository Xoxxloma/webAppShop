import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useLocation } from "react-router-dom";
import {useTelegram} from "./hooks/useTelegram";
import {ShopScreen} from "./components/ShopScreen";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import {InfoPage} from "./components/InfoPage";

const headers = {
  '/': 'Мой профиль',
  '/shop': 'VPN лавка Пепе'
}

function App() {

  const { tg } = useTelegram()
  const { pathname } = useLocation()

  React.useEffect(() => {
    tg.ready()

    tg.MainButton.setParams({
      color: '#D9550D',
      text_color: '#FFFFFF'
    })

    tg.BackButton.show()
    tg.BackButton.onClick(() => tg.close())
  }, [])


  return (
    <div className="App">
      <Navbar style={{background: '#D9550D'}}>
        <Container>
          <Navbar.Brand style={{color: '#FFFFFF', fontSize: "28px"}}>{headers[pathname]}</Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route index element={<InfoPage />} />
        <Route path={'shop'} element={ <ShopScreen />} />
      </Routes>
    </div>
  );
}

export default App;
