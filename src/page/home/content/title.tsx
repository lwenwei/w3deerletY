import { Typography } from 'antd';
import { ContentWrap } from 'components/style/home'

const { Title } = Typography;

export default function ContentTitle({bgColor}: {bgColor: string}) {
    return (
        <ContentWrap bgColor={bgColor}>
            <Title>h1. Ant Design</Title>
        </ContentWrap>
    );
}