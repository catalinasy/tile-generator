import React, { useEffect } from 'react';
import { SliderPicker } from 'react-color';
import {
  ModalBody,
  ModalContainer,
  ModalOverlay,
  ModalTitle,
  ModalHeader,
  CloseButton,
  ButtonContainer,
} from './styles';
import { Button } from '../Button';

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
          <SliderPicker
            color={color}
            onChangeComplete={(color) => {
              setColor(color.hex);
            }}
          />
          <ButtonContainer>
            <Button onClick={onClose}>Done</Button>
          </ButtonContainer>
        </ModalBody>
      </ModalContainer>
    </ModalOverlay>
  );
};
