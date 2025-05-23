@extends('admin._layoutNew')

@section('page-head')

@endsection

@section('page-content')

    <div class="layui-form">
        <div class="layui-collapse">
            <div class="layui-colla-item">
                <h2 class="layui-colla-title">基础设置</h2>
                <div class="layui-colla-content layui-show">
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">币种</label>
                        <div class="layui-input-block">
                            <select name="currency_id" lay-verify="required" lay-search>
                                @foreach ($currencies as $currency)
                                    <option value="{{ $currency->id }}" @if ((isset($currency_match) && $currency_match->currency_id == $currency->id)) selected @endif>{{ $currency->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">显示</label>
                        <div class="layui-input-block">
                            <input type="radio" name="is_display" value="1" title="是" @if (isset($currency_match)) {{ $currency_match->is_display == 1 ? 'checked' : '' }} @else checked @endif>
                            <input type="radio" name="is_display" value="0" title="否" @if (isset($currency_match) && $currency_match->is_display == 0) checked @endif>
                        </div>
                    </div>
                    
                    <div class="layui-form-item">
                        <label for="market_from" class="layui-form-label">分类</label>
                        <div class="layui-input-block">
                            <select name="category" lay-verify="required">
                               <option value='1' @if ((isset($currency_match) && $currency_match->category == 1)) selected @endif>主流区</option>
                                <option value='2' @if ((isset($currency_match) && $currency_match->category == 2)) selected @endif>创新区</option>
                                <option value='3' @if ((isset($currency_match) && $currency_match->category == 3)) selected @endif>DEFI区</option>
                            </select>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="market_from" class="layui-form-label">门槛</label>
                        <div class="layui-input-block">
                            <input type="text" class="layui-input" name="min" placeholder="最小值" value="{{ $currency_match->min ?? 0 }}" >
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="market_from" class="layui-form-label">排序</label>
                        <div class="layui-input-block">
                            <input type="text" class="layui-input" name="sort" placeholder="排序" value="{{ $currency_match->sort ?? 0 }}" >
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="market_from" class="layui-form-label">行情</label>
                        <div class="layui-input-block">
                            <select name="market_from" lay-verify="required">
                                @foreach ($market_from_names as $key => $market_from_name)
                                    <option value="{{ $key }}" @if ((isset($currency_match) && $currency_match->market_from == $key)) selected @endif>{{ $market_from_name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">行情浮动范围</label>
                        <div class="layui-inline">
                            <div class="layui-input-inline" style="width: 120px;">
                                <input type="text" class="layui-input" name="fluctuate_min" placeholder="最小值" value="{{ $currency_match->fluctuate_min ?? 1.00 }}" >
                            </div>
                            <div class="layui-form-mid">-</div>
                            <div class="layui-input-inline" style="width: 120px;">
                                <input type="text" class="layui-input" name="fluctuate_max" placeholder="最大值" value="{{ $currency_match->fluctuate_max ?? 0.00 }}" >
                            </div>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">期权群控结果</label>
                        <div class="layui-inline">
                            <input type="radio" name="risk_group_result" value="1" title="盈利" {{($currency_match->risk_group_result ?? 0) == 1 ? 'checked' : ''}} >
                            <input type="radio" name="risk_group_result" value="0" title="无" {{($currency_match->risk_group_result ?? 0) == 0 ? 'checked' : ''}} >
                            <input type="radio" name="risk_group_result" value="-1" title="亏损" {{($currency_match->risk_group_result ?? 0) == -1 ? 'checked' : ''}}>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">交易功能</label>
                        <div class="layui-input-block">
                            <input type="checkbox" name="open_transaction" value="1" title="撮合交易" @if (isset($currency_match)) {{ $currency_match->open_transaction == 1 ? 'checked' : '' }} @else checked @endif>
                            <input type="checkbox" name="open_lever" value="1" title="杠杆合约" @if (isset($currency_match)) {{ $currency_match->open_lever == 1 ? 'checked' : '' }} @else checked @endif>
                            <input type="checkbox" name="open_microtrade" value="1" title="期权" @if (isset($currency_match)) {{ $currency_match->open_microtrade == 1 ? 'checked' : '' }} @else checked @endif>
                            <input type="checkbox" name="open_coin_trade" value="1" title="币币交易" @if (isset($currency_match)) {{ $currency_match->open_coin_trade == 1 ? 'checked' : '' }} @else checked @endif>
                            <input type="checkbox" name="coin_trade_success" value="1" title="币币交易撮合开关" @if (isset($currency_match)) {{ $currency_match->coin_trade_success == 1 ? 'checked' : '' }} @else checked @endif>

                        </div>
                    </div>
                </div>
            </div>
            <div class="layui-colla-item">
                <h2 class="layui-colla-title">杠杆交易参数</h2>
                <div class="layui-colla-content layui-show">
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">手数范围</label>
                        <div class="layui-inline">
                            <div class="layui-input-inline" style="width: 60px;">
                                <input type="text" class="layui-input" name="lever_min_share" placeholder="最小值" value="{{ $currency_match->lever_min_share ?? 1.00 }}" >
                            </div>
                            <div class="layui-form-mid">-</div>
                            <div class="layui-input-inline" style="width: 60px;">
                                <input type="text" class="layui-input" name="lever_max_share" placeholder="最大值,为0表示不限制" value="{{ $currency_match->lever_max_share ?? 0.00 }}" >
                            </div>
                        </div>
                        <div class="layui-inline">
                            <label for="currency_id" class="layui-form-label">每手数量</label>
                            <div class="layui-input-inline" style="width: 90px;">
                                <input type="text" class="layui-input" name="lever_share_num" placeholder="杠杆交易每手数量" value="{{ $currency_match->lever_share_num ?? 1.00 }}" >
                            </div>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">点差</label>
                        <div class="layui-inline">
                            <div class="layui-input-inline" style="width: 100px;">
                                <input type="text" class="layui-input" name="spread" placeholder="交易点差" value="{{ $currency_match->spread ?? 0.00 }}" >
                            </div>
                            {{--<div class="layui-form-mid">%</div>--}}
                        </div>
                        <div class="layui-inline">
                            <label for="currency_id" class="layui-form-label">隔夜费</label>
                            <div class="layui-input-inline" style="width: 100px;">
                                <input type="text" class="layui-input" name="overnight" placeholder="隔夜费" value="{{ $currency_match->overnight ?? 0.00 }}" >
                            </div>
                            <div class="layui-form-mid">%</div>
                        </div>
                    </div>
                    <div class="layui-form-item">
                        <label for="currency_id" class="layui-form-label">手续费</label>
                        <div class="layui-input-block">
                            <div class="layui-input-inline" style="width: 100px;">
                                <input type="text" class="layui-input" name="lever_trade_fee" placeholder="杠杆交易手费续" value="{{ $currency_match->lever_trade_fee ?? 0.00 }}" >
                            </div>
                            <div class="layui-form-mid">%</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="layui-form-item" style="margin-top:10px;">
            <div class="layui-input-block">
                <button class="layui-btn" lay-submit lay-filter="form">提交</button>
            </div>
        </div>
    </div>
</div>

@endsection

@section('scripts')
<script>
    layui.use(['element', 'form', 'layer'], function () {
        var element = layui.element
            ,form = layui.form
            ,layer = layui.layer
            ,$ = layui.$
        form.on('submit(form)', function (data) {
            console.log(data);
            $.ajax({
                url: '',
                type: 'POST',
                data: data.field,
                success: function (res) {
                    layer.msg(res.message, {
                        time: 2000
                        ,end: function () {
                            if (res.type == 'ok') {
                                var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
                                parent.layer.close(index); //再执行关闭
                                parent.layui.table.reload('data_table');
                            }
                        }
                    });
                },
                error: function (res) {
                    layer.msg('网络错误,请稍后重试');
                }
            });
        });
    });
</script>
@endsection
