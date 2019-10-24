import React from "react";
import PropTypes from "prop-types";
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete
} from "antd";

const { Option } = Select;

const ListYourSpaceForm = props => {
  const { getFieldDecorator } = props.form;

  const handleSubmit = () => {};

  return (
    <Form onSubmit={handleSubmit}>
      <div className="row justify-content-center mt-3">
        <div className="col-md-9">
          <div className="row">
            <div className="col-6">
              <Form.Item label="Email address">
                {getFieldDecorator("email", {
                  rules: [
                    {
                      type: "email",
                      message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input your E-mail!"
                    }
                  ]
                })(<Input placeholder="name@email.com" size="large" />)}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Name of space">
                {getFieldDecorator("name_of_space", {
                  rules: [
                    {
                      type: "text"
                      // message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input the name of space!"
                    }
                  ]
                })(
                  <Input
                    placeholder="Enter name e.g. Beautiful Apartment"
                    size="large"
                  />
                )}
              </Form.Item>
            </div>
            <div className="col-12">
              <Form.Item label="Description of space">
                {getFieldDecorator("description_of_space", {
                  rules: [
                    {
                      type: "text"
                      // message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input the description of space!"
                    }
                  ]
                })(<Input placeholder="Enter description..." size="large" />)}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Address">
                {getFieldDecorator("address", {
                  rules: [
                    {
                      type: "text"
                      // message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input the address!"
                    }
                  ]
                })(
                  <Input placeholder="Start typing to search..." size="large" />
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Type of space">
                {getFieldDecorator("type_of_space", {
                  rules: [
                    {
                      type: "text"
                      // message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input the type of space!"
                    }
                  ]
                })(
                  <Select
                    size="large"
                    placeholder="Select all that apply"
                    style={{ width: "100%" }}
                    onChange={() => {}}
                  >
                    <Option value="jack">Studio</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Price (per day)">
                {getFieldDecorator("price", {
                  rules: [
                    {
                      type: "text"
                      // message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input the price per day!"
                    }
                  ]
                })(<Input placeholder="Enter price" size="large" />)}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Facilities">
                {getFieldDecorator("facilities", {
                  rules: [
                    {
                      type: "text"
                      // message: "The input is not valid E-mail!"
                    },
                    {
                      required: true,
                      message: "Please input the facilities!"
                    }
                  ]
                })(
                  <Select
                    size="large"
                    placeholder="Select all that apply"
                    style={{ width: "100%" }}
                    onChange={() => {}}
                  >
                    <Option value="jack">Studio</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Apartment type">
                {getFieldDecorator("apartment_type", {
                  rules: [
                    {
                      required: true,
                      message: "Please select the apartment type!"
                    }
                  ]
                })(
                  <Select
                    size="large"
                    defaultValue="jack"
                    placeholder="Select all that apply"
                    style={{ width: "100%" }}
                    onChange={() => {}}
                  >
                    <Option value="jack">Studio</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )}
              </Form.Item>
            </div>
            <div className="col-6">
              <Form.Item label="Number of guests">
                {getFieldDecorator("number_of_guests", {
                  rules: [
                    {
                      required: true,
                      message: "Please select the number of guests!"
                    }
                  ]
                })(
                  <Select
                    size="large"
                    defaultValue="jack"
                    placeholder="Select all that apply"
                    style={{ width: "100%" }}
                    onChange={() => {}}
                  >
                    <Option value="jack">1</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                )}
              </Form.Item>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <Form.Item>
              <Button
                shape="round"
                htmlType="submit"
                size="large"
                type="primary"
              >
                Add space
              </Button>
            </Form.Item>
          </div>
        </div>
      </div>
    </Form>
  );
};

ListYourSpaceForm.propTypes = {};

const WrappedListYourSpaceForm = Form.create({ name: "list_your_space_form" })(
  ListYourSpaceForm
);

export default WrappedListYourSpaceForm;

// import React from 'react';
// import PropTypes from 'prop-types';

// const ListYourSpaceForm = () => {
//   return (
//     <div>
//       <h4>jweieuiwe</h4>
//     </div>
//   );
// };

// ListYourSpaceForm.propTypes = {

// };

// export default ListYourSpaceForm;
