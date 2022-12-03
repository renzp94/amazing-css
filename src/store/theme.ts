import storage, { THEME } from '@/utils/storage'
import { atom } from 'jotai'

const _theme = atom(storage.get(THEME) ?? 'light')

const themeState = atom(
  get => get(_theme),
  (_, set, value: string) => {
    storage.set(THEME, value)
    set(_theme, value)
  }
)
export default themeState
