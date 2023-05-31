import { Button, Result } from 'antd';
import { useNavigate } from "react-router-dom";


function NoPage() {
  const navigate = useNavigate();

  return (
    <>
    <div className='mt-5'>
   <Result
    status="404"
    title="404"
    subTitle="Sorry, you are not authorized to access this page."
    extra={<Button type="primary"  onClick={() => navigate('/')}>Back Home</Button>}
  />
    </div>
    
    </>
  );
}

export default NoPage;
