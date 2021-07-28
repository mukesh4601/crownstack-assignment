import React, { PureComponent } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { data } from "../../data/locations.json";
import { withRouter } from "react-router";
const { SubMenu } = Menu;

class SelectLocation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const menu = (
      <Menu>
        {data.locations.map((item) => {
          return (
            <SubMenu title={item.name}>
              {item.branches.map((_item) => {
                return (
                  <Menu.Item
                    className="cursor"
                    onClick={() => this.props.getCategories(_item)}
                  >
                    {_item.name}
                  </Menu.Item>
                );
              })}
            </SubMenu>
          );
        })}
      </Menu>
    );
    console.log(data);
    return (
      <Dropdown overlay={menu} trigger={["click"]}>
        <p
          className="ant-dropdown-link sub-text white-color cursor"
          onClick={(e) => e.preventDefault()}
        >
          Select Location <DownOutlined />
        </p>
      </Dropdown>
    );
  }
}

export default withRouter(SelectLocation);
