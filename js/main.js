let cssCode = `/*
* 你好，我是马心悦
* 普通的文字介绍太单调了
* 下面我用代码来介绍一下自己
* 首先准备一些样式
*/
*{
    transition: all 1s;
}
#codeArea{
    float: left;
    width: 49.5%;
    height: 100%;
    border: 2px solid rgb(68,68,68);
    padding: 16px;
  
}
/* 纯黑太丑啦，加点颜色吧 */
.token.selector{
    color: rgb(215,186,116);
}
.token.punctuation{
    color: #999;
}
.token.property{
    color: rgb(156,220,247);
}
.token.function{
    color: #DD4A68;
}
/* 换个背景色试试 */
body{
    overflow: hidden;
    font-size: 16px;
    color: rgb(205,130,72);
    background: rgb(50,50,50);
    padding: 100px;
    height: 100vh;
}
#codeArea{
    background: rgb(37,37,37);
    box-shadow: 2px 2px 30px rgba(0,0,0,0.7);
}
`
let cssCode2 = `/*
* 下面正式开始介绍
* 先准备一张纸
*/
#paper{ 
    background: rgb(37,37,37);
    width: 49.5%;
    height: 100%;
    float: right;
    box-shadow: -2px 2px 30px rgba(0,0,0,0.7);
    border: 2px solid rgb(68,68,68);
}
/* 请看右边~ */
    `
let markDown = `
## 自我介绍
我叫马心悦
自学前端四个月
## 联系方式
手机：18292034074
Email：jayce_ma.xa@foxmail.com
## 社交
github：https://github.com/jaycemxy
个人在线简历：https://jaycemxy.github.io/resume/
博客：https://jaycemxy.github.io/
`

//把代码写到#codeArea上
function writeCode(precode,code){
    return new Promise((resolve)=>{
        let n = 0
        let animationId = setInterval(()=>{
            n = n + 1
            codeArea.scrollTop = codeArea.scrollHeight
            codeArea.innerHTML = Prism.highlight(precode+code.substring(0,n), Prism.languages.css, 'css');
            myCss.innerHTML = precode+code.substring(0,n)
            if(n>=code.length){
                window.clearInterval(animationId)
                resolve.call()
            }
        },20)
    })
}
writeCode('',cssCode).then(createPaper).then(()=>{
    writeCode(cssCode,cssCode2).then(writeMarkdown)
})


function createPaper(){
    let paper = document.createElement('div')
    paper.id = 'paper'
    document.body.append(paper)

    let pre = document.createElement('pre')
    pre.id = 'paperPre'
    paper.append(pre)
}

function writeMarkdown(){
    let n = 0;
    let mdId = setInterval(()=>{
        n+=1
        paperPre.scrollTop = paperPre.scrollHeight
        document.getElementById('paperPre').innerHTML =
        marked(markDown.substring(0,n));
        
        if(n>=markDown.length){
            clearInterval(mdId)
        }
    },0)
    
}
