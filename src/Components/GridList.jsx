import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProductStates } from "./Context/Context";
import styles from './GridList.module.css';
import axios from 'axios';

const GridList = ({column_names, data, backend_url, form_url}) => {

  const navigate = useNavigate();
  const {state} = useProductStates();
  const url = state.backend_url
  const [recordList, setRecordList] = useState(data);


  useEffect(() => {
    setRecordList(data)
  }, [data]);

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

  const handleDeleteRecord = async (event, id) => {
    event.stopPropagation();
    if(window.confirm("¿Está seguro que desea eliminar el registro?")) {
      await axios.delete(url + backend_url + '/borrar/' + id)
      .then(() => updateListData(id))
      .catch(err => console.log(err))
    }
  };

  const updateListData = (delete_id) => {
    setRecordList((recordList) => recordList.filter((item) => item.id !== delete_id));
  }

  const handleClick = (event, value) => {
    event.stopPropagation();
    console.log('Entro al update')
    navigate(form_url + value);
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
            {recordList && recordList.map((record) => {
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