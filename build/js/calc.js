$(document).ready(function () {

    var zhType, zhName, zhColor;
	var data = [];
    
    
    $('#ceiling').maphilight({ fillColor: 'ffffff' });
	data.alwaysOn = !data.alwaysOn;
	$('#area').data('maphilight', data).trigger('alwaysOn.maphilight');
    
    
    
    
//    var Array = [
//        ["vertical",        01,     "Кельн",    "keln",       [0225, 3321, 3321, 3334]],
//        ["vertical",        01,     "Лайн",     "lain",       [0517, 5653, 6789, 0531]],
//        ["horizontal",      02,     "Аврора",   "avrora",     [0041, 5551, 6245, 0225]]
//    ]
    
    
    
    
    var Types2 = [
        "vertical",
        "horizontal",
        "zebra"
    ];
    var Cat2 = [
        ["01", "01", "02"],
        ["01", "02", "03"],
        ["01", "01", "02"]
    ];
    var NamesLat = [
        ["keln", "lain", "malta"],
        ["naz 1", "naz 2", "naz 3"],
        ["keln", "lain", "malta"]
    ];
    var NamesRus = [
        ["Кельн", "Лайн", "Мальта"], 
        ["Название 1", "Название 2"],
        ["Название 3", "Название 4"]
    ];
    var Colors2 = [
        [
            ["0225", "2261", "3204", "4077"],
            ["0005, 0006, 0007"],
            ["0008, 0009, 0010"]
        ],[
            ["0001", "0002", "0003", "0004"],
            ["0005, 0006, 0007"],
            ["0008, 0009, 0010"]
        ],[
            ["0001", "0002", "0003", "0004"],
            ["0005, 0006, 0007"],
            ["0008, 0009, 0010"]
        ],
    ];
    
    var vName;
    var vCount;
    
    
    $('#t-select-2').on('change', function(){
        for (i in Types2) {
            switch($(this).val()){
                case Types2[i]:
                    $('#f-select').empty();
                    $('#f-select').css('display','block');
                    $('#map-photo').empty();
                    $('#map-photo').append('<area id="area" shape="POLYGON" coords="163,75,165,290,168,329,174,318,174,285,181,285,181,312,184,320,189,310,198,310,207,334,204,352,355,358,353,56" nohref="">');
                    $('#map-photo').append('<area id="area-2" shape="POLYGON" coords="540,39,546,367,742,379,749,369,754,371,750,18" nohref="">');
                    $('#room_color_fon').attr('src','img/'+Types2[i]+'.png');
                    $('#f-select').append('<option value="000">Выберите ткань</option>');
                    for (j in NamesLat[i]) {
                        $('#f-select').append('<option class="'+Cat2[i][j]+'" value="'+NamesLat[i][j]+'">'+NamesRus[i][j]+'</option>');
                    };
                    vName = Types2[i];
                    vCount = $.inArray(Types2[i], Types2);
                break;
            };
        };
        console.log(vCount + ' - ' + vName);
    });
    
    $('#f-select').on('change', function(){
        for (i in NamesLat[vCount]) {
            switch($(this).val()){
                case NamesLat[vCount][i]:
                    
                    $('#color_factura').empty();
                    for (j in Colors2[vCount][i]) {
                        $('#color_factura').css('display','block');
                        $('#color_factura').append('<span style="background-image:url(../../img/'+Types2[vCount]+'/'+NamesLat[vCount][i]+'/'+Colors2[vCount][i][j]+'.jpg)" class="'+Colors2[vCount][i][j]+'"></span>');                        
                    };
                break;
            };
        };
    });
   
    
    
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
    
    // Массив горизонтальных жалюзи
    var fHorizontal = [
        {'pk': '083',    'cat': 'fCat_01',       'name': '0225'}
    ];
    
    // Массив горизонтальных жалюзи
    var fZebra = [
        // Категория 1
        {'pk': '053',    'cat': 'fCat_01',       'name': 'Лён'},
        {'pk': '054',    'cat': 'fCat_01',       'name': 'Кристалл'},
        {'pk': '055',    'cat': 'fCat_01',       'name': 'Софт'},
        {'pk': '056',    'cat': 'fCat_01',       'name': 'Степ'},
        {'pk': '057',    'cat': 'fCat_01',       'name': 'Стандарт'},
        // Категория 2
        {'pk': '058',    'cat': 'fCat_02',       'name': 'Арабеска'},
        {'pk': '059',    'cat': 'fCat_02',       'name': 'Бабочки'},
        {'pk': '060',    'cat': 'fCat_02',       'name': 'Дакота'},
        {'pk': '061',    'cat': 'fCat_02',       'name': 'Кофе'},
        {'pk': '062',    'cat': 'fCat_02',       'name': 'Монтана'},
        {'pk': '063',    'cat': 'fCat_02',       'name': 'Силуэт'},
        {'pk': '064',    'cat': 'fCat_02',       'name': 'Тетрис'},
        {'pk': '065',    'cat': 'fCat_02',       'name': 'Эллада'},
        {'pk': '066',    'cat': 'fCat_02',       'name': 'Этник'},
        // Категория 3
        {'pk': '067',    'cat': 'fCat_03',       'name': 'Адажио'},
        {'pk': '068',    'cat': 'fCat_03',       'name': 'Дамаск'},
        {'pk': '069',    'cat': 'fCat_03',       'name': 'Мелланж'},
        {'pk': '070',    'cat': 'fCat_03',       'name': 'Металлик'},
        {'pk': '071',    'cat': 'fCat_03',       'name': 'Орнамент'},
        {'pk': '072',    'cat': 'fCat_03',       'name': 'Палас'},
        {'pk': '073',    'cat': 'fCat_03',       'name': 'Флекс'},
        {'pk': '074',    'cat': 'fCat_03',       'name': 'Фрост'},
        {'pk': '075',    'cat': 'fCat_03',       'name': 'Электра'},
        // Категория 4
        {'pk': '076',    'cat': 'fCat_04',       'name': 'Айленд'},
        {'pk': '077',    'cat': 'fCat_04',       'name': 'Валенсия'},
        {'pk': '078',    'cat': 'fCat_04',       'name': 'Дайкири'},
        {'pk': '079',    'cat': 'fCat_04',       'name': 'Клетка'},
        {'pk': '080',    'cat': 'fCat_04',       'name': 'Луксор трио'},
        {'pk': '081',    'cat': 'fCat_04',       'name': 'Луксор уно'},
        {'pk': '082',    'cat': 'fCat_04',       'name': 'Парма'},
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
    // Вертикальные - Бали
    var c_006 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '2746'},
        {'color_num': '2871'},
        {'color_num': '3499'},
        {'color_num': '4059'},
        {'color_num': '4096'},
        {'color_num': '4201'},
        {'color_num': '4210'},
        {'color_num': '4290'},
        {'color_num': '4454'},
        {'color_num': '4803'},
        {'color_num': '5102'},
        {'color_num': '5173'},
        {'color_num': '5253'},
        {'color_num': '5302'},
        {'color_num': '5612'},
        {'color_num': '5713'},
        {'color_num': '5850'},
        {'color_num': '5992'},
        {'color_num': '7013'},
    ];
    // Вертикальные - Венера
    var c_007 = [
        {'color_num': '0225'},
        {'color_num': '1608'},
        {'color_num': '2406'},
        {'color_num': '2746'},
        {'color_num': '4059'},
        {'color_num': '4120'},
        {'color_num': '4240'},
        {'color_num': '4803'},
        {'color_num': '5992'},
        {'color_num': '7005'},
        {'color_num': '7125'},
    ];
    // Вертикальные - Жаккард №1
    var c_008 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '2868'},
        {'color_num': '4240'},
    ];
    // Вертикальные - Зодиак
    var c_009 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '4059'},
        {'color_num': '4803'},
        {'color_num': '5501'},
    ];
    // Вертикальные - Милан
    var c_010 = [
        {'color_num': '0225'},
        {'color_num': '4082'},
        {'color_num': '4221'},
        {'color_num': '5332'},
    ];
    // Вертикальные - Рейн
    var c_011 = [
        {'color_num': '0225'},
        {'color_num': '2802'},
        {'color_num': '2870'},
        {'color_num': '3209'},
        {'color_num': '4240'},
        {'color_num': '4264'},
        {'color_num': '5501'},
    ];
    // Вертикальные - Рио
    var c_012 = [
        {'color_num': '0225'},
        {'color_num': '2746'},
        {'color_num': '2840'},
        {'color_num': '2854'},
        {'color_num': '2871'},
        {'color_num': '3465'},
        {'color_num': '4077'},
        {'color_num': '4210'},
        {'color_num': '4221'},
        {'color_num': '4240'},
        {'color_num': '4290'},
        {'color_num': '4454'},
        {'color_num': '4824'},
        {'color_num': '5173'},
        {'color_num': '5470'},
        {'color_num': '5921'},
        {'color_num': '5992'},
    ];
    // Вертикальные - Сиде
    var c_013 = [
        {'color_num': '0225'},
        {'color_num': '1608'},
        {'color_num': '2406'},
        {'color_num': '2865'},
        {'color_num': '3465'},
        {'color_num': '4300'},
        {'color_num': '4454'},
        {'color_num': '4803'},
        {'color_num': '4858'},
        {'color_num': '5252'},
        {'color_num': '5586'},
    ];
    // Вертикальные - Твист
    var c_014 = [
        {'color_num': '0225'},
        {'color_num': '1608'},
        {'color_num': '1908'},
        {'color_num': '2259'},
        {'color_num': '4210'},
        {'color_num': '4221'},
        {'color_num': '4240'},
        {'color_num': '5992'},
    ];
    // Вертикальные - Юкка
    var c_015 = [
        {'color_num': '0225'},
    ];    
    // Вертикальные - Эдем
    var c_016 = [
        {'color_num': '0225'},
        {'color_num': '4803'},
        {'color_num': '5608'},
    ];   
    // Вертикальные - Аврора
    var c_017 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '4059'},
        {'color_num': '4221'},
        {'color_num': '5173'},
        {'color_num': '5850'},
    ];  
    // Вертикальные - Аруба
    var c_018 = [
        {'color_num': '2406'},
        {'color_num': '2746'},
    ];
    // Вертикальные - Бейрут
    var c_019 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '4059'},
    ];
    // Вертикальные - Венера, золото-серебро
    var c_020 = [
        {'color_num': '0225'},
    ];
    // Вертикальные - Джангл
    var c_021 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
        {'color_num': '4082'},
        {'color_num': '5102'},
        {'color_num': '5850'},
        {'color_num': '7013'},
        {'color_num': '7125'},
        {'color_num': '7128'},
        {'color_num': '7256'},
        {'color_num': '7282'},
    ];
    // Вертикальные - Кобра
    var c_022 = [
        {'color_num': '7013'},
        {'color_num': '7125'},
    ];
    // Вертикальные - Модерн металлик
    var c_023 = [
        {'color_num': '7013'},
        {'color_num': '7125'},
        {'color_num': '7128'},
        {'color_num': '7256'},
    ];
    // Вертикальные - Оптима
    var c_024 = [
        {'color_num': '2261'},
        {'color_num': '2406'},
        {'color_num': '2746'},
        {'color_num': '4120'},
        {'color_num': '5252'},
        {'color_num': '5501'},
        {'color_num': '5540'},
    ];
    // Вертикальные - Рококко
    var c_025 = [
        {'color_num': '1881'},
        {'color_num': '2406'},
        {'color_num': '2746'},
        {'color_num': '2870'},
        {'color_num': '4454'},
        {'color_num': '4803'},
    ];
    // Вертикальные - Саванна
    var c_026 = [
        {'color_num': '1881'},
    ];
    // Вертикальные - Сказка
    var c_027 = [
        {'color_num': '0225'},
        {'color_num': '1608'},
        {'color_num': '1881'},
        {'color_num': '2261'},
        {'color_num': '2868'},
        {'color_num': '2868'},
    ];
    // Вертикальные - Сфера
    var c_028 = [
        {'color_num': '0225'},
        {'color_num': '1608'},
        {'color_num': '2261'},
        {'color_num': '2406'},
        {'color_num': '2746'},
        {'color_num': '2868'},
        {'color_num': '2870'},
        {'color_num': '2872'},
        {'color_num': '3210'},
        {'color_num': '4059'},
        {'color_num': '4290'},
        {'color_num': '5252'},
        {'color_num': '5540'},
        {'color_num': '5850'},
    ];
    // Вертикальные - Эйлат
    var c_029 = [
        {'color_num': '0225'},
        {'color_num': '2406'},
    ];
    // Вертикальные - Ратан
    var c_030 = [
        {'color_num': '0225'},
        {'color_num': '2261'},
    ];
    
    
    
    
    
    
    // Зебра - Лён
    var c_053 = [
        {'color_num': '2261'}
    ];
    // Зебра - Кристалл
    var c_054 = [
        {'color_num': '0225'},
        {'color_num': '4077'},
        {'color_num': '4290'},
        {'color_num': '4824'},
        {'color_num': '2261'},
    ];
    // Зебра - Софт
    var c_055 = [
        {'color_num': '0225'},
        {'color_num': '3144'},
        {'color_num': '4290'},
        {'color_num': '2552'},
        {'color_num': '3210'},
        {'color_num': '2868'},
        {'color_num': '4264'},
    ];
    // Зебра - Степ
    var c_056 = [
        {'color_num': '1852'},
        {'color_num': '2406'}
    ];
    // Зебра - Стандарт
    var c_057 = [
        {'color_num': '0225'},
        {'color_num': '2259'},
        {'color_num': '2840'},
        {'color_num': '2870'},
        {'color_num': '4096'},
        {'color_num': '4210'},
        {'color_num': '4240'},
        {'color_num': '4453'},
        {'color_num': '4824'},
        {'color_num': '5102'},
        {'color_num': '5850'},
        {'color_num': '5992'},
    ];
    
    // Горизонтальные - 0225
    var c_083 = [
        {'color_num': '0225'}
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
                $('#map-photo').empty();
                $('#map-photo').append('<area id="area" shape="POLYGON" coords="182,74,386,74,387,417,385,421,181,419,181,350,204,323,217,313,232,307,216,310,196,318,181,331" nohref="">');
                $('#map-photo').append('<area id="area-2" shape="POLYGON" coords="429,75,633,75,634,367,429,369" nohref="">');
                $('#room_color_fon').attr('src','img/horizontal.png');
                $('#f-select').append('<option value="000">Выберите ткань</option>');
                for (i in fHorizontal) {
                    $('#f-select').append('<option class="'+fHorizontal[i].cat+'" value="'+fHorizontal[i].pk+'">'+fHorizontal[i].name+'</option>');
                };
            break;
            case 'zebra':
                zhType = "zebra";
                $('#f-select').css('display','block');
                $('#map-photo').empty();
                $('#map-photo').append('<area id="area" shape="POLYGON" coords="55,68,182,70,180,228,52,226" nohref="">');
                $('#map-photo').append('<area id="area-2" shape="POLYGON" coords="229,70,358,71,356,196,309,197,308,239,333,240,334,242,329,244,332,248,324,270,329,278,314,280,309,287,227,287" nohref="">');
                $('#map-photo').append('<area id="area-3" shape="POLYGON" coords="404,72,533,208,404,208" nohref="">');
                $('#map-photo').append('<area id="area-4" shape="POLYGON" coords="580,73,709,73,708,277,626,275,621,277,610,273,579,271" nohref="">');
                $('#map-photo').append('<area id="area-5" shape="POLYGON" coords="341,240,355,240,355,286,351,286,343,277,347,269,340,253,340,247,341,243" nohref="">');
                $('#room_color_fon').attr('src','img/zebra.png');
                $('#f-select').append('<option value="000">Выберите ткань</option>');
                for (i in fZebra) {
                    $('#f-select').append('<option class="'+fZebra[i].cat+'" value="'+fZebra[i].pk+'">'+fZebra[i].name+'</option>');
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
    
    

    
    
  /*  
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
            case '006':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "bali";
                for (i in c_006) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_006[i].color_num+'.jpg)" class="'+c_006[i].color_num+'"></span>');
                }
            break;
            case '007':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "venera";
                for (i in c_007) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_007[i].color_num+'.jpg)" class="'+c_007[i].color_num+'"></span>');
                }
            break;
            case '008':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "zhakkard";
                for (i in c_008) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_008[i].color_num+'.jpg)" class="'+c_008[i].color_num+'"></span>');
                }
            break;
            case '009':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "zodiak";
                for (i in c_009) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_009[i].color_num+'.jpg)" class="'+c_009[i].color_num+'"></span>');
                }
            break;
            case '010':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "milan";
                for (i in c_010) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_010[i].color_num+'.jpg)" class="'+c_010[i].color_num+'"></span>');
                }
            break;
            case '011':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "rein";
                for (i in c_011) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_011[i].color_num+'.jpg)" class="'+c_011[i].color_num+'"></span>');
                }
            break;
            case '012':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "rio";
                for (i in c_012) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_012[i].color_num+'.jpg)" class="'+c_012[i].color_num+'"></span>');
                }
            break;
            case '013':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "side";
                for (i in c_013) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_013[i].color_num+'.jpg)" class="'+c_013[i].color_num+'"></span>');
                }
            break;
            case '014':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "tvist";
                for (i in c_014) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_014[i].color_num+'.jpg)" class="'+c_014[i].color_num+'"></span>');
                }
            break;
            case '015':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "yukka";
                for (i in c_015) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_015[i].color_num+'.jpg)" class="'+c_015[i].color_num+'"></span>');
                }
            break;
            case '016':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "edem";
                for (i in c_016) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_016[i].color_num+'.jpg)" class="'+c_016[i].color_num+'"></span>');
                }
            break;
            case '017':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "avrora";
                for (i in c_017) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_017[i].color_num+'.jpg)" class="'+c_017[i].color_num+'"></span>');
                }
            break;
            case '018':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "aruba";
                for (i in c_018) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_018[i].color_num+'.jpg)" class="'+c_018[i].color_num+'"></span>');
                }
            break;
            case '019':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "beirut";
                for (i in c_019) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_019[i].color_num+'.jpg)" class="'+c_019[i].color_num+'"></span>');
                }
            break;
            case '020':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "venerazoloto";
                for (i in c_020) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_020[i].color_num+'.jpg)" class="'+c_020[i].color_num+'"></span>');
                }
            break;
                
                
                
                
                
            case '053':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "len";
                for (i in c_053) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_053[i].color_num+'.jpg)" class="'+c_053[i].color_num+'"></span>');
                }
            break;
            case '054':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "kristall";
                for (i in c_054) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_054[i].color_num+'.jpg)" class="'+c_054[i].color_num+'"></span>');
                }
            break;
            case '055':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "soft";
                for (i in c_055) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_055[i].color_num+'.jpg)" class="'+c_055[i].color_num+'"></span>');
                }
            break;
            case '056':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "step";
                for (i in c_056) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_056[i].color_num+'.jpg)" class="'+c_056[i].color_num+'"></span>');
                }
            break;
            case '057':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "standart";
                for (i in c_057) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_057[i].color_num+'.jpg)" class="'+c_057[i].color_num+'"></span>');
                }
            break;
                
                
                
                
            case '083':
                $('#color_factura').empty();
                $('#color_factura').css('display','block');
                zhName = "0225";
                for (i in c_083) {
                    $('#color_factura').append('<span style="background-image:url(../../img/'+zhType+'/'+zhName+'/'+c_083[i].color_num+'.jpg)" class="'+c_083[i].color_num+'"></span>');
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
            $('#area-3').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-4').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-5').data('maphilight', data).trigger('alwaysOn.maphilight');
        });
        
    });
    	*/
});