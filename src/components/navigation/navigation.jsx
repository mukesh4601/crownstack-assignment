import React, { PureComponent } from "react";
import "./navigation.scss";
import SelectLocation from "../select-location/select-location";
import { withRouter } from "react-router";
class navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="col-md-12 header">
        <div className="row">
          <div className="col-md-6">
            <h5 className="heading-text white-color capitalize">
              Rental Management System
            </h5>
          </div>
          <div className="col-md-3">
            <SelectLocation
              getCategories={(item) => this.props.getCategories(item)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(navigation);
