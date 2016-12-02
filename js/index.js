$(document).ready(function(){
	
	//最上面的
	var head=$(".head")
	
	 $(window).scroll(function(){
   
	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($(".banner").offset().top<=obj.scrollTop)
        {
          head.css("display","block")
        }
        else 
        {
           head.css("display","none")

        }
})
	
	
	
	
	
	
//	回到顶部

		jQuery.backtop($(".backtop"),500)
		 $(window).scroll(function(){
 
  	  var obj=document.body.scrollTop?document.body:document.documentElement;
        // 出现楼层
        if($(".banner").offset().top<=obj.scrollTop+100)
        {
           $(".backtop").css("display","block")
        }
        else 
        {
           $(".backtop").css("display","none")

        }
  })
//轮播图
		var lunbo=$("#lunbo")
		var div=$("#jiedian")
		var imgbox=$(".imgbox")
		div.slice(4).addClass("block");
		var ww=imgbox.width()+20;
		var flag=true;
		var img1=$(".img1")	
		var now=0;
		var next=0
    function nmove(){
    	now++;
//  	if(now==6){
//  		now=0;
//  		return;
//  	}
    	 if(now-next==5||now==5){
    		now=0;
    		for(var i=0;i<4;i++){
    	 	var first=div.children().first();
      		var last=div.children().last();
      		last.insertBefore(first);
    	 	}
    		div.css("left",-4*ww)
    	 	div.animate({left:0},1000,"linear",function(){
//  	 	$(this).css("left",0);
    	 	flag=true;
    	 	
    		 })
    	 }
    	  else {
    	  
    	 	div.animate({left:-ww},550,"linear",function(){
    	 	$(this).children().first().appendTo(this)
    	 	$(this).css("left",0);
    	 	flag=true;
    	 	
    		 })
    	 }
    	  
     }
  function nmovel(){
		next++;
  		if(next-now==5||next==5){
  			next=0;
  			div.animate({left:-4*ww},"linear",function(){
  			for(var i=0;i<4;i++){
    		$(this).children().first().appendTo(this)}
    		$(this).css("left",0);
    		flag=true;
    		
    	})
  		}
  		else{
	  		var first=div.children().first();
	      	var last=div.children().last()
	      	last.insertBefore(first)
	      	div.css({left:-ww})
	      	div.animate({left:0},"linear",function(){
	      		flag=true;
	      	})
  		}
  		console.log(next)
      }
		var jiantou1=$("#jiantou1")
		var jiantou2=$("#jiantou2")
		jiantou1.click(function(){
			if(flag)
			{nmovel()}
			flag=true;
		})
		jiantou2.click(function(){
			if(flag)
			{nmove()}
			flag=true;
		})
   			var t=setInterval(nmove,2000)
   			
   			lunbo.hover(function(){
   				clearInterval(t)
   			},function(){
   				t=setInterval(nmove,2000)
   			})
 		
   		var jt=$(".jt")
   			jt.hover(function(){clearInterval(t)},function(){t=setInterval(t)})
 			
 		
 	//choose
 	var lis=$(".row4 .tab ul li");
 	var zz=$("span",lis);
 	tabcontent=$(".tab-content")
 	lis.eq(0).css({"background":"#fff","border-top-color":"#79be0b"});
 	zz.eq(0).css("display","block")
 	tabcontent.eq(0).css("display","block")
 	lis.click(function(){
 		lis.css({"background":"#fafafa","border-top-color":"#ebebeb"});
 		tabcontent.css("display","none")
 		var index=lis.index($(this))
 		lis.eq(index).css({"background":"#fff","border-top-color":"#79be0b"});
 		zz.eq(index).css("display","block")
 		tabcontent.eq(index).css("display","block")
 	})
 	
 	
 	
 	
 	//banner1
 	var banner=$(".banner1")
 	var ban=$(".banner")
 	var bnow=0;
 	var bnext=0;
 	var img1=$("#img1")
 	var b1=$("#b1")
 	var b2=$("#b2")
 	var b3=$("#b3")
 	var bflag=false;
 	var bn=0;
   	//banner2
   	var yun1=$("#yun1")
   	var yun2=$("#yun2")
   	var feiji1=$("#feiji1")
   	var feiji2=$("#feiji2")
   	var c1=$("#c1")
   	var c2=$("#c2")
   	var c3=$("#c3")
   	function cmove(){
   		banner.css("display","none")
   		banner.eq(1).css("display","block")
   		yun1.css({"left":"110%","opacity":0})
   		yun2.css({"left":"110%","opacity":0})
   		feiji1.css({"left":"110%","opacity":0})
   		feiji2.css({"left":"110%","opacity":0})
   		c3.css({"left":"-10%","top":"45%"})
   		c1.css("top","110%")
   		c2.css("top","110%")
   		yun1.animate({"left":"32%","opacity":1},800)
   		yun2.delay(50).animate({"left":"55%","opacity":1},800)
   		feiji1.animate({"left":"45%","opacity":1},800)
   		feiji2.delay(50).animate({"left":"65%","opacity":1},800)
   		c1.animate({"top":"60%","opacity":1},800)
   		c2.delay(150).animate({"top":"70%","opacity":1},800)
   		c3.delay(80).animate({"left":"25%","opacity":1},800)
   	}
   	
   	function cmovel(){
   		yun1.animate({"left":"-40%"},500)
   		yun2.delay(100).animate({"left":"-40%"},500)
   		feiji1.animate({"left":"-40%"},500)
   		feiji2.delay(100).animate({"left":"-40%"},500)
   		c1.delay(50).animate({"top":"120%"},800)
   		c2.animate({"top":"120%"},800)
   		c3.delay(80).animate({"top":"120%"},800)
   	}
   	//banner3
   	var pad1=$("#pad1")
   	var pad2=$("#pad2")
   	var d1=$("#d1")
   	var d2=$("#d2")
   	var d3=$("#d3")
   	var d4=$("#d4")
   	var d5=$("#d5")
   	var d6=$("#d6")
   
    function dmove(){
    	pad1.css({"left":"-100%","opacity":0})
	   	pad2.css({"left":"100%","opacity":0})
	   	d1.css({"top":"-100%","left":"22.5%","opacity":0})
	    d2.css({"top":"-100%","left":"22.5%","opacity":0})
	    d3.css({"top":"100%","left":"22.5%","opacity":0})
	    d4.css({"top":"100%","left":"22.5%","opacity":0})
	    d5.css({"top":"100%","left":"22.5%","opacity":0})
    	banner.css("display","none")
   		banner.eq(2).css("display","block")
    	pad1.animate({"left":"50%","opacity":1},400)
    	pad2.animate({"left":"67%","opacity":1},400)
    	d1.delay(110).animate({"top":"28%","opacity":1},600)
    	d2.delay(100).animate({"top":"41%","opacity":1},600)
    	d3.delay(100).animate({"top":"52.5%","opacity":1},600)
    	d4.delay(110).animate({"top":"60.5%","opacity":1},600)
    	d5.delay(120).animate({"top":"69%","opacity":1},600)
    }
    function dmovel(){
    	pad1.animate({"left":"-100%","opacity":1},400)
    	pad2.animate({"left":"100%","opacity":1},400)
    	d1.delay(110).animate({"top":"-100%","left":"40%","opacity":1},800)
    	d2.delay(100).animate({"top":"-100%","left":"40%","opacity":1},800)
    	d3.delay(100).animate({"top":"100%","left":"40%","opacity":1},800)
    	d4.delay(110).animate({"top":"100%","left":"40%","opacity":1},800)
    	d5.delay(120).animate({"top":"100%","left":"40%","opacity":1},800)
    }
   
  function bmove(){
 		banner.css("display","none")
   		banner.eq(0).css("display","block")
 		img1.animate({"left":"20%"},850,"easeInOutSine");
   		b2.animate({"top":"35%","opacity":1},750);
   		b1.delay(100).animate({"top":"25%","opacity":1},750);	
   		b3.animate({"top":"55%","opacity":1},750,"linear");
 	}
 	function bmovel(){
   		b3.animate({"left":"130%"},850,"linear",function(){
   			b3.css({"top":"130%","left":"65%","opacity":0})
   		})
   		b1.animate({"left":"130%"},850,function(){
   			b1.css({"top":"-25%","left":"65%","opacity":0})
   		})
   		b2.animate({"left":"130%"},850,function(){
   			b2.css({"top":"75%","left":"65%","opacity":0})
   		})
   		img1.animate({"left":"-80%"},950,"linear");
 	}
 function dong(){
 	bn++
 	if(bn==7){
 		bn=0
 	}
 	if(bn==1){
 		bmove();	
 	}
 	if(bn==2){
 		bmovel();
 	}
 	
 	if(bn==3){
 		cmove();
 	}
 	if(bn==4){
 		cmovel();
 	}
   	if(bn==5){
   		dmove();
   	}
   	if(bn==6){
   		dmovel();
   	}
// 	if(bn==7){
// 		emove();
// 	}
// 	if(bn==8){
// 		emovel();
// 	}
 	
 	
 }
 	var btn1=$(".but1")
 	var btn2=$(".but2")
   	var st=setInterval(dong,1100)
   	ban.hover(function(){
   		btn1.css("display","block")
   		btn2.css("display","block")
   		clearInterval(st)
   	},function(){
   		st=setInterval(dong,1100)
   		btn1.css("display","none")
   		btn2.css("display","none")
   	})
 	
 	btn1.click(function(){
 		dong();
 	})
 	btn2.click(function(){
 		dongl();
 	})
 	function dongl(){
 	bn--
 	if(bn==0){
 		bn=7
 	}
 	if(bn==2){
 		bmove();	
 	}
 	if(bn==1){
 		bmovel();
 	}
 	
 	if(bn==4){
 		cmove();
 	}
 	if(bn==3){
 		cmovel();
 	}
   	if(bn==6){
   		dmove();
   	}
   	if(bn==5){
   		dmovel();
   	}}
 	var says=$(".quote-box ul li")
 	var now=0;
 	var next=0;
 	says.eq(0).css("display","block");
 	says.eq(1).css("display","none");
 	function smove(){
 		next++
 		if(next==says.length){
 			next=0
 		}
 		says.css("display","none");
 		says.eq(next).css("display","block");
 	}
 	
 	var lt=setInterval(smove,4000)
})
