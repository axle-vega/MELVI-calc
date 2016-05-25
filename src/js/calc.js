$(document).ready(function () {

    var zhType, zhName, zhColor;
	var data = [];
    
    
    $('#ceiling').maphilight({ fillColor: 'ffffff' });
	data.alwaysOn = !data.alwaysOn;
	$('#area').data('maphilight', data).trigger('alwaysOn.maphilight');
    
    // Массив вертикальных жалюзи

    var fVertical = [
        // Категория 1
        {'pk': '001',    'cat': 'fCat_01',       'name': 'Кельн'},
        {'pk': '002',    'cat': 'fCat_01',       'name': 'Лайн'},
        {'pk': '003',    'cat': 'fCat_01',       'name': 'Мальта'},
        {'pk': '004',    'cat': 'fCat_01',       'name': 'Сеул'},
        {'pk': '005',    'cat': 'fCat_01',       'name': 'Диско'},
        // Категория 2
        {'pk': '006',    'cat': 'fCat_02',       'name': 'Бали'},
        {'pk': '007',    'cat': 'fCat_02',       'name': 'Венера'},
        {'pk': '008',    'cat': 'fCat_02',       'name': 'Жаккард №1'},
        {'pk': '009',    'cat': 'fCat_02',       'name': 'Зодиак'},
        {'pk': '010',    'cat': 'fCat_02',       'name': 'Милан'},
        {'pk': '011',    'cat': 'fCat_02',       'name': 'Рейн'},
        {'pk': '012',    'cat': 'fCat_02',       'name': 'Рио'},
        {'pk': '013',    'cat': 'fCat_02',       'name': 'Сиде'},
        {'pk': '014',    'cat': 'fCat_02',       'name': 'Твист'},
        {'pk': '015',    'cat': 'fCat_02',       'name': 'Юкка'},
        {'pk': '016',    'cat': 'fCat_02',       'name': 'Эдем'},
        // Категория 3
        {'pk': '017',    'cat': 'fCat_03',       'name': 'Аврора'},
        {'pk': '018',    'cat': 'fCat_03',       'name': 'Аруба'},
        {'pk': '019',    'cat': 'fCat_03',       'name': 'Бейрут'},
        {'pk': '020',    'cat': 'fCat_03',       'name': 'Венера (золото/серебро)'},
        {'pk': '021',    'cat': 'fCat_03',       'name': 'Джангл'},
        {'pk': '022',    'cat': 'fCat_03',       'name': 'Кобра'},
        {'pk': '023',    'cat': 'fCat_03',       'name': 'Модерн металлик'},
        {'pk': '024',    'cat': 'fCat_03',       'name': 'Оптима'},
        {'pk': '025',    'cat': 'fCat_03',       'name': 'Рококко'},
        {'pk': '026',    'cat': 'fCat_03',       'name': 'Саванна'},
        {'pk': '027',    'cat': 'fCat_03',       'name': 'Сказка'},
        {'pk': '028',    'cat': 'fCat_03',       'name': 'Сфера'},
        {'pk': '029',    'cat': 'fCat_03',       'name': 'Эйлат'},
        {'pk': '030',    'cat': 'fCat_03',       'name': 'Ратан'},
        // Категория 4
        {'pk': '031',    'cat': 'fCat_04',       'name': 'Венера Техно'},
        {'pk': '032',    'cat': 'fCat_04',       'name': 'Диана'},
        {'pk': '033',    'cat': 'fCat_04',       'name': 'Жаккард Black-out'},
        {'pk': '034',    'cat': 'fCat_04',       'name': 'Жемчуг'},
        {'pk': '035',    'cat': 'fCat_04',       'name': 'Замша'},
        {'pk': '036',    'cat': 'fCat_04',       'name': 'Лейла'},
        {'pk': '037',    'cat': 'fCat_04',       'name': 'Манила'},
        {'pk': '038',    'cat': 'fCat_04',       'name': 'Офелия'},
        {'pk': '039',    'cat': 'fCat_04',       'name': 'Офис Black-out'},
        {'pk': '040',    'cat': 'fCat_04',       'name': 'Сиде Black-out'},
        {'pk': '041',    'cat': 'fCat_04',       'name': 'Сэнди'},
        {'pk': '042',    'cat': 'fCat_04',       'name': 'Шелк'},
        // Категория 5
        {'pk': '043',    'cat': 'fCat_05',       'name': 'Жемчуг Black-out'},
        {'pk': '044',    'cat': 'fCat_05',       'name': 'Скрин'},
        {'pk': '045',    'cat': 'fCat_05',       'name': 'Скрин 2'},
        {'pk': '046',    'cat': 'fCat_05',       'name': 'Путь самурая'},
        {'pk': '047',    'cat': 'fCat_05',       'name': 'Чайная церемония'},
        {'pk': '048',    'cat': 'fCat_05',       'name': 'Чио-чио-сан'},
        // Категория Premium
        {'pk': '049',    'cat': 'fCat_06',       'name': 'Студио'},
        {'pk': '050',    'cat': 'fCat_06',       'name': 'Флора'},
        {'pk': '051',    'cat': 'fCat_06',       'name': 'Сутра'},
        {'pk': '052',    'cat': 'fCat_06',       'name': 'Крит'},
    ];
    
    
    // Массивы с цветами и текстурами тканей
    
    // Вертикальные - Кельн
    var c_001 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '3204'},
        {'color_num': '4077'},
        {'color_num': '4201'},
        {'color_num': '4221'},
        {'color_num': '5102'},
        {'color_num': '5260'},
        {'color_num': '5501'},
        {'color_num': '5713'}
    ];
    // Вертикальные - Лайн
    var c_002 = [
        {'color_num': '2261'},
        {'color_num': '0225'},
        {'color_num': '5608'},
        {'color_num': '5992'},
        {'color_num': '3204'},
        {'color_num': '5102'},
        {'color_num': '2868'},
        {'color_num': '4077'},
        {'color_num': '4454'},
        {'color_num': '3210'},
        {'color_num': '5880'},
        {'color_num': '4221'},
        {'color_num': '4082'},
        {'color_num': '4264'},
        {'color_num': '1608'},
        {'color_num': '1851'},
        {'color_num': '5252'},
        {'color_num': '5302'},
        {'color_num': '2406'},
        {'color_num': '3499'},
        {'color_num': '5501'},
        {'color_num': '5850'},
    ];
    // Вертикальные - Мальта
    var c_003 = [
        {'color_num': '2259'},
        {'color_num': '0225'},
        {'color_num': '5992'},
        {'color_num': '3465'},
        {'color_num': '5102'},
        {'color_num': '2840'},
        {'color_num': '4221'},
        {'color_num': '4240'},
        {'color_num': '4082'},
        {'color_num': '1608'},
        {'color_num': '5850'},
    ];
    // Вертикальные - Сеул
    var c_004 = [
        {'color_num': '2261'},
        {'color_num': '0225'},
        {'color_num': '5102'},
        {'color_num': '4221'},
        {'color_num': '5501'},
    ];
    // Вертикальные - Диско
    var c_005 = [
        {'color_num': '2261'},
        {'color_num': '0225'},
        {'color_num': '3465'},
        {'color_num': '4454'},
        {'color_num': '3499'},
        {'color_num': '4240'},
        {'color_num': '4264'},
    ];
    // Массив горизонтальных жалюзи
    
    var fHorizontal = [
        {'pk': '011',    'cat': 'fCat_01',       'name': 'Аврора'},
        {'pk': '012',    'cat': 'fCat_01',       'name': 'Юкка'},
        {'pk': '013',    'cat': 'fCat_01',       'name': 'Лондон'},
        {'pk': '014',    'cat': 'fCat_01',       'name': 'Стамбул'},
        {'pk': '015',    'cat': 'fCat_01',       'name': 'Джаккарта'},
    ];
    
    
    
    
    // Генерация списка тканей
    
    $("#t-select").on('change', function(){
        $('select#f-select').empty();
        switch($(this).val()){
            case 'vertical':
                zhType = "vertical";
                $('#f-select').css('display','block');
                $('#map-photo').empty();
                $('#map-photo').append('<area id="area" shape="POLYGON" coords="163,75,165,290,168,329,174,318,174,285,181,285,181,312,184,320,189,310,198,310,207,334,204,352,355,358,353,56" nohref="">');
                $('#map-photo').append('<area id="area-2" shape="POLYGON" coords="540,39,546,367,742,379,749,369,754,371,750,18" nohref="">');
                $('#room_color_fon').attr('src','img/vertical.png');
                $('#f-select').append('<option value="000">Выберите ткань</option>');
                for (i in fVertical) {
                    $('#f-select').append('<option class="'+fVertical[i].cat+'" value="'+fVertical[i].pk+'">'+fVertical[i].name+'</option>');
                };
            break;
            case 'horizontal': 
                zhType = "horizontal";
                $('#f-select').css('display','block');
                $('#f-select').append('<option value="000">Выберите ткань</option>');
                for (i in fHorizontal) {
                    $('#f-select').append('<option class="'+fHorizontal[i].cat+'" value="'+fHorizontal[i].pk+'">'+fHorizontal[i].name+'</option>');
                };
            break;
            case 'zebra':
                zhType = "zebra";
                $('#f-select').css('display','block');
                $('#map-photo').empty();
                $('#map-photo').append('<area id="area" shape="POLYGON" coords="94,0,281,65,283,266,6,228,5,218,11,220,11,205,5,205,6,184,11,186,11,172,6,171,8,0" nohref="">');
                $('#map-photo').append('<area id="area-2" shape="POLYGON" coords="559,152,799,142,799,242,560,246" nohref="">');
                $('#room_color_fon').attr('src','img/zebra.png');
                $('#f-select').append('<option value="000">Выберите ткань</option>');
                for (i in fVertical) {
                    $('#f-select').append('<option class="'+fVertical[i].cat+'" value="'+fVertical[i].pk+'">'+fVertical[i].name+'</option>');
                };
            break;
            case 'nothing':
                $('#f-select').empty();
                $('#f-select').css('display','none');
                $('#color_factura').empty();
                $('#color_factura').css('display','none');
            break;
        };
    });
    
    
    $("#f-select").on('change', function(){
        switch($(this).val()){
            case '001':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "keln";
                for (i in c_001) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_001[i].color_num+'.jpg)" class="'+c_001[i].color_num+'"></span>');
                }
            break;
            case '002':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "lain";
                for (i in c_002) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_002[i].color_num+'.jpg)" class="'+c_002[i].color_num+'"></span>');
                }
            break;
            case '003':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "malta";
                for (i in c_003) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_003[i].color_num+'.jpg)" class="'+c_003[i].color_num+'"></span>');
                }
            break;
            case '004':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "seul";
                for (i in c_004) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_004[i].color_num+'.jpg)" class="'+c_004[i].color_num+'"></span>');
                }
            break;
            case '005':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "disko";
                for (i in c_005) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_005[i].color_num+'.jpg)" class="'+c_005[i].color_num+'"></span>');
                }
            break;
            case '000':
                $('#color_factura').empty();
                $('#color_factura').css('display','none');
            break;
        };

        
        
        
        $("#input_color .input_color_ceiling span").click(function(){
            
            zhColor = $(this).attr("class");

            $('#ceiling').css('background-image','url("../../img/'+zhType+'/'+zhName+'/'+zhColor+'.jpg")');
            $('#ceiling').css('opacity','1');
            $('#factura').css('opacity','1');
            $('#factura').css('background-image','url("../../img/'+zhType+'/'+zhName+'/'+zhColor+'.jpg")');
            $('#area').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-2').data('maphilight', data).trigger('alwaysOn.maphilight');

        });
        
    });
    
    
    



	
//	function replaceAll(str, what, to) { 
//	   return str.split(what).join(to); 
//	} 
	

	
	
//	$("#input_color p#wall_item span").click(function(){
//		$("#input_color p#wall_item span").removeClass("act");
//		var id = $(this).addClass("act").attr("id");
//		wall = $(this).text();
//		$("#input_color .input_color_wall div.pollo").hide();
//		id = id.replace("_point","");
//		$("#input_color .input_color_wall div#"+id).show();
//		if(id == "lacquered") {
//			$("img#potolok").show();
//		} else {
//			$("img#potolok").hide();
//		}
//		if(id == "mat") {
//			$("img#mat").show();
//		} else {
//			$("img#mat").hide();
//		}
//		if(id == "sateen") {
//			$("img#sateen").show();
//		} else {
//			$("img#sateen").hide();
//		}
//	});
	
//	$("#input_color .input_color_wall span").click(function(){
//		var color = $(this).attr("class");
//		color = color.replace("_","");
//		var text = $(this).attr("id");
//		ColorText = replaceAll(text,"_"," ");
//		$("#room_color #wall").css("background","#"+color);
//		$("p#your_choice span#color_bottom").css("background","#"+color).addClass("color_bottom_shadow");
//		$("p#your_choice span#color_bottom_text_our").addClass("color_bottom_text_our_show");
//		$(".measurement_dop").show();
//		$("p#your_choice span#color_bottom_text").text(wall+" ("+ColorText+")");
//		$("#input_color .input_color_wall span").html("");
//		$(this).html("<div></div>");
//	});
	
//	$("#input_color .input_color_floor span").click(function(){
//		var color = $(this).attr("class");
//		color = color.replace("_","");
//		$("#room_color #floor").css("background","#"+color);
//		$("#input_color .input_color_floor span").html("");
//		$(this).html("<div></div>");
//	});
	

	
//	$("#input_color p#floor_item span").click(function(){
//		$("#input_color p#floor_item span").removeClass("act");
//		var id = $(this).addClass("act").attr("id");
//		if(id == "laminate_point") {
//			$("img#laminat").show();
//			$("img#carpeting").hide();
//			$("#input_color .input_color_floor #laminate").show();
//			$("#input_color .input_color_floor #carpeting").hide();
//		} else {
//			$("img#laminat").hide();
//			$("img#carpeting").show();
//			$("#input_color .input_color_floor #laminate").hide();
//			$("#input_color .input_color_floor #carpeting").show();
//		}
//	});
	
//	$(".measurement_dop").hover(
//
//        function(){
//            $(this).addClass("measurement_dop_hov");
//        },
//        function(){
//            $(this).removeClass("measurement_dop_hov");
//        }
//
//    );
//	
//	$(".measurement_dop").click(function(){
//        jQuery('.additional-info').remove();
//		$("div#podbor textarea").val("Мне понравился "+wall+" потолок цвета «"+ColorText+"»");
//
//		$("div#form-order").dialog({
//
//			position: ["center","center"],
//			bgiframe: true,
//			modal: true,
//			width: 330,
//			closeText: "X"
//
//		});
//
//        return false;
//
//    });
	
});

    
    
