
<?php $__env->startSection('page-head'); ?>
<!--头部-->
<style>
.btn-group {
    top: -2px;
}
#newsAdd {
    float: left;
}
.cateManage {
    float: left;
}
.btn-search {
    left: -10px;
    position: relative;
    background: #e0e0e0;
}
 #pull_right{
            text-align:center;
        }
        .pull-right {
            /*float: left!important;*/
        }
        .pagination {
            display: inline-block;
            padding-left: 0;
            margin: 20px 0;
            border-radius: 4px;
        }
        .pagination > li {
            display: inline;
        }
        .pagination > li > a,
        .pagination > li > span {
            position: relative;
            float: left;
            padding: 6px 12px;
            margin-left: -1px;
            line-height: 1.42857143;
            color: #428bca;
            text-decoration: none;
            background-color: #fff;
            border: 1px solid #ddd;
        }
        .pagination > li:first-child > a,
        .pagination > li:first-child > span {
            margin-left: 0;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }
        .pagination > li:last-child > a,
        .pagination > li:last-child > span {
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
        .pagination > li > a:hover,
        .pagination > li > span:hover,
        .pagination > li > a:focus,
        .pagination > li > span:focus {
            color: #2a6496;
            background-color: #eee;
            border-color: #ddd;
        }
        .pagination > .active > a,
        .pagination > .active > span,
        .pagination > .active > a:hover,
        .pagination > .active > span:hover,
        .pagination > .active > a:focus,
        .pagination > .active > span:focus {
            z-index: 2;
            color: #fff;
            cursor: default;
            background-color: #428bca;
            border-color: #428bca;
        }
        .pagination > .disabled > span,
        .pagination > .disabled > span:hover,
        .pagination > .disabled > span:focus,
        .pagination > .disabled > a,
        .pagination > .disabled > a:hover,
        .pagination > .disabled > a:focus {
            color: #777;
            cursor: not-allowed;
            background-color: #fff;
            border-color: #ddd;
        }
        .clear{
            clear: both;
        }

</style>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-content'); ?>
    <div class="layui-form layui-form-pane">     
        <div class="layui-form-item">
            <div class="operate_bar">
                <div class="layui-inline btn-group layui-btn-group">
                    <button class="layui-btn layui-btn-primary cateManage">管理分类</button>
                    <button class="layui-btn layui-btn-primary" id="newsAdd">发布新闻</button>
                </div>
                
                <div>
                    <div class="layui-inline">
                        <label class="layui-form-label">分类过滤</label>
                        <div class="layui-input-inline" style="margin-left: 10px;">
                            <select name="cate" lay-verify="required" lay-filter="cate">
                                <?php if(count($data['cateList']) >0): ?>
                                <option value="0">所有分类</option>
                                <?php $__currentLoopData = $data['cateList']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cate): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($cate->id); ?>" <?php if(\Illuminate\Support\Facades\Input::get("c_id") == $cate->id): ?> selected <?php endif; ?>><?php echo e($cate->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>
                            </select>
                        </div>
                    </div>    
                    <div class="layui-inline">
                        <label class="layui-form-label">语言过滤</label>
                        <div class="layui-input-inline" style="margin-left: 10px;">
                            <select name="lang" lay-verify="required" lay-filter="lang">
                                <?php if(count($lang_list) > 0): ?>
                                <option value="0">所有语言</option>
                                <?php $__currentLoopData = $lang_list; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $lang): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($key); ?>" <?php if(\Illuminate\Support\Facades\Input::get("lang") == $key): ?> selected <?php endif; ?>><?php echo e($lang); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>
                            </select>
                        </div>
                    </div>               
                    <div class="layui-inline">
                        <label class="layui-form-label">关键字</label>
                        <div class="layui-input-inline" style="margin-left: 10px;">
                            <input type="text" name="keyword" required  lay-verify="required" placeholder="请输入关键字 " autocomplete="off" class="layui-input" value="">
                        </div>
                        <button class="layui-btn" style="margin-left: 10px;"> <i class="layui-icon">&#xe615;</i> </button>
                    </div>    
                </div>
                
            </div>                       
        </div>
    </div>
    <table class="layui-table" lay-even>
        <colgroup>
            <col width="60">
            <col width="200">
            <col width="100">
            <col width="90">
            <col width="180">
            <col width="180">
            <col width="210">
        </colgroup>
        <thead>
        <tr>
            <th>ID</th>
            <th>标题</th>
            <th>分类</th>
            <th>语言</th>
            <th>发布人</th>
            <th>发布时间</th>
            <th>最后修改时间</th>
            <th>操作</th>           
        </tr> 
        </thead>
        <tbody>
        
            <?php $__empty_1 = true; $__currentLoopData = $data['news']; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $news): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); $__empty_1 = false; ?>
            <tr>
            <td align="center"><?php echo e($news->id); ?></td>
            <td><?php echo e($news->title); ?></td>
            <td><?php echo e($news->cate['name']); ?></td>
            <td><?php echo e($news->lang); ?></td>
            <td><?php echo e($news->author); ?></td>
            <td><?php echo e($news->create_time); ?></td>
            <td><?php echo e($news->update_time); ?></td>
            <td>
                <!--<button class="layui-btn layui-btn-xs layui-btn-primary newsPreview" data-id="<?php echo e($news->id); ?>">预览</button>-->
                <!-- <button class="layui-btn layui-btn-xs layui-btn-primary newsDiscuss" data-id="<?php echo e($news->id); ?>">评论</button> -->
                <button class="layui-btn layui-btn-xs layui-btn-warm newsEdit" data-id="<?php echo e($news->id); ?>">编辑</button>
                <button class="layui-btn layui-btn-xs layui-btn-danger newsDel" data-id="<?php echo e($news->id); ?>">删除</button>
            </td>
            </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); if ($__empty_1): ?>
            <tr><td colspan="7" align="center">没有数据</td></tr>
            <?php endif; ?>        
        </tbody>
    </table>
    <div>
    
    <?php echo $data['news']->render(); ?>

    </div>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
<script type="text/javascript" src="<?php echo e(URL("/admin/js/newsIndex.js?v=").time()); ?>"></script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin._layoutNew', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>