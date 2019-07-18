import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Show from './Show';
import Edit from './Edit';
import New from './New';
import Delete from './Delete';
import Table from 'react-bootstrap/Table'


class Home extends Component {

    state = {
        tasks : []
      };

    // loadTasks(){
    //     let response = fetch(`http://localhost:3001/tasks`);
    //     const tasks = response.json;
    //     this.setState = ({tasks: tasks})
    // }

    // handleSubmit = event => {
    //     event.preventDefault();

    //     const task = {
    //         title: this.state.title,
    //         done: this.state.done
    //     };

    //     axios.put(`http://localhost:3001/tasks/${this.props.idProps}`, { task })
    //     .then(res => {
    //         console.log(res);
    //         console.log(res.data);
    //     });
    // }

    loadTasks(){
        axios.get(`http://localhost:3001/tasks`)
            .then(res => {
                const tasks = res.data;
                this.setState({ tasks : tasks });
                console.log(this.state.tasks);
        })
    }
      
    componentDidMount(){
        // axios.get(`http://localhost:3001/tasks`)
        //     .then(res => {
        //         const tasks = res.data;
        //         this.setState({ tasks : tasks });
        // })
        // const response = await axios.get(`http://localhost:3001/tasks`);
        // //console.log(this);

        // this.setState({ tasks : response.data});
        // //console.log(this.state);

        this.loadTasks();
    }



  render(){

        return (
            <div className="h-100">
                <New/>
                <center>
                    <Table striped bordered hover border ='1 #c0c0c0 solid' id="tableTasks">
                        <thead>
                            <tr>
                                <th>
                                    Title
                                </th>
                                <th>
                                    Status
                                </th>
                                <th>
                                 Show | Edit | Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {/*  {console.log(this.state.tasks)} */}
                            {this.state.tasks.map(function(task){
                                //console.log("task no for");
                                //console.log(task);

                                return (

                                    <tr key={task.id}>
                                        <td>{task.title}</td>
                                        <td>{task.done ? "true" : "false"}</td>
                                        <td>
                                            <div style={{ margin : "5px 0"}}>
                                                <Show idProps={task.id}/>&nbsp;
                                                <Edit idProps={task.id}/>&nbsp;
                                                <Delete idProps={task.id}/>
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </center>
                <div className="push"></div>
            </div>
        );
    }
}

export default Home;