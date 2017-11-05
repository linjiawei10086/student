package course.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * 通过流的方式从本地获取图片
 * @author 
 * @version 1.0
 */

public class ImageAction extends HttpServlet {
	private static final long serialVersionUID = -1L;

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doPost(request, response);
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		String fileName = request.getParameter("fileName");
		//通过流的方式 读取本地图片输入流 获取图片
		//先判断是否存在
		//从数据库获取  
		FileInputStream inputStream = null;
		File file = new File("D:\\temp\\" + fileName);
		if (!file.exists()) {
			System.out.println("不存在");
			inputStream = new FileInputStream("D:\\temp\\null.jpg");  // D:/image/123.jpg
		} else {
		    inputStream = new FileInputStream("D:\\temp\\biao.jpg");  // D:/image/123.jpg
		}
		int i = inputStream.available();
		//byte数组用于存放图片字节数据
		byte[] buff = new byte[i];
		inputStream.read(buff);
		//记得关闭输入流
		inputStream.close();
		//设置发送到客户端的响应内容类型
		response.setContentType("image/*");
		OutputStream out = response.getOutputStream();
		out.write(buff);
		//关闭响应输出流
		out.close();
	}
}