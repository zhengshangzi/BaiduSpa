$(function() {
    var $username=$('#username');
    var $password=$('#password');
    var $phone=$('#phone');
    var $checknum=$('#checknum');
    var $reg=$("#reg");
    $reg.click(function() {
        if( !YHM('#username')|| !LXDH('#phone') ||!MM('#password')||!YZM("#checknum")) 
            return;
    });
    $username.focusout(function() {
        if(YHM('#username'))
        return true;
    });
    $phone.focusout(function() {
        if(LXDH('#phone'))
        return true;
    });
    $password.focusout(function() {
        if(MM('#password'))
        return true;
    });
    $checknum.focusout(function() {
        if(YZM('#checknum'))
        return true;
    });
   
    function YHM(field) {
        var $data    = $(field);
        if($data.val() === '') {
          $('#YHMerror').html('请设置用户名');
        //   $data.select();
          return false;
        }
        if($data.val().length < 1 ||$data.val().length > 14){
        $('#YHMerror').html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
        //   $data.select();
          return false;
        }
        var re=/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;
        if(!re.test($data.val())){
            $('#YHMerror').html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
            // $data.select();
            return false;
        }
        $('#YHMerror').html('')
        return true;
    }
    function LXDH(field) {
        var $data    = $(field);
        if($data.val() === '') {
          $('#LXDHerror').html('请设置手机号');
        //   $data.select();
          return false;
        }
        var re = /^1[3|4|5|7|8][0-9]{9}$/;
        if(!re.test($data.val())){
            $('#LXDHerror').html('手机号码格式不正确');
            // $data.select();
            return false;
        }
        $('#LXDHerror').html('')
        return true;
    }   
    function MM(field) {
        var $data    = $(field);
        if($data.val() === '') {
          $('#MMerror').html('请设置登录密码');
        //   $data.select();
          return false;
        }
        if($data.val().length < 8 ||$data.val().length > 14){
        $('#MMerror').html('密码设置不符合要求');
        //   $data.select();
          return false;
        }
        var re=/^(?!(\d+)$)[\u4e00-\u9fff\w]+$/;
        // var re1=/[0-9a-zA-Z|\.]/;
        // var re2=/\s/g;
        // if(!re1.test($data.val())){
        //     $('#MMerror').html('密码设置不符合要求');
        //     $data.select();
        //     return false;
        // }
        if(!re.test($data.val())){
            $('#MMerror').html('密码设置不符合要求');
            // $data.select();
            return false;
        }
        $('#MMerror').html('')
        return true;
    }
    //验证码
    //点击获取验证码
    var $btn = $('#btn1');
    $btn.click(function() {
        $('#YZMerror').html('');
        var i    = 59;
        var timer;
        $btn.val('正在发送 (' + i + ' s)');
        $btn.attr('disabled', 'disabled');
        timer = window.setInterval(function() {
        if(i === 0) {
            window.clearInterval(timer);
            $btn.val('获取验证码');
            $btn.removeAttr('disabled');
            $('#YZMerror').html('请求超时，请稍后再试');

        }
        else{
            $btn.val('正在发送 (' + i-- + ' s)');
        }
        }, 1000);  
    });
    function YZM(field) {
        var $data    = $(field);
        if($data.val() === '') {
          $('#YZMerror').html('请输入验证码');
        //   $data.select();
          return false;
        }
    }   
});