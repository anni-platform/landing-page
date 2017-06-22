import React, { Component } from "react";

import { Button, FormGroup, Input } from "../../styled";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "ivan.cruz@gmail.com" };
  }

  handleChange = e => {
    this.setState({ email: e.target.email });
  };

  handleSubmit = e => {
    e.preventDefault();

    const listId = "7059a598b1";
    const apiKey = btoa("apikey:670539a6e5464fc9aa0eabbd4095d6db-us16");

    fetch(`https://us16.api.mailchimp.com/3.0/lists/${listId}/members/`, {
      mode: "no-cors",
      method: "POST",
      header: {
        Authorization: "apikey" + apiKey,
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
