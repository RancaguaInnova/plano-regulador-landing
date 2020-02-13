import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
const Poll: React.FC = () => {
    return (
        <section className='mb-4'>
            <h3 className='text-center font-weight-bold'>ENCUESTA</h3>
            <div className='row'>
                <div className='col-12'>
                    <p className='text-justify'>
                        Si estás interesado en darnos tu opinión sobre la imagen objetivo te pedimos respondas la
                        siguiente encuesta
                    </p>
                    <p className='text-justify'>
                        <b>Nota</b>: sólo se considerarán válidas las respuestas de personas mayores de 18 años con
                        domicilio electoral en la comuna de rancagua (Según registro del SERVEL)
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='offset-md-2 col-md-8 col-xs-12'>
                    <form className='poll-form'>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlInput1'>1. Nombre</label>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleFormControlInput1'
                                placeholder='Escribe tu nombre'
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlInput1'>2. RUT</label>
                            <input
                                type='text'
                                className='form-control'
                                id='exampleFormControlInput1'
                                placeholder='11111111-1'
                            />
                            <small className='form-text text-muted'>
                                Solicitamos el rut para verificar domicilio electoral.
                            </small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlSelect1'>
                                3. ¿Según usted cuál es el carácter o imagen que debe adquirir el Eje Estado?
                            </label>
                            <select className='form-control' id='exampleFormControlSelect1'>
                                <option>Seleccione</option>
                                <option>Comercial</option>
                                <option>Residencial</option>
                                <option>Patrimonial</option>
                                <option>Todas</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlSelect2'>
                                4. ¿Cuáles son los elementos que usted protegería del Eje Estado?
                            </label>
                            <select multiple className='form-control' id='exampleFormControlSelect2'>
                                <option>Su fachada continua</option>
                                <option>Su edificación máxima existente hoy es decir 3 pisos (10 mt.)</option>
                                <option>Su heterogeneidad constructiva</option>
                                <option>Edificios nuevos como el mall</option>
                                <option>Otros (señale)</option>
                            </select>
                            <small className='form-text text-muted'>puede marcar más de una alternativa</small>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlSelect1'>
                                5. ¿A usted le gustaría que el Eje Estado adquiera un carácter de boulevard tal cual
                                como está ocurriendo hoy en Paseo Estado entre las Ibieta y O’Carrol?
                            </label>
                            <select className='form-control' id='exampleFormControlSelect1'>
                                <option>Seleccione</option>
                                <option>Sí</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlSelect1'>
                                6. A su criterio, ¿Como le gustaría que el Eje Estado fuera en el futuro? Referirse
                                tanto para los aspectos del Espacio público y aspectos de edificación
                            </label>
                        </div>
                        <div className='form-group'>
                            <div className='form-group'>
                                <label htmlFor='exampleFormControlTextarea1'>a) Espacio Público</label>
                                <textarea className='form-control' id='exampleFormControlTextarea1' rows={2} />
                                <small className='form-text text-muted'>
                                    colocar ideas de solo una palabra o una frase de no más de cinco palabras
                                </small>
                            </div>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='exampleFormControlTextarea1'>Edificación (construcción)</label>
                            <textarea className='form-control' id='exampleFormControlTextarea1' rows={2} />
                            <small className='form-text text-muted'>
                                colocar ideas de solo una palabra o una frase de no más de cinco palabras
                            </small>
                        </div>
                        <div>
                            <button className='btn btn-primary btn-block'>ENVIAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Poll
