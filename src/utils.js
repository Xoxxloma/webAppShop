import dayjs from "dayjs";
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
dayjs.extend(isSameOrBefore)

export const restOfSubscription = (expiresIn) => {
  return dayjs(expiresIn).diff(dayjs(), 'day')
}
