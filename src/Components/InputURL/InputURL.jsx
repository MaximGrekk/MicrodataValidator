import React, { useState } from "react";

function InputURL(props) {
  const [url, setURL] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    props.analyzer(url);
  };

  return (
    <div className="col-6 m-auto card p-3">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="form-control m-auto my-2"
          style={{ maxWidth: 400 }}
          placeholder="Введите url страницы"
          onChange={(e) => setURL(e.target.value)}
        />
        <button type="submit" className="btn btn-info text-white">
          Проанализировать
        </button>
      </form>
    </div>
  );
}

export default InputURL;