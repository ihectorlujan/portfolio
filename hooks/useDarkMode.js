import { useState, useEffect } from "react"

const useDarkMode = () => {
  const [dark, setDark] = useState(false)

  const toggle = () => {
    setDark(!dark)
  }

  useEffect(() => {
    localStorage.theme = dark
    localStorage.theme === "true"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark")
  }, [dark])

  return [dark, toggle]
}

export default useDarkMode
