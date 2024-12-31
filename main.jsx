import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gokul from './Gokul.jsx'
import List from './List.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Gokul/>
  <List/>

  </StrictMode>
)







