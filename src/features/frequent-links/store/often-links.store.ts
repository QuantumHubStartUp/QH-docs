
import { IFrequentLink } from "@entities/frequent-links.entities"
import { atom } from "jotai"
import { oftenLinksData } from "../data/often-links.data"



export const oftenLinksAtom = atom<IFrequentLink[]>(oftenLinksData)