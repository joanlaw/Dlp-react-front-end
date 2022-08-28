import React, { useState, useEffect } from 'react'

const defaulImageSrc = '/img/srcyugi.jpg'

const initialFieldValues = {
    id: 0,
    nombre: '',
    tipo_de_carta: '',
    atributo: '',
    tipo: '',
    nivel_rango: 0,
    escala: 0,
    rareza: '',
    limitacion: 0,
    imageSrc: defaulImageSrc,
    image: null,
    secure_url: ''
}

export default function Card(props) {


//Props
//const {addOrEdit, recordForEdit} = props
const {addOrEdit } = props 


//Use state de los valores
const [values, setValues] = useState(initialFieldValues)
const [errors, setErrors] = useState({})

//useEffect (()=>{
 //   if (recordForEdit!=null)
 //       setValues(recordForEdit);
//},[recordForEdit])

const handleInputChange = e => {
    const {name, value} = e.target;

    setValues({
        ...values,
        [name]:value
    })
    
}

const showPreview = e => {
    if(e.target.files && e.target.files[0]){
        let image = e.target.files[0];
        const reader = new FileReader();
        reader.onload = x=>{
            setValues({
                ...values,
                image,
                imageSrc : x.target.result
            })
        }
        reader.readAsDataURL(image)
    }
    else{
        setValues({
            ...values,
            image: null,
            imageSrc : defaulImageSrc
        })
    }
}

const validate = ()=>{
    let temp = {}
    temp.nombre = values.name===''?false:true;
    temp.imageSrc = values.imageSrc===defaulImageSrc?false:true;
    setErrors(temp)
    return Object.values(temp).every(x => x===true)
}

const resetForm = ()=>{
    setValues(initialFieldValues)
    document.getElementById('image-uploader').value = null;
}

const handleFormSubmit = e =>{
    e.preventDefault()
    if(validate()){
    const formData = new FormData()
    //formData.append('_id', values._id)
    formData.append('nombre', values.nombre)
    formData.append('tipo_de_carta', values.tipo_de_carta)
    formData.append('atributo', values.atributo)
    formData.append('tipo', values.tipo)
    formData.append('nivel_rango', values.nivel_rango)
    formData.append('escala', values.escala)
    formData.append('rareza', values.rareza)
    formData.append('limitacion', values.limitacion)
    formData.append('image', values.image)
    formData.append('image.secure_url', values.secure_url)
    addOrEdit(formData,resetForm)    

    }
}

const applyErrorClass = field => ((field in errors && errors[field]===false )?' invalid-field':'' )  // ESTO {'form-control-file'+applyErrorClass('imageSrc')}  DEBE IR EN LA CLASE


  return (
<>

    <div className='container text-center'>
        <h4> Añadir carta </h4>
    </div>
    <form autoComplete='off ' noValidate onSubmit={handleFormSubmit}>
            <div className='card'>
                <img src={values.imageSrc} className='card-img-top' />
                <div className='card-body'> 
                    <div className='form-group'>
                        <input type='file' accept='image/*' name='image' className={'form-control-file'+applyErrorClass('imageSrc')} onChange={showPreview}  id='image-uploader' />
                    </div>
                    <div className='form-group'>
                        <input className={'form-control'+applyErrorClass('nombre')} placeholder='Ingrese nombre de carta' name='nombre' value={values.nombre} onChange={handleInputChange} />
                        <select className='form-control' placeholder='Tipo de carta' name='tipo_de_carta' value={values.tipo_de_carta} onChange={handleInputChange} >
                        <option value=""></option>
                                        <option value="monstruo normal">Monstruo Normal</option>
                                        <option value="ritual">Rital</option>
                                        <option value="sincronia">Sincronía</option>
                                        <option value="monstruo de péndulo">Monstruo de Péndulo</option>
                                        <option value="monstruo de péndulo normal">Monstruo de Péndulo Normal</option>
                                        <option value="monstruo de efecto">Monstruo de Efecto</option>
                                        <option value="fusion">Fusión</option>
                                        <option value="xyz">Xyz</option>
                                        <option value="link">Link</option>
                                        <option value="mágica">Mágica</option>
                                        <option value="trampa">Trampa</option>
                        </select>
                        <select  className='form-control' placeholder='atributo' name='atributo' value={values.atributo} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="luz">LUZ</option>
                                        <option value="oscuridad">OSCURIDAD</option>
                                        <option value="agua">AGUA</option>
                                        <option value="fuego">FUEGO</option>
                                        <option value="tierra">TIERRA</option>
                                        <option value="viento">VIENTO</option>
                                        <option value="divinidad">DIVINIDAD</option>
                            
                        </select>
                        <select  className='form-control' placeholder='tipo' name='tipo' value={values.tipo} onChange={handleInputChange} > 

                                        <option value=""></option>
                                        <option value="dragon">Dragón</option>
                                        <option value="zombi">Zombi</option>
                                        <option value="demonio">Demonio</option>
                                        <option value="piro">Piro</option>
                                        <option value="serpiente marina">Serpiente Marina</option>
                                        <option value="roca">Roca</option>
                                        <option value="maquina">Máquina</option>
                                        <option value="pez">Pez</option>
                                        <option value="dinosaurio">Dinosaurio</option>
                                        <option value="insecto">Insecto</option>
                                        <option value="bestia">Bestia</option>
                                        <option value="guerrero-bestia">Guerrero-Bestia</option>
                                        <option value="planta">Planta</option>
                                        <option value="aqua">Aqua</option>
                                        <option value="guerrero">Guerrero</option>
                                        <option value="bestia alada">Bestia Alada</option>
                                        <option value="hada">Hada</option>
                                        <option value="lanzador de conjuros">Lanzador de Conjuros</option>
                                        <option value="trueno">Trueno</option>
                                        <option value="reptil">Reptil</option>
                                        <option value="psiquico">Psíquico</option>
                                        <option value="wyrm">Wyrm</option>
                                        <option value="ciberso">Ciberso</option>
                                        <option value="Normal">Normal</option>
                                        <option value="de campo">De campo</option>
                                        <option value="de equipo">De equipo</option>
                                        <option value="continua">Continua</option>
                                        <option value="de juego rápido">De juego rapido</option>
                                        <option value="de ritual">De ritual</option>
                                        <option value="de contraefecto">De contraefecto</option>
                                        <option value="continua">Continua</option>
                        
                        </select>
                        <label>Nivel</label>
                        <input  className='form-control' placeholder='nivel_rango' name='nivel_rango' value={values.nivel_rango} onChange={handleInputChange} />
                        <label>Escala</label>
                        <input  className='form-control' placeholder='escala' name='escala' value={values.escala} onChange={handleInputChange} />
                        <input  className='form-control' placeholder='rareza' name='rareza' value={values.rareza} onChange={handleInputChange} />
                        <label>Limitación</label>
                        <input  className='form-control' placeholder='limitacion' name='limitacion' value={values.limitacion} onChange={handleInputChange} />
                    </div>
                    <div className='form-group text-center'>
                        <button type='submit' className='btn btn-light'> Enviar </button>
                    </div>
                </div>
            </div>

    </form>
</>
  )
}
