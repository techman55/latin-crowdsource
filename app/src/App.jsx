import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {submitSentence} from "./api.js";


export let authToken = (document.cookie.split('; ').reduce((prev, current) => {
  const [name, ...value] = current.split('=');
  prev[name] = value.join('=');
  return prev;
}, {}))["token"] || "unset"

function App() {

  const [ chapterId, setChapterId ] = useState("")
  const [ english, setEnglish ] = useState("")
  const [ latin, setLatin ] = useState("")
  const [ notes, setNotes ] = useState("")
  const [ raw, setRaw ] = useState("")
  const [ alert, setAlert ] = useState(null)
  const [ loading, setLoading ] = useState(true)


  async function getData() {
    let data = await fetch("https://api.techman.dev/credofile/get")
    data = await data.text()
    return data
  }


  useEffect(() => {
    async function _() {

      setRaw(await getData())
      setLoading(false)

    }
    _();
  }, [])



  async function submit() {
    setAlert("Loading...")
    submitSentence({ latin, english, chapterId, notes }).then(async r => {
      setNotes("")
      setEnglish("")
      setLatin("")
      setRaw(await getData())
      setAlert("Sentence added!")
      document.getElementById("rawbox").scrollTop = document.getElementById("rawbox").scrollHeight;
    })
  }

  if (loading) {
    return (<div><h1>Loading...</h1></div>)
  }


  return (
    <div className={"flex h-[100dvh] w-[100vw] overflow-hidden"} onKeyPress={(e) => { if (e.key === "Enter") { submit() } }} >
      <div className={"flex-1  "}>
        <div className={"p-10 pb-20 overflow-y-scroll h-full"}>
          <h1>Credo Calculator Crowdsource</h1>

          {alert && <p className={"text-green-500 font-bold"}>{alert}</p>}

          <input placeholder={"chapterId"} onChange={(e) => setChapterId(e.target.value)} value={chapterId}/>
          <input placeholder={"latin"} onChange={(e) => setLatin(e.target.value)} value={latin}/>
          <input placeholder={"english"} onChange={(e) => setEnglish(e.target.value)} value={english}/>
          <input placeholder={"notes"} onChange={(e) => setNotes(e.target.value)} value={notes}/>

          <button onClick={() => {submit()}}>Submit</button>
        </div>
      </div>
      <div id={"rawbox"} className={"max-w-screen overflow-scroll relative"}>
        <pre >{JSON.stringify(JSON.parse(raw), null, 2)}</pre>
      </div>
    </div>
  )
}

export default App
