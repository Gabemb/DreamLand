import React from 'react';
import $ from 'jquery';
 
const AddReview = React.createClass({ 
  getInitialState: function() {
    return ({
      rating:0,comment:""
    });
  },
  addReview: function() {
    $.ajax({
      url: '/review',
      type: 'POST',
      data: this.state
    })
    .done((data) => {
      this.setState({ rating: data.rating, comment: data.comment
      });
    })
  },
  handleRatingChange: function(event){
    this.setState({rating: event.target.value })
  },
  handleCommentChange: function(event){
    this.setState({description: event.target.value })
  },
  render: function() {
    return(
    <div>
       <form>
          <br/>
          <select onChange={this.handleRatingChange} value={this.state.rating}>
            <option value='1'>*</option>
            <option value='2'>**</option>
            <option value='3'>***</option>
            <option value='4'>****</option>
            <option value='5'>*****</option>
          </select>
          <input onChange={this.handleCommentChange} type='text' value={this.state.comment} placeholder='Comment'/>
          <button onClick={this.addReview}>Add Review</button>
          <br/>
      </form>
    </div>
    )
  }
})

export default AddReview;