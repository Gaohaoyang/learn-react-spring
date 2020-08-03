前端开发中，动画的加入会将页面更加灵动，符合自然特性并让用户感受很舒爽的动画更是锦上添花。本系列将主要讲解 react-spring 的概念和使用方法，并结合一些 demo 来更加具体的讲述 react 中动画的开发方法。本系列目录如下：

- react-spring 系列之1 介绍
- react-spring 系列之2 基础使用
- react-spring 系列之3 common api
- react-spring 系列之4 useSpring
- react-spring 系列之5 useSprings
- react-spring 系列之6 useTrail
- react-spring 系列之7 useTransition
- react-spring 系列之8 useChain

本章节我们将一起来看看 react-spring 的 common api，有哪些可配置的属性，以及是怎么使用的。

## 配置项

Spring 是可配置也可微调的。如果想调节设置，可以增加一个 config 参数，如下

``` jsx
useSpring({
  config: {
    duration: 250
  },
  ...
})
```

Property | Default | Description
--- | --- | ---
mass | 1 | spring mass 弹簧质量
tension | 170 | 弹簧能量负荷
friction | 26 | 弹簧阻尼
clamp | false | 枷锁。为true时，弹簧一旦突破边界将停止运动
precision | 0.01 | 精度
velocity | 0 | 初始速度
duration | undefined | 持续时间，当大于0时，将使用基于时间的动画而不是弹簧物理动画。单位为毫秒。
easing | t => t | 缓动函数，默认为线性。可以自定为任意。

## 预设值

有一些已经配好的常见预设值组合

``` jsx
import { ..., config } from 'react-spring'

useSpring({ ..., config: config.default })
```

Property | Value
--- | ---
config.default | { mass: 1, tension: 170, friction: 26 }
config.gentle | { mass: 1, tension: 120, friction: 14 }
config.wobbly | { mass: 1, tension: 180, friction: 12 }
config.stiff | { mass: 1, tension: 210, friction: 20 }
config.slow | { mass: 1, tension: 280, friction: 60 }
config.molasses | { mass: 1, tension: 280, friction: 120 }

## 属性

``` jsx
useSpring({ from: { ... }, to: { ... }, delay: 100, onRest: () => ... })
```

Property | Type | Description
--- | --- | ---
from | obj | 初始值，可选
to | obj/fn/array(obj) | 动画目标值，可省略 `to` 属性名，直接写对象。
delay | number/fn | 动画开始前的延迟，可以给每个独立的 key 使用函数的写法 key => delay
immediate | bool/fn | 如果为 true 将阻止动画，同样可以为每个独立的key使用函数的写法 key => immediate
config | obj/fn | 弹簧的配置项(包括 mass, tension, friction, etc)。同样可以为每个独立的key使用函数的写法 key => config
reset | bool | 如果设置为true，则弹簧开始从头开始动画（from -> to）
reverse | bool | 如果置为 true，则 from 和 to 被互换，这仅与 reset 一起使用才有意义
onStart | fn | 开始的回调
onRest | fn | 动画停顿时进行回调
onFrame | fn | 逐帧回调，传递的第一个参数是动画值

## Interpolations 插值器

`value.interpolate` 接受一下形式的对象

Value | default | Description
--- | --- | ---
extrapolateLeft | extend | Left extrapolate. Can be: identity/clamp/extend
extrapolateRight | extend | Right extrapolate. Can be: identity/clamp/extend
extrapolate | extend | Shortcut to set left and right-extrapolate
range | [0,1] | Array of input ranges
output | undefined | Array of mapped output ranges
map | undefined | Value filter applied to input value

range 简写方式:

``` js
value.interpolate([...inputRange], [...outputRange])
```

或直接使用方法

``` js
value.interpolate(v => ...)
```
