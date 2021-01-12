import Smurf from "./Smurf";
import React from "react";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
    console.log("fetching smurfs"); //✅
  }
  componentDidUpdate() {
    console.log("Loading Update:", this.props.loading);
    console.log(this.props.smurfs);
  }
  render() {
    console.log(this.props.smurfs);
    console.log(this.props.loading);
    return (
      <div>
        {this.props.loading ? (
          <p>Smurfs are loading...</p>
        ) : (
          <div>
            {this.props.smurfs.map((smurf) => (
              <Smurf key={smurf.id} smurf={smurf} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error,
  };
};
const mapDispatchToProps = { fetchSmurfs };
export default connect(mapStateToProps, mapDispatchToProps)(SmurfDisplay);

//Task List:
//1. ✅ Import in all needed components and library methods.
//2. ✅ Connect all needed redux state props and action functions to the component before exporting.
//3. ✅Fetch all smurfs when the component first mounts.
//4. ✅ Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
