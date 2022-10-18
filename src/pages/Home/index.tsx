import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Input } from 'antd';
import styles from './index.less';

const HomePage: React.FC = () => {
  const { searchValue, onInputChange } = useModel('Home.useTest');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Input value={searchValue} onChange={onInputChange} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
