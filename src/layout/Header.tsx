import DarkIcon from '@/assets/icons/dark.svg'
import LightIcon from '@/assets/icons/light.svg'
import { themeState, useAtom } from '@/store'
import styles from './index.module.less'

const Header = () => {
  const [theme, setTheme] = useAtom(themeState)

  return (
    <header className={styles.layoutHeader}>
      {theme === 'dark' ? (
        <img className={styles.themeIcon} src={DarkIcon} onClick={() => setTheme('light')} />
      ) : (
        <img className={styles.themeIcon} src={LightIcon} onClick={() => setTheme('dark')} />
      )}
    </header>
  )
}

export default Header
