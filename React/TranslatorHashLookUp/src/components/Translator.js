import React from 'react';

class Translator extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         output: ''
      }
      this.handleChange = this.handleChange.bind(this)
   }

   handleChange = (event) => {
      const translation = this.props.translations.get(event.target.value)
      this.setState({ output: [translation ? translation : ''] })
   }

   render() {
      return (
         <React.Fragment>
            <div className="controls">
               <div className="input-container">
                  <span>input:</span>
                  <input
                     type="text"
                     className="text-input"
                     data-testid="text-input"
                     onChange={this.handleChange}
                  />
               </div>
               <div className="input-container">
                  <span>output:</span>
                  <input
                     type="text"
                     className="text-output"
                     data-testid="text-output"
                     value={this.state.output}
                     readOnly
                  />
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Translator;
