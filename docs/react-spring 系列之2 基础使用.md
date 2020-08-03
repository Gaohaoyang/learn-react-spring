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

- `useSpring` 是一个单弹簧系统，从 a 点移动到 b 点
- `useSprings` 是一个多弹窗系统，针对列表，一个个从 a 移动到 b
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

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/Basics)

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

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/Basics)

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

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/Basics)

![](https://gw.alicdn.com/tfs/TB1NwsmbSslXu8jSZFuXXXg7FXa-285-73.gif)

Springs 可以操作的所有状态插值枚举如下：

- Colors (names, rgb, rgba, hsl, hsla, gradients)
- Absolute lengths (cm, mm, in, px, pt, pc)
- Relative lengths (em, ex, ch, rem, vw, vh, vmin, vmax, %)
- Angles (deg, rad, grad, turn)
- Flex and grid units (fr, etc)
- All HTML attributes
- SVG paths (as long as the number of points matches, otherwise - use custom interpolation)
- Arrays
- String patterns (transform, border, boxShadow, etc)
- Non-animatable string values (visibility, pointerEvents, etc)
- ScrollTop/scrollLeft

``` jsx
const props = useSpring({
  vector: [0, 10, 30],
  display: 'block',
  padding: 20,
  background: 'linear-gradient(to right, #009fff, #ec2f4b)',
  transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
  boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
  borderBottom: '10px solid #2D3747',
  shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
  textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
})
```

## 视图层的插值修改

如果要在视图层中再次修改 animated value，可以使用 `interpolate` 这个方法。interpolate 可以传入一个函数或一个表示区间的对象。也可以形成链，一个计算结果被另一个计算重复使用。

这个插值修改的设计没有放在 spring 中而是放在视图层的原因是，可以提高性能，更快并占用更少空间。

示例

```jsx
import React from 'react'
import { useSpring, animated, interpolate } from 'react-spring'

function BasicsInterpolate() {
  const {
    color,
    o,
    xyz,
  } = useSpring({
    from: {
      color: '#ef5350',
      o: 0,
      xyz: [0, 0, 0],
    },
    color: '#283593',
    o: 1,
    xyz: [10, 6, 5],
  })

  return (
    <animated.div
      style={{
        // 不使用 interpolate 直接使用属性
        color,
        // 设置背景透明度
        background: o.interpolate((value) => `rgba(253, 216, 53, ${value})`),
        // 数组的方式使用
        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
        // 合并多组值
        border: interpolate([o, color], (oo, c) => `${oo * 5}px solid ${c}`),
        // 生成一个范围值，再使用 interpolate
        padding: o.interpolate({
          range: [0, 0.8, 1],
          output: [0, 0, 10],
        }).interpolate((oo) => `${oo}%`),
        // 可以使用字符串在 range 中
        borderColor: o.interpolate({
          range: [0, 1],
          output: ['red', '#ffaabb'],
        }),
        // 简写方式
        opacity: o.interpolate(
          [0.1, 0.2, 0.6, 1],
          [1, 0.1, 0.5, 1],
        ),
      }}
    >
      {
        o.interpolate((n) => n.toFixed(2))
      }
    </animated.div>
  )
}

export default BasicsInterpolate
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/Basics)

![](https://gw.alicdn.com/tfs/TB1SKTePNz1gK0jSZSgXXavwpXa-383-143.gif)

## 补充

### “自动”触发动画

使用 hooks 会和 renderprops 不同的是，hooks 不知道作用于具体的视图。因此想要通过 hooks api “自动”触发动画是无法完成的。听起来是一种退步，但使用 hooks 监听尺寸变化是很容易的，例如 [react-use-measure](https://github.com/react-spring/react-use-measure), [react-resize-aware](https://github.com/FezVrasta/react-resize-aware), [react-measure](https://github.com/souporserious/react-measure)

例如我们监听一个 div 的宽度，当其宽度下雨 249 px 时，将这个 div 透明度设置为 0。

``` tsx
import React, { Fragment } from 'react'
import useMeasure from 'react-use-measure'
import { animated, useSpring } from 'react-spring'

function BasicsMeasure() {
  const [ref, bounds] = useMeasure()
  const { opacity } = useSpring({
    from: {
      opacity: 1,
    },
    opacity: bounds.width < 249 ? 0 : 1,
  })
  return (
    <animated.div
      ref={ref}
      style={{
        position: 'relative',
        opacity,
      }}
    >
      {Object.keys(bounds).map((key) => (
        <Fragment key={key}>
          <span>
            {
              key
            }
            ---
          </span>
          <span>
            {
              Math.round(bounds[key])
            }
            px
          </span>
          <br />
        </Fragment>
      ))}
    </animated.div>
  )
}

export default BasicsMeasure
```

[效果展示](https://gaohaoyang.github.io/learn-react-spring/#/Basics)

![](https://gw.alicdn.com/tfs/TB1gstndipE_u4jSZKbXXbCUVXa-365-254.gif)
