import React from 'react'

import SpringOverwrite from './SpringOverwrite'
import SpringPassAFun from './SpringPassAFun'
import SpringAsyncScripts from './SpringAsyncScripts'
import SpringAsyncChain from './SpringAsyncChain'
import SpringFlipCard from './SpringFlipCard'

function UseSpring() {
  return (
    <>
      <h2>useSpring</h2>
      <div className="panel">
        <SpringOverwrite />
      </div>
      <div className="panel">
        <SpringPassAFun />
      </div>
      <h2>SpringAsyncScripts</h2>
      <div className="panel">
        <SpringAsyncScripts />
      </div>
      <h2>SpringAsyncChain</h2>
      <div className="panel">
        <SpringAsyncChain />
      </div>
      <h2>Flip Card</h2>
      <div className="panel">
        <SpringFlipCard />
      </div>
    </>
  )
}

export default UseSpring
