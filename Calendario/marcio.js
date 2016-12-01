function newData(id){
	var teste = document.getElementById(id).value;
	teste = teste.toString();
	var data = prompt("Insira Data : ");
	document.getElementById("text").innerHTML += "<table><tr><th class='data'>"+teste+"</th><th>"+data+"</th></tr></table>";
	
	
	document.getElementById(id).className = "data";
   
}
function calendarioimpar(mes){
var nvar = mes.toString();
var d = new Date(""+nvar+", 1, 2017 ");
var newd = d.toString();
newd = newd.substring(0,3);
var teste = 0;
if(newd == "Fri"){
	for(var i=5;i<=35; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;

		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
			var html = "<table><tr id='numeroferiado'><td class='feriado'><label class='feriado'>1</label></td><th><label>Confraterniza&ccedil;&atilde;o Internacional</label></th></tr></table>";
			document.getElementById("divferiado").innerHTML = html;
		} 
	} 
	}
}
else if(newd == "Sun"){
	for(var i=7;i<=37; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
			var html = "<table><tr id='numeroferiado'><td class='feriado'><label class='feriado'>1</label></td></div><th><label>Confraterniza&ccedil;&atilde;o Internacional</label></th></tr></table>";
			document.getElementById("divferiado").innerHTML = html;
		} 
	}
	}
}
else if(newd == "Sat"){
	for(var i=6;i<=36; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	} 
	}
}
else if(newd == "Thu"){
	for(var i=4;i<=34; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	} 
	}
}
else if(newd == "Wed"){
	for(var i=3;i<=33; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	} 
	}
}
else if(newd == "Tue"){
	for(var i=3;i<=33; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
	}
}
else if(newd == "Mon"){
	for(var i=3;i<=33; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(nvar == "1"){
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	} 
	}
}
}

function calendariopar(mes){
	var nvar = mes.toString();
var d = new Date(""+nvar+", 1, 2017 ");

var newd = d.toString();
newd = newd.substring(0,3);
var teste = 0;
if(newd == "Fri"){
	for(var i=5;i<=34; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
else if(newd == "Sun"){
	for(var i=7;i<=36; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
else if(newd == "Sat"){
	for(var i=6;i<=35; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
else if(newd == "Thu"){
	for(var i=4;i<=33; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
else if(newd == "Wed"){
	for(var i=3;i<=32; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
else if(newd == "Tue"){
	for(var i=2;i<=31; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
else if(newd == "Mon"){
	for(var i=1;i<=30; i++){
		var dia = "j" + i.toString();
		dia = dia.toString();
		document.getElementById(dia).innerHTML = teste+1;
		document.getElementById(dia).value = teste+1;
		teste++;
		if(document.getElementById(dia).value == 1){
			document.getElementById(dia).className="feriado";
		} 
	}
}
}