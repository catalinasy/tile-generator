import Canvas from '../../Components/Canvas';
import SettingNavbar from '../../Components/SettingNavbar';
import { Root } from './styles';

const Layout = () => {
  return (
    <Root>
      <SettingNavbar />
      <Canvas />
    </Root>
  );
};

export default Layout;
