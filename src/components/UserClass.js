import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);


  this.state = {
    userInfo : {  },
  };
}

async componentDidMount() {
  const data = await fetch("https://api.github.com/users/man0jjj");
  const json = await data.json();

  this.setState({
    userInfo: json
  })
}

componentDidUpdate() {
   console.log("Component Did Update")
}

componentWillUnmount() {
  console.log("Component will Unmount")
}

  render() {
    const { name, location, bio } = this.state.userInfo;

    return (
      <div className="user-card">
        <h2> {name}</h2>
        <h2> {location}</h2>
        <h2> {bio}</h2>
      </div>
    );
  }
}

export default UserClass;
