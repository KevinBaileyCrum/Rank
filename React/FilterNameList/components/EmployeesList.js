import React from 'react'

class EmployeesList extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         searchStr: ''
      }
      this.handleInput = this.handleInput.bind(this)
   }

   handleInput = (event) => {
      this.setState({
         searchStr: event.target.value
      })
   }

   matchEmployeeName = () => {
      let matchedEmployees = []
      this.props.employees.forEach(employee => {
         const name = employee.name.toLowerCase()
         const query = this.state.searchStr.toLowerCase()
         if (name.includes(query))
            matchedEmployees.push({ name: employee.name })
      })
      return matchedEmployees
   }

   render() {
      var { employees }= this.props
      if (this.state.searchStr) {
         employees  = this.matchEmployeeName()
      }

      return (
         <React.Fragment>
            <div className="controls">
               <input
                  type="text"
                  className="filter-input"
                  data-testid="filter-input"
                  onChange={this.handleInput}
               />
            </div>
            <ul className="employees-list">
               { employees.map(employee => (
                  <li key={employee.name} data-testid="employee">{employee.name}</li>
               ))}
            </ul>
         </React.Fragment>
      )
   }
}

export default EmployeesList
