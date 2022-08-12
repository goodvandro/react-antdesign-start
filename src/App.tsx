import { Col, Input, Row, Table } from 'antd';
import { User, UserService } from 'goodvandro-alganews-sdk';
import { useEffect, useState } from 'react';
import './index.css';

function App() {
  const [users, setUsers] = useState<User.Summary[]>([]);
  const [name, setName] = useState('')

  useEffect(() => {
    UserService.getAllUsers().then(setUsers);
  }, []);

  return (
    <div>
      <Row gutter={8}>
        <Col span={4}>{name}</Col>
        <Col span={4}>
          <Input
            placeholder={'E.g.: Evandro Lima'}
            size={'large'}
            suffix={'Pai do React'}
            prefix={'Eu'}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Col>
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
