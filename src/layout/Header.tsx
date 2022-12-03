import DarkIcon from '@/assets/icons/dark.svg'
import LightIcon from '@/assets/icons/light.svg'
import { themeState, useAtom } from '@/store'
import './index.css'

const Header = () => {
  const [theme, setTheme] = useAtom(themeState)
  return (
    <header className="layout-header">
      {theme === 'dark' ? (
        <img className="theme-icon" src={DarkIcon} onClick={() => setTheme('light')} />
      ) : (
        <img className="theme-icon" src={LightIcon} onClick={() => setTheme('dark')} />
      )}
    </header>
  )
}

export default Header
