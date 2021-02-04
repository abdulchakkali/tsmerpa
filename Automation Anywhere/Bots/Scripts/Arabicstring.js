function foo(msg) {
  var res = '0x'
  for (var i = 0; i < msg.length; i++) {
    var temp = msg.charAt(i).charCodeAt(0).toString(16).toUpperCase()
    if (temp.length == 1)
      temp = '000' + temp
    else if (temp.length == 2)
      temp = '00' + temp
    else if (temp.length == 3)
      temp = '0' + temp
    res = res + temp.substring(2,4) + temp.substring(0,2)
  }
  return res
}