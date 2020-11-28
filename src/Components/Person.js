
import React, { Component } from 'react';
import { Card, ListGroup, ListGroupItem} from "react-bootstrap";
import  './css/Main.css'
import borhen from "./../Assets/borhen.jpg"

class Person extends Component {
   
   state = {
       imgSrc: borhen,
       fullName: "ISSAOUI BORHEN",
       bio: "27 years old holder of the national diploma of the applied license in computer network technologies",
       profession: "full-stack js ",
       show: false,
    };
   handleClick = () => {
    this.setState({ show: !this.state.show });
  };
   
   render() {
       return(
        <div className="Person">
        <button type="button" class="btn btn-info"
          onClick={this.handleClick}>
            SHOW
        </button>
       {this.state.show ? (
          <Card style={{ width: "20rem" , border:"6px"}}>
            <Card.Img variant="top" src={this.state.imgSrc} />
            <Card.Body>
              <Card.Title className="Name">{this.state.fullName}</Card.Title>
              <Card.Text>
                  {this.state.bio}
              </Card.Text>  </Card.Body>
             <ListGroup className="list-group-flush">
                <ListGroupItem>{this.state.profession} </ListGroupItem>
             </ListGroup>

          </Card>
        ) : null}
    </div>
    );}
}

export default Person ;
