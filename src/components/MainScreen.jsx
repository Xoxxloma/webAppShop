import React from 'react';
import Fire from '../assets/fire.png'
import City from '../assets/city.png'
import GlassesDown from '../assets/glassesDown.png'

export const MainScreen = () => {
  return (
    <div style={{position: 'relative', overflow: 'hidden'}}>
      <img src={Fire} style={{ width: '100%', height: '150%', position: 'absolute', top: -80, justifyContent: 'center', zIndex: -100}} />
      <img src={City} style={{ borderTopRightRadius: 220, borderTopLeftRadius: 220, width: "100%", height: '30%', position: 'absolute', bottom: 0, right: 0, left: 0, zIndex: -100}} />
      <div style={{ flexDirection: 'column', flex: 1, display: "flex", justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <div style={{ fontFamily: 'TitilliumWeb-Regular', color: 'white', fontSize: 48, marginBottom: 10}}>
          Pepa VPN
        </div>
        <div style={{ borderRadius: 200 / 2, width: 200, height: 200, borderWidth: 30, marginTop: 10, marginBottom: 10}}>
          <img src={GlassesDown} style={{ borderRadius: 200 / 2, width: '100%', height: '100%'}} />
        </div>
        <div style={{ padding: '10px', marginTop: 10, marginBottom: 10}}>
          Profile number
        </div>
        <button style={{ padding: '20px', fontSize: 18, color: '#FFFFFF', background: 'orange', marginTop: 10, marginBottom: 10}}>Купить подписку</button>
      </div>
    </div>
  )
}
