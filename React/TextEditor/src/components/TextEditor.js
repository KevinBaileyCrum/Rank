import React from 'react';

class TextEditor extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         input: '',
         textStack: []
      }

      this.handleInput = this.handleInput.bind(this)
   }

   handleInput = (event) => {
      this.setState({
         input: event.target.value
      })
   }

   handleAppend = (event) => {
      const appendStr = this.state.input + ' '
      this.setState({
         textStack: ([...this.state.textStack, appendStr]),
         input: ''
      })
   }

   handleUndo = () => {
      this.setState({
         textStack: this.state.textStack.slice(0, -1)
      })
   }

   render() {
      return (
         <React.Fragment>
            <div className="controls">
               <input
                  className="word-input"
                  type="text"
                  data-testid="word-input"
                  onChange= {this.handleInput}
                  value= {this.state.input}
               />
               <button
                  data-testid="append-button"
                  disabled={!this.state.input}
                  onClick={this.handleAppend}
               >
                  Append
               </button>
               <button
                  data-testid="undo-button"
                  onClick={this.handleUndo}
                  disabled={this.state.textStack.length === 0}
               >
                  Undo
               </button>
            </div>
            <div className="text-field" data-testid="text-field">{this.state.textStack}</div>
         </React.Fragment>
      );
   }
}

export default TextEditor;
