import React, { useState, useEffect } from 'react'

const defaulImageSrc = '/img/srcyugi.jpg'

const initialFieldValues = {
    _id: '',
    nombre: '',
    tipo_de_carta: '',
    atributo: '',
    atributo_ico: '',
    tipo: '',
    tipo_magica_trampa: '',
    nivel_rango: '',
    nivel_rango_ico: '',
    magica_tampa_ico: '',
    escala: 0,
    rareza: '',
    limitacion: '',
    imageSrc: defaulImageSrc,
    image: null,
    secure_url: '',
    atk: '',
    atk_ico:'',
    def: '',
    def_ico:'',
    materiales: '',
    descripcion: '',
    caja: '',
    estructura: '',
    selection_box: '',
    lote: '',
    fecha_lanzamiento: ''
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
    formData.append('_id', values._id)
    formData.append('nombre', values.nombre)
    formData.append('tipo_de_carta', values.tipo_de_carta)
    formData.append('atributo', values.atributo)
    formData.append('atributo_ico', values.atributo_ico )
    formData.append('tipo', values.tipo)
    formData.append('tipo_magica_trampa', values.tipo_magica_trampa)
    formData.append('nivel_rango', values.nivel_rango)
    formData.append('nivel_rango_ico', values.nivel_rango_ico)
    formData.append('magica_trampa_ico', values.magica_trampa_ico)
    formData.append('escala', values.escala)
    formData.append('rareza', values.rareza)
    formData.append('limitacion', values.limitacion)
    formData.append('image', values.image)
    formData.append('image.secure_url', values.secure_url)
    formData.append('atk', values.atk)
    formData.append('atk_ico', values.atk_ico)
    formData.append('def', values.def)
    formData.append('def_ico', values.def_ico)
    formData.append('materiales', values.materiales)
    formData.append('descripcion', values.descripcion)
    formData.append('caja', values.caja)
    formData.append('estructura', values.estructura)
    formData.append('selection_box', values.selection_box)
    formData.append('lote', values.lote)
    formData.append('fecha_lanzamiento', values.fecha_lanzamiento)
    addOrEdit(formData,resetForm)    

    }
}

const applyErrorClass = field => ((field in errors && errors[field]===false )?' invalid-field':'' )  // ESTO {'form-control-file'+applyErrorClass('imageSrc')}  DEBE IR EN LA CLASE


  return (
<>

    <div className='container text-center'>
        <h4> A??adir carta </h4>
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
                        <label>Tipo de carta</label>
                        <select className='form-control' placeholder='Tipo de carta' name='tipo_de_carta' value={values.tipo_de_carta} onChange={handleInputChange} >
                        <option value=""></option>
                                        <option value="Normal">Normal</option>
                                        <option value="Ritual">Rital</option>
                                        <option value="Sincron??a">Sincron??a</option>
                                        <option value="P??ndulo">P??ndulo</option>
                                        <option value="P??ndulo normal">P??ndulo Normal</option>
                                        <option value="Efecto">Efecto</option>
                                        <option value="Fusion">Fusi??n</option>
                                        <option value="Xyz">Xyz</option>
                                        <option value="Link">Link</option>
                                        
                        </select>
                        <label>Atributo</label>
                        <select  className='form-control' placeholder='atributo' name='atributo' value={values.atributo} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="LUZ">LUZ</option>
                                        <option value="OSCURIDAD">OSCURIDAD</option>
                                        <option value="AGUA">AGUA</option>
                                        <option value="FUEGO">FUEGO</option>
                                        <option value="TIERRA">TIERRA</option>
                                        <option value="VIENTO">VIENTO</option>
                                        <option value="DIVINIDAD">DIVINIDAD</option>
                                        <option value="M??GICA">M??GICA</option>
                                        <option value="TRAMPA">TRAMPA</option>
                            
                        </select>

                        <label>Atributo ico</label>
                        <select  className='form-control' placeholder='atributo icono' name='atributo_ico' value={values.atributo_ico} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-d_ssxcag.png">LUZ ico </option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-tr_zdjtkd.png">OSCURIDAD ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-a_bgb8gi.png">AGUA ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-f_x0zolt.png">FUEGO ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-t_bfdbhz.png">TIERRA ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-v_tlniay.png">VIENTO ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-d_ssxcag.png">DIVINIDAD ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-m_gojjne.png">MAGICA ico</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/q_auto/v1663818431/iconos%20dlp/at-tr_zdjtkd.png">TRAMPA ico</option>
                            
                        </select>
                        <label>Tipo</label>
                        <select  className='form-control' placeholder='tipo' name='tipo' value={values.tipo} onChange={handleInputChange} > 

                                        <option value=""></option>
                                        <option value="Dragon">Drag??n</option>
                                        <option value="Zombi">Zombi</option>
                                        <option value="Demonio">Demonio</option>
                                        <option value="Piro">Piro</option>
                                        <option value="Serpiente marina">Serpiente Marina</option>
                                        <option value="Roca">Roca</option>
                                        <option value="Maquina">M??quina</option>
                                        <option value="Pez">Pez</option>
                                        <option value="Dinosaurio">Dinosaurio</option>
                                        <option value="Insecto">Insecto</option>
                                        <option value="Bestia">Bestia</option>
                                        <option value="Guerrero-bestia">Guerrero-Bestia</option>
                                        <option value="Planta">Planta</option>
                                        <option value="Aqua">Aqua</option>
                                        <option value="Guerrero">Guerrero</option>
                                        <option value="Bestia alada">Bestia Alada</option>
                                        <option value="Hada">Hada</option>
                                        <option value="Lanzador de conjuros">Lanzador de Conjuros</option>
                                        <option value="Trueno">Trueno</option>
                                        <option value="Reptil">Reptil</option>
                                        <option value="Psiquico">Ps??quico</option>
                                        <option value="Wyrm">Wyrm</option>
                                        <option value="Ciberso">Ciberso</option>
                                        
                        
                        </select>
                        <label>Tipo de m??gica o trampa</label>
                        <select  className='form-control' placeholder='tipo magica o trampa' name='tipo_magica_trampa' value={values.tipo_magica_trampa} onChange={handleInputChange} >
                            
                            <option value=""></option>
                            <option value="no">no aplica</option>
                            <option value="Normal">Normal</option>
                                        <option value="De campo">De campo</option>
                                        <option value="De equipo">De equipo</option>
                                        <option value="Continua">Continua</option>
                                        <option value="De juego r??pido">De juego rapido</option>
                                        <option value="De ritual">De ritual</option>
                                        <option value="De contraefecto">De contraefecto</option>
                                        <option value="Continua">Continua</option>
                
            </select>


                        <label>Nivel</label>
                        <input  className='form-control' placeholder='nivel_rango' name='nivel_rango' value={values.nivel_rango} onChange={handleInputChange} />
                        <label>Nivel rango magica trampa Ico</label>
                        <select  className='form-control' placeholder='nivel rango ico' name='nivel_rango_ico' value={values.nivel_rango_ico} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/nivel_monstruo_mq6vmx.webp">NIVEL</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663823033/iconos%20dlp/rango_xyz_wepehq.webp">RANGO</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/continua_wh3pfj.webp">CONTINUA</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/normal_vpey0j.webp">NORMAL</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_campo_qoxyag.webp">DE CAMPO</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/contraefecto_pxkz7z.webp">CONTRAEFECTO</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663822936/iconos%20dlp/de_juego_rapido_mmsikz.webp">DE JUEGO RAPIDO</option>
                            
                        </select>    

                        <label>Escala</label>
                        <input  className='form-control' placeholder='escala' name='escala' value={values.escala} onChange={handleInputChange} />
                        <input  className='form-control' placeholder='rareza' name='rareza' value={values.rareza} onChange={handleInputChange} />
                       
                        <input  className='form-control' placeholder='limitacion' name='limitacion' value={values.limitacion} onChange={handleInputChange} />
                        <input className='form-control' placeholder='atk' name='atk' value={values.atk} onChange={handleInputChange} />
                        <label>ATK ico</label>
                        <select  className='form-control' placeholder='ataque icono' name='atk_ico' value={values.atk_ico} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663827756/iconos%20dlp/Icono_ataque_u03lyx.gif">ATAQUE ico</option>
                            
                        </select>
                        
                        <input className='form-control' placeholder='def' name='def' value={values.def} onChange={handleInputChange} />
                        <label>Def ico</label>
                        <select  className='form-control' placeholder='defensa icono' name='def_ico' value={values.def_ico} onChange={handleInputChange} >
                            
                                        <option value=""></option>
                                        <option value="no">no aplica</option>
                                        <option value="https://res.cloudinary.com/dqofcbeaq/image/upload/v1663827756/iconos%20dlp/Icono_defensa_mh8fsj.gif">DEFENSA ico</option>
                            
                        </select>    

                        <input className='form-control' placeholder='materiales' name='materiales' value={values.materiales} onChange={handleInputChange} />
                        <input className='form-control' placeholder='descripcion' name='descripcion' value={values.descripcion} onChange={handleInputChange} />
                        <label>Caja</label>
                        <select  className='form-control' placeholder='caja' name='caja' value={values.caja} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Link revolution">Link revolution</option>
                        <option value="Stars of syncro">Stars of syncro</option>
                        <option value="Shining sunrise">Shining sunrise</option>
                        <option value="Heart of xyz">Heart of xyz</option>
                        <option value="Cross dimension">Cross dimension</option>
                        <option value="Energy of gigarays">Energy of gigarays</option>
                        <option value="Maximum gustav">Maximum gustav</option>
                        <option value="Phantom of rebellion">Phantom of rebellion</option>
                        <option value="Fantastic arc">Fantastic arc</option>
                        <option value="Dark dimension">Dark dimension</option>

                        </select>
                        <label>Estructura</label>
                        <select  className='form-control' placeholder='estructura' name='estructura' value={values.estructura} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Cyberse code">Cyberse code</option>
                        <option value="Ruddy rose burning">Ruddy rose burning</option>
                        <option value="Brave hope">Brave hope</option>
                        <option value="Heart of xyz">Tellarknight advent</option>
                        <option value="Cross dimension">Sword of paladin</option>
                        

                        </select>

                        <label>Selection box</label>
                        <select  className='form-control' placeholder='selection box' name='selection_box' value={values.selection_box} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Selection box super mini vol.02">Selection box super mini vol.02</option>
                        <option value="Selection box mini vol.04">Selection box mini vol.04</option>
                        <option value="Selection box vol.05">Selection box vol.05</option>
                        <option value="Selection box vol.04">Selection box vol.04</option>

                        </select>
                        <label>Lote</label>
                        <select  className='form-control' placeholder='lote' name='lote' value={values.lote} onChange={handleInputChange} > 

                        <option value=""></option>
                        <option value="Lote especial">Lote especial</option>

                        </select>

                        <input className='form-control' placeholder='Fecha de lanzamiento' name='fecha_lanzamiento' value={values.fecha_lanzamiento} onChange={handleInputChange} />

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
