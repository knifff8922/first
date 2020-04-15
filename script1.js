/*
document.getElementById("f1")
f1.onmouseover = function (){
	f1.style.border = 'solid 4px #0061a1';
}
f1.onmouseout = function (){
	f1.style.border = 'none';
}*/

    function zero_first_format(value)
    {
        if (value < 10)
        {
            value='0'+value;
        }
        return value;
    }

    /* функция получения текущей даты и времени */
    function date_time()
    {
        var current_datetime = new Date();
        var day = zero_first_format(current_datetime.getDate());
        var month = zero_first_format(current_datetime.getMonth()+1);
        var year = current_datetime.getFullYear();
        var hours = zero_first_format(current_datetime.getHours());
        var minutes = zero_first_format(current_datetime.getMinutes());
        var seconds = zero_first_format(current_datetime.getSeconds());

        return day+"."+month+"."+year+" "+hours+":"+minutes+":"+seconds;
    }

    /* выводим текущую дату и время на сайт в блок с id "current_date_time_block" */
    document.getElementById('date').innerHTML = date_time();



    document.getElementById("option1")
    document.getElementById("option2")
    document.getElementById("option3")
    document.getElementById("option4")
    document.getElementById("russ")
    document.getElementById("msc")
    document.getElementById("uln")
    document.getElementById("wrd")

    document.getElementById("option1").onclick = function (){
    	document.getElementById("russ").style.display = 'flex';
    	document.getElementById("msc").style.display = 'none';
    	document.getElementById("uln").style.display = 'none';
    	document.getElementById("wrd").style.display = 'none';
    }
    document.getElementById("option2").onclick = function (){
    	document.getElementById("russ").style.display = 'none';
    	document.getElementById("msc").style.display = 'flex';
    	document.getElementById("uln").style.display = 'none';
    	document.getElementById("wrd").style.display = 'none';
    }
    document.getElementById("option3").onclick = function (){
    	document.getElementById("russ").style.display = 'none';
    	document.getElementById("msc").style.display = 'none';
    	document.getElementById("uln").style.display = 'flex';
    	document.getElementById("wrd").style.display = 'none';
    }
    document.getElementById("option4").onclick = function (){
    	document.getElementById("russ").style.display = 'none';
    	document.getElementById("msc").style.display = 'none';
    	document.getElementById("uln").style.display = 'none';
    	document.getElementById("wrd").style.display = 'flex';
    }