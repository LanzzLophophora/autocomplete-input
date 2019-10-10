import React from 'react';
import './App.css';

import { handleGettingComments } from './store/users/thunk';
import { connect } from 'react-redux';
import { Autocomplete } from './components';

class App extends React.Component {

  state = {
    email: ''
  };

  componentDidMount() {
    this.props.handleGettingComments();
  }

  handleChange = e => {
    this.setState({
      email: e.target.value
    })
  };

  handleChoose = email => {
    this.setState({
      email
    })
  };

  render() {

    const style = {
      autocompleteWrapper: {
        'width': '40%',
        'margin': '2rem auto'
      },
      autocompleteInput: {
        'padding': '15px',
      },
      autocompleteSelector: {
        'color': 'green'
      },
      // autocompleteSelectorOptions: {
        // 'backgroundColor': 'yellow'
      // },
      // highlight : {
      //   'color': 'gray'
      // }
    };

    const classNames = {
      autocompleteWrapper: 'test test-wrapper',
      autocompleteInput: 'test test-input',
      autocompleteSelector: 'test test-selector',
      autocompleteSelectorOptions: 'test test-option',
      highlight: 'color-red',
    };

    const { email } = this.state;

    return (
      <div className='App'>
        <div>
          It is an example on onChange function from App to Autocomplete. {email}
        </div>
        <Autocomplete
          style={style}
          options={this.props.emails}
          classNames={classNames}
          onChange={this.handleChange}
          maxVisibleOptions={4}
          optionsHeight={44}
          onChoose={this.handleChoose}
        />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  emails: store.emails
});

const mapDispatchToProps = ({
  handleGettingComments
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
