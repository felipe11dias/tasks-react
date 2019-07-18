import React, { Component } from 'react';
import './Edit.css';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';


class Edit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: false, task : Object, title: "", done: false
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

            axios.put(`http://localhost:3001/tasks/${this.props.idProps}`, { task })
            .then(res => {
                console.log(res);
                console.log(res.data);
                window.location.reload();
            });
        }

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

  render(){

        return (
            <div style={{width: "fit-content", display: "inline-flex"}}>
                <div>
                    <Button variant="warning" onClick={this.handleShow} >
                        Edit
                    </Button>

                    <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Tarefa {this.state.task.id}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Body>
                                <label>Title:</label><br/>
                                <input name="title" type="text" onChange={this.handleChange} required /><br/>
                                <label>Done:</label><br/>
                                <label>true</label> <label>false</label><br/>
                                &nbsp;&nbsp;<input name="done" onChange={this.handleChange} type="radio" placeholder="Done" value={true} required/>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name="done" onChange={this.handleChange} type="radio" placeholder="Done" value={false} required/>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>
                                Fechar
                            </Button>
                            <Button variant="primary" type="submit" onClick={this.handleClose}>
                                Editar
                            </Button>
                        </Modal.Footer>
                    </form>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Edit;