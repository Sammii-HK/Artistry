import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: []
    }

    this.getArt = this.getArt.bind(this)
  }

  getArt() {
    axios.get('/api/rijksmuseum/collection')
      .then(res => this.setState({ data: res.data.artObjects }))
      .catch(err => console.error(err))
  }

  componentDidMount() {
    this.getArt()
  }

  render() {
    console.log('search props.data', this.props.data)
    console.log('search state.data', this.state.data)
    if (!this.state) return <h1>Loading...</h1>
    return (
      <main>
        <div className="container search-container">
          <input type="text" placeholder="search..." />
          <div className="section">
            <div className="columns is-mobile is-multiline">
              {this.state.data.map(art =>
                <div key={art.objectNumber} className="column is-3-desktop is-6-tablet is-half-mobile">
                  <Link to={`/gallery/${art.objectNumber}`}>
                    <div
                      className="art-image"
                      style={{ backgroundImage: `url(${art.webImage.url})` }} >
                      <div className="subtitle is-6">{art.title}</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    )
  }
}


export default Search


// {art.principalMakers.map(artist =>
//   <div key={artist.name} className="is-6">{artist.name}</div>
// )}
