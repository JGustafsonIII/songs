import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div key={song.title} className='item'>
          <div className='right floated content'>
            <button
              onClick={() => this.props.selectSong(song)}
              className='ui button primary'
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

// State in here
const mapStateToProps = (state) => {
  // console.log(state); Best debugging line ever
  return {
    songs: state.songs,
  };
};

// Action creators in here
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
