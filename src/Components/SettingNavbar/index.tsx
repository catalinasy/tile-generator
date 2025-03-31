import { useState } from 'react';

import { Button } from '../Button';
import { Select } from '../Select';
import { ColorSelectionModal } from '../ColorSelectionModal';

import { Container, ColorSelected } from './styles';

const MOCK_OPTIONS = [
  { value: 1, label: 'uno' },
  { value: 2, label: 'dos' },
  { value: 3, label: 'tres' },
];

const SettingNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [primaryColor, setPrimaryColor] = useState<string>('#000000');
  const [secondaryColor, setSecondaryColor] = useState<string>('#FF3333');
  const [changingState, setChanginState] = useState<'primary' | 'secondary'>(
    'primary'
  );

  return (
    <Container>
      <ColorSelectionModal
        isOpen={open}
        onClose={() => setOpen(false)}
        color={changingState === 'primary' ? 'primaryColor' : 'secondaryColor'}
        setColor={
          changingState === 'primary' ? setPrimaryColor : setSecondaryColor
        }
      />
      <Select options={MOCK_OPTIONS} title="Select a design" />
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
