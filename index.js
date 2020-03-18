$(function() {
    var $username=$('#username');
    var $password=$('#password');
    var $phone=$('#phone');
    var $checknum=$('#checknum');
    var $reg=$("#reg");
    $reg.click(function() {
        if( !YHM('#username')|| !LXDH('#phone') ||!MM('#password')||!YZM("#checknum")|| !Agree("#agree")) 
            return;
        alert("注册成功");
        window.location.href='https://www.baidu.com';
    });
    $username.focusout(function() {
        if(YHM('#username'))
          // $username.select();
          return true;
    });
    $phone.focusout(function() {
        if(LXDH('#phone'))
        // $phone.select();
          return true;
    });
    $password.focusout(function() {
        if(MM('#password'))
        // $password.select();
          return true;
    });
    $checknum.focusout(function() {
        if(YZM('#checknum'))
        // $checknum.select();
          return true;
    });
    //用户名
    function YHM(field) {
        var $data    = $(field);
        if($data.val() === '') {
          $('#YHMerror').html('请设置用户名');
          $data.css({
              border:'1px solid red'
          });
        //   $data.select();
          return false;
        }
        var rz=$data.val().replace(/[\u4e00-\u9fa5]/g,"bv");
        var re=/[^\w\u4e00-\u9fa5]|^\d+$/g;
        var ra=/.{15,}/;
        if(ra.test(rz)){
          $('#YHMerror').html('用户名不能超过7个汉字或14个字符');
          $data.css({
            border:'1px solid red'
          });
          //   $data.select();
          return false;
        }       
        if(re.test($data.val())){
          $('#YHMerror').html('用户名仅支持中英文、数字和下划线,且不能为纯数字');
          $data.css({
            border:'1px solid red'
          });
          //   $data.select();
          return false;
        }
        $('#YHMerror').html('');
        $data.css({
          border:'0px solid red'
        });
        return true;
    }
    //手机号
    function LXDH(field) {
        var $data    = $(field);
        if($data.val() === '') {
          $('#LXDHerror').html('请设置手机号');
          $data.css({
            border:'1px solid red'
          });
        //   $data.select();
          return false;
        }
        var re = /^1[3|4|5|7|8][0-9]{9}$/;
        if(!re.test($data.val())){
          $('#LXDHerror').html('手机号码格式不正确');
          $data.css({
            border:'1px solid red'
          });
          // $data.select();
          return false;
        }
        $('#LXDHerror').html('');
        $data.css({
          border:'0px solid red'
        });
        return true;
    }   
    //密码
    function MM(field) {
      var $data    = $(field);
      if($data.val() === '') {
        $('#MMerror').html('请设置登录密码');
        $data.css({
          border:'1px solid red'
        });
      //   $data.select();
        return false;
      }
      if($data.val().length < 8 ||$data.val().length > 14){
        $('#MMerror').html('密码设置不符合要求');
        $data.css({
          border:'1px solid red'
        });
      //   $data.select();
        return false;
      }
      var re1=/(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/;
      var re2=/\s/g;
      if(re2.test($data.val())){
        $('#MMerror').html('密码设置不符合要求');
        $data.css({
          border:'1px solid red'
        });
        // $data.select();
        return false;
      }
      if(!re1.test($data.val())){
        $('#MMerror').html('密码设置不符合要求');
        $data.css({
          border:'1px solid red'
        });
        // $data.select();
        return false;
      }
      $('#MMerror').html('');
      $data.css({
        border:'0px solid red'
      });
      return true;
    }
    //点击获取验证码
    var $btn = $('#btn1');
    $btn.click(function() {
      $('#YZMerror').html('');
      $("#checknum").css({
        border:'0px solid red'
      });
      var i    = 59;
      var timer;
      if(!LXDH('#phone')){
        rerurn
      }
      else{
        $btn.val('正在发送 (' + i + ' s)');
        $btn.attr('disabled', 'disabled');
        timer = window.setInterval(function() {
          if(i === 0) {
            window.clearInterval(timer);
            $btn.val('获取验证码');
            $btn.removeAttr('disabled');
            $('#YZMerror').html('请求超时，请稍后再试');
            $("#checknum").css({
              border:'1px solid red'
            });
          }
          else{
            $btn.val('正在发送 (' + i-- + ' s)');
          }
        }, 1000)
      }
     
    });
    //验证码
    function YZM(field) {
      var $data    = $(field);
      if($data.val() === '') {
        $('#YZMerror').html('请输入验证码');
        $data.css({
          border:'1px solid red'
        });
      //   $data.select();
        return false;
      }
      $('#YZMerror').html('');
      $data.css({
        border:'0px solid red'
      });
      return true;
    }
    //协议
    function Agree(field){
      var $data    = $(field)
      if($data .is(':checked')){
        $('#agerror').html('');
        return true;
      }
      else{
        alert('您还未接受该协议');
      }   
    }
});