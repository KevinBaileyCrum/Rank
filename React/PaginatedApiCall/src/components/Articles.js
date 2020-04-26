import React from 'react';

const url = 'https://jsonmock.hackerrank.com/api/articles?page='
class Articles extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
         totalPages: 0,
         pageData: []
      }
      this.handleButtonClick = this.handleButtonClick.bind(this)
   }

   getData = (pageNum) => {
      return fetch(url + pageNum)
         .then((response) => {
            return response.json()
         })
         .then((data) => {
            return data
         })
   }

   writeTitles = (data) => {
      let returnList = []
      data.forEach(element => {
         if (element.title) {
            returnList.push(element.title)
         }
      })
      this.setState({
         pageData: returnList
      })
   }

   componentDidMount = async () => {
      const data = await this.getData('1')
      this.setState({
         totalPages: data.total_pages,

      })
      this.writeTitles(data.data)
   }

   handleButtonClick = async (pageNum) => {
      const data = await this.getData(String(pageNum))
      this.writeTitles(data.data)
   }

   render() {
      return (
         <React.Fragment>
            <div className="pagination">
               {Array(this.state.totalPages).fill().map((_, pageNum) => (
                  <button
                     key={pageNum + 1}
                     data-testid="page-button"
                     onClick={() => this.handleButtonClick(pageNum+1)}
                  >
                     {pageNum + 1}
                  </button>
               ))}
            </div>
            <div>
               <ul className="results">
                  {this.state.pageData.map(x => (
                     <li key={x} data-testid="result-row">
                        {x}
                     </li>
                  ))}
               </ul>
            </div>
         </React.Fragment>
      );
   }
}

export default Articles;
