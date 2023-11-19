

import React, { useState } from 'react';
import styles from './GridList.module.css';

const GridList = ({column_names, data}) => {

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

  const handleDeleteRecord = (id) => {
    if(window.confirm("¿Está seguro que desea eliminar el registro?")) {
      alert('Mensaje de prueba ' + id)
      // axios.delete(url, {user})
      // .then(res => console.log(res))
      // .catch(err => console.log(err))
    }
  };

  function handleClick() {
    if(window.confirm("¿Está seguro que desea eliminar el registro?")) {
      alert('Mensaje de prueba')
      axios.delete(url, {user})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }

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
                    <tr className={styles['table-row']} key={record.id}>
                      {
                        column_names.map((line, key) => {
                          return (
                            get_cell(record, line, key)
                          )
                        })
                      }
                      <td className={styles['table-cell-body']}>
                        <button className={styles['form-button']} onClick={() => handleDeleteRecord(record.id)}>Eliminar</button>
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