import { Col, Row, Table } from 'antd';
import { User, UserService } from 'goodvandro-alganews-sdk';
import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [users, setUsers] = useState<User.Summary[]>([]);

  useEffect(() => {
    UserService.getAllUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Row gutter={8} justify={'center'}>
        <Col span={24}>
          <Table
            dataSource={users}
            columns={[
              {
                title: 'Name',
                dataIndex: 'name',
              },
              {
                title: 'E-mail',
                dataIndex: 'email',
              },
            ]}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
