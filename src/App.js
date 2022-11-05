import {Component} from 'react'
import './App.css'
import {Container, Div, Div2, Head, Btn1, Para,Input1} from './StyledComponents'

// Replace your code here
class App extends Component {
  state = {display1: true, inputType: ''}

  getValue = event => {
    this.setState({inputType: event.target.value})
  }

  getChange = () => {
    this.setState(prevState => ({display1: !prevState.display}))
  }

  getSave = () => {
    const {inputType} = this.state
    console.log(inputType)
    return (
      <Div2>
        <Input1
          onChange={this.getValue}
          placeholder="enter Text"
          value={inputType}
          type="text"
        />
        <Btn1 type="button" onClick={this.getChange}>
          Save
        </Btn1>
      </Div2>
    )
  }

  getEdit = () => {
    const {inputType} = this.state
    return (
      <Div2>
        <Para>{inputType}</Para>
        <Btn1 type="button" onClick={this.getChange} className="btn1">
          Edit
        </Btn1>
      </Div2>
    )
  }

  render() {
    const {display1} = this.state
    return (
      <Container>
        <Div>
          <Head>Editable Text Input</Head>
          {display1 ? this.getSave() : this.getEdit()}
        </Div>
      </Container>
    )
  }
}

export default App
