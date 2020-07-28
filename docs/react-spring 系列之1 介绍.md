前端开发中，动画的加入会将页面更加灵动，符合自然特性并让用户感受很舒爽的动画更是锦上添花。本系列将主要讲解 react-spring 的概念和使用方法，并结合一些 demo 来更加具体的讲述 react 中动画的开发方法。本系列目录如下：

- react-spring 系列之1 介绍
- react-spring 系列之2 基础使用
- react-spring 系列之3 common api
- react-spring 系列之4 useSpring
- react-spring 系列之5 useSprings
- react-spring 系列之6 useTrail
- react-spring 系列之7 useTransition
- react-spring 系列之8 useChain

本章节我们将一起从介绍开始看起，看看什么是 react-spring，为什么要用 react-spring。

## 简介

前端开发一直都是与用户最直接交流沟通的工程师，用户体验是前端开发所一直追求的，而交互体验中的动画与手势最能提现出这一特点，从今天起，我们聊一聊 react 技术体系中的动画库 [react-spring](https://www.react-spring.io/)。

react-spring 是一个基于弹簧物理系统的动画库，可以满足大部分动画需求。提供了灵活的工具，可以实现你想象中的各种动画效果。

react-spring 是跨平台的，它支持 web，react-native，react-native-web 等。基本支持左右主流浏览器。gzip 后 web 版的库在 10.7 KB 左右，若按需加载，将会更小。

## 安装

```
npm install react-spring
```

## 为什么是弹簧系统

spring(弹簧)系统是这个库的核心概念，而不是运动曲线或动画时间等概念，这意味着它将有可能别于你所熟悉的任何一个动画系统（例如，transition 或 keyframes 等）。当我们尝试将页面上一个元素像**自然界**中那样运动时，普通动画中的运动曲线或动画时间可能会让人抓狂，因为自然界中没有任何运动是被规定了动画时间和运动曲线。

<img width="200px" src="https://gw.alicdn.com/tfs/TB1l3_3PXY7gK0jSZKzXXaikpXa-394-551.gif" />

我们已经习惯了基于时间的动画，去处理运动曲线、缓动函数、时间等，去想方设法尽量模拟自然的感受。但这种由时间和曲线参数化的动画从根本上与自然的、持续的、流畅的交互特性是相违背的。

弹簧系统改变了这一点，动画会变得轻松容易，默认情况下，所做的一切看起来都是非常自然的。

## 一些 demo

todo
