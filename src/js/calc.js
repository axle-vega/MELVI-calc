$(document).ready(function () {

	var data = [];
    
    
    $('#ceiling').maphilight({ fillColor: 'ffffff' });
	data.alwaysOn = !data.alwaysOn;
	$('#area').data('maphilight', data).trigger('alwaysOn.maphilight');
    
    
    
    
    // Массив с типами жалюзи
    var Types2 = ["vertical", "horizontal", "zebra", "vertical-photo", "roll"];
    // Массив с координатами полигонов
    var Coord2 = [
        // Вертикальные
        ["163,75,165,290,168,329,174,318,174,285,181,285,181,312,184,320,189,310,198,310,207,334,204,352,355,358,353,56", "540,39,546,367,742,379,749,369,754,371,750,18"],
        // Горизонтальные
        ["182,74,386,74,387,417,385,421,181,419,181,350,204,323,217,313,232,307,216,310,196,318,181,331", "429,75,633,75,634,367,429,369"],
        // Зебра
        ["55,68,182,70,180,228,52,226", "229,70,358,71,356,196,309,197,308,239,333,240,334,242,329,244,332,248,324,270,329,278,314,280,309,287,227,287", "404,72,533,208,404,208", "580,73,709,73,708,277,626,275,621,277,610,273,579,271", "341,240,355,240,355,286,351,286,343,277,347,269,340,253,340,247,341,243"],
        // Вертикальные Фотопечать
        [""],
        // Рулонные шторы MGII
        ["198,31,204,450,600,437,601,70,606,67,607,60,604,57,204,14,205,25"]
    ]

    // Массив с категориями тканей
    var Cat2 = [
        // Вертикальные
        ["01", "01", "01", "01", "01", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "05", "05", "05", "05", "05", "05", "06", "06", "06", "06"],
        // Горизонтальные
        ["01", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "03", "03", "03", "03", "03", "03", "03", "04", "04", "04", "04", "04", "04", "04", "04", "04"],
        // Зебра
        ["01", "01", "01", "01", "01", "02", "02", "02", "02", "02", "02", "02", "02", "02", "03", "03", "03", "03", "03", "03", "03", "03", "03", "04", "04", "04", "04", "04", "04", "04"],
        // Вертикальные Фотопечать
        ["01"],
        // Рулонные шторы MGII
        ["01", "01", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "02", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "03", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "04", "05", "05", "05", "05", "05", "05", "05", "05", "05", "05", "05", "05"]
    ];
    // Массив с латинскими названиями
    var NamesLat = [
        // Вертикальные
        ["keln", "lain", "malta", "seul", "disko", "bali", "venera", "zhakkard", "zodiak", "milan", "rein", "rio", "side", "tvist", "yukka", "edem", "avrora", "aruba", "beirut", "venerazoloto", "djangl", "kobra", "modernmetallik", "optima", "rokokko", "savanna", "skazka", "sfera", "eilat", "ratan", "veneratehno", "diana", "zhakkardblack", "zhemchug", "zamsha", "leila", "manila", "ofelia", "officeblack", "sideblack", "sendi", "shelk", "zhemchugblack", "skrin", "skrin2", "putsamuraya", "chainayaceremonia", "chiochiosan", "studio", "flora", "sutra", "krit"], 
        // Горизонтальные
        ["0225", "1606", "1852", "1908", "2259", "2406", "2746", "2871", "3144", "3204", "3499", "4063", "4077", "4082", "4096", "4201", "4261", "5173", "5259", "5850", "5713", "5853", "5992", "CP-708", "7005", "7013", "7122", "7125", "7128", "7259", "7260", "6012", "6013", "6016", "7258", "9058", "2259p", "7005p", "7005 2/3", "0225p"],
        // Зебра
        ["len", "kristall", "soft", "step", "standart", "arabeska", "babochki", "dakota", "kofe", "montana", "silujet", "tetris", "jellada", "jetnik", "adazhio", "damask", "mellanzh", "metallik", "ornament", "palas", "fleks", "frost", "jelektra", "ajlend", "valensija", "dajkiri", "kletka", "luksortrio", "luksoruno", "parma"],
        // Вертикальные Фотопечать
        [""],
        // Рулонные шторны MGII
        ["alfa", "bazel", "smajl", "blanko", "bolgarskajaroza", "nevada", "ginko", "driada", "zamsha", "shelk", "kantri", "kitajskajaroza", "medeja", "len", "sakura", "riga", "orbita", "sfera", "garmonija", "shantug", "leto", "onda", "omega", "safari", "talnik", "alfablack", "romans", "kamelija", "omega2", "alehandro", "greza", "astorija", "diamanda", "shikatan", "ariadna", "versal", "intro", "junior", "albion", "smajl", "len", "rondo", "montevideo", "bazilik", "njujork", "skript", "jelvis", "alleja", "vindzor", "shelk", "krymskaja roza", "babochki", "afrikanskajaroza", "pujeblo", "vesna", "granada", "zhemchug", "kapur", "manila", "parizh", "rjabina", "liana", "sogdiana", "jeika", "anakonda", "rishele", "klenovyjlist", "chelsi", "jamajka", "palma", "merezhka", "satara", "orbita", "vual", "lima", "skrin", "strekoza", "prizma", "liberti", "provans", "skrin2", "omega", "kroko", "parcha", "perloga", "shahinaja", "shanhaj", "albion", "polka", "jelvis", "vindzorzhemchug", "kalipso", "kalifornija", "kamila", "laura", "mona", "regata", "selena", "siesta", "toledo", "shpalera", "santjago", "santjagozhemchug", "harizma", "palanga", "korona", "palitra", "panama", "paradiz", "anzhu", "rjabina", "buhara", "letnijson", "blansh", "jamajka", "rivera", "shato", "verona", "verona2", "zhemchug", "gavana", "impala", "impala 2", "lima", "silkskrin", "asienda", "giza", "apollo", "albino", "kalifornija", "matrica", "primo", "tiffani", "tiffani2", "toledo", "granada", "regada", "madrasperla", "markesh", "gavana"]
    ];
    // Массив с русскими названиями
    var NamesRus = [
        // Вертикальные
        ["Кельн", "Лайн", "Мальта", "Сеул", "Диско", "Бали", "Венера", "Жаккард №1", "Зодиак", "Милан", "Рейн", "Рио", "Сиде", "Твист", "Юкка", "Эдем", "Аврора", "Аруба", "Бейрут", "Венера, золото-серебро", "Джангл", "Кобра", "Модерн металлик", "Оптима", "Рококко", "Саванна", "Сказка", "Сфера", "Эйлат", "Ратан", "Венера Техно", "Диана", "Жаккард Black-out", "Жемчуг", "Замша", "Лейла", "Манила", "Офелия", "Офис Black-out", "Сиде Black-out", "Сэнди", "Шелк", "Жемчуг Black-out", "Скрин", "Скрин 2", "Путь самурая", "Чайная церемония", "Чио-чио-сан", "Студио", "Флора", "Сутра", "Крит"], 
        // Горизонтальные
        ["0225", "1606", "1852", "1908", "2259", "2406", "2746", "2871", "3144", "3204", "3499", "4063", "4077", "4082", "4096", "4201", "4261", "5173", "5259", "5850", "5713", "5853", "5992", "CP-708", "7005", "7013", "7122", "7125", "7128", "7259", "7260", "6012", "6013", "6016", "7258", "9058", "2259П", "7005П", "7005 2/3", "0225П"],
        // Зебра
        ["Лен", "Кристалл", "Софт", "Степ", "Стандарт", "Арабеска", "Бабочки", "Дакота", "Кофе", "Монтана", "Силуэт", "Тетрис", "Эллада", "Этник", "Адажио", "Дамаск", "Мелланж", "Металлик", "Орнамент", "Палас", "Флекс", "Фрост", "Электра", "Айленд", "Валенсия", "Дайкири", "Клетка", "Луксор трио", "Луксор уно", "Парма"],
        // Вертикальные Фотопечать
        [""],
        // Рулонные шторны MGII
        ["Альфа", "Базель", "Смайл", "Бланко", "Болгарская роза", "Невада", "Гинко", "Дриада", "Замша", "Шелк", "Кантри", "Китайская роза", "Медея", "Лен", "Сакура", "Рига", "Орбита", "Сфера", "Гармония", "Шантуг", "Лето", "Онда", "Омега", "Сафари", "Тальник", "Альфа Black-out", "Романс", "Камелия", "Омега 2", "Алехандро", "Греза", "Астория", "Диаманда", "Шикатан", "Ариадна", "Версаль", "Интро", "Юниор", "Альбион", "Смайл", "Лен", "Рондо", "Монтевидео", "Базилик", "Нью-йорк", "Скрипт", "Элвис", "Аллея", "Виндзор", "Шелк", "Крымская роза", "Бабочки", "Африканская роза", "Пуэбло", "Весна", "Гранада", "Жемчуг", "Капур", "Манила", "Париж", "Рябина", "Лиана", "Согдиана", "Эика", "Анаконда", "Ришелье", "Кленовый лист", "Челси", "Ямайка", "Пальма", "Мережка", "Сатара", "Орбита", "Вуаль", "Лима", "Скрин", "Стрекоза", "Призма", "Либерти", "Прованс", "Скрин 2", "Омега", "Кроко", "Парча", "Перлога", "Шахиная", "Шанхай", "Альбион", "Полька", "Элвис", "Виндзор жемчуг", "Калипсо", "Калифорния", "Камила", "Лаура", "Мона", "Регата", "Селена", "Сиеста", "Толедо", "Шпалера", "Сантьяго", "Сантьяго жемчуг", "Харизма", "Паланга", "Корона", "Палитра", "Панама", "Парадиз", "Анжу", "Рябина", "Бухара", "Летний сон", "Бланш", "Ямайка", "Ривьера", "Шато", "Верона", "Верона 2", "Жемчуг", "Гавана", "Импала", "Импала 2", "Лима", "Силкскрин", "Асиенда", "Гиза", "Аполло", "Альбино", "Калифорния", "Матрица", "Примо", "Тиффани", "Тиффани 2", "Толедо", "Гранада", "Регада", "Мадрас Перла", "Маркеш", "Гавана"]
    ];
    // Массив с текстурами тканей
    var Colors2 = [
        // Вертикальные
        [
            // Кельн
            ["0225", "2261", "3204", "4077", "4201", "4221", "5102", "5260", "5501", "5713"],
            // Лайн
            ["0225", "1608", "1851", "2261", "2406", "2868", "3204", "3210", "3499", "4077", "4082", "4221", "4264", "4454", "5102", "5252", "5302", "5501", "5608", "5850", "5880", "5992"],
            // Мальта
            ["0225", "1608", "2259", "2840", "3465", "4082", "4221", "4240", "5102", "5850", "5992"],
            // Сеул
            ["0225", "2261", "4221", "5102", "5501"],
            // Диско
            ["0225", "2261", "3465", "3499", "4240", "4264", "4454"],
            // Бали
            ["0225", "2261", "2746", "2871", "3499", "4059", "4096", "4201", "4210", "4290", "4454", "4803", "5102", "5173", "5253", "5302", "5612", "5713", "5850", "5992", "7013"],
            // Венера
            ["0225", "1608", "2406", "2746", "4059", "4120", "4240", "4803", "5992", "7005", "7125"],
            // Жаккард №1
            ["0225", "2261", "2868", "4240"],
            // Зодиак
            ["0225", "2261", "4059", "4803", "5501"],
            // Милан
            ["0225", "4082", "4221", "5992"],
            // Рейн
            ["0225", "2802", "2870", "3209", "4240", "4264", "5501"],
            // Рио
            ["0225", "2746", "2840", "2854", "2871", "3465", "4077", "4210", "4221", "4240", "4290", "4454", "4824", "5173", "5470", "5921", "5992"],
            // Сиде
            ["0225", "1608", "2406", "2865", "3465", "4300", "4454", "4803", "4858", "5252", "5586"],
            // Твист
            ["0225", "1608", "1908", "2259", "4210", "4221", "4240", "5992"],
            // Юкка
            ["0225", "4240"],
            // Эдем
            ["0225", "4803", "5608"],
            // Аврора
            ["0225", "2261", "4059", "4221", "5173", "5850"],
            // Аруба
            ["2406", "2746"],
            // Бейрут
            ["0225", "2261", "4059"],
            // Венера золото-серебро
            ["7005", "7125"],
            // Джангл
            ["0225", "2261", "4082", "5102", "5850", "7013", "7125", "7128", "7256", "7282"],
            // Кобра
            ["7013", "7125"],
            // Модерн металлик
            ["7013", "7125", "7128", "7256"],
            // Оптима
            ["2261", "2406", "2746", "4120", "5252", "5501", "5540"],
            // Рококко
            ["1881", "2406", "2746", "2870", "4454", "4803"],
            // Саванна
            ["2406", "2704", "2868", "5540"],
            // Сказка
            ["0225", "1608", "1881", "2261", "2868", "4210", "4290"],
            // Сфера
            ["0225", "1608", "2261", "2406", "2746", "2868", "2870", "2872", "3210", "4059", "4290", "5252", "5540", "5850"],
            // Эйлат
            ["0225", "2406"],
            // Ратан
            ["0225", "2261"],
            // Венера-техно
            ["7013", "7122"],
            // Диана
            ["0000"],
            // Жаккард Black-out
            ["0225", "2261", "4240", "5850"],
            // Жемчуг
            ["2261", "0225", "5102", "3209", "4240", "1608"],
            // Замша
            ["2870", "2259", "2406", "2868"],
            // Лейла
            ["2261", "2868"],
            // Манила
            ["0000"],
            // Офелия
            ["2868", "4120", "1852", "5252", "5612"],
            // Офис Black-out
            ["7013", "2261"],
            // Сиде Black-out
            ["2406", "0225", "1608"],
            // Сэнди
            ["0000"],
            // Шелк
            ["2871", "0225", "4454", "4240", "4803", "2259", "5501", "2746", "4300"],
            // Жемчуг Black-out
            ["2261", "0225", "3209", "4240", "5850"],
            // Скрин
            ["1608", "1908", "2870", "2868"],
            // Скрин 2
            ["0000"],
            // Путь самурая
            ["2746", "5501"],
            // Чайная церемония
            ["0225", "1881", "2406", "2600", "2746"],
            // Чио-чио-сан
            ["2870"],
            // Студио
            ["2746", "4454", "1608", "4300"],
            // Флора
            ["2261", "5540", "4300", "2853"],
            // Сутра
            ["2261"],
            // Крит
            ["0000"],
        ],
        // Горизонтальные
        [
            ["0225"],
            ["1606"],
            ["1852"],
            ["1908"], 
            ["2259"], 
            ["2406"], 
            ["2746"], 
            ["2871"], 
            ["3144"], 
            ["3204"], 
            ["3499"], 
            ["4063"], 
            ["4077"], 
            ["4082"], 
            ["4096"], 
            ["4201"], 
            ["4261"], 
            ["5173"], 
            ["5259"], 
            ["5850"], 
            ["5713"], 
            ["5853"], 
            ["5992"], 
            ["CP-708"], 
            ["7005"], 
            ["7013"], 
            ["7122"], 
            ["7125"], 
            ["7128"], 
            ["7259"], 
            ["7260"], 
            ["6012"], 
            ["6013"], 
            ["6016"], 
            ["7258"], 
            ["9058"], 
            ["2259p"], 
            ["7005p"], 
            ["7005 2/3"], 
            ["0225p"],
        ],
        //Зебра
        [
            // Лен
            ["2261"],
            // Кристалл
            ["0225", "2261", "4077", "4290", "4824"],
            // Софт
            ["0225", "2406", "2552", "2868", "3144", "3210", "4264", "4290"],
            // Степ
            ["1852", "2406"],
            // Стандарт
            ["0225", "2259", "2840", "2870", "4096", "4210", "4240", "4453", "4824", "5102", "5850", "5992"],
        ],
        // Вертикальные Фотопечать
        [
            [""]
        ],
        // Рулонные шторы MGII
        [
            // Альфа
            ["0225", "1852", "2261", "2853", "2871", "3310", "3465", "4082", "4200", "4240", "4261", "4290", "5173"],
            // Базель
            ["2406", "4524"],
            // Смайл
            ["0225", "4077"],
            // Бланко
            ["0225"],
            // Болгарская роза
            ["4059"],
            // Невада
            ["0000"],
            // Гинко
            ["1608", "3465", "5608"],
            // Дриада
            ["0225", "2261", "4240"],
            // Замша
            ["2259", "2406", "2870"],
            // Шелк
            ["0225", "1608", "1908", "2261", "2549", "2746", "2853", "2863", "2871", "3465", "4240", "4454", "4803", "5608", "5992"],
            // Кантри
            ["0225", "2406"],
            // Китайская роза
            ["0000"],
            // Медея
            ["0000"],
        ]
    ];
    
    // Масштаб текстуры
    var Scale2 = [[],[],[],[],[]];

    
    var vType, vName, vCount, vColor, vHeight, vWidth, vPrice, vScale;
    
    
    
    $('#t-select-2').on('change', function(){
        for (i in Types2) {
            switch($(this).val()){
                case "vertical-photo":
                    $('#f-select').empty();
                    $('#map-photo').empty();
                    $('#color_factura').empty();
                    $('#f-select').css('display','none');
                    $('#color_factura').css('display','none');
                    $('#factura-label').css('display','none');
                    $('#room_color_fon').attr('src','img/'+Types2[i]+'.png');
                break;
                case Types2[i]:
                    $('#f-select').empty();
                    $('#f-select').css('display','block');
                    $('#map-photo').empty();
                    $('#color_factura').empty();
                    $('#color_factura').css('display','none');
                    $('#factura-label').css('display','none');
                    for (k in Coord2) {
                        $('#map-photo').append('<area id="area-'+[k]+'" shape="POLYGON" coords="'+Coord2[i][k]+'" nohref="">');
                    }
                    $('#room_color_fon').attr('src','img/'+Types2[i]+'.png');
                    $('#f-select').append('<option value="nothing">Выберите ткань</option>');
                    for (j in NamesLat[i]) {
                        $('#f-select').append('<option class="'+Cat2[i][j]+'" value="'+NamesLat[i][j]+'">'+NamesRus[i][j]+'</option>');
                    };
                    vType = Types2[i];
                    vCount = $.inArray(Types2[i], Types2);
                break;
                case "nothing":
                    $('#f-select').empty();
                    $('#f-select').css('display','none');
                    $('#map-photo').empty();
                    $('#color_factura').empty();
                    $('#color_factura').css('display','none');
                    $('#factura-label').css('display','none');
                break;
            };
        };
    });
    
    $('#f-select').on('change', function(){
        for (i in NamesLat[vCount]) {
            switch($(this).val()){
                case NamesLat[vCount][i]:
                    $('#color_factura').css('display','none');
                    $('#factura-label').css('display','none');
                    $('#color_factura').empty();
                    $('#factura-label').css('display','block');
                    for (j in Colors2[vCount][i]) {
                        $('#color_factura').css('display','block');
                        $('#color_factura').append('<span style="background-image:url(../../img/'+Types2[vCount]+'/'+NamesLat[vCount][i]+'/'+Colors2[vCount][i][j]+'.jpg)" class="'+Colors2[vCount][i][j]+'"></span>');                        
                    };
                    $('#color_factura').append('<div class="cl"></div>');
                    vName = NamesLat[vCount][i];
                break;
                case "nothing":
                    $('#color_factura').empty();
                    $('#color_factura').css('display','none');
                    $('#factura-label').css('display','none');
                break;
            };
        };
        
        $("#input_color .input_color_ceiling span").click(function(){
            vColor = $(this).attr("class");
            $('#ceiling').css('background-image','url("../../img/'+vType+'/'+vName+'/'+vColor+'.jpg")');
            $('#ceiling').css('opacity','1');
            $('#factura').css('opacity','1');
            $('#factura').css('background-image','url("../../img/'+vType+'/'+vName+'/'+vColor+'.jpg")');
            $('#area-0').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-1').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-2').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-3').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-4').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-5').data('maphilight', data).trigger('alwaysOn.maphilight');
            $('#area-6').data('maphilight', data).trigger('alwaysOn.maphilight');
        });
        
    });
    
    $('#calculate').on('click', function(){

    });
    
});

    
    
