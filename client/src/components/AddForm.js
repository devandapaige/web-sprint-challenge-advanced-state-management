import React from "react";
import { connect } from "react-redux";
import { addSmurf, formError } from "../actions/index";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      position: "",
      nickname: "",
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name === "") {
      this.setState({
        ...this.state,
      });
      this.props.formError("All fields required.");
    } else if (this.state.position === "") {
      this.setState({
        ...this.state,
      });
      this.props.formError("All fields required.");
    } else if (this.state.nickname === "") {
      this.setState({
        ...this.state,
      });
      this.props.formError("All fields required.");
    } else if (this.state.description === "") {
      this.setState({
        ...this.state,
      });
      this.props.formError("All fields required.");
    } else {
      const newSmurf = {
        id: Date.now(),
        name: this.state.name,
        position: this.state.position,
        nickname: this.state.nickname,
        description: this.state.description,
      };
      this.props.addSmurf(newSmurf);
      this.setState({
        name: "",
        position: "",
        nickname: "",
        description: "",
      });
    }
  };
  render() {
    return (
      <section>
        <h2>Add Smurf</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="name"
              id="name"
              value={this.state.name}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="position"
              id="position"
              value={this.state.position}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="nickname"
              id="nickname"
              value={this.state.nickname}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <br />
            <input
              onChange={this.handleChange}
              name="description"
              id="description"
              value={this.state.description}
              required
            />
          </div>
          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error: {this.props.error}
          </div>
          <button onClick={(e) => this.handleSubmit(e)}>Submit Smurf</button>
        </form>
      </section>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    error: state.error,
  };
};
const mapDispatchToProps = { addSmurf, formError };
export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//1. ✅ Add in all necessary import components and library methods.
//2. ✅ Connect all needed redux state props and action functions to the component before exporting.
//3. ✅ Add state holding name, position, nickname and description to component.
//4. ✅ Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATTERN OF SHOWN FOR NAME.
//5. ✅ Build eventhandler and listener needed to change the state.
//6. ✅ Build eventhandler and listener needed to submit a new smurf and dispatch it's associated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//8. ✅ DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//9. ✅ Style as necessary.
