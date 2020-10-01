import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Home from './Home';
import Calculator from './Calculator/Calculator';
import ToDoList from './ToDoList/ToDoList';
import Sobre from './Sobre';
import '../App.css';

class Portfolio extends Component{

    /* constructor(props){
        super(props)
        
        this.state = {
            currentPage: "/"
        }
    } */

    render(){

        return(
            <Container fluid>
                <Row>
                    <Col xs={4}>                        
                        <Link to="/"><Button className="btn">Home</Button></Link><br/>
                        <h3>Projetos</h3>
                        <Link to="/calculator"><Button className="btn" variant="outline-info">Calculadora</Button></Link><br/>
                        <Link to="/todolist"><Button className="btn" variant="outline-info">To Do List</Button></Link><br/>
                        <h3>Sobre mim</h3>
                        <Link to="/sobre"><Button className="btn" variant="outline-info">Sobre mim</Button></Link><br/>
                    </Col>
                    <Col>
                        <Switch>                       
                            <Route exact path="/" component={Home} />
                            <Route path="/calculator" component={Calculator} />
                            <Route path="/todolist" component={ToDoList} />
                            <Route path="/sobre" component={Sobre} />
                            <Route render={() => <Redirect to="/"/>} />
                        </Switch>
                    </Col>
                </Row>
            </Container>            
        );        
    }

    /* navigate = (arg) => { 
        
        const currentPage = arg.target.value;

        this.setState({
            currentPage
        })    
    } */
}

export default Portfolio;