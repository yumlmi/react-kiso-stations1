import './App.css'
import {GetThreadList} from './GetThreadList.jsx'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
    <header>掲示板</header>
    <div>
      <p>新着スレッド</p>
      <GetThreadList></GetThreadList>
    </div>
    </>
  )
}

export default App
