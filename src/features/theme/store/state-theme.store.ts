


import { ThemeType } from '../types/theme-type'

import { atomWithStorage } from 'jotai/utils'


export const stateThemeAtom = atomWithStorage<ThemeType>("theme", "light");