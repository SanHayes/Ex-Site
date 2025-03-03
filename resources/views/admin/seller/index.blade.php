@extends('admin._layoutNew')

@section('page-head')

@endsection

@section('page-content')
    <div style="margin-top: 10px;width: 100%;margin-left: 10px;">
        <button class="layui-btn layui-btn-normal layui-btn-radius" onclick="layer_show('添加商家','{{url('admin/seller_add')}}')">添加商家</button>

        <form class="layui-form layui-form-pane layui-inline" action="">

            <div class="layui-inline" style="margin-left: 10px;">
                <label class="layui-form-label">交易账号</label>
                <div class="layui-input-inline" style="margin-left: 10px;">
                    <input type="text" name="account_number" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline" style="margin-left: 10px;">
                <div class="layui-input-inline">
                    <button class="layui-btn" lay-submit="" lay-filter="mobile_search"><i class="layui-icon">&#xe615;</i></button>
                </div>
            </div>



        </form>
    </div>

    <script type="text/html" id="switchTpl">
        <input type="checkbox" name="is_recommend" value="@{{d.id}}" lay-skin="switch" lay-text="是|否" lay-filter="sexDemo" @{{ d.is_recommend == 1 ? 'checked' : '' }}>
    </script>

    <table id="demo" lay-filter="test"></table>
    <script type="text/html" id="barDemo">
        {{--<a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="detail">调节账户</a>--}}
        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </script>

@endsection

@section('scripts')
    <script type="text/html" id="status">
        <input type="checkbox" name="status" value="@{{d.id}}" lay-skin="switch" lay-text="是|否" lay-filter="status" @{{ d.status == 1 ? 'checked' : '' }}>
    </script>
    <script>

        layui.use(['table','form'], function(){
            var table = layui.table;
            var $ = layui.jquery;
            var form = layui.form;
            //第一个实例
            table.render({
                elem: '#demo'
                ,url: '{{url('admin/seller_list')}}' //数据接口
                ,page: true //开启分页
                ,id:'mobileSearch'
                ,cols: [[ //表头
                    {field: 'id', title: 'ID', minWidth:80, sort: true}
                    ,{field: 'account_number', title: '交易账号', minWidth:80}
                    ,{field: 'name', title: '名称', minWidth:80}
                    ,{field: 'legal_balance', title: '商家余额', minWidth:80}
                   ,{field: 'lock_legal_balance', title: '锁定余额', minWidth:80}
                    // ,{field: 'recharge_rate', title: '充值费率', minWidth:80}
                    // ,{field: 'cash_amount', title: '提现额度', minWidth:80}
                    // ,{field: 'cash_rate', title: '提现费率', minWidth:80}
                    ,{field: 'currency_name', title: '币名', minWidth:80}
                    ,{field: 'create_time', title: '添加时间', minWidth:80}
                    // ,{field: 'wechat_nickname', title: '微信昵称', minWidth:80}
                    // ,{field: 'wechat_account', title: '微信账号', minWidth:80}
                    // ,{field: 'ali_nickname', title: '支付宝昵称', minWidth:80}
                    // ,{field: 'ali_account', title: '支付宝账号', minWidth:80}
                    // ,{field: 'bank_name', title: '银行名称', minWidth:80}
                    // ,{field:'is_recommend', title:'热卖', minWidth:85, templet: '#switchTpl', unresize: true}
                    //,{field: 'status', title: '是否审核通过', width:80, templet: '#status'}
                    ,{title:'操作',minWidth:100,toolbar: '#barDemo'}

                ]]
            });
            //监听热卖操作
            form.on('switch(sexDemo)', function(obj){
                var id = this.value;
                $.ajax({
                    url:'{{url('admin/product_hot')}}',
                    type:'post',
                    dataType:'json',
                    data:{id:id},
                    success:function (res) {
                        if(res.error != 0){
                            layer.msg(res.msg);
                        }
                    }
                });
            });

            //监听是否显示操作
            form.on('switch(status)', function(obj){
                var id = this.value;
                $.ajax({
                    url:'{{url('admin/seller/status')}}',
                    type:'post',
                    dataType:'json',
                    data:{id:id},
                    success:function (res) {
                        if(res.error != 0){
                            layer.msg(res.message);
                        }
                    }
                });
            });

            table.on('tool(test)', function(obj){
                var data = obj.data;
                if(obj.event === 'del'){
                    layer.confirm('真的删除行么', function(index){
                        $.ajax({
                            url:'{{url('admin/seller_del')}}',
                            type:'post',
                            dataType:'json',
                            data:{id:data.id},
                            success:function (res) {
                                if(res.type == 'error'){
                                    layer.msg(res.message);
                                }else{
                                    obj.del();
                                    layer.close(index);
                                }
                            }
                        });


                    });
                } else if(obj.event === 'edit'){
                    layer_show('编辑商家','{{url('admin/seller_add')}}?id='+data.id);
                } else if(obj.event === 'detail'){
                    layer_show('调节账户','{{url('admin/adjust_account')}}?id='+data.id,800,600);
                }
            });

            //监听提交
            form.on('submit(mobile_search)', function(data){
                var account_number = data.field.account_number;
                table.reload('mobileSearch',{
                    where:{account_number:account_number},
                    page: {curr: 1}         //重新从第一页开始
                });
                return false;
            });

        });
    </script>

@endsection