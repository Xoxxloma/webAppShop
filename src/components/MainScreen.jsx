import React from 'react';
import loading from '../assets/loading.gif'
import googlePlay from '../assets/google-play.png'
import telegram from '../assets/tg_button_large.png'

export const MainScreen = () => {
  return (
    <div className="main-page-container">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, justifyContent: 'center'}}>
            <div style={{ position: 'relative'}}>
                <div className="motto">
                    <svg
                        viewBox="0 0 100 100"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            style={{ fill: "transparent"}}
                            id="circlePath"
                            d="
                          M 10, 50
                          a 40,40 0 1,1 80,0
                          40,40 0 1,1 -80,0
                        "
                        />
                        <text style={{ fontSize: 14, whiteSpace: "break-spaces" }}>
                            <textPath href="#circlePath">
                                IT   SOLUTIONS   BASED   ON   MEMES
                            </textPath>
                        </text>
                    </svg>
                </div>
                <img className='image logo' src={loading} />
            </div>
        </div>
        <div className="links-container">
            <a className="telegram-button" href="https://t.me/vpn_pepa_bot" target="_blank">
                <img style={{marginRight: 5}} width='20px' height="20px" alt='Get it on Google Play' src={telegram} />
                <span>@VPN_Pepa_bot</span>
            </a>
            <a href='https://play.google.com/store/apps/details?id=com.pepavpn&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
                <img width='150px' alt='Get it on Google Play' src={googlePlay} />
            </a>
        </div>
    </div>
  )
}
