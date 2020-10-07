import React, { Component } from 'react'
import BookingTable from '../image/bookingTable.jpg'
import './Booking.css'

export default class Booking extends Component {
    render() {
        return (
            <div>
            <div class="container-fluid reservations-form dark-overlay img">
            <div className="text-center special-title-2">Booking</div>
            <form>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputName">NAME:</label>
                  <input type="text" class="form-control" id="inputName" placeholder="John Smith" />
                </div>
                <div class="form-group col-md-6">
                  <label for="inputEmail">EMAIL:</label>
                  <input type="email" class="form-control" id="inputEmail" placeholder="name@example.com" />
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-md-5">
                  <label for="inputDate">DATE:</label>
                  <input type="date" class="form-control" id="inputDate" />
                </div>
                <div class="form-group col-md-2">
                  <label for="inputNumber">PARTY OF:</label>
                  <input type="number" min="1" class="form-control" id="inputNumber" placeholder="1" />
                </div>
                <div class="form-group col-md-5">
                  <label for="inputPhone">PHONE:</label>
                  <input type="tel" class="form-control" id="inputPhone" placeholder="99123456" />
                </div>
              </div>
              <div class="form-group">
                <label for="inputTextarea">MESSAGE:</label>
                <textarea class="form-control" id="inputTextarea" rows="7" placeholder="Additional details"></textarea>
              </div>
              <button type="submit" class="btn btn-light">SUBMIT</button>
            </form>
          </div>
            </div>
        )
    }
}
