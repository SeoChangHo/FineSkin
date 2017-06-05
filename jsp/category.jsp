<%@ page language="java" contentType="text/html; charset=UTF-8"  
    pageEncoding="UTF-8" import="org.json.simple.*" %>
<%@ page import="java.sql.*" %>
<% request.setCharacterEncoding("UTF-8"); 
    //String category = request.getParameter("category");
    //consloe.log("jsp category : " + catagory);
%>
 <%
 Connection con = null;
 PreparedStatement pstmt = null;
 ResultSet rs = null;

 try {
  String DB_USERNAME = "fineinsight";
  String DB_PASSWORD = "fine0042";
  String DB_TABLE = "fine_article";

  String jdbcUrl = "jdbc:mysql://localhost/fineinsight";

  Class.forName("com.mysql.jdbc.Driver");
  con = DriverManager.getConnection(jdbcUrl, DB_USERNAME, DB_PASSWORD);
  %>
  <%
  String query = "select * from fine_article where category='categorytest'";
  pstmt=con.prepareStatement(query);
  rs=pstmt.executeQuery();
  
  String articleseq= "";
  String category = "";
  String title= "";
  String minititle= "";
  String remark= "";
  String imgsrc1= "";
  String imgsrc2= "";
  String imgsrc3= "";
  String createdate= "";
  String visible= "";
  
  while(rs.next()){
   articleseq =rs.getString("articleseq");
   category =rs.getString("category");
   title =rs.getString("title");
   minititle =rs.getString("minititle");
   remark =rs.getString("remark");
   imgsrc1 =rs.getString("imgsrc1");
   imgsrc2 =rs.getString("imgsrc2");
   imgsrc3 =rs.getString("imgsrc3");
   createdate =rs.getString("createdate");
   visible = rs.getString("visible");
   
 }
  
  JSONArray ja = new JSONArray();
  JSONObject jo = new JSONObject();
  
  jo.put("articleseq", articleseq);
  jo.put("category", category);
  jo.put("title", title);
  jo.put("minititle", minititle);
  jo.put("minititle", minititle);
  jo.put("imgsrc1", imgsrc1);
  jo.put("imgsrc3", imgsrc3);
  jo.put("imgsrc3", imgsrc3);
  jo.put("createdate", createdate);
  jo.put("visible", visible);
  
  ja.add(jo);
  
  ja.toJSONString();
%>
<%
  
 } catch(Exception e) {
  e.printStackTrace();
  out.println("Fail");
 }
%>