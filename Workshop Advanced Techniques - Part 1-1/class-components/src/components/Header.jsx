import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Component } from 'react';
import { Menu } from 'antd';
import TodoContext from '../contexts/TodoContext';
import withNavigate from '../HOC/withNavigate';

class Header extends Component {
    render() {
        const items = [
            {
                label: 'Navigation One',
                key: 'mail',
                icon: <MailOutlined />,
            },
            {
                label: 'Navigation Two',
                key: 'app',
                icon: <AppstoreOutlined />,
                disabled: true,
            },
            {
                label: (
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                ),
                key: 'alipay',
            },
        ];

        // this.props.navigate('/')

        return (
            <TodoContext.Consumer>
                {({ name }) => {
                    <>
                        <Menu mode="horizontal" items={items} />

                        <h3>{name}</h3>
                    </>
                }}
            </TodoContext.Consumer>
        );
    }
}

export default withNavigate(Header);
