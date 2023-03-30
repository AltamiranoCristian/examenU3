function capD(tipo){
    let contenedor=document.createElement("div");
    let ancho=document.createElement("input");
    ancho.placeholder="ancho";
    let largo=document.createElement("input");
    largo.placeholder="largo";
    let c=document.createElement("input");
    c.type="button";
    c.value="Calcular area";
    c.addEventListener('click',(e)=>{
        e.preventDefault();
        let area=parseFloat(largo.value)*parseFloat(ancho.value);
        console.log(area);
    let total=area*12.5;
    contenedor.innerHTML="<p>area= "+area+"</p><br><p>total de ladrillos</p>"+total+"<p>tipo:</p>"+tipo;
    });
    let contenido=document.createTextNode("tipo de ladrillo: "+tipo);
    contenedor.appendChild(ancho);
    contenedor.appendChild(largo);
    contenedor.appendChild(contenido);
    contenedor.appendChild(c)
    document.body.appendChild(contenedor);
}

/* function calculaArea(l,a,t){
    let area=parseFloat(l)*parseFloat(a);
    let total=area/12.5;
    let contenedor=document.createElement("div");
    let lad=document.createTextNode(total);
    contenedor.appendChild(lad);
    document.body.appendChild(contenedor);
} */

/* altamirano Andrade Cristian Emir */