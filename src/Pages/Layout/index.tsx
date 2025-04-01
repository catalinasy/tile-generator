import { useContext } from 'react';
import Canvas from '../../Components/Canvas';
import SettingNavbar from '../../Components/SettingNavbar';
import { ContentContainer, Root } from './styles';
import { Context } from '../../Context';

const Layout = () => {
  const { selectedDesign } = useContext(Context);

  return (
    <Root>
      <h1>Pattern Generator</h1>
      <ContentContainer>
        <SettingNavbar />
        <Canvas design={selectedDesign} />
      </ContentContainer>
    </Root>
  );
};

export default Layout;
