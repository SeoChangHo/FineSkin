<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />

	<link rel="stylesheet" href="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css"/>		
	<script src="http://code.jquery.com/jquery.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <title>CordovaAPI</title>
</head>

<body>
<%
	String DB_URL = "jdbc:oracle:thin:@"
%>
	<div data-role="page">
		<div data-role="header"  >
			<h1>아이폰 테마</h1>
		</div>
		
		<div role="main" class="ui-content">
			
			
		</div>
		<div data-role="footer" data-position="fixed">
			<div data-role="navbar" data-iconpos="top">
				<ul>
					<li><a href="index.html" data-icon="grid" class="ui-btn-active">경기일정</a></li>
					<li><a href="Camera.html" data-icon="star">카메라</a></li>
					<li><a href="#" data-icon="gear">MyPage</a></li>
				</ul>
			</div>
		</div>
	</div>
	
	<script type="text/javascript" src="cordova.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    
</body>
</html>