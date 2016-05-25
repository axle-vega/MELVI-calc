jQuery(document).ready(function () {

    var zhType, zhName, zhColor;

    
    
    var wall = "Глянцевый";
    var ColorText;
    
    // Массив вертикальных жалюзи

    var fVertical = [
        {'pk': '001',    'cat': 'fCat_01',       'name': 'Кельн'},
        {'pk': '002',    'cat': 'fCat_01',       'name': 'Лайн'},
        {'pk': '003',    'cat': 'fCat_01',       'name': 'Мальта'},
        {'pk': '004',    'cat': 'fCat_01',       'name': 'Сеул'},
        {'pk': '005',    'cat': 'fCat_01',       'name': 'Диско'},
        {'pk': '006',    'cat': 'fCat_02',       'name': 'Кельн-2'},
        {'pk': '007',    'cat': 'fCat_02',       'name': 'Лайн-2'},
        {'pk': '008',    'cat': 'fCat_02',       'name': 'Мальта-2'},
        {'pk': '009',    'cat': 'fCat_02',       'name': 'Сеул-2'},
        {'pk': '010',    'cat': 'fCat_02',       'name': 'Диско-2'}
    ];
    
    
    // Массивы с цветами и текстурами тканей
    
    var c_001 = [
        {'color_num': '_0225'},
        {'color_num': '_2261'},
        {'color_num': '_5173'},
        {'color_num': '_4221'},
        {'color_num': '_4059'},
        {'color_num': '_5850'}
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
                zhName = "avrora";
                for (i in c_001) {
                    $('#color_factura').append('<span class="'+c_001[i].color_num+'" id=""></span>');
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
    
    
    



	
	function replaceAll(str, what, to) { 
	   return str.split(what).join(to); 
	} 
	
	$('#ceiling').maphilight({ fillColor: 'ffffff' });
	var data = [];
	data.alwaysOn = !data.alwaysOn;
	$('#area').data('maphilight', data).trigger('alwaysOn.maphilight');
	
	
	$("#input_color p#wall_item span").click(function(){
		$("#input_color p#wall_item span").removeClass("act");
		var id = $(this).addClass("act").attr("id");
		wall = $(this).text();
		$("#input_color .input_color_wall div.pollo").hide();
		id = id.replace("_point","");
		$("#input_color .input_color_wall div#"+id).show();
		if(id == "lacquered") {
			$("img#potolok").show();
		} else {
			$("img#potolok").hide();
		}
		if(id == "mat") {
			$("img#mat").show();
		} else {
			$("img#mat").hide();
		}
		if(id == "sateen") {
			$("img#sateen").show();
		} else {
			$("img#sateen").hide();
		}
	});
	
	$("#input_color .input_color_wall span").click(function(){
		var color = $(this).attr("class");
		color = color.replace("_","");
		var text = $(this).attr("id");
		ColorText = replaceAll(text,"_"," ");
		$("#room_color #wall").css("background","#"+color);
		$("p#your_choice span#color_bottom").css("background","#"+color).addClass("color_bottom_shadow");
		$("p#your_choice span#color_bottom_text_our").addClass("color_bottom_text_our_show");
		$(".measurement_dop").show();
		$("p#your_choice span#color_bottom_text").text(wall+" ("+ColorText+")");
		$("#input_color .input_color_wall span").html("");
		$(this).html("<div></div>");
	});
	
	$("#input_color .input_color_floor span").click(function(){
		var color = $(this).attr("class");
		color = color.replace("_","");
		$("#room_color #floor").css("background","#"+color);
		$("#input_color .input_color_floor span").html("");
		$(this).html("<div></div>");
	});
	

	
	$("#input_color p#floor_item span").click(function(){
		$("#input_color p#floor_item span").removeClass("act");
		var id = $(this).addClass("act").attr("id");
		if(id == "laminate_point") {
			$("img#laminat").show();
			$("img#carpeting").hide();
			$("#input_color .input_color_floor #laminate").show();
			$("#input_color .input_color_floor #carpeting").hide();
		} else {
			$("img#laminat").hide();
			$("img#carpeting").show();
			$("#input_color .input_color_floor #laminate").hide();
			$("#input_color .input_color_floor #carpeting").show();
		}
	});
	
	$(".measurement_dop").hover(

        function(){
            $(this).addClass("measurement_dop_hov");
        },
        function(){
            $(this).removeClass("measurement_dop_hov");
        }

    );
	
	$(".measurement_dop").click(function(){
        jQuery('.additional-info').remove();
		$("div#podbor textarea").val("Мне понравился "+wall+" потолок цвета «"+ColorText+"»");

		$("div#form-order").dialog({

			position: ["center","center"],
			bgiframe: true,
			modal: true,
			width: 330,
			closeText: "X"

		});

        return false;

    });
	
});