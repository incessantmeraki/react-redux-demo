import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'
import {startItemsFetch} from './actions'

export class App extends Component {
  componentDidMount() {
    this.props.fetchData('https://jsonplaceholder.typicode.com/photos')
  }

  render() {
    if (this.props.itemsFetchError) {
      return <p> Error Loading items </p>
    }

    if (this.props.itemsLoading) {
      return <p> Loading... </p>
    }

    return (
      <ol>
        {this.props.items.map((item) => (
          <li key = {item.id}>
              < a href = {item.url}>
                <img src={item.thumbnailUrl} alt={item.title} />
              </a>
          </li>
        ))}
      </ol>
    )
  }
}

const mapStateToProps = (state, props) => ({
  items: state.items,
  itemsFetchError: state.itemsFetchError,
  itemsLoading: state.itemsLoading
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchData: (url) => dispatch(startItemsFetch(url))
})

export default connect(mapStateToProps, mapDispatchToProps) (App)