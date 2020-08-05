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

## Demos

### Flip Card

``` jsx
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'

import './SpringFlipCard.css'

function SpringFlipCard() {
  const [flipped, setFlipped] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1000px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 1, tension: 180, friction: 16 },
  })
  return (
    <div
      onClick={() => {
        setFlipped((pre) => !pre)
      }}
      className="wrap"
    >
      <animated.div
        className="card front"
        style={{
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      />
      <animated.div
        className="card back"
        style={{
          opacity,
          transform: transform.interpolate((t) => `${t} rotateY(-180deg)`),
        }}
      />
    </div>
  )
}

export default SpringFlipCard
```

SpringFlipCard.css

``` css
.wrap{
  position: 'relative';
  width: 170px;
  height: 240px;
}
.card {
  width: 170px;
  height: 240px;
  border-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  position: absolute;
}

.front {
  background-image: url(https://gw.alicdn.com/tfs/TB1v1EygQ9l0K4jSZFKXXXFjpXa-564-792.png);
}

.back {
  background-image: url(https://gw.alicdn.com/tfs/TB1KAShQhv1gK0jSZFFXXb0sXXa-341-480.png);
}
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/useSpring)

![](https://gw.alicdn.com/tfs/TB1yVSxhP39YK4jSZPcXXXrUFXa-305-287.gif)

我们将2张卡片分别设置好背景图，作为正面和背面，通过点击事件，设置 flipped 状态。然后分别对卡片的透明度和Y向旋转进行控制。

并且设置了弹簧的质量、张力、阻尼。

```jsx
config: { mass: 1, tension: 180, friction: 16 },
```

最终呈现出上述翻转效果。

### Drag

```jsx
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import { useGesture } from 'react-use-gesture'
import { useSpring, animated, interpolate } from 'react-spring'

import './SpringWithGesture.css'

const lockScroll = (e) => {
  e.preventDefault()
}

function SpringWithGesture() {
  const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }))

  // Set the drag hook and define component movement based on gesture data
  const bind = useGesture({
    onDrag: ({
      down,
      movement: [mx, my],
    }) => {
      set({
        x: down
          ? mx
          : 0,
        y: down
          ? my
          : 0,
      })
    },
    onDragStart: () => {
      document.body.addEventListener('touchmove', lockScroll, { passive: false })
    },
    onDragEnd: () => {
      document.body.removeEventListener('touchmove', lockScroll, { passive: false })
    },
  })

  return (
    <animated.div
      className="springWithGesture"
      {...bind()}
      style={{
        transform: interpolate([x, y], (xx, yy) => `translateX(${xx}px) translateY(${yy}px)`),
      }}
    >
      drag me
    </animated.div>
  )
}

export default SpringWithGesture
```

SpringWithGesture.css

``` css
.springWithGesture{
  width: 80px;
  height: 80px;
  background-color: #455A64;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.springWithGesture:hover{
  cursor: grab;
}
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/useSpring)

![](https://gw.alicdn.com/tfs/TB1_afMQhv1gK0jSZFFXXb0sXXa-305-287.gif)

这里结合了 [react-use-gesture](https://github.com/react-spring/react-use-gesture) 这个优质的手势库一起，react-use-gesture 也是在 react-spring 这个 organization 下，他们之间的配合使用应该是非常完美的。
