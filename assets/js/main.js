const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
  ];
  
  
  let hab;
  let min;
  let max;
  const buscar_btn = document.getElementById('buscar')
  const tot_pro = document.getElementById("tot_encontrados")
  const area_pro = document.querySelector(".propiedades")
  
  
  const inputs = () => {
    hab = parseInt(document.getElementById('hab').value)
    min = parseInt(document.getElementById('t_min').value)
    max = parseInt(document.getElementById('t_max').value)
  }
 /* mostrarpropiedades = función que muestras las propiedades, todas o la selección del usuario */ 
  const mostrarpropiedades = (propiedades) => {
    let repetir = ""
    for (let propiedad of propiedades) {
      repetir += `
  <div class="propiedad">
      <img class="img" src="${propiedad.src}" alt="">
    <section>
      <h5>${propiedad.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos : <strong>${propiedad.rooms}</strong></p>
        <p>Metros : <strong>${propiedad.m}</strong></p>
      </div>
      <p>${propiedad.description}</p>
      <button class="btn btn-warning">Ver</button>
    </section>
  </div>`
    }
    area_pro.innerHTML = repetir
  }
  
  tot_pro.textContent = propiedadesJSON.length;
  
  mostrarpropiedades(propiedadesJSON);
  /* buscar_btn : función o acciónes del boton buscar. valida el ingreso de los campos y retorna los valores si el filtro es bueno */
  buscar_btn.addEventListener("click", () => {
    inputs()
    if (isNaN(hab) || isNaN(min) || isNaN(max)) {
      alert("Aun hay campos nulos, debe llenar todos.")
    } else if (hab < 1 || max < 1) {
      alert(`La Cantidad de Hab. o el tamaño máximo, no puede ser "0"`)
    } else if (min > max) {
      alert(`El tamaño mínimo, debe ser menor que el tamaño máximo`)
    } else if (min < 0) {
      alert(`El tamaño no debe ser <= 0`)
    } else {
      const filtro_de_propiedades = propiedadesJSON.filter(propiedad => {
        return (
          propiedad.rooms === hab &&
          propiedad.m >= min &&
          propiedad.m <= max
        );
      });
      mostrarpropiedades(filtro_de_propiedades);
      tot_pro.innerHTML = filtro_de_propiedades.length
    }
  })