import React, { Component } from 'react';
import './Flex.css';
import { FormLabel, ListGroup, Button, Container, Row } from 'react-bootstrap';

class Tasks extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        const { taskListArray } = this.props;

        return (
            <div>
                <FormLabel className="title">Lista de tarefas</FormLabel>

                {taskListArray.map((item, index) => (
                    <Container fluid>
                        <Row >
                            <ListGroup key={index}>
                                <ListGroup.Item className="todo-taskitem md-auto">
                                    <div class="todo-taskitem">
                                        <div>Tarefa #{index}: {item} </div>
                                        <Button variant="danger" className="add-btn" onClick={this.deleteButtonHandler} value={index}>X</Button>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Container>
                ))}
            </div>
        );
    }

    deleteButtonHandler = (index) => {
        const { deleteTaskItem } = this.props;

        deleteTaskItem(index);
    }
}

export default Tasks;