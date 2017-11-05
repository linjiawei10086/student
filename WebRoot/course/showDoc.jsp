<%@ page language="java" contentType="text/html; charset=gbk" pageEncoding="gbk"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
 <meta charset="UTF-8">
 <meta http-equiv="X-UA-Compatible" content="IE=11"> 
<script type="text/javascript" src="js/swfView/swfobject.js"></script>
<script type="text/javascript" src="js/swfView/jquery.js"></script>
<script type="text/javascript" src="js/swfView/flexpaper_flash.js"></script>
<script type="text/javascript" src="js/swfView/flexpaper_flash_debug.js"></script>
<style type="text/css" media="screen"> 
	html, body	{ height:100%; } 
	body { margin:0; padding:0; overflow:auto; }  
</style> 

<title>文档在线预览</title>
</head>
<body onload="init()">
   <div style="text-align:center;width:100%; height:100%;">
    	<div id="viewerPlaceHolder" style="width:auto; height:100%;" ></div>	        	       
   </div>
    <script type="text/javascript">
    	var swfPath="";
		var fileType="";
		
    	function init(){    		  
            var hostport="http://"+document.location.host;
    		//var arrayUrl=getURLSearch();
   		    //fileType= decodeURIComponent(arrayUrl.fileType);	 
			swfPath = "student/servlet/DisplayChart?filename=D:/up/swfFile/1487755963893_1043966930.swf";
		    //swfPath= decodeURIComponent(arrayUrl.swfPath);
		    swfPath=hostport+"/"+swfPath;
		    alert(swfPath);
		    initView();
    	}
    	//初始化swf展示
    	function initView(){
    		var fp = new FlexPaperViewer(	
   				 'js/swfView/FlexPaperViewer',
   				 'viewerPlaceHolder', { config : {
   				 SwfFile : escape(swfPath),//需要使用Flexpaper打开的文档
   				 Scale : 1.5, 						//初始化缩放比例，参数值应该是大于零的整数
   				 ZoomTransition : 'easeOut',		//Flexpaper中缩放样式，它使用和Tweener一样的样式，默认参数值为easeOut.其他可选值包括: easenone, easeout, linear, easeoutquad
   				 ZoomTime : 0.5,					//从一个缩放比例变为另外一个缩放比例需要花费的时间，该参数值应该为0或更大。
   				 ZoomInterval : 0.2,				//缩放比例之间间隔，默认值为0.1，该值为正数。
   				 FitPageOnLoad : false,				//初始化得时候自适应页面，与使用工具栏上的适应页面按钮同样的效果
   				 FitWidthOnLoad : false,			//初始化的时候自适应页面宽度，与工具栏上的适应宽度按钮同样的效果
   				 FullScreenAsMaxWindow : false,		//当设置为true的时候，单击全屏按钮会打开一个flexpaper最大化的新窗口而不是全屏，当由于flash播放器因为安全而禁止全屏，而使用flexpaper作为独立的flash播放器的时候设置为true是个优先选择
   				 ProgressiveLoading : false,		//当设置为true的时候，展示文档时不会加载完整个文档，而是逐步加载，但是需要将文档转化为9以上的flash版本（使用pdf2swf的时候使用-T 9 标签）。
   				 MinZoomSize : 0.2,					//设置最大的缩放比例
   				 MaxZoomSize : 5,					//最小的缩放比例
   				 SearchMatchAll : true,				//设置为true的时候，单击搜索所有符合条件的地方高亮显示
   				 InitViewMode : 'Portrait',			//设置启动模式如"Portrait" or "TwoPage" or "SinglePage"
   				 
   				 ViewModeToolsVisible : true,		//工具栏上是否显示样式选择框
   				 ZoomToolsVisible : true,			//工具栏上是否显示缩放工具
   				 NavToolsVisible : true,			//工具栏上是否显示导航工具
   				 CursorToolsVisible : true,			//工具栏上是否显示光标工具
   				 SearchToolsVisible : true,			//工具栏上是否显示搜索			
   				 localeChain: 'zh_CN'
   				 }});
    	}    	
    
	 </script>            
</body>
</html>