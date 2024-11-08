import React from 'react';
import styled, { keyframes } from 'styled-components';
import lambdaIcon from '../icons/lambda.svg';
import oldLambdaIcon from '../icons/old-lambda.svg';
import cakeIcon from '../icons/cake.svg';

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
`;

const Icon = styled.div<{ size: number; top: number; left: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  animation: ${float} 6s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  opacity: 0.1;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.2;
    transform: scale(1.1);
  }
`;

const LambdaIcon = styled(Icon)`
  background-image: url(${lambdaIcon});
`;

const OldLambdaIcon = styled(Icon)`
  background-image: url(${oldLambdaIcon});
  opacity: 0.08; // 古いアイコンは少し薄めに
`;

const CakeIcon = styled(Icon)`
  background-image: url(${cakeIcon});
`;

interface IconConfig {
  id: number;
  size: number;
  top: number;
  left: number;
  delay: number;
  type: 'new-lambda' | 'old-lambda' | 'cake';
}

const generateRandomIcons = (count: number): IconConfig[] => {
  const icons: IconConfig[] = [];
  
  // 各タイプのアイコンを均等に生成
  for (let i = 0; i < count; i++) {
    let size: number;
    const type = i % 3 === 0 ? 'new-lambda' : 
                i % 3 === 1 ? 'old-lambda' : 'cake';
    
    // ケーキアイコンは少し大きめに
    if (type === 'cake') {
      size = Math.random() * 20 + 35; // 35-55px
    } else {
      size = Math.random() * 25 + 25; // 25-50px
    }

    icons.push({
      id: i,
      size,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      type
    });
  }
  
  return icons;
};

const FloatingIcons: React.FC = () => {
  const icons = generateRandomIcons(24); // 8個ずつ、合計24個のアイコン

  const renderIcon = (icon: IconConfig) => {
    const commonProps = {
      key: `${icon.type}-${icon.id}`,
      size: icon.size,
      top: icon.top,
      left: icon.left,
      delay: icon.delay
    };

    switch (icon.type) {
      case 'new-lambda':
        return <LambdaIcon {...commonProps} />;
      case 'old-lambda':
        return <OldLambdaIcon {...commonProps} />;
      case 'cake':
        return <CakeIcon {...commonProps} />;
    }
  };

  return (
    <Container>
      {icons.map(renderIcon)}
    </Container>
  );
};

export default FloatingIcons;