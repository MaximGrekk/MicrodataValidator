import React from 'react'

function InputForm() {
  return (
    <div>
        <form>
            <input type="text" className="form-control m-auto my-2" style={{maxWidth: 400}} placeholder="Введите url страницы"/>
            <button className="btn btn-info text-white">Проанализировать</button>
        </form>
    </div>
  );
}

export default InputForm;