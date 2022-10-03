import React, { Component } from 'react'
import axios from 'axios'

class APIToTable extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         details : [],
         errorMsg : ''
      }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response);
            this.setState({
                details : response.data
            })

        })
        .catch(error => {
            console.log(error);
            this.setState({
                errorMsg : 'cannot retrieve User-Data'

            })
        })
        
    }
  render() {
    const {details,errorMsg} = this.state
    return (
      <div>
        <table>
            <thead>
                <tr>
                    <td>FullName</td>
                    <td>Email</td>
                    <td>City</td>
                </tr>
            </thead>
            <tbody>
          {
            details.length ?
            details.map(detail => <tr key={detail.id}><td>{detail.username}</td>
            <td>{detail.email}</td>
            <td>{detail.address.city}</td></tr>) :
            null
          }
          {
            (errorMsg) ? <div id='errorMsg'>{errorMsg}</div> : null

          }
            </tbody>
        </table>
      </div>
    )
  }
}

export default APIToTable