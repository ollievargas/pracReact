import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Checkbox from './Checkbox';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

}



// componentWillMount() {
//   fetch('/api')
//   .then((results) => results.json()
//   .then((data) => {
//     console.log(data)

//     this.setState({
//       data: data
//     })
//   })
// }

render() {
  return (
    <>
    <Button color="secondary">Digital Crafts</Button>
    <Button color="primary">Demo Day</Button>
    <Button color="secondary">Monday</Button>
    {/* <ul>
    {this.StaticRange.data.map((user) => {
      reuturn <li>{user.username}</li>
    })}
    </ul> */}
  </>
  );
}
}


