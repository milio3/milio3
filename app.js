var listaIdCampos=["cod_nrbe_en","id_interno_pe","nomb_50","tdoc","id_ext_pe","pais_exp","fnacim","paisnac","paisres","nomb_n","tdoc_n","id_ext_pe_n","pais_exp_n","cod_pe","secuencial","fechamov","fechayer","ind21","ind22"];
var idCampoTexto="campoTexto";
var caracteresCampo=10;
var nombreArchivo="formulario.txt";
var secuencial=0;

function prepararFormulario(){
	for(var i=0;i< listaIdCampos.length;i++){
		document.getElementById(listaIdCampos[i]).maxLength=caracteresCampo;
	}
};

function anyadirLinea(){
	var nuevaLinea="";
  secuencial++;
	for(var i=0;i< listaIdCampos.length;i++){
		var valorCampo=document.getElementById(listaIdCampos[i]).value;
		while(valorCampo.length<50){
			valorCampo+=" ";
		}
		nuevaLinea+=valorCampo;
	}
	document.getElementById(idCampoTexto).disabled = false;
	document.getElementById(idCampoTexto).innerHTML+=nuevaLinea+"\n";
	document.getElementById(idCampoTexto).disabled = true;
};

function crearArchivo(){
		var blob = new Blob([document.getElementById(idCampoTexto).innerHTML],{type: "text/plain"});
		download(blob,nombreArchivo);
};

function download(blob,nombreArchivo) {
		var url = URL.createObjectURL(blob),
		div = document.createElement("div"),
		anch = document.createElement("a");

	document.body.appendChild(div);
	div.appendChild(anch);

	anch.innerHTML = "&nbsp;";
	div.style.width = "0";
	div.style.height = "0";
	anch.href = url;
	anch.download = nombreArchivo;

	var ev = new MouseEvent("click",{});
	anch.dispatchEvent(ev);
	document.body.removeChild(div);
};
