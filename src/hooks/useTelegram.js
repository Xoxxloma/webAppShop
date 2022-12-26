const tg = window.Telegram.WebApp

export const useTelegram = () => {
  const tgUser = tg?.initDataUnsafe?.user

  return {
    tg,
    tgUser
  }
}
