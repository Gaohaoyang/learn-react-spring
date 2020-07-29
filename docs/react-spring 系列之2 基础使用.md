前端开发中，动画的加入会将页面更加灵动，符合自然特性并让用户感受很舒爽的动画更是锦上添花。本系列将主要讲解 react-spring 的概念和使用方法，并结合一些 demo 来更加具体的讲述 react 中动画的开发方法。本系列目录如下：

- react-spring 系列之1 介绍
- react-spring 系列之2 基础使用
- react-spring 系列之3 common api
- react-spring 系列之4 useSpring
- react-spring 系列之5 useSprings
- react-spring 系列之6 useTrail
- react-spring 系列之7 useTransition
- react-spring 系列之8 useChain

本章节我们将一起来看看 react-spring 的基础使用，看看它提供了哪些基础的 hooks api，以及是怎么使用的。

## 基础 api

目前 react-spring 提供了 5 个 hooks api：

- `useSpring` 是一个单弹簧系统，将数据从 a 点移动到 b 点
- `useSprings` 是一个多弹窗系统，针对列表，将里面的数据一个个从 a 移动到 b
- `useTrail` 单个数据集的多个弹簧系统，每个弹簧系统跟随在另一个弹簧系统后面
- `useTransition` 用于安装和写在 transitions 过渡动画（）
- `useChain` 将多个动画按队列或链组合在一起

最简单的是 `useSpring`，但这些不同的 api 动画中有很多相同的基础概念，我们一起来看下

## 第一个示例 fade in

``` jsx
import React from 'react'
import { useSpring, animated } from 'react-spring'

function BasicsFadeIn() {
  const props = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
  })
  return <animated.div style={props}>I will fade in</animated.div>
}

export default BasicsFadeIn
```

效果如下

![](https://gw.alicdn.com/tfs/TB1T.GXPpP7gK0jSZFjXXc5aXXa-305-151.gif)

接下来我们分下一下代码

``` jsx
import { useSpring, animated } from 'react-spring'
```

首先需要引入相关的库，`animated` 用于运动的处理，并且为了更好的性能，它是独立与 react 外的。它扩展了原有的节点元素，来接受动画相关的参数。

下一步，定义动画

``` jsx
const props = useSpring({
  opacity: 1,
  from: {
    opacity: 0,
  },
})
```

一个简单的 spring 动画，需要定义一个状态到另一个状态。状态的更新是累计的，springs 会记住你传入的所有的值。返回的 props 不是静态的固定值，它是会自我更新的，但是你不能将这个 props 用于普通的 div 中。

最后，绑定动画到视图

``` jsx
return <animated.div style={props}>I will fade in</animated.div>
```

确保你希望绑定动画的元素是被 animated 所扩展过的，例如 `<animated.div>`。animated 可以扩展所有的 html 标签（如：div、span、svg 等）。如果想将动画用于 react 组件上，可以使用如下的方式包装一下组件：

``` jsx
// React components
const AnimatedDonut = animated(Donut)

// React-native
const AnimatedView = animated(View)

// styled-components, emotion, etc.
const AnimatedHeader = styled(animated.h1)`
  ...;
`
```

## 更多预制的插值

不要认为传入的值只是 style 本身，它还可以是各种其他预设状态。Springs 可以操作几乎所有的状态不仅仅是处理数字。

滚动示例

``` jsx
/* eslint-disable max-len */
import React from 'react'
import { useSpring, animated } from 'react-spring'

function BasicsScrollTop() {
  const { scroll } = useSpring({
    scroll: 200,
    from: {
      scroll: 0,
    },
  })
  return (
    <animated.div
      scrollTop={scroll}
      style={{
        height: '100px',
        overflowY: 'auto',
      }}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur saepe in quae dolorum deleniti recusandae, quisquam perspiciatis quod officia quos, nam aliquam! Neque, tempore voluptatum illo libero quos obcaecati ipsum.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto doloribus iure alias eum nemo magni aspernatur facere excepturi ducimus esse quidem, sint assumenda aut rem nobis maxime. Numquam, eligendi hic?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ex ullam. Voluptatem ad quis maiores alias perspiciatis sunt adipisci hic cum quam labore, laudantium reprehenderit optio molestias exercitationem, sed eaque?
      </p>
    </animated.div>
  )
}

export default BasicsScrollTop
```

效果展示

![](https://gw.alicdn.com/tfs/TB1_UjfbtTfau8jSZFwXXX1mVXa-292-151.gif)

数字变化示例

``` jsx
import React from 'react'
import { useSpring, animated } from 'react-spring'

function BasicsInnerText() {
  const { number } = useSpring({
    number: 10,
    from: {
      number: 0,
    },
  })
  return (
    <animated.div>
      { number }
    </animated.div>
  )
}

export default BasicsInnerText
```

效果展示

![](https://gw.alicdn.com/tfs/TB1NwsmbSslXu8jSZFuXXXg7FXa-285-73.gif)
