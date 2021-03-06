$(function() {
	var id = $('#studentId').val();
	//页面头部
	menuBarInit("menuDivId", 0);
	isChoose(id);
	showNewCourse(id);
	showHotCourse(id);
	showScoreOrder(id);
	btn();
	var graphURL = "../servlet/DisplayChart?filename=";
});

function isChoose(id) {
	var url = "/student/getCourse.do?method=isChoose&id="+ id;		
	$.ajax({
		type:'post',
		url:url,
		contentType:'text/html;charset=utf-8',
		dataType:'text',
		success:function(jsonStr) {
			if(jsonStr == 'null') {
				$('#isChoose').html('您还未选择课题');
			} else {
				$('#isChoose').html(jsonStr);
			}
		}
	})
}


function showNewCourse(id) {
	var url = "/student/getCourse.do?method=findCourseByPro&id="+ id;		
	$.ajax({
		type:'post',
		url:url,
		dataType:'json',
		success:function(jsonStr) {
			console.log(jsonStr);
			var length = jsonStr.length;
			for(i = 0; i < length; i++) {			
				var title = '<div class="course-name content-hover" title='+ jsonStr[i].name +' onclick="openDetail('+jsonStr[i].id+')">' + jsonStr[i].name + '</div>';
				var tdArray = [title, jsonStr[i].create_date, jsonStr[i].teacher];
				createTable("new_course",tdArray);				
			}	
			var newTable = $('#new_course');
			newTable.append("<tr height='50'><td><span class='set-line-height cursor' onclick='openDetail()'>more >></span></td></tr>")
		}
	})
}

function showHotCourse(id) {
	var url = "/student/getCourse.do?method=findHotCourse&id=" +id;		
	$.ajax({
		type:'post',
		url:url,
		dataType:'json',
		success:function(jsonStr) {
			var length = jsonStr.length;
			for(i = 0; i < length; i++) {
				var title = '<td>'+(i+1)+'</td>';
				var content = '<div class="course-name content-hover" title='+ jsonStr[i].name +' onclick="openDetail('+jsonStr[i].course_id+')">' + jsonStr[i].name + '</div>';
				var tdArray = [title,content,jsonStr[i].count];	
				createTable("hot_course",tdArray);
				$("#hot_course tr").each(function() {    
				    $(this).children('td:eq(0)').addClass("hot-course-td0 sort-text");  // td:eq(0)选择器表示第一个单元格
				    $(this).children('td:eq(1)').addClass("hot-course-td1");
				    $(this).children('td:eq(2)').addClass("hot-course-td2");
				});
				//根据排行显示图片
				$("#hot_course tr:eq(0) td:eq(0)").addClass("sort1");
				$("#hot_course tr:eq(1) td:eq(0)").addClass("sort2");
				$("#hot_course tr:eq(2) td:eq(0)").addClass("sort3");
				if(i >= 3) {
					$("#hot_course tr:eq("+i+") td:eq(0)").addClass("sort-other");
				}
			} 	
		}	
	})
}

function showScoreOrder(id) {
	var url = "/student/getCourse.do?method=findScoreOrder&id=" +id;		
	$.ajax({
		type:'post',
		url:url,
		dataType:'json',
		success:function(jsonStr) {
			console.log(jsonStr);
			var length = jsonStr.length;
			for(i = 0; i < length; i++) {
				var title = '<td>'+(i+1)+'</td>';
				var content = '<div class="course-name content-hover" title='+ jsonStr[i].user_name +' >' + jsonStr[i].user_name + '</div>';
				var tdArray = [title,content,jsonStr[i].count];	
				createTable("score_course",tdArray);
				$("#score_course tr").each(function() {    
					  $(this).children('td:eq(0)').addClass("hot-course-td0 sort-text");  // td:eq(0)选择器表示第一个单元格
					  $(this).children('td:eq(1)').addClass("hot-course-td1");
					  $(this).children('td:eq(2)').addClass("hot-course-td2");
				});
				//根据排行显示图片
				$("#score_course tr:eq(0) td:eq(0)").addClass("sort1");
				$("#score_course tr:eq(1) td:eq(0)").addClass("sort2");
				$("#score_course tr:eq(2) td:eq(0)").addClass("sort3");
				if(i >= 3) {
					$("#score_course tr:eq("+i+") td:eq(0)").addClass("sort-other");
				}
			} 	
		}	
	})
}

function openDetail(id) {
	if(!id) {
		window.open('coursePage.jsp');
	} else {
		window.open('coursePage.jsp?id='+id);
	}
}

function openMore() {
	
}

function btn() {
	$('#selectCourse').click(function() {
		window.location.href = "coursePage.jsp";
	});
	$('#myCollection').click(function() {
		window.location.href = "myCollect.jsp";
	});
	$('#scoreDetail').click(function() {
		window.location.href = "score.jsp";
	})
}
//动态增加tr
function createTable(tableId,tdArray) {
	var table = document.getElementById(tableId);
	var rowTb = table.insertRow();
	for(var i = 0;i< tdArray.length; i++) {
		var cell = rowTb.insertCell();
		cell.innerHTML = tdArray[i];
	}
}