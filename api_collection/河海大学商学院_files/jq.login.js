var login={
	loginData:[{
		login:"xnlogin",name:"校内邮箱",action:"http://mail.nau.edu.cn/?q=login.do",params:{
			domain:"nau.edu.cn",referer:"http://mail.nau.edu.cn/?q=login",go:"http://mail.nau.edu.cn/?q=base",user:"_username_",password:"_password_"
		}
	}
	,{
		login:"jwc",name:"教务在线",action:"http://jwc.nau.edu.cn/login.aspx",params:{
			__VIEWSTATE:"/wEPDwULLTE4MDk5NTgxNjdkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBQljaGtSZW1iZXIMMPVssRjYGmPc7qhFn/dYyd5GKw==",__EVENTVALIDATION:"/wEWBQKOi4bnCAKvruq2CAKEzp2FBwLe46HXCgKC3IeGDDcO7bSlhn92nLR7pIh+PrR6/mx2",UserName:"_username_",UserPwd:"_password_",btnLogin:"登 录"
		}
	}
	,{
		login:"bbs",name:"南审BBS",action:"http://bbs.nau.edu.cn/member.php?mod=logging&action=login&loginsubmit=yes&infloat=yes&lssubmit=yes",params:{
			username:"_username_",password:"_password_"
		}
	}
	,{
		login:"bb",name:"毕博平台",action:"http://bb.nau.edu.cn/webapps/login/",params:{
			user_id:"_username_",password:"_password_",action:"login",remoteuser:""
		}
	}
	],init:function(){
		var $loginSelect=$('#loginSelect');
		var $loginUserName=$('#loginUserName');
		var $loginPassword=$('#loginPassword');
		var $loginParas=$('#loginParas');
		var md=login.loginData;
		var p=[];
		$loginSelect.change(function(){
			var loginName=$(this).val();
			var m=login.find(loginName,md);
			if(m){
				p=[];
				for(var key in m.params){
					p.push('<input type="hidden" name="'+key+'" value="'+m.params[key].replace(/_username_/,$loginUserName.val()).replace(/_password_/,$loginPassword.val())+'" />')
				};
				$loginParas.empty().html(p.join(''));
				$('#loginForm').attr('action',m.action)
			}
		}).change();
		$('#loginForm').bind('submit',function(){
			return login.check()
		})
	}
	,check:function(){
		var $loginSelect=$('#loginSelect');
		var $loginUserName=$('#loginUserName');
		var $loginPassword=$('#loginPassword');
		if($loginUserName.val()==''||$loginUserName.val()=='用户名'){
			alert('请输入您的登录名称！');
			return false
		}
		else if($loginPassword.val()==''||$loginPassword.val()=='请输入密码'){
			alert('请输入您的登录密码！');
			return false
		}
		else{
			$loginSelect.change();
			$loginPassword.val('');
			outWin=window.open('','','scrollbars=yes,menubar=yes,toolbar=yes,location=yes,status=yes,resizable=yes');
			doc=outWin.document;
			doc.open('text/html');
			doc.write('<html><head><meta http-equiv="Content-Type" content="text/html; charset=gb2312"><title>正在连接...</title></head><body onload="document.tmpForm.submit()">');
			doc.write('<div style="width:100%; height:60px; line-height:60px;font-size:16pt; color: #444; text-indent:1em;">正在连接，请稍候......</div><form name="tmpForm" action="'+$('#loginForm').attr('action')+'" method="post">'+$('#loginParas').html()+'</form></body></html>');
			doc.close();
			return false
		}
	}
	,find:function(login,md){
		for(var i=0;i<md.length;i++){
			if(md[i].login==login)return md[i]
		}
	}
}