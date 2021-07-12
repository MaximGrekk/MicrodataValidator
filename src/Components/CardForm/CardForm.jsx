import React from 'react'
import InputURL from '../InputURL/InputURL'

function CardForm(props) {
  return (
    <div className="col-6 m-auto card p-3">
      <InputURL analyzer={props.analyzer}/>
    </div>
  );
}

export default CardForm;