import { useState } from "react"

const useDisplay = () => {
  const [display, setDisplay] = useState("hidden")

  const showMenu = () => {
    if (display === "hidden") {
      setDisplay("block")
    } else {
      setDisplay("hidden")
    }
  }

  return [display, showMenu]
}

export default useDisplay
