# this指向
众所周知，函数的调用方式决定了`this`的指向，`this`不能再执行期间被赋值，能对`对象`进行this控制的无非就是call、apply、bind。


## call:function.call(thisArg, arg1， arg2, ...)
---
> call() 方法比较简单，使用一个指定的this值和单独给出的一个或多个参数调用一个函数

### 手写call
```
Function.prototype.myCall = function(thisArg, ...args) {
  if (typeof(this) !== 'function') {
    throw new TypeError('not function')
  }
  thisArg = thisArg || window // 若没有传入this, 默认绑定window对象
  const fn = Symbol('fn') // 声明一个独有的Symbol属性, 防止fn覆盖已有属性
  thisArg.fn = this
  const result = thisArg.fn(...args)
  delete thisArg.fn // 删除我们声明的fn属性
  return result
} 
```

## apply:function.apply(thisArg, [arg])
> apply()和call()基本一致，唯一不同的就是，call介绍参数列表，而apply接受的是一个参数数组

### 手写apply
稍微修改下call方法即可
```
Function.prototype.myApply = function(thisArg, [...args]) {
  if (typeof(this) !== 'function') {
    throw new TypeError('Not a function')
  }
  const fn = Symbol('fn')
  thisArg = thisArg || window
  thisArg.fn = this
  const result = thisArg.fn(...args)
  delete thisArg.fn
  return result
}
```

## bind：function.bind(thisArg, arg1, arg2, ...)
bind()方法创建了一个新的函数，在调用时，这个新函数的this被指向bing的第一个参数（thisArg），其余参数作为新函数的参数，供调用时使用。
### 用法
```
Function.prototype.bind = function (thisArg, ...args) {
  return () => {
    this.call(thisArg, ...args)
  }
}
```
### 手写bind
> 需要注意下，不同于call和apply:
>
>1、bind返回一个新的函数，call和apply绑定函数后直接执行，且每次执行都要重新绑定
>
>2、bind支持函数拥有预设的初始参数，这些参数排在最前面，
```
Function.prototype.myBind = function(thisArg, ...args) {
  if (typeof(this) !== 'function') {
    throw new TypeError('not a function')
  }
  var self = thisArg || window
  var fbound = function () {
    self.apply(this instanceof self ? this : thisArg, args.concat(Array.prototype.slice.call(arguments)))
  }
  fbound.prototype = Object.create(self.prototype)
  return fbound
}
```