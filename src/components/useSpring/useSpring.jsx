import React from 'react'

import SpringOverwrite from './SpringOverwrite'
import SpringPassAFun from './SpringPassAFun'
import SpringAsyncScripts from './SpringAsyncScripts'
import SpringAsyncChain from './SpringAsyncChain'
import SpringFlipCard from './SpringFlipCard'
import SpringWithGesture from './SpringWithGesture'
import SpringGiftAndBubble from './SpringGiftAndBubble'
// import Spring3DCard from './Spring3DCard'

const listData = [
  {
    nick: '谢**笑',
    profile: 'https://gw.alicdn.com/tfs/TB1wW4rQVT7gK0jSZFpXXaTkpXa-225-225.png',
    itemName: '一二三四五六七八九十',
  },
  {
    nick: '何**勇',
    profile: 'https://gw.alicdn.com/tfs/TB1ubmmRHr1gK0jSZFDXXb9yVXa-500-500.png',
    itemName: '2一二三四五六七八九十',
  },
]

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
      <h2>SpringWithGesture</h2>
      <div className="panel">
        <SpringWithGesture />
      </div>
      <div className="panel">
        <SpringGiftAndBubble listData={listData} />
      </div>
      {/* <h2>3D Card</h2>
      <div className="panel">
        <Spring3DCard />
      </div> */}
    </>
  )
}

export default UseSpring
