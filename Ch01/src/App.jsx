// -----------------------------
// -------->>> WAY 01       ||||
// -----------------------------

// function App(){

//   return `hello DSG !`;
// }

// export default App;

// -----------------------------
// -------->>> WAY 02       ||||
// -----------------------------
import React from 'react'

const App = () => {
  return (
    // way 2.1
    // <div>
    //   <div id="dad">
    //     <h1 id="child_1">
    //       I am Dad's son !
    //     </h1>
    //     <h1 id="child_2">
    //       I am Dad's daughter !
    //     </h1>
    //   </div>
    //   <div id="uncle">
    //     <h2 id="child_3">
    //       I'm uncle's son
    //     </h2>
    //     <h2 id="child_4">
    //       I'm uncle's daughter !
    //     </h2>
    //   </div>
    // </div>
    <>
      <div id="dad">
       <h1 id="child_1">
        I am Dad's son !
       </h1>
       <h1 id="child_2">
         I am Dad's daughter !
       </h1>
     </div>
     <div id="uncle">
       <h2 id="child_3">
         I'm uncle's son
       </h2>
       <h2 id="child_4">
         I'm uncle's daughter !
       </h2>
     </div>
    </>
  )
}

export default App;
