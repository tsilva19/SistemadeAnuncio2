import React, {useState} from 'react'
import { Container, Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { api } from '../../config';
export const CadastrarAnuncio = () => {

   const [anuncio, setAnuncio] = useState({
      titulo: '',
      descricao: ''
   })

   const valorInput = e => setAnuncio({...anuncio, [e.target.name]: e.target.value});

     const cadAnuncio = async e =>{
      e.preventDefault();
      console.log(anuncio);

      const headers ={
        'Content-Type': 'application/json'
      }
      await axios.post(api + "/cadastrar", anuncio, {headers})
      .then((res) =>{
         console.log(res.data.message);
      })
      .catch(() =>{
          console.log('error: Tente mais tarde')
      })
    }

    return (
      <div>
        <Container>
        <div className="d-flex">
          <div className="mr-auto p-2">
            <h1>Cadastrar Anúncios</h1>
          </div>
          <div className="space">
            <Link to="/" className="btn btn-outline-info btn-sm">
              Listar
            </Link>
          </div>
        </div>

        <hr className="m-1" />

        <Form onSubmit={cadAnuncio}>
           <FormGroup>
              <Label>
                Titulo
              </Label>
              <Input type="text" name="titulo" placeholder="Título do anúncio" onChange={valorInput}></Input>
           </FormGroup>

           <FormGroup>
              <Label>Descrição</Label>
              <Input type="text" name="descricao" placeholder="Descrição do anúncio" onChange={valorInput}></Input>
           </FormGroup>

           <Button type="submit" outline color="success">Cadastrar</Button>
        </Form>

        </Container>
      </div>
    )
  }