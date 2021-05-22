import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { api } from '../../config';
import {Link} from 'react-router-dom';
import { Container, Alert } from 'reactstrap';


export const VisualizarAnuncio = (props) => {
    
    //console.log(props.match.params.id);
    const [data, setData] = useState([]);
    const [id, setId] = useState(props.match.params.id);
    const [status, setStatus] = useState({
      type:'',
      mensagem: ''
    })
    useEffect(() => {
      const getAnuncio = async () => {
        await axios.get(api + "/visualizar/" + id)
        .then((res) =>{
          //console.log(res.data.anuncio);
          setData(res.data.anuncio)
        })
        .catch(()=>{
          setStatus({
            type: 'error',
            mensagem: "Erro: Tente mais tarde"
          })
          console.log("Erro: Tente mais tarde")
        })
      }
      getAnuncio();
    },[id])
    return (
      <div>
        <Container>
       <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Anúncios</h1>
          </div>
          <div className="space">
            <Link to="/" className="btn btn-outline-info btn-sm">
              Listar
            </Link>
          </div>
        </div>

        {status.type === 'error' ? <Alert color="danger">{status.mensagem}</Alert> : ""}
        <hr className="m-1" />
       
        <dl className="row">
            <dt className="col-sm-3">ID</dt>
            <dd className="col-sm-9">{data.id}</dd>

            <dt className="col-sm-3">Titulo</dt>
            <dd className="col-sm-9">{data.titulo}</dd>

            <dt className="col-sm-3">Descrição</dt>
            <dd className="col-sm-9">{data.descricao}</dd>
        </dl>
        </Container>
      </div>
    )
  
}


