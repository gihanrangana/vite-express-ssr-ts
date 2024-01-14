import { helmetContext } from "@core/contexts/HelmetContext"
import { useContext } from "react"

const useHelmet = (): helmetContextType => {
    return useContext(helmetContext) as helmetContextType
}

export default useHelmet;