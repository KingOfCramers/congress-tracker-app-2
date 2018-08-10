import React from 'react';
import Case from "./Case";
import { connect } from "react-redux";
import selectCases from "../selectors/cases";

const Cases = (props) => (
  <div>
    <h2>Case</h2>
    {props.cases.map((data,i) => <Case key={i} data={data} /> )}
  </div>
);

const mapStateToProps = (state) => {
  return {
    cases: selectCases(state.cases, state.filters)
  }
};

export default connect(mapStateToProps)(Cases);