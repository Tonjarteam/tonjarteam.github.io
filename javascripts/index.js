
var list = document.getElementById("list").getElementsByTagName("li");
var frame = document.getElementById("frame");
for(var i=0;i<list.length;i++){
	list[i].index= i;
      	list[i].onclick = function(){
		for(var i=0;i<list.length;i++){
			list[i].style.color="#e2e2e2";
		}
		this.style.color="black";
		frame.src=this.innerHTML+".html";
		if(this.getAttribute("data-W")!=null)
			frame.width=this.getAttribute("data-W");
		else
			frame.width="100%";
	}
}
var reg = new RegExp("(^|&)"+ "page" +"=([^&]*)(&|$)");
var r = window.location.search.substr(1).match(reg);
if(r!=null&&r[2]>0&&r[2]<list.length)list[r[2]].onclick();
else list[0].onclick();
