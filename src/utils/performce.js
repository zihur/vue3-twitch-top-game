export const debounce = (func, wait) => {
  // 閉包特性，鎖死變數，禁止釋放變數
  let callback = func;
  let timerId = null;
  function debounced() {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      callback.apply(this, arguments);
    }, wait);
  }

  // 返回閉包函式
  return debounced;
}

export const throttle = (func, threshhold = 1000) => {
  let callback = func;
  let firstInvoke = true;
  let timerId = null;
  return function throttled() {
    if (firstInvoke) {
      callback.apply(this, arguments);
      firstInvoke = false;
      return;
    }

    // 存在定時器的話直接返回
    if (timerId) {
      return;
    }

    timerId = setTimeout(() => {
      clearTimeout(timerId)
      timerId = null
      callback.apply(this, arguments)
    }, threshhold)
  }
}
