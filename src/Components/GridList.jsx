import React, { useState } from 'react';
import { useProductStates } from "./Context/Context";
import styles from './GridList.module.css';
import axios from 'axios';

const GridList = ({column_names, data, backend_url}) => {

  const {state} = useProductStates();
  const url = state.backend_url

  function get_cell(record, field, key) {
    if(field.type === 'string') {
      return <td key={key} className={styles['table-cell-body']}>{record[field.name]}</td>
    }
    else if(field.type === 'image') {
      return <td key={key}  className={`${styles['table-cell-body']} ${styles['image-field']}`}><img style={{height: 30, width: 30}} src={record[field.name]} alt="" /></td>
    }
    else if(field.type === 'number') {
      return <td key={key}  className={`${styles['table-cell-body']} ${styles['number-field']}`}>{record[field.name]}</td>
    }
  }

  const handleDeleteRecord = (event, id) => {
    if(window.confirm("¿Está seguro que desea eliminar el registro?")) {
      alert(url + backend_url + '/borrar/' + id)
      axios.delete(url + backend_url + '/borrar/' + id)
      .then(res => console.log(res))
      .catch(err => console.log(err))
      event.stopPropagation();
    }
  };

  const handleClick = (event, value) => {
    console.log('Button clicked ' + value);
    console.log(column_names);
    console.log(data);
    console.log(data.filter((x) => x.id == value));
    event.stopPropagation();
  };

return (  
  <div className={styles['grid-list']}>
    <table className={styles['table-root']}>
        <thead className={styles['table-head']}>
            <tr className={styles['table-row']}>
                {column_names.map((column_name, key) => {
                  return (
                    <th key={key} className={styles['table-cell-head']}>{column_name.description}</th>
                  )
                })}
                <th className={styles['table-cell-head']}>&nbsp;</th>
            </tr>
        </thead>
        <tbody className={styles['table-body']}>
            {data.map((record) => {
                return (
                    <tr className={styles['table-row']} key={record.id} onClick={(event) => handleClick(event, record.id)}>
                      {
                        column_names.map((line, key) => {
                          return (
                            get_cell(record, line, key)
                          )
                        })
                      }
                      <td className={styles['table-cell-body']}>
                        <button className={styles['form-button']} onClick={(event) => handleDeleteRecord(event, record.id)}>Eliminar</button>
                      </td>
                    </tr>
                )
            })}
        </tbody>
    </table>
  </div>
  )
}

export default GridList