import React, { Fragment, PureComponent } from "react";
import { withRouter } from "react-router";
import "./card.scss";

class card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { data, category } = this.props;
    console.log(data);
    return (
      <Fragment>
        {data.map((item) => {
          return (
            <div className="col-md-3 padding30">
              <div className="row  ant-card">
                <div className="col-md-12">
                  {item.image === undefined ? (
                    <div style={{ height: "293px", textAlign: "center" }}>
                      <p className="md100">No Image</p>
                    </div>
                  ) : category === true ? (
                    <img
                      src={require("../category/" + item.image).default}
                      alt={"category image " + item.name}
                      className="img-fluid"
                    ></img>
                  ) : (
                    <img
                      src={
                        require("../category/subcategory/" + item.image).default
                      }
                      alt={"category image " + item.name}
                      className="img-fluid"
                    ></img>
                  )}
                </div>
                <div className="col-md-12 category-title">
                  {item.name}{" "}
                  {category === true ? (
                    <span
                      style={{ float: "right", cursor: "pointer" }}
                      onClick={() => this.props.showSubCategories(item)}
                    >
                      &#8594;
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default withRouter(card);
