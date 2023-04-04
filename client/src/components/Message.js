import { message } from 'antd';
import { useEffect } from 'react';
const Message = ({props, mess}) => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: mess,
    });
  };
  const error = () => {
    messageApi.open({
      type: 'error',
      content: mess,
    });
  };
  useEffect(() => {
    console.log(props);
    if (props === 1) {
        success();
    }
    else if (props === 2) {
        error();
    }
})

  return (
    <>
    {contextHolder}
    </>
  );
};
export default Message;