import { Col, Row, Typography } from 'antd';
import './index.css';

const { Title } = Typography;

function App() {
  return (
    <div>
      <Row gutter={8} justify={'center'}>
        <Col span={12}>
          <Title>h1. Ant Design</Title>
          <Title level={2}>h2. Ant Design</Title>
          <Title level={3}>h3. Ant Design</Title>
          <Title level={4}>h4. Ant Design</Title>
          <Title level={5}>h5. Ant Design</Title>
        </Col>
      </Row>
    </div>
  );
}

export default App;
