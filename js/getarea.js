// getarea.js ====================================================
/**
 * 获取省份
 */
 function get_province(url) {
 	$.ajax({
 		type: "GET",
 		url: url,
 		error: function(request) {
 			console.log("get_province错误, 请联系管理员!");
 			return;
 		},
 		success: function(data) {
 			$('#province').empty().html('<option value="0">选择省份</option>' + data);
 		}
 	});
 }
/**
 * 获取城市
 * @param t  省份select对象
 */
 function get_city(url, prov) {
 	var parent_id = $(prov).val();
 	if (!parent_id) {
 		return;
 	}
 	$('#district').empty().html('<option value="0">选择区域</option>');
 	$('#twon').empty().html('<option value="0">选择乡镇</option>');
 	$.ajax({
 		type: 'GET',
 		data: { level: 2, parent_id: parent_id },
 		url: url,
 		error: function(request) {
 			console.log("get_city错误, 请联系管理员!");
 			return;
 		},
 		success: function(data) {
 			$('#city').empty().html('<option value="0">选择城市</option>' + data);
 		}
 	});
 }
/**
 * 获取地区
 * @param t  城市select对象
 */
 function get_area(url, city) {
 	var parent_id = $(city).val();
 	if (!parent_id) {
 		return;
 	}
 	$('#twon').empty().html('<option value="0">选择乡镇</option>');
 	$.ajax({
 		type: "GET",
 		url: url,
 		data: { level: 3, parent_id: parent_id },
 		error: function(request) {
 			console.log("get_area错误, 请联系管理员!");
 			return;
 		},
 		success: function(data) {
 			$('#district').empty().html('<option>选择区域</option>' + data);
 		}
 	});


 }
/**
 * 获取最后一级乡镇
 * @param t  城市select对象
 */
 function get_twon(url, area) {
 	var parent_id = $(area).val();
 	if (!parent_id) {
 		return;
 	}
 	$.ajax({
 		type: "GET",
 		url: url,
 		data: { level: 4, parent_id: parent_id },
 		error: function(request) {
 			console.log("get_twon错误, 请联系管理员!");
 			return;
 		},
 		success: function(data) {
 			if (parseInt(data) == 0) {
 				$('#twon').empty().css('display', 'none');
 			} else {
 				$('#twon').css('display', 'block');
 				$('#twon').empty().html(data);
 			}
 		}
 	});
 }



// html ==========================================================
<script src="__PUBLIC__/js/getarea.js"></script>
<script>var getarea_url="{:U('getRegion')}";</script>
<div class="control-group">
    <label class="control-label" for="input-name">地区</label>
    <div class="controls">
        <input name='country' value='1' type="hidden">
        <select name="province" id="province" onChange="get_city(getarea_url, this)">
            <option value="0">请选择</option>
            <volist name="province_arr" id="p">
                <option <if condition="$province eq $p['id']">selected</if> value="{$p.id}">{$p.name}</option>
            </volist>
        </select>
        <select name="city" id="city" onChange="get_area(getarea_url, this)">
            <option value="0">请选择</option>
            <volist name="city_arr" id="p">
                <option <if condition="$city eq $p['id']">selected</if> value="{$p.id}">{$p.name}</option>
            </volist>
        </select>
        <select name="district" id="district" <if condition="$twon gt 0 ">onChange="get_twon(getarea_url, this)"</if>>
            <option value="0">请选择</option>
            <volist name="district_arr" id="p">
                <option <if condition="$district eq $p['id']">selected</if> value="{$p.id}">{$p.name}</option>
            </volist>
        </select>
        <select class="di-bl fl seauii" name="twon" id="twon" <if condition="$twon gt 0 ">style="display:block;"<else/>style="display:none;"</if>>
            <volist name="twon_arr" id="p">
                <option <if condition="$twon eq $p['id']">selected</if> value="{$p.id}">{$p.name}</option>
            </volist>
        </select>
    </div>
</div>