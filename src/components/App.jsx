import { Searchbar } from './Searchbar';
import { Component } from 'react';
import * as API from '../services/api';

export class App extends Component {
  state = {
    isLoading:false,
    quary: '',
    page: 1,
    error: false,
    images: [],
  };

  onSubmit = quary => {
    this.setState({ quary });
  };

  async componentDidUpdate() {
    const { quary, page } = this.state;
    try {
      const images = await API.getImages(quary, page);
      this.setState({ images });
    } catch (error) {
      this.setState({ error: true });
      console.log(error);
    }
  }

  render() {
    return <Searchbar onSubmit={this.onSubmit} />;
  }
}
