前端开发中，动画的加入会将页面更加灵动，符合自然特性并让用户感受很舒爽的动画更是锦上添花。本系列将主要讲解 react-spring 的概念和使用方法，并结合一些 demo 来更加具体的讲述 react 中动画的开发方法。本系列目录如下：

- react-spring 系列之1 介绍
- react-spring 系列之2 基础使用
- react-spring 系列之3 common api
- react-spring 系列之4 useSpring
- react-spring 系列之5 useSprings
- react-spring 系列之6 useTrail
- react-spring 系列之7 useTransition
- react-spring 系列之8 useChain

本章节我们将一起来看看 react-spring 的 useSprings。

## 使用

```jsx
import { useSprings, animated } from 'react-spring'
```

`useSprings` 用于创建多个 spring 动画，每一个 spring 动画都拥有自己的配置信息，例如一个列表类型的动画。

和 `useSpring` 类似 `useSprings` 也有两种调用方式。

### 覆盖值来改变状态触发动画

如果改变组件传入的props触发rerender，那么动画也会被更新触发。

```js
const springs = useSprings(number, items.map(item => ({ opacity: item.opacity }))
```

###
