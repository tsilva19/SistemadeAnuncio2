import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Alert } from 'reactstrap';
import "./index.css";

import {api} from '../../config';

import {Link} from 'react-router-dom';

export const Home = () => {

  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    type:'',
    mensagem: ''
  })

  const getAnuncios = async() =>{
    await axios.get(api)
    .then((response) =>{
      console.log(response.data.anuncios)
      setData(response.data.anuncios);
    })
    .catch(() =>{
      setStatus({
        type: 'error',
        mensagem: 'Erro: Tente mais tarde'
      });
    });
  }

  useEffect(() => {
    getAnuncios();
  }, []);

  return (
    <div>
      <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Anúncios</h1>
          </div>
          <div className="space">
            <Link to="/cadastrar-anuncio" className="btn btn-outline-success btn-sm">
              Cadastrar</Link>
          </div>
        </div>
        
        {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
       

        <Table hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th className="text-center">Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.titulo}</td>
                <td className="text-center">
                  <Link to={"/visualizar-anuncio/" + item.id}
                  className="btn btn-outline-primary btn-sm">Visualizar</Link>
                </td>
            </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  )
}