import { Layout } from 'antd';
import HomeContent from './content';

const { Header, Content } = Layout;

export default function Home() {
    return (
        <Layout>
            <Header>
                hello
        </Header>
            <Content>
                <HomeContent />
            </Content>
        </Layout>
    );
}