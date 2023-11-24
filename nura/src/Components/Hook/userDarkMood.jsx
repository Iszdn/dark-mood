import React, { useEffect, useState } from 'react'

const userDarkMood = () => {
 const [theme, setTheme] = useState(localStorage.getItem("Theme") ? JSON.parse(localStorage.getItem("Theme")) : "")
 useEffect(() => {
  localStorage.setItem("Theme" ,JSON.stringify(theme))
  document.body.classList.toggle("dark",theme)
 }, [theme])

 
    function changeThemesMode() {
        document.body.classList.toggle("dark")
        setTheme(!theme)
    }
  return changeThemesMode
}

export default userDarkMood