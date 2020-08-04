import React from 'react'

import SpringOverwrite from './SpringOverwrite'
import SpringPassAFun from './SpringPassAFun'
import SpringAshyncScripts from './SpringAshyncScripts'
import SpringAshyncChain from './SpringAshyncChain'

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
      <div className="panel">
        <SpringAshyncScripts />
      </div>
      <div className="panel">
        <SpringAshyncChain />
      </div>
    </>
  )
}

export default UseSpring
