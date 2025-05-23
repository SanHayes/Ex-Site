

<?php $__env->startSection('page-head'); ?>

<?php $__env->stopSection(); ?>



<?php $__env->startSection('page-content'); ?>
    <div style="margin-top: 10px;width: 100%;margin-left: 10px;">


        <form class="layui-form layui-form-pane layui-inline" action="">

            <div class="layui-inline" style="margin-left: 50px;">
                <label >用户交易账号&nbsp;&nbsp;</label>
                <div class="layui-input-inline">
                    <input type="text" name="account_number" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline" style="margin-left: 50px;">
                <label >商家交易账号&nbsp;&nbsp;</label>
                <div class="layui-input-inline">
                    <input type="text" name="seller_number" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline" style="margin-left: 50px;">
                <label>买入/卖出&nbsp;&nbsp;</label>
                <div class="layui-input-inline">
                    <select name="type" id="type_type">
                        <option value="" class="ww">全部</option>
                        <option value="sell" class="ww">买入</option>
                        <option value="buy" class="ww">卖出</option>

                    </select>
                </div>
            </div>
           
            <div class="layui-inline">
                <div class="layui-input-inline">
                    <button class="layui-btn" lay-submit="" lay-filter="mobile_search"><i class="layui-icon">&#xe615;</i></button>
                </div>
            </div>



        </form>
        
        <button class="layui-btn layui-btn-normal daochu">导出交易信息</button>
    </div>




















    <div class="layui-card-body">
        <div class="layui-carousel layadmin-backlog" style="background-color: #fff">
            <ul class="layui-row layui-col-space10 layui-this">
                <li class="layui-col-xs3">
                    <a href="javascript:;" onclick="layer.tips('买入交易总额', this, {tips: 3});" class="layadmin-backlog-body" style="color: #fff;background-color: #01AAED;display: block;padding: 10px;">
                        <h3>买入交易总额：</h3>
                        <p><cite style="color:#fff" id="all"><?php echo e($buy_all_number); ?></cite></p>
                    </a>
                </li>
                <li class="layui-col-xs3">
                    <a href="javascript:;" onclick="layer.tips('卖出交易总额', this, {tips: 3});" class="layadmin-backlog-body" style="color: #fff;background-color: #01AAED;display: block;padding: 10px;">
                        <h3>卖出交易总额：</h3>
                        <p><cite style="color:#fff" id="toucun"><?php echo e($sell_all_number); ?></cite></p>
                    </a>
                </li>
                
                    
                        
                        
                    
                

            </ul>
        </div>
        
            
                
                    
                        
                        
                    
                
                
                    
                        
                        
                    
                
                
                    
                        
                        
                    
                
                
                
                
                
                
                
            
        
    </div>
    <style>

        element.style {
            color: #fff;
            background-color: #01AAED;
            display: block;

        }
    </style>

















    <script type="text/html" id="switchTpl">
        <input type="checkbox" name="is_recommend" value="{{d.id}}" lay-skin="switch" lay-text="是|否" lay-filter="sexDemo" {{ d.is_recommend == 1 ? 'checked' : '' }}>
    </script>

    <table id="demo" lay-filter="test"></table>
    <!-- <script type="text/html" id="barDemo">
       
        <a class="layui-btn layui-btn-xs" lay-event="edit">编辑</a>
        <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
    </script> -->

    <script type="text/html" id="type">
        {{d.type=="buy" ? '<span class="layui-badge layui-bg-green">'+'卖出'+'</span>' : '' }}
        {{d.type=="sell" ? '<span class="layui-badge layui-bg-red">'+'买入'+'</span>' : '' }}

    </script>
    <script type="text/html" id="is_sure">
        {{d.is_sure==0 ? '<span class="layui-badge layui-bg-red">'+'未确认'+'</span>' : '' }}
        {{d.is_sure==1 ? '<span class="layui-badge layui-bg-blue "  >'+'已确认'+'</span>' : '' }}
        {{d.is_sure==2 ? '<span class="layui-badge layui-bg-orange">'+'已取消'+'</span>' : '' }}
        {{d.is_sure==3 ? '<span class="layui-badge layui-bg-green">'+'已付款'+'</span>' : '' }}

    </script>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>

        layui.use(['table','form'], function(){
            var table = layui.table;
            var $ = layui.jquery;
            var form = layui.form;
            //第一个实例
            table.render({
                elem: '#demo'
                ,url: '<?php echo e(url('admin/c2c_deal/list')); ?>' //数据接口
                ,page: true //开启分页
                ,id:'mobileSearch'
                ,cols: [[ //表头
                    {field: 'id', title: 'ID', width:80, sort: true}
                    ,{field: 'legal_deal_send_id', title: '交易需求id', width:150}
                    
                    ,{field: 'account_number', title: '用户交易账号', width:120}
                    ,{field: 'user_realname', title: '真实姓名', width:120}
                    ,{field: 'seller_name', title: '商家名称', width:120}
                    ,{field: 'type', title: '买入/卖出', width:100, templet: '#type'}
                    ,{field: 'way_name', title: '支付方式', width:100}

                    ,{field: 'price', title: '单价', width:100 }
                    ,{field: 'number', title: '交易数量', width:100}
                    // ,{field: 'surplus_number', title: '剩余数量', width:100}
                    ,{field: 'currency_name', title: '交易币', width:100}
                    ,{field: 'deal_money', title: '交易总金额', width:100}

                    // ,{field: 'limitation', title: '限额', width:100, templet: '#limitation'}
                    ,{field: 'is_sure', title: '交易状态', width:100, templet: '#is_sure'}

                    ,{field: 'format_create_time', title: '交易时间', width:180}
                    ,{field: 'format_update_time', title: '确认时间', width:180}


                    // ,{title:'操作',minWidth:100,toolbar: '#barDemo'}

                ]]
            });



            //监听提交
            form.on('submit(mobile_search)', function(data){
                var seller_number = data.field.seller_number
                    ,type = $('#type_type').val()
                    // ,currency_id = $('#currency_id').val()
                    ,account_number = data.field.account_number


                table.reload('mobileSearch',{
                    where:{
                        account_number:account_number,
                        seller_number:seller_number,
                        type:type,
                        // currency_id:currency_id,

                    },
                    page: {curr: 1}         //重新从第一页开始
                });
                return false;
            });


            $('.daochu').click(function(){
//                var id =  $("input[name='id']").val();
                var account_number =  $("input[name='account_number']").val();
                var seller_number =  $("input[name='seller_number']").val();
                var type =  $("select[name='type']").val();
                location.href='/admin/c2c_deal/csv?&account_number='+account_number + '&seller_number='+seller_number + '&type='+type;
            })


        });
    </script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin._layoutNew', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>