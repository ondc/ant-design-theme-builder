import React from 'react';
import { Avatar, Button } from 'antd';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

class Autoset extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: UserList[0],
      color: colorList[0],
    };
  }
  changeUser = () => {
    const index = UserList.indexOf(this.state.user);
    this.setState({
      user: index < UserList.length - 1 ? UserList[index + 1] : UserList[0],
      color: index < colorList.length - 1 ? colorList[index + 1] : colorList[0],
    });
  }
  render() {
    return (
      <div>
        <Avatar style={{ backgroundColor: this.state.color }} size="large">{this.state.user}</Avatar>
        <Button size="small" style={{ marginLeft: 16 }} onClick={this.changeUser}>Change</Button>
      </div>
    );
  }
}

export default function DemoComponent_avatar_dynamic() {
return(<Autoset />
);
};

export const demo = <DemoComponent_avatar_dynamic key="DemoComponent_avatar_dynamic" />;
