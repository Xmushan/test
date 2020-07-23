import React,{useState} from 'react'



const App = () =>{
  const [data,setData] = useState([])
  const handleClick = () =>{
    fetch('https://api.apiopen.top/getJoke?page=1&count=2&type=video').then(res => {
      return res.json()
    }).then(msg =>{
      console.log(msg)
      setData(msg.result)
      console.log(data)
    })
  }
  return (
    <div onClick={handleClick}>
      34
    </div>
  )
}
export default App