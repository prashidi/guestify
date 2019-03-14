import React from "react";
import { connect } from "react-redux";
import { fetchGuests } from "../actions";

class GuestList extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchGuests());
  }
  render() {
    
    const { error, loading, guests } = this.props;

    if (error) {
      return <div>Error! {this.props.error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="list-guest">
        <ul className="guest-list">
          <div className="row">
            <div className="column guest-details"><h4>Guest details</h4></div>
            <div className="column guest-details"><h4>Table number</h4></div>
          </div>

          {guests.map((guest) => (
            <li key={guest.id} className="guest-list-item ">
              <div className="guest-details">
                <p>{guest.name}</p>
                <p>{guest.email}</p>
              </div>
              <div className="guest-table">
                <p>{guest.table}</p>
              </div>
              <button className='guest-remove'>
                Remove
              </button>

            </li>
          ))}
        </ul>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  guests: state.guestReducer.guests,
  loading: state.guestReducer.loading,
  error: state.guestReducer.error
});

export default connect(mapStateToProps)(GuestList);