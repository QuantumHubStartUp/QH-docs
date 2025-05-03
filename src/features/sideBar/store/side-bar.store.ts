
import { linksData } from '@/database/links.data';


import { atom } from 'jotai'






export const linkAtom = atom({
    links: linksData, 
})

export const openGroupsAtom = atom<number[]>([]); 

export const isSidebarOpenAtom = atom(false);