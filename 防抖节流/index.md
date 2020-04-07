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