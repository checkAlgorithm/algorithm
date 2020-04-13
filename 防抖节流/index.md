# 防抖节流

## 防抖

> 短时间内大量触发同一事件，为防止事件超额触发，造成性能浪费，使用一个定时器，记录触发频率。

```
var debounce = function (fn, wait) {
  var time = null;
  return function() {
    let context = this
    let args = arguments
    if (time) clearTimeout(time)
    time = setTimeout(() => {
      fn.apply(context, args)
    }, wait)
  }
}
```

## 节流

> 一段时间内大量触发同一事件，为节约资源，使用定时器，每隔一段时间执行一次，即延迟执行(不中断)

```
var throllter = function (fn, wait) {
  var time = null
  return function () {
    let _this = this
    let args = _this.arguments
    if (!time) {
      time = setTimeout(() => {
        time = null
        fn && fn.apply(_this, args)
      }, wait)
    }
  }
}
```

## 不同

* 防抖是执行开始前，判断是否已经在执行，如果正在执行，则重置时间器，重新开始，也就是多次重置定时器。
* 节流是执行完成后，重置时间器，再重新开始，只重置了一次定时器。

## 相同

* 在定义的wait时间内，会中断掉多余的事件。