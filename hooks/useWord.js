import { useState } from "react"

const useWord = () => {
  const [word, setWord] = useState("Linux")

  const changeWord = () => {
    switch (word) {
      case "Linux":
        setWord("React.js")
        break

      case "React.js":
        setWord("Next.js")
        break

      case "Next.js":
        setWord("Anime")
        break

      case "Anime":
        setWord("Programming")
        break

      case "Programming":
        setWord("KDE")
        break

      case "KDE":
        setWord("Terminal")
        break

      case "Terminal":
        setWord("Linux")
        break

      default:
        break
    }
  }
  return [word, changeWord]
}

export default useWord
