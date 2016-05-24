jQuery(document).ready(function () {


    // Массив вертикальных жалюзи
    var fVertical_01 = {
        "01": "Кельн",
        "02": "Лайн",
        "03": "Мальта",
        "04": "Сеул",
        "05": "Диско"
    };

    var list = [
        {'pk': '01', 'name': 'Кельн', 'cat': 'fCat_01'},
        {'pk': '02', 'name': 'Лайн', 'cat': 'fCat_01'},
        {'pk': '03', 'name': 'Мальта', 'cat': 'fCat_02'}
    ];
    
    // Массив горизонтальных жалюзи
    var fHorizontal = {
        "key_1": "test 1",
        "key_2": "test 2"
    };
    
    
    
    $("#t-select").on('change', function(){
        $('select#f-select').empty();
        switch($(this).val()){
            case 'vertical':
                
                for (i in list) {
                    $('#f-select').append('<option class="'+list[i].cat+'" value="'+list[i].pk+'">'+list[i].name+'</option>');
                };
                
 
            break;
            case 'horizontal': 
                $.each(fHorizontal, function(value, key) {
                    $('select#f-select').append($(new Option(key, value)));
                });
            break;
        };
    });
    
    
    
    

});