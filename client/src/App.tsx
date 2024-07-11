
import { BrowserRouter as Router, Route ,Routes} from "react-router-dom" 
import HomePage from './pages/HomePage'
import EditorPage from './pages/EditorPage'
 
function App() {
  
 
  return (
    <>
     <Router>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/editor' element={<EditorPage/>}/>
       </Routes>
     </Router>
    </>
  )
}

export default App
