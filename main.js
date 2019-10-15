!function(){
	let time=50

	$('.actions').on('click','button',function(e){
		let $button=$(e.currentTarget)
		let speed=$button.attr('data-speed')
		$button.addClass('active').siblings('.active').removeClass('active')
		switch(speed){
			case 'slow':
			time=100
			break
			case 'normal':
			time=50
			break
			case 'fast':
			time=10
		}
	})
	function writeCode(prefix,code,fn){
		let domCode=document.querySelector('#code')
		let styleTag=document.querySelector('#styleTag')
		let n=0
		setTimeout(function run(){
			n+=1
			domCode.innerHTML=code.substring(0,n)
			styleTag.innerHTML=code.substring(0,n)
			domCode.scrollTop=domCode.scrollHeight
			if(n<code.length){
				setTimeout(run,time)
			}else{
				fn&&fn.call()
			}
		},time)		
	}
	let code=`
/* 先来一点底色吧 */
.preview{
  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height:100%;
  background: #FEE433
}
.pikachu {
  width: 100%;
  height: 168px;
  position: relative;
  z-index: 1
}
/* 画一个小鼻子 */
.nose {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 12px;
  border-color: black transparent transparent;
  border-radius: 50%;
  position: absolute;
  top: 28px;
  left: 50%;
  margin-left: -11px;
}
/* 两个大大的眼睛 */
.eye {
  width: 49px;
  height: 49px;
  background: #2e2e2e;
  position: absolute;
  border: 2px solid black;
  border-radius: 50%
}
/* 左眼 */
.eye.left {
  right: 50%;
  margin-right: 90px;
}
/* 右眼 */
.eye.right {
  left: 50%;
  margin-left: 90px;
}
.eye::before {
  content: '';
  display: block;
  background: white;
  border: 2px solid black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  left: 8px
}
/* 上腮红啦 */
.face {
  width: 68px;
  height: 68px;
  background: red;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  top: 80px
}
.face.left {
  right: 50%;
  margin-right: 120px
}
.face.right {
  left: 50%;
  margin-left: 120px
}
/* 嘴巴 */
.upperLip {
  width: 64px;
  height: 20px;
  border: 2px solid black;
  position: absolute;
  top: 46px;
  background: #FEE433
}
.upperLip.left {
  border-bottom-left-radius: 40px 20px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
  right: 50%
}
.upperLip.right {
  border-bottom-right-radius: 40px 20px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
  left: 50%;
}
.lowerLip-wrapper {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -50px;
  z-index: -1;
  height: 116px;
  width: 100px;
  overflow: hidden;
}
.lowerLip {
  background: #990513;
  width: 100px;
  height: 400px;
  border-radius: 500px/1600px;
  border: 2px solid black;
  position: absolute;
  bottom: 0;
  overflow: hidden
}
/* 加上舌头 */
.lowerLip::after {
  content: '';
  height: 100px;
  width: 100px;
  background: #fc4a62;
  position: absolute;
  bottom: -10px;
  left: 50% margin-left: -50px;
  border-radius: 50%
}
/* 画完啦！ */
`
	writeCode('',code,()=>{})


}.call()