import { Col, Row } from 'antd';
import './index.css';

function App() {
  return (
    <div>
      <Row gutter={16} justify={'center'} align={'middle'}>
        <Col span={4}>
          <div className='Column'></div>
          coluna 1
        </Col>
        <Col span={4}>
          <div className='Column'></div>
          coluna 2
        </Col>
        <Col span={8}>
          <div className='Column'></div>
          coluna 3
        </Col>
        <Col span={4}>
          <div className='Column'></div>
          coluna 4
        </Col>
        <Col span={5}>
          <div className='Column'></div>
          coluna 5
        </Col>
      </Row>
    </div>
  );
}

export default App;
