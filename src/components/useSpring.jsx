import React from 'react'

import SpringOverwrite from './SpringOverwrite'
import SpringPassAFun from './SpringPassAFun'
import SpringAshyncScripts from './SpringAshyncScripts'
import SpringAshyncChain from './SpringAshyncChain'
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
      <h2>SpringAshyncScripts</h2>
      <div className="panel">
        <SpringAshyncScripts />
      </div>
      <h2>SpringAshyncChain</h2>
      <div className="panel">
        <SpringAshyncChain />
      </div>
      <h2>Flip Card</h2>
      <div className="panel">
        <SpringFlipCard />
      </div>
    </>
  )
}

export default UseSpring
