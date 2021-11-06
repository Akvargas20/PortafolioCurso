function imprimir(){
    console.log();
    const xhttp=new XMLHttpRequest();
    xhttp.open('GET','json/estudiantes.json', true);
    xhttp.send();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
           /*console.log(this.responseText);*/
           var datos=JSON.parse(this.responseText);
           console.log(datos);
           var datoshtml=` `;
           for(let items of datos){
               datoshtml += `
               <div class="ficha">
                    <div class="encabezado-ficha">
                    <div class="nombre-estudiante">
                        <h1>${items.nombre}</h1>
                    </div>
                    <div class="enlaces">
                        <a href="${items.github}"><i class='bx bxl-github bx-sm'></i>GitHub</a><br>
                        <a href="${items.neocities}"><i class='bx bx-git-repo-forked bx-sm'></i>Neocities</a><br>
                        <a href=""><i class='bx bxs-envelope bx-sm'></i>${items.email}</a><br>
                        <a href=""><i class='bx bxl-whatsapp-square bx-sm' ></i>${items.telefono}</a><br>
                    </div>
                    <div class="fotografia"><img src="${items.imagen}" alt="Foto Perfil"></div>
                    </div>
                    <div class="actividades-ficha">
                    <div class="titulo-actividades">
                        <h2>Actividades</h2>
                    </div>
                    <div class="prueba">
                    <div class="encabezado-actividades">
                        <div class="item">
                        <h3>Nro.</h3>
                        </div>
                        <div class="nombre">
                        <h3>Actividad</h3>
                        </div>
                        <div class="estadouiux">
                        <h3>% UI/UX</h3>
                        </div>
                        <div class="estadodev">
                        <h3> % Dev</h3>
                        </div>
                    </div>
                    <div class="estado-actividades">
                        <div class="nro">
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>
                        <p>5</p>
                        </div>
                        <div class="enlace">
                        <a href="${items.actividades[0].linkA}">${items.actividades[0].actividad}</a>
                        <a href="${items.actividades[1].linkA}">${items.actividades[1].actividad}</a>
                        <a href="${items.actividades[2].linkA}">${items.actividades[2].actividad}</a>
                        <a href="${items.actividades[3].linkA}">${items.actividades[3].actividad}</a>
                        <a href="${items.actividades[4].linkA}">${items.actividades[4].actividad}</a>
                        </div>
                        <div class="porcentajeuiux">
                        <p>${items.actividades[0].estadouiux}</p>
                        <p>${items.actividades[1].estadouiux}</p>
                        <p>${items.actividades[2].estadouiux}</p>
                        <p>${items.actividades[3].estadouiux}</p>
                        <p>${items.actividades[4].estadouiux}</p>
                        </div>
                        <div class="porcentajedev">
                        <p>${items.actividades[0].estadotecnico}</p>
                        <p>${items.actividades[1].estadotecnico}</p>
                        <p>${items.actividades[2].estadotecnico}</p>
                        <p>${items.actividades[3].estadotecnico}</p>
                        <p>${items.actividades[4].estadotecnico}</p>
                        </div>
                    </div>
                    </div>
                    </div>
                    <div class="estados-ficha">
                    <div class="estadohtml">
                        <p>${items.valoraciones.valhtml}<br>html</p>
                    </div>
                    <div class="estadocss">
                        <p>${items.valoraciones.valcss}<br>css</p>
                    </div>
                    <div class="estadojs">
                        <p>${items.valoraciones.valjs}<br>JS</p>
                    </div>
                    <div class="estadoui">
                    <p>${items.valoraciones.valui}<br>UI</p>
                    </div>
                    <div class="estadoux">
                        <p>${items.valoraciones.valux}<br>UX</p>
                    </div>
                    <div class="total">
                        <p>${items.calificacion} <br>Total</p>
                    </div>
                    </div>
                </div>
               `
           }
           var resultados = document.querySelector('#contenido');
            resultados.innerHTML=datoshtml;
        }
    }
}
imprimir();