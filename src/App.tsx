
import './App.css'
import ListTodocomponent from './components/ListTodocomponent'
import HearderComonent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import TodoComponent from './components/TodoComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {


  return (
    <>
      <BrowserRouter>
        <HearderComonent />
        <Routes>
          <Route path='/' element={<ListTodocomponent />}></Route>
          <Route path='/todos' element={<ListTodocomponent />}></Route>
          <Route path='/add-todo' element={<TodoComponent />}></Route>
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  )
}

export default App
