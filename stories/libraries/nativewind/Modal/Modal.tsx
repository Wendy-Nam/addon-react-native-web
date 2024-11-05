import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Animated from 'react-native-reanimated';
import { FadeInDown } from 'react-native-reanimated';
import RoundedBox, { DesignPreset } from '../Frames/RoundedBox';
import { Portal } from 'react-native-paper';

interface ModalProps {
  visible?: boolean;
  hideModal?: () => void;
  children: React.ReactNode;
  tapOutsideToClose?: boolean; // 외부 터치 시 닫기 옵션
  position?: 'center' | 'bottom'; // 모달 위치 옵션
  transparent?: boolean;
}

interface ModalBackgroundProps {
  onPress?: () => void;
  children?: React.ReactNode;
  position?: 'center' | 'bottom'; // 배경 컴포넌트에 모달 위치 추가
  transparent?: boolean;
}

interface ModalContentProps {
  children?: React.ReactNode;
  preset?: DesignPreset; // RoundedBox에 적용할 preset prop
}

// 배경 컴포넌트
const ModalBackground: React.FC<ModalBackgroundProps> = ({ onPress, children, position = 'center', transparent = false }) => {
  const containerStyle =
    position === 'center' ? 'justify-center items-center' : 'justify-end'; // 중앙 또는 하단 정렬

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View className={`flex-1 w-full h-full absolute inset-0 ${!transparent ? 'bg-black/60' : 'bg-transparent'} ${containerStyle}`}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

// 모달 내용 컴포넌트
const ModalContent: React.FC<ModalContentProps> = ({ children, preset }) => {
  return (
    <Animated.View entering={FadeInDown.duration(500)}>
      <RoundedBox shadow={false} preset={preset}>
        {children}
      </RoundedBox>
    </Animated.View>
  );
};

// 메인 모달 컴포넌트
export const Modal: React.FC<ModalProps> = ({ visible = false, hideModal, children, tapOutsideToClose = false, position = 'center', transparent = false }) => {
  if (!visible) return null; // 모달이 보이지 않을 때는 렌더링하지 않음

  // position에 따라 preset 설정
  const preset = position === 'bottom' ? 'modalB' : 'modalC';

  return (
    <Portal>
      <View className="absolute inset-0 z-10 w-full h-full flex-1">
        <ModalBackground onPress={tapOutsideToClose ? hideModal : undefined} position={position} transparent={transparent}>
          <ModalContent preset={preset}>
            {children}
          </ModalContent>
        </ModalBackground>
      </View>
    </Portal>
  );
};

export default Modal;
