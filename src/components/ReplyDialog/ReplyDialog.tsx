import React, { FunctionComponent, useState, useContext } from 'react';
import { Modal, Form, Input, Button } from 'antd';

import 'antd/dist/antd.css';

import { AuthContext } from '../Auth';
import { signInViaGoogle, addReply } from '../../services/firestore';
import { useHistory } from 'react-router-dom';

type replyProps = {
  trigger?: any;
  title?: string;
  postId: string;
};

const ReplyDialog: FunctionComponent<replyProps> = ({ title, postId }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState(null);
  const { currentUser } = useContext(AuthContext);

  const cancelHandler = () => {
    console.log('Dialog closed?');
    setIsVisible(false);
  };

  const history = useHistory();
  const okHandler = () => {
    const data = {
      message,
      userId: currentUser.uid,
    };
    console.log(data);
    addReply(postId)(data);
    setIsVisible(false);
    history.push('/thank-you');
  };
  const editMessageHandler = (event: any) => {
    setMessage(event.target.value);
  };
  const loginButtonHandler = () => signInViaGoogle(() => {});
  return !!currentUser ? (
    <>
      <Button
        type='primary'
        style={{ background: 'var(--primary-color)' }}
        onClick={() => setIsVisible(true)}
      >
        Request Item
      </Button>
      <Modal
        visible={isVisible}
        title={title}
        okText='Submit'
        onCancel={cancelHandler}
        onOk={okHandler}
      >
        <Form layout='vertical'>
          <Form.Item name='message' rules={[{ required: true }]} label='Title'>
            <Input onChange={editMessageHandler} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  ) : (
    <Button
      type='primary'
      style={{ background: 'var(--primary-color)' }}
      onClick={loginButtonHandler}
    >
      Sign in to request item!
    </Button>
  );
};

export default ReplyDialog;
