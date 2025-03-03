<?php $__env->startSection('page-head'); ?>
<style>
    .layui-form-label {
        width: 150px;
    }
    .layui-input-block {
        margin-left: 180px;
    }
</style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-content'); ?>
    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">用户手机号</label>
            <div class="layui-input-block">
                <input type="text" name="phone" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->phone); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">备注</label>
            <div class="layui-input-block">
                <input type="text" name="common" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->common); ?>">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">邮箱</label>
            <div class="layui-input-block">
                <input type="text" name="email" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->email); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">用户等级</label>
            <div class="layui-input-block">
                <select name="user_level" lay-verify="required" lay-filter="">
                    <option value=""></option>
                    <option value="0" <?php echo e(($result->user_level ?? 0) == 0 ? 'selected' : ''); ?> >无</option>
                    <?php $__currentLoopData = $level; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e(@$k); ?>" <?php echo e(($result->user_level ?? 0) == $k ? 'selected' : ''); ?> ><?php echo e(@$v); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>
        </div>
        
        <div class="layui-form-item">
            <label class="layui-form-label">上级ID</label>
            <div class="layui-input-block">
                <select name="parent_id" lay-verify="required" lay-filter="" lay-search="">
                    <option value=""></option>
                    <option value="0" <?php echo e(($result->parent_id ?? 0) == 0 ? 'selected' : ''); ?> >无</option>
                   <?php $__currentLoopData = $user_list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $k => $v): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <option value="<?php echo e(@$v['id']); ?>" <?php echo e(($result->parent_id ?? 0) == $v['id'] ? 'selected' : ''); ?> ><?php echo e($v['id']); ?></option>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </select>
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">密码</label>
            <div class="layui-input-block">
                <input type="text" name="password" autocomplete="off" placeholder="" class="layui-input" value="">
            </div>
        </div>
        
        <div class="layui-form-item">
            <label class="layui-form-label">交易密码</label>
            <div class="layui-input-block">
                <input type="text" name="pay_password" autocomplete="off" placeholder="" class="layui-input" value="">
            </div>
        </div>

        <div class="layui-form-item">
            <label class="layui-form-label">期权控制</label>
            <div class="layui-input-block">
                <select name="risk" lay-verify="required" lay-filter="risk_mode">
                    <option value=""></option>
                    <option value="0" <?php echo e(($result->risk ?? 0) == 0 ? 'selected' : ''); ?> >无</option>
                    <option value="1" <?php echo e(($result->risk ?? 1) == 1 ? 'selected' : ''); ?> >盈利</option>
                    <option value="-1" <?php echo e(($result->risk ?? 2) == -1 ? 'selected' : ''); ?> >亏损</option>
                </select>
            </div>
        </div>

        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">法币交易账号</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="account_number" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->account_number); ?>">-->
        <!--    </div>-->
        <!--</div>-->

        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">身份证号</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="card_id" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($result->card_id)): ?><?php echo e($result->card_id); ?><?php endif; ?>" <?php if(empty($result->card_id)): ?> disabled <?php endif; ?>>-->
        <!--    </div>-->
        <!--</div>-->

        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">银行卡卡号</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="bank_account" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($res->bank_account)): ?><?php echo e($res->bank_account); ?><?php endif; ?>" >-->
        <!--    </div>-->
        <!--</div>-->
        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">银行卡所在行</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="bank_name" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($res->bank_name)): ?><?php echo e($res->bank_name); ?><?php endif; ?>" >-->
        <!--    </div>-->
        <!--</div>-->
        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">支付宝账号</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="alipay_account" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($res->alipay_account)): ?><?php echo e($res->alipay_account); ?><?php endif; ?>" >-->
        <!--    </div>-->
        <!--</div>-->
        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">微信昵称</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="wechat_nickname" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($res->wechat_nickname)): ?><?php echo e($res->wechat_nickname); ?><?php endif; ?>" >-->
        <!--    </div>-->
        <!--</div>-->
        <!--<div class="layui-form-item">-->
        <!--    <label class="layui-form-label">微信账号</label>-->
        <!--    <div class="layui-input-block">-->
        <!--        <input type="text" name="wechat_account" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($res->wechat_account)): ?><?php echo e($res->wechat_account); ?><?php endif; ?>" >-->
        <!--    </div>-->
        <!--</div>-->
        <?php if($result->is_trader == 1): ?>
        <div class="layui-form-item">
                <label class="layui-form-label">虚拟跟随数</label>
            <div class="layui-input-inline">
                <input type="text" name="virtual_follow_num" autocomplete="off" placeholder="" class="layui-input" value="<?php if(!empty($result->virtual_follow_num)): ?><?php echo e($result->virtual_follow_num); ?><?php endif; ?>" >
            </div>
            <div class="layui-form-mid layui-word-aux">当数字大于0时生效，否则则展示真实跟随人数</div>
        </div>
        <?php endif; ?>

        <!-- <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">是否设为客服</label>
                <div class="layui-input-block">
                    <input type="radio" name="is_service" class="sports" value="1" title="是" <?php echo e($result->is_service == 1 ? 'checked' : ''); ?>>
                    <input type="radio" name="is_service" class="sports" value="0" title="否" <?php echo e($result->is_service == 0 ? 'checked' : ''); ?>>
                </div>
            </div>
        </div> -->
        <input type="hidden" name="id" value="<?php echo e($result->id); ?>">
        <div class="layui-form-item">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
                <button type="reset" class="layui-btn layui-btn-primary">重置</button>
            </div>
        </div>
    </form>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
        layui.use('upload', function(){
            var upload = layui.upload;

            //执行实例
            var uploadInst = upload.render({
                elem: '#upload_test' //绑定元素
                ,url: '<?php echo e(URL("api/upload")); ?>' //上传接口
                ,done: function(res){
                    //上传完毕回调
                    if (res.type == "ok"){
                        $("#thumbnail").val(res.message)
                        $("#img_thumbnail").show()
                        $("#img_thumbnail").attr("src",res.message)
                    } else{
                        alert(res.message)
                    }
                }
                ,error: function(){
                    //请求异常回调
                }
            });
        });


        layui.use(['form','laydate'],function () {
            var form = layui.form
                ,$ = layui.jquery
                ,laydate = layui.laydate
                ,index = parent.layer.getFrameIndex(window.name);
            //监听提交
            form.on('submit(demo1)', function(data){
                var data = data.field;
                $.ajax({
                    url:'<?php echo e(url('admin/user/edit')); ?>'
                    ,type:'post'
                    ,dataType:'json'
                    ,data : data
                    ,success:function(res){
                        if(res.type=='error'){
                            layer.msg(res.message);
                        }else{
                            parent.layer.close(index);
                            parent.window.location.reload();
                        }
                    }
                });
                return false;
            });
        });
    </script>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin._layoutNew', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>