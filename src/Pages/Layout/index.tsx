import Canvas from '../../Components/Canvas';
import SettingNavbar from '../../Components/SettingNavbar';
import { ContentContainer, Root } from './styles';

const Layout = () => {
  return (
    <Root>
      <h1>Tile Generator</h1>
      <ContentContainer>
        <SettingNavbar />
        <Canvas />
      </ContentContainer>
    </Root>
  );
};

export default Layout;
