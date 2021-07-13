import React, { useState } from "react";
import styles from './styles.module.scss'
// import Radium from "radium";

// import ValidObj from '../../validator'

let obj = { a: [1], b: [2, 3, "3wea"], c: [3] };
// const styles = {
//   tdSpan: {
//       "::after": {
//       border: '5px solid #000',
//       content: ", "
//     }
//   }
// }

function Result() {
  const [data] = useState(obj);

  return (
    <table className="col-6 m-auto card p-3">
      {Object.entries(data).map((element) => {
        console.log(element)
        return (
          <>
            <tr
              key={Date.now()}
              style={{
                listStyleType: "none",
                fontWeight: 700,
                padding: "0.25em",
              }}
            >
              <td>{element[0]}</td>
              <td style={{width: '100%'}}>
              {element[1].map((element1) => {
                // console.log(element1);
                return (<span className={styles.tdSpan}>{element1}</span>);
              })}
              </td>
              
            </tr>
          </>
        );
      })}
    </table>
  );
}

export default Result;
