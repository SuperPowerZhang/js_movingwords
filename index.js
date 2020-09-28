let hack = document.getElementById("hack");
let style = document.getElementById("style");
let html = document.querySelector("html");
console.log(style.innerHTML);
let text = `
页面正式开始，让文字动态一个个显示在页面上了：
hello，今天是9月28，打着石膏的我只能病假在家。

下面要给文字加样式了：
@body{
    font-size:16px;
    color:#7093DB;
    line-height:24px;
}&

接下来画一个八卦：
1.画一个圆；
@#bagua {
  width: 200px;
  height:200px;
   border-radius:100px;
}&
2.圆分为一黑一白；
@
#bagua {
 background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
 &
 3.变成弧形，加两个小圈
 @
#bagua::before,
#bagua::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 100px;
  border-radius: 100px;
}
#bagua::before{
    top: 0;
    background-color: #fff;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}
#bagua::after {
  top: 50%;
  background-color: #000;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
 &
`;
let length = text.length;
let i = 0;
//flag用来标志style的内容是否接受修改
let flag = false;
let text2 = "";
let step = () => {
    setTimeout(function () {
        if (i < length) {
            // if (text[i] === " ") {
            //     console.log("检测到空格了");
            //     text2 += "&nbsp;";
            // } else {
            text2 += text[i];
            // }
            //css代码段规定好@开始，到&结束；
            //当上一个文字是@时，flag改为true，开始写样式；
            text[i - 1] === "@" ? flag = true : null;
            //判断flag为true时，看是否修改style
            flag ? style.innerHTML += text[i] : null;
            //当下一个文字是&时，flag改为false，停止写样式；
            text[i + 1] === "&" ? flag = false : null;
            hack.innerText = text2;
            i += 1;
            //好像只写一个window也可以的
            window.scrollTo({
                top: 9999,
                left: 0,
                behavior: 'smooth'
            });
            html.scrollTo({
                top: 9999,
                left: 0,
                behavior: 'smooth'
            });
            step();
        }
    }, 50)
}
step();


