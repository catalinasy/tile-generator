import React, { useCallback, useEffect, useState } from 'react';
import { SliderPicker } from 'react-color';
import {
  ModalBody,
  ModalContainer,
  ModalOverlay,
  ModalTitle,
  ModalHeader,
  CloseButton,
  ButtonContainer,
  ColorDisplayContainer,
} from './styles';
import { Button } from '../Button';
import { ColorSelected } from '../SettingNavbar/styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  color: string;
  setColor: (value: string) => void;
}

export const ColorSelectionModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  color,
  setColor,
}) => {
  const [localColor, setLocalColor] = useState(color);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  const handleConfirm = useCallback(() => {
    setColor(localColor);
    onClose();
  }, [localColor]);

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Select Your Color</ModalTitle>
          <CloseButton onClick={onClose} aria-label="Close modal">
            {/* html element that returns x icon for close */}
            &times;
          </CloseButton>
        </ModalHeader>
        <ModalBody>
          <ColorDisplayContainer>
            <span>Selected Color</span>
            <ColorSelected background={localColor} />
          </ColorDisplayContainer>
          <SliderPicker
            color={localColor}
            onChangeComplete={(color) => {
              setLocalColor(color.hex);
            }}
          />
          <ButtonContainer>
            <Button onClick={handleConfirm}>Done</Button>
            <Button onClick={onClose}>Cancel</Button>
          </ButtonContainer>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};
