import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';

class Home extends Component {

    state = {tasks: []};


    // loadTasks(){
    //     let response = fetch(`http://localhost:3001/tasks`);
    //     const tasks = response.json;
    //     this.setState = ({tasks: tasks})
    // }

    async componentDidMount(){
        const response = await axios.get(`http://localhost:3001/tasks`);
        console.log(this);
        console.log(response);

        this.setState({ tasks : response.data});
        console.log(this.state);

    }


  render(){

        return (
        <center>
            <table border ='1 #c0c0c0 solid' id="tableTasks">
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
                   {console.log(this.state.tasks)}
                    {this.state.tasks.map(function(item){
                         return (
                            <tr key={item.id}>
                                <td>{item.title}</td>
                                <td>{item.done}</td>
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