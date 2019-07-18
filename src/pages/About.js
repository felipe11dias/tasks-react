import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import task_image from '../tasksImage.jpg';
import './About.css'

class About extends Component {
  render(){

        return (
            <div id="h-100">
                <Container>
                <div>
                    <h1>Sobre o sistema</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mollis ullamcorper odio, a aliquet ipsum semper vel. 
                        Nullam lobortis viverra turpis, sed iaculis magna mollis a. Sed dapibus iaculis eros eu sollicitudin. Duis tempor 
                        sapien ac justo efficitur, id congue purus suscipit. Suspendisse fringilla tellus a tellus tempus laoreet. Duis eget
                         enim purus. Suspendisse ac tristique leo. Donec purus nisl, congue eu velit at, posuere faucibus nisl. Phasellus sed
            1           mollis velit. Etiam nec eros sit amet ipsum faucibus euismod. Phasellus quis tristique lorem.
                    </p>
                    <div className="d-flex">
                        <img src={task_image} alt="Task_image" />
                    </div>
                </div>
                </Container>
                <div className="push"></div>
            </div>
        );
    }
}

export default About;
