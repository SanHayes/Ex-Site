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
        <input type="hidden" id="id" data-type="0" >
        <div class="layui-form-item">
			<label for="currency_id" class="layui-form-label">币种</label>
			<div class="layui-input-block">
			      <input type="text" name="currency_name" id="name" value="<?php echo e($model->currency_name); ?>" class="layui-input"  disabled>
			</div>
		</div>
        <div class="layui-form-item">
            <label class="layui-form-label">期限</label>
            <div class="layui-input-block">
                <input type="text" name="day" id="day" required autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($model->day); ?>">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">日利息(百分比)</label>
            <div class="layui-input-block">
                <input type="text" name="rate" id="rate" required autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($model->interest_rate); ?>">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">储蓄名称</label>
            <div class="layui-input-block">
                <input type="text" name="intro" id="intro" required autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($model->intro); ?>">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">最小存币数</label>
            <div class="layui-input-block">
                <input type="text" name="save_min" id="save_min"  autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($model->save_min); ?>">
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">最小存币数</label>
            <div class="layui-input-block">
                <input type="text" name="save_max" id="save_max"  autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($model->save_max); ?>">
            </div>
        </div>
        <div class="layui-form-item">
            <div class="layui-input-block">
                                <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>

              
            </div>
        </div>
    </form>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
    // let url=window.location.href;
        layui.use(['form','laydate'],function () {
            var form = layui.form
                ,$ = layui.jquery
                ,laydate = layui.laydate
                ,index = parent.layer.getFrameIndex(window.name);
            //监听提交
        form.on('submit(demo1)', function(data){
                // console.log(123);return;
                var data = data.field;
                    $.ajax({
                        url:'<?php echo e(url('admin/deposit/edit_deposit_config')); ?>?id='+<?php echo e($model->id); ?>

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