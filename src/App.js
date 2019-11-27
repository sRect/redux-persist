import React from 'react';
import { connect } from 'react-redux';
// import {fromJS} from 'immutable';

class App extends React.Component {
  render() {
    const { a, b } = this.props;
    return (
      <div>
        <h1>redux-persist + immutable</h1>
        <hr />
        <div style={{fontSize: '30px'}}>
          a= {a} --- b={b}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log(state);
  // state = fromJS(state)
  // console.log(state);
  return {
    a: state.getIn(["reducerA", "a"]),
    b: state.getIn(['reducerB', 'b'])
  }
  // return {
  //   a: state.reducerA.getIn(["a"]),
  //   b: state.reducerB.get('b')
  // }
}

export default connect(mapStateToProps, null)(App);
