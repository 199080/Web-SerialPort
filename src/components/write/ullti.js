export function a2hex(str) {

  let arr = [];
  let code  =  str.charCodeAt(0);
  // 转为16进制数组
  let code16 = code.toString(16); // "4e2d"
  for (let i = 0; i < code16.length; i = i + 2) {
    arr.push(parseInt(code16.substring(i, i + 2), 16));
  }
  return arr;
}


