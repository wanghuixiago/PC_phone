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
                 alert("û�������û�����");
                 return false;
             } else if(document.getElementById("password").value=="") {
                 alert("û���������룡");
                 return false;
             } else {
                 alert("��ϲ����¼�ɹ���")
				 window.location.href="index1.html";
                 return true;
             }
         }

/*function checkeusername(username){
var str=username;
//��JavaScript�У�������ʽֻ��ʹ��"/"��ͷ�ͽ���������ʹ��˫����
var Expression=/^(\w){3,10}$/; 
var objExp=new RegExp(Expression); //����������ʽ����
if(objExp.test(str)==true){ //ͨ��������ʽ��֤
return true;
}else{
return false;
}
}
function checkePWD(PWD){
var str=PWD;
//��JavaScript�У�������ʽֻ��ʹ��"/"��ͷ�ͽ���������ʹ��˫����
var Expression=/^[A-Za-z]{1}([A-Za-z0-9]|[._]){5,19}$/; 
var objExp=new RegExp(Expression); //����������ʽ����
if(objExp.test(str)==true){ //ͨ��������ʽ��֤
return true;
}else{
return false;
}
}
var myform=document.getElementsByClassname[0];
function check(myform){
if(myform.username.value==""){
alert("�������û���!");myform.username.focus();return;
}
if(!checkeusername(myform.username.value)){
alert("��������û������Ϸ�!");myform.username.focus();return;
}
if(myform.PWD.value==""){
alert("����������!");myform.PWD.focus();return;
}
if(!checkePWD(myform.PWD.value)){
alert("����������벻�Ϸ�!");myform.PWD.focus();return;
}
if(myform.PWD1.value==""){
alert("��ȷ������!");myform.PWD1.focus();return;
}
if(myform.PWD1.value!=myform.PWD.value){
alert("��������������벻һ�£�����������!");myform.PWD.focus();return;
}
myform.submit();
}*/