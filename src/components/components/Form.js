import React, { Component } from "react";

import { Button, FormGroup, Input } from "../../styled";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "test@test.com" };
  }

  handleChange = e => {
    this.setState({ email: e.target.email });
  };

  handleSubmit = e => {
    e.preventDefault();

    const listId = "7059a598b1";

    const apiKey = new Buffer("any:56c902711fc1fd486afc6cc654975a4c-us16").toString('base64');
    const auth = `Basic ${apiKey}`;

    console.log(auth)

    fetch(`https://us16.api.mailchimp.com/3.0/lists/${listId}/members`, {
      mode: "no-cors",
      method: "POST",
      headers: {
        Authorization: auth,
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email_address: this.state.email,
        status: "subscribed"
      })
    })
      .then(function(e) {
        console.log("fetch finished");
      })
      .catch(function(e) {
        console.log("fetch error");
      });
  };

  render() {
    return (
      <FormGroup onSubmit={this.handleSubmit} method="POST">
        <Input
          placeholder="enter email..."
          name="email"
          id="email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <Button type="submit" value="Submit" icon="arrow-right" />
      </FormGroup>
    );
  }
}
