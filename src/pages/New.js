import React, { Component } from 'react';
import './New.css';
import {Modal, Button} from 'react-bootstrap';
import axios from 'axios';

class New extends Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false , title: "", done: false
          };
            this.handleShow = this.handleShow.bind(this);
            this.handleClose = this.handleClose.bind(this);
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleClose() {
            this.setState({ show: false });
        }

        handleShow() {
            this.setState({ show: true });
        }

        handleChange = event => {
            console.log(event.target.value);
            if(event.target.value === "true" || event.target.value === "false" ){
                this.setState({ done: event.target.value});
                console.log("State " + this.state.title)
            }else {
                this.setState({ title: event.target.value});
            }
        }

        handleSubmit = event => {
            event.preventDefault();

            const task = {
                title: this.state.title,
                done: this.state.done
            };
            let header = {
                headers: {
                    'Content-Type': 'application/json;'
                }
            };

        axios.post(`http://localhost:3001/tasks`, { task }, { header })
        .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.reload();
        });
    }

  render(){

        return (
            <div style={{ width: "1000px", height: "38px", margin: "14px auto 0 auto" }}>
                <Button variant="success" onClick={this.handleShow} style={{ float: "right" }}>
                    New
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nova Tarefa</Modal.Title>
                </Modal.Header>
                        <Modal.Body>
                        <form onSubmit={this.handleSubmit}>
                            <label>Title:</label><br/>
                            <input name="title" type="text" required onChange={this.handleChange} /><br/>
                            <label>Done:</label><br/>
                            <label>true</label> <label>false</label><br/>
                            <div required>
                                <input style={{ marginLeft: "5px" }} name="done" type="radio" value="true" onChange={this.handleChange}/>
                                <input style={{ marginLeft: "25px" }} name="done" type="radio" value="false" onChange={this.handleChange}/>
                            </div>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Cancelar
                                </Button>
                                <Button variant="primary" type="submit" onClick={this.handleClose}>
                                    Criar
                                </Button>
                            </Modal.Footer>
                        </form>
                        </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default New;