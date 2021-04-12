import { Typography } from 'antd';
import { ContentWrap } from 'components/style/home';

const { Paragraph } = Typography;

export default function ContentDesc({bgColor}: {bgColor: string}) {
    return (
        <ContentWrap bgColor={bgColor}>
            <Paragraph ellipsis={false}>
                <div style={{paddingLeft: "10rem"}}>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
                </div>
            </Paragraph>
        </ContentWrap>
    );
}