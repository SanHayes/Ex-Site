@extends('admin._layoutNew')
@section('page-head')

@stop
@section('page-content')
    <header class="larry-personal-tit">
        <span>管理员</span>
    </header><!-- /header -->
    <div class="larry-personal-body clearfix">
        <form class="layui-form col-lg-5">
            <div class="layui-form-item">
                <label class="layui-form-label">用户名</label>
                <div class="layui-input-block">
                    <input type="text" name="username" autocomplete="off" class="layui-input" value="{{ $admin_user['username'] }}" placeholder="">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">初始密码</label>
                <div class="layui-input-block">
                    <input type="password" name="password" autocomplete="off" class="layui-input" value="" placeholder="">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">角色</label>
                <div class="layui-input-block">
                    <select name="role_id" lay-filter="role_id">
                        <option value="">请选择</option>
                        @foreach($roles as $role)
                        <option value="{{$role->id}}" @if(isset($admin_user) && $admin_user['role_id'] == $role['id']) selected @endif>{{$role->name}}</option>
                        @endforeach
                    </select>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">谷歌秘钥</label>
                <div class="layui-input-block">
                    <input type="text" name="secret" autocomplete="off" class="layui-input" value="{{ $admin_user['secret'] }}" style="width: 50%;float: left;" disabled>
                    <a class="layui-btn layui-btn-primary" type="button" id="update" lay-submit style="float: left; margin-left: 10px;">重置密钥</a>
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">秘钥扫码</label>
                <div class="layui-input-block">
                    <img src="{{ $admin_user['qrcod_url'] }}" width="150px">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">谷歌验证</label>
                <div class="layui-input-block">
                    <select name="google_verify" lay-filter="google_verify">
                        <option value="1" @if(isset($admin_user) && $admin_user['google_verify'] == 1) selected @endif>开启</option>
                        <option value="0" @if(isset($admin_user) && $admin_user['google_verify'] == 0) selected @endif>关闭</option>
                    </select>
                </div>
            </div>
            <input id="user_id" type="hidden" name="id" value="{{$admin_user['id']}}">
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit lay-filter="adminuser_submit">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>
                </div>
            </div>
        </form>
    </div>
@stop
@section('scripts')
    <script type="text/javascript">

        layui.use(['form','upload','layer'], function () {
            var layer = layui.layer;
            var form = layui.form;
            var $ = layui.$;
            form.on('submit(adminuser_submit)', function (data) {
                var data = data.field;
                $.ajax({
                    url: '/admin/manager/add',
                    type: 'post',
                    dataType: 'json',
                    data: data,
                    success: function (res) {
                        layer.msg(res.message);
                        if(res.type == 'ok') {
                            var index = parent.layer.getFrameIndex(window.name);
                            parent.layer.close(index);
                            parent.window.location.reload();
                        }else{
                            return false;
                        }
                    }
                });
                return false;
            });
            layui.$('#update').on('click', function(){
                layer.confirm('真的要重置谷歌验证码吗？', function(index){
                    //向服务端发送删除指令
                    id = $('#user_id').val();
                    $.ajax({
                        url:'/admin/manager/update',
                        type:'post',
                        dataType:'json',
                        data:{id: id},
                        success:function(res){
                            if(res.type=='ok'){
                                layer.close(index);
                                location.reload();
                                layer.msg(res.message);
                            }else{
                                layer.close(index);
                                layer.alert(res.message);
                            }
                        }
                    });
                });
            });
        });


    </script>
@stop