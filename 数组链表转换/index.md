## 数组链表的转换

### 链表

#### 单向链表

* 每个节点都是由一个数据组和向后的指针组成
* 最后一个指针指向null
* 整个链表的存取必须从头指针开始,头指针指向第一个节点

**数组转换成链表：**

```javascript
var changeNode = function(arr) {
  let result = {}
  let cur = result
  while(arr.length) {
    cur.next = {
      val: arr.pop(),
      next: null
    }
    cur = cur.next
  }
  return result.next
}
```

**链表换成数组:**

```javascript
var changeArray = function(node) {
  let result = []
  while(node) {
    result.push(node.val)
    node = node.next
  }
  return result
}
```

### 双向链表

* 中间节点存在两个指针，prev和next

### 循环列表

* 需要注意的是next指针指向head的时候即结束