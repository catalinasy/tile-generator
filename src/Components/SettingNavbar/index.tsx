import { useContext, useState } from 'react';

import { Button } from '../Button';
import { Select } from '../Select';
import { ColorSelectionModal } from '../ColorSelectionModal';
import { Container, ColorSelected } from './styles';
import { Context } from '../../Context';

const Designs = [
  { value: 'flower', label: 'Flowers' },
  { value: 'circles', label: 'Circles' },
  { value: 'grid', label: 'Grid' },
  { value: 'sun', label: 'Sun' },
];

const SettingNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [changingState, setChanginState] = useState<'primary' | 'secondary'>(
    'primary'
  );
  const {
    primaryColor,
    secondaryColor,
    selectedDesign,
    setPrimaryColor,
    setSecondaryColor,
    setSelectedDesign,
  } = useContext(Context);

  return (
    <Container>
      <ColorSelectionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        color={changingState === 'primary' ? primaryColor : secondaryColor}
        setColor={
          changingState === 'primary' ? setPrimaryColor : setSecondaryColor
        }
      />
      <Select
        options={Designs}
        title="Select a design"
        value={selectedDesign}
        onChange={setSelectedDesign}
      />
      <Button
        onClick={() => {
          setChanginState('primary');
          setOpen(true);
        }}
      >
        <span>Primary Color</span>
        <ColorSelected background={primaryColor} />
      </Button>
      <Button
        onClick={() => {
          setChanginState('secondary');
          setOpen(true);
        }}
      >
        <span>Secondary Color</span>
        <ColorSelected background={secondaryColor} />
      </Button>
    </Container>
  );
};

export default SettingNavbar;
