import React, { Component } from 'react';
import './Delete.css';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';


class Delete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false, task : Object, title: "", done: false
          };
            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.handleDelete = this.handleDelete.bind(this);
        }

        handleClose() {
            this.setState({ show: false });
        }

        handleShow() {
            this.setState({ show: true });
        }

        handleDelete = event => {
            event.preventDefault();

            let header = {
                headers: {
                    'Content-Type': 'application/json;'
                }
            };

        axios.delete(`http://localhost:3001/tasks/${this.props.idProps}`, { header })
        .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.reload();
        });
    }

  render(){

        return (
            <div style={{width: "fit-content", display: "inline-flex"}}>
                <div>
                    <Button variant="danger" onClick={this.handleShow} >
                        Delete
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deletar Tarefa</Modal.Title>
                    </Modal.Header>
                            <Modal.Body style={{textAlign: "center"}}>
                                    Tem certeza que deseja excluir essa tarefa ?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" type="submit" onClick={this.handleDelete}>
                                    Confirmar
                                </Button>
                            </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Delete;