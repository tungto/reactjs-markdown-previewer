import './App.css';
import { Component } from 'react';
import Editor from './components/Editor';
import ToolBar from './components/ToolBar';
import Previewer from './components/Previewer';
import ReactFCCtest from 'react-fcctest';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: props.source,
    };
  }

  handleChange = (e) => {
    this.setState({ markdown: e.target.value });
  };

  render() {
    return (
      <div className='App'>
        {/* <ToolBar /> */}
        <ReactFCCtest />
        <Editor text={this.state.markdown} handleChange={this.handleChange} />
        <Previewer markdown={this.state.markdown} />
      </div>
    );
  }
}

export default App;
