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
  
  int count = 0;
  
  JSONObject jObject = new JSONObject();
  JSONArray ja = new JSONArray();
  
  JSONObject jo = new JSONObject();
  
  while(rs.next()){
   String articleseq =rs.getString("articleseq");
   String category =rs.getString("category");
   String title =rs.getString("title");
   String minititle =rs.getString("minititle");
   String remark =rs.getString("remark");
   String imgsrc1 =rs.getString("imgsrc1");
   String imgsrc2 =rs.getString("imgsrc2");
   String imgsrc3 =rs.getString("imgsrc3");
   String createdate =rs.getString("createdate");
   String visible = rs.getString("visible");
 
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
   
   ja.add(count, jo);
   
   jo = new JSONObject();
   
   count++;
 }
  
  jObject.put("List", ja);
  out.println(jObject.toJSONString());
%>
<%
 } catch(Exception e) {
  e.printStackTrace();
  out.println("Fail");
 }
%>