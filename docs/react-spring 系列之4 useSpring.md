前端开发中，动画的加入会将页面更加灵动，符合自然特性并让用户感受很舒爽的动画更是锦上添花。本系列将主要讲解 react-spring 的概念和使用方法，并结合一些 demo 来更加具体的讲述 react 中动画的开发方法。本系列目录如下：

- react-spring 系列之1 介绍
- react-spring 系列之2 基础使用
- react-spring 系列之3 common api
- react-spring 系列之4 useSpring
- react-spring 系列之5 useSprings
- react-spring 系列之6 useTrail
- react-spring 系列之7 useTransition
- react-spring 系列之8 useChain

本章节我们将一起来看看 react-spring 的 useSpring。

## 使用

``` jsx
import { useSpring, animated } from 'react-spring'
```

将一个值（value）转变为动画值（animated-value）。

可以通过 props 的改变而 re-render，来触发动画，例如

``` jsx
const props = useSpring({opacity: toggle ? 1 : 0})
```

上述代码通过修改了 toggle 状态，来重新出发动画。具体示例：

``` jsx
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

function SpringOverwrite() {
  const [toggle, setToggle] = useState(false)
  const { opacity } = useSpring({
    opacity: toggle ? 0 : 1,
  })
  return (
    <animated.div
      onClick={() => {
        setToggle(!toggle)
      }}
      style={{ opacity }}
    >
      click me, overwrite values to change the animation
    </animated.div>
  )
}

export default SpringOverwrite
```

[效果展示]()

![](https://gw.alicdn.com/tfs/TB15LYHecVl614jSZKPXXaGjpXa-374-100.gif)

或者也可以通过传递一个函数并返回值来得到动画，并使用 `set` 来触发动画。这在快速更新的场景里非常有用，这个场景下应当首选它。并提供了 `stop` 方法作为第三个参数。

