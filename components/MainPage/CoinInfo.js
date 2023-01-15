import Image from "next/image"
import { useRouter } from "next/router"
import { formatPrice, formatTicker } from "../../helpers/helperFunctions"

import styles from "./CoinInfo.module.scss"

const CoinInfo = (props) => {
  const router = useRouter()

  // Import Props
  const { coinInfo } = props
  const { uuid, rank, name, symbol, price, change, iconUrl } = coinInfo

  // onClick Functions
  const clickHandler = () => {
    router.push(`/${uuid}`)
  }

  return (
    <div className={styles["container"]} onClick={clickHandler}>
      <section className={styles["coin-info"]}>
        <div className={styles["rank"]}>{rank}</div>
        <div className={styles["image"]}>
          <img src={iconUrl} width={20} height={20} alt={name} />
        </div>
        <div className={styles["name"]}>{name}</div>
        <div className={styles["ticker"]}>{formatTicker(symbol)}</div>
      </section>
      <section className={styles["price-info"]}>
        {change < 0 && <div className={styles["down"]}>{change}%</div>}
        {change >= 0 && <div className={styles["up"]}>{change}%</div>}
        <div className={styles["price"]}>{`$${
          formatPrice(price) > 999.99
            ? Number(formatPrice(price)).toLocaleString()
            : formatPrice(price)
        }`}</div>
      </section>
    </div>
  )
}

export default CoinInfo
