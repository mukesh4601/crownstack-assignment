import React, { PureComponent } from "react";
import { withRouter } from "react-router";
import "./dashboard.css";
import Navigation from "../navigation/navigation";
import Card from "../card/card";
import { Breadcrumb } from "antd";
class Dashboard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      subcategories: false,
      _subcategories: [],
      current: "",
    };
  }

  getCategories(item) {
    this.setState({
      data: item.categories,
    });
  }

  showSubCategories(item) {
    this.setState({
      _subcategories: item.subcategories,
      subcategories: true,
      current: item.name,
    });
  }

  render() {
    const { data } = this.state;
    return (
      <div className="row">
        <Navigation getCategories={(item) => this.getCategories(item)} />
        <div className="col-md-12 padding-main">
          <div className="row nomargin">
            {data.length === 0 ? (
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 text-center md100">
                    <h5 className="heading-text capitalize  md200">
                      Welcome to <br></br> Rental Managment System
                    </h5>
                    <p className="sub-text">Please select location</p>
                  </div>
                </div>
              </div>
            ) : this.state.subcategories === true ? (
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12 md20">
                    <Breadcrumb>
                      <Breadcrumb.Item>
                        <span
                          className="cursor"
                          onClick={() =>
                            this.setState({ subcategories: false })
                          }
                        >
                          Equipment Catalog
                        </span>
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>{this.state.current}</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                  <div className="col-md-12 md20"></div>
                  <Card
                    data={this.state._subcategories}
                    category={false}
                    showSubCategories={(item) => this.showSubCategories(item)}
                  />
                </div>
              </div>
            ) : (
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-12  md20">
                    <p>Equipment Assignment</p>
                  </div>
                  <Card
                    data={this.state.data}
                    category={true}
                    showSubCategories={(item) => this.showSubCategories(item)}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
