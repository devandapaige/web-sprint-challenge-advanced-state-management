import React from "react";
import styled from "styled-components";

const CardName = styled.h3``;
const CardText = styled.p``;

class Smurf extends React.Component {
  render() {
    const { smurf } = this.props;
    console.log(smurf);

    return (
      <div data-testid="smurf" className="card">
        <CardName>{smurf.name}</CardName>
        <CardText>Position: {smurf.position}</CardText>
        <CardText>Nickname: {smurf.nickname}</CardText>
        <CardText>Description: {smurf.description}</CardText>
      </div>
    );
  }
}

export default Smurf;

//Task List:
//1. ✅ Access smurf to be displayed through props.
//2. ✅ Display the name, position, nickname and description of the provided smurf as needed.
//3. Style as needed. (feel free to make use of the bootstrap card structure: https://getbootstrap.com/docs/4.0/components/card/)
//4. ✅ DO NOT DELETE THE data-testid FIELD! It is used for sprint grading.
