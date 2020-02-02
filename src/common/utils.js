export function debounce(func, delay) {
  //事件防抖动方法 防止多次向服务器发送请求
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}