import React, {useState} from 'react'

function TextareaLayout(props) {

  const [layoutText, setLayoutText] = useState('')

  const onSubmit = (e) => {
    e.preventDefault();
  };

  
  return (
    <div className="col-6 m-auto card p-3">
      <form onSubmit={onSubmit}>
        <textarea className="form-control m-auto my-2" cols="30" rows="10" placeholder="Введите разметку" onChange={(e) => setLayoutText(e.target.value)}>
        
        </textarea>
        {console.log(layoutText)}
        <button type="submit" className="btn btn-info text-white" >
          Проанализировать
        </button>
      </form>
    </div>
  );
}

export default TextareaLayout;