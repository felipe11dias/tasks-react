import React, { Component } from 'react';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';

class Show extends Component{


    constructor(props) {
        super(props);

        this.state = {
            show: false, task : Object, colorDone: false
          };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        //this.showTasks = this.showTasks.bind(this);

        }

        handleClose() {
            this.setState({ show: false });
        }

        handleShow() {
            this.setState({ show: true });
        }

    // showTasks = (task) => {
    //     console.log("Entrou " + this);

    //     axios.get(`http://localhost:3001/tasks/?id=${task}` , {
    //     })
    //     .then(function (response) {
    //         console.log("Entrou " + this);
    //         this.setState({ task : response.data })
    //     })
    // };

    async showTasks(){
        const response = await axios.get(`http://localhost:3001/tasks/${this.props.idProps}`);
        //console.log(this);

        this.setState({ task : response.data});
        console.log(this.state);
        console.log(this.props.idProps);
    }

    componentDidMount()
    {
        this.showTasks();
    }

  render() {
        return (
            <div style={{width: "fit-content", display: "inline-flex"}}>
                <Button variant="primary" onClick={this.handleShow} >
                    Show
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tarefa {this.state.task.id}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.state.task.title}. <br/> Status da tarefa: {this.state.task.done ? <div style={{color:'green', width:'fit-content', display:"inline-flex"}}>Realizada</div> : <div style={{color:'red', width:'fit-content', display:"inline-flex"}}>Não realizada</div> }</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Fechar
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Ok
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Show;