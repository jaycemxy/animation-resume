var text = "body{color:red;}"

var result = `
/*
 * 面试官你好，我是马心悦
 * 只用文字做介绍太过单调
 * 下面我将用代码来介绍我自己
 * 首先准备一些样式
 */

*{
  transition: all 1s;
}
html{
  background: rgb(222,222,222);
  font-size: 16px;
}

/* 我需要一点代码高亮 */
.token.selector{
    color: #690;
}
.token.property{
    color: #905;
}
.token.function{
    color: #DD4A28;
}
`

var n = 0
var id = setInterval(() => {
    n += 1
    code.innerHtml = result.substring(0, n)
    code.innerHtml = Prism.highlight(code.innerHtml, Prism.languages.css);
    styleTag.innerHtml = result.subString(0, n)
    if (n >= result.length) {
        window.clearInterval(id)
    }
}, 10)