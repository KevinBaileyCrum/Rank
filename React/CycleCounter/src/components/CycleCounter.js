import React from 'react';

class CycleCounter extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         count: 0
      }
   }

   // how to write a simple update in as many lines as possible
   handleClick = () => {
      let newCount = this.state.count + 1
      if (newCount < this.props.cycle) {
         this.setState({
            count: newCount
         })
      } else {
         this.setState({
            count: 0
         })
      }
   }

   render() {
      return (
         <button
            data-testid="cycle-counter"
            style={{ fontSize: '1rem', width: 120, height: 30, }}
            onClick={this.handleClick}
         >
            {this.state.count}
         </button>
      );
   }
}

export default CycleCounter;
