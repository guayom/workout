import { StoreContainer } from "../components/state/store"
import { getAmountOfReps } from "./index"

const { currentExcercise, set } = StoreContainer.useContainer()
const totalSets = getAmountOfReps(currentExcercise)

export const hasMoreSets = set < totalSets - 1
