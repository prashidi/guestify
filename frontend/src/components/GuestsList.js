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
          {guests.map((guest) => (
            <li key={guest.id} className="guest-list-item ">
              <div className="guest-details">
                <p>{guest.name}</p>
                <p>{guest.email}</p>
              </div>
              <div>
                <p>{guest.table}</p>
              </div>
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