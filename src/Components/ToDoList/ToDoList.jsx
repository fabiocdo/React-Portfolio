import React, { Component } from 'react';
import './Flex.css';
import Tasks from './Tasks';
import Add from './Add';
import { Container, Row, Col } from 'react-bootstrap';

class ToDoList extends Component {

    constructor(props){
        super(props);
    
        this.state = {
          newTask: '',
          taskList: []
        }
    }

    render(){          
        const { taskList } = this.state;
        
        return(  
            <Container fluid className="border">
                <Row>
                    <Col className="border" >
                        <Tasks taskListArray={taskList} deleteTaskItem={this.deleteTaskItem}/>
                    </Col>
                    <Col className="border">
                        <Add setNewTask={this.setNewTask}/>              
                    </Col>
                </Row>
            </Container>            
        );
    }

    setNewTask = (newTask) => {
        const { taskList } = this.state;

        this.setState({
            taskList: [...taskList, newTask]
         });
    }

    deleteTaskItem = (arg) => {
        const { taskList } = this.state;
        const index = arg.target.value;
        
        taskList.splice(index,1);

        this.setState({
            taskList
        });
    }
}

export default ToDoList;