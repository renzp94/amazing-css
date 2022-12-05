import { themeState, useAtom } from '@/store'
import styles from './index.module.less'

const Home = () => {
  const [theme] = useAtom(themeState)

  return (
    <div className={styles.homePage}>
      <div key={theme as string} className={styles.title}>
        <svg className={styles.titleEn}>
          <text x="0" y="70%">
            Amazing Css
          </text>
        </svg>
        <div className={styles.titleZh}>神奇的Css</div>
      </div>
    </div>
  )
}

export default Home
