// JavaScript Document
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

function check() {
             if(document.getElementById("username").value=="") {
                 alert("没有输入用户名！");
                 return false;
             } else if(document.getElementById("password").value=="") {
                 alert("没有输入密码！");
                 return false;
             } else {
                 alert("恭喜您登录成功！")
				 window.location.href="index1.html";
                 return true;
             }
         }

/*function checkeusername(username){
var str=username;
//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
var Expression=/^(\w){3,10}$/; 
var objExp=new RegExp(Expression); //创建正则表达式对象
if(objExp.test(str)==true){ //通过正则表达式验证
return true;
}else{
return false;
}
}
function checkePWD(PWD){
var str=PWD;
//在JavaScript中，正则表达式只能使用"/"开头和结束，不能使用双引号
var Expression=/^[A-Za-z]{1}([A-Za-z0-9]|[._]){5,19}$/; 
var objExp=new RegExp(Expression); //创建正则表达式对象
if(objExp.test(str)==true){ //通过正则表达式验证
return true;
}else{
return false;
}
}
var myform=document.getElementsByClassname[0];
function check(myform){
if(myform.username.value==""){
alert("请输入用户名!");myform.username.focus();return;
}
if(!checkeusername(myform.username.value)){
alert("您输入的用户名不合法!");myform.username.focus();return;
}
if(myform.PWD.value==""){
alert("请输入密码!");myform.PWD.focus();return;
}
if(!checkePWD(myform.PWD.value)){
alert("您输入的密码不合法!");myform.PWD.focus();return;
}
if(myform.PWD1.value==""){
alert("请确认密码!");myform.PWD1.focus();return;
}
if(myform.PWD1.value!=myform.PWD.value){
alert("您两次输入的密码不一致，请重新输入!");myform.PWD.focus();return;
}
myform.submit();
}*/