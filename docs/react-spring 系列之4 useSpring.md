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

其中核心代码为

``` jsx
const { opacity } = useSpring({
  opacity: toggle ? 0 : 1,
})
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/useSpring)

![](https://gw.alicdn.com/tfs/TB15LYHecVl614jSZKPXXaGjpXa-374-100.gif)

或者也可以通过传递一个函数并返回值来得到动画，并使用 `set` 来触发动画。这在快速更新的场景里非常有用，这个场景下应当首选它。并提供了 `stop` 方法作为第三个参数。

``` jsx
import React from 'react'
import { useSpring, animated } from 'react-spring'

let toggle = false

function SpringPassAFun() {
  const [{ opacity }, set] = useSpring(() => ({
    opacity: 1,
  }))
  return (
    <animated.div
      style={{
        opacity,
      }}
      onClick={() => {
        set({
          opacity: toggle ? 1 : 0,
        })
        toggle = !toggle
      }}
    >
      click me! SpringPassAFunction
    </animated.div>
  )
}

export default SpringPassAFun
```

其中核心代码为

``` jsx
const [{ opacity }, set] = useSpring(() => ({
  opacity: 1,
}))

...

set({
  opacity: toggle ? 1 : 0,
})
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/useSpring)

![](https://gw.alicdn.com/tfs/TB10UUzfLzO3e4jSZFxXXaP_FXa-374-100.gif)

最后注意将动画属性绑定到视图层

``` jsx
return <animated.div style={props}>i will fade</animated.div>
```

## 补充说明

### To 属性的简写方式

任何直接写的属性都会被认为是 to 的属性，例如 `opacity: 1` 会被转化为 `to: { opacity: 1 }`

```jsx
// This ...
const props = useSpring({opacity: 1, color: 'red'})
// is a shortcut for this ...
const props = useSpring({to: {opacity: 1, color: 'red'}})
```

### 异步动画的脚本写法或链式写法

to 属性中可以使用 script 的写法或使用链式写法将多个动画组合到一起。因为这些动画会异步执行，所以确保要提供 from 参数作为基准值。

脚本写法

``` jsx
import React from 'react'
import { useSpring, animated } from 'react-spring'

function SpringAshyncScripts() {
  const props = useSpring({
    to: async (next) => {
      await next({ opacity: 1, color: '#ffaaee' })
      await next({ opacity: 0, color: 'rgb(14,26,19)' })
    },
    from: { opacity: 0, color: 'red' },
  })

  return (
    <animated.div style={props}>I will fade in and out</animated.div>
  )
}

export default SpringAshyncScripts
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/useSpring)

![](https://gw.alicdn.com/tfs/TB1lSBLQhz1gK0jSZSgXXavwpXa-374-79.gif)

链式（chain）写法

``` jsx
import React from 'react'
import { useSpring, animated } from 'react-spring'

function SpringAshyncChain() {
  const props = useSpring({
    from: { opacity: 0, color: 'red' },
    to: [
      { opacity: 1, color: '#ffaaee' },
      { opacity: 0, color: 'rgb(14,26,19)' },
    ],
  })
  return (
    <animated.div style={props}>I will fade in and out (chain)</animated.div>
  )
}

export default SpringAshyncChain
```

效果展示同上


