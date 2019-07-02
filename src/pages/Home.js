import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import Show from './Show';


class Home extends Component {

    state = {
        tasks : []
      };

    // loadTasks(){
    //     let response = fetch(`http://localhost:3001/tasks`);
    //     const tasks = response.json;
    //     this.setState = ({tasks: tasks})
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
        <center>
            <table border ='1 #c0c0c0 solid' id="tableTasks">
                <thead>
                    <tr>
                        <th>
                            Id
                        </th>
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
                        console.log("task no for");
                        console.log(task);
                        
                        
                         return (
                            <tr key={task.id}>
                                <td>{task.id}</td>
                                <td>{task.title}</td>
                                <td>{task.done ? "true" : "false"}</td>
                                <td>
                                    <Show idProps={task.id}/>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </center>
        );
    }
}

export default Home;