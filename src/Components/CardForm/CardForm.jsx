import React, {useState} from 'react'
import InputURL from '../InputURL/InputURL'
import TextareaLayout from '../TextareaLayout/TextareaLayout'

function CardForm(props) {

  const [type, setType] = useState('InputURL')

  return (
    <>
      <div className="col-6 m-auto card p-3">
        <button onClick={() => setType('InputURL')} type="button" className="btn btn-primary btn mb-2">Валидотор по ссылке</button>
        <button onClick={() => setType('TextareaLayout')} type="button" className="btn btn-primary btn">Валидотор по разметке</button>
      </div>

      {type === 'InputURL' ? <InputURL analyzer={props.analyzer}/> : <TextareaLayout />}
      {console.log(type)}
    </>
  );
}

export default CardForm;