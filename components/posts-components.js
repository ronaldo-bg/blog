function Center(props) {
    return <div style={{ textAlign: 'center' }}>{props.children}</div>;
}

function Justify(props) {
    return <div style={{ textAlign: 'justify' }}>{props.children}</div>;
}

import { Typography, Layout, Avatar, PageHeader } from 'antd';

const { Content, Footer } = Layout;
const { Text, Link } = Typography;

function Frame(props) {

    function Extras(props) {
        return (
            <Link href='https://www.instagram.com/ronaldo.bguimaraes' target='_blank' {...props}>
                <Avatar size='large' src='/photo.jpg'></Avatar>
            </Link>
        )
    }

    return (
        <Layout style={{ backgroundColor: '#e0e0e0' }}>
            <PageHeader title='Blog do Ronaldo' extra={<Extras />}></PageHeader>
            <Content style={{ padding: 25, backgroundColor: '#fafafa' }}>
                {props.children}
            </Content>
            <Footer style={{ backgroundColor: '#e0e0e0' }}>
                <Center>
                    <Text>@ 2020 por Ronaldo B. Guimarães</Text>
                </Center>
            </Footer>
        </Layout>
    )
}

export { Center, Justify, Frame };