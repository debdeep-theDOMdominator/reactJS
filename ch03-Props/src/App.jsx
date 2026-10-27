import React from 'react'
import CardByProps from '../components/CardByProps'

const App = () => {
  return (
    <div className="parent">
      <CardByProps user='Debdeep' age={22} image='https://img.magnific.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?semt=ais_hybrid&w=740&q=80' />
      <CardByProps user='Soma' age={48} image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRijFWnaEROhzhUrzFrTJf7Z6wUtV3m4-Y2BDN4EohOYo7OYmsnjble0Z5v&s=10' />
    </div>
  )
}

export default App