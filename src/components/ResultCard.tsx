import React from 'react';
import styled from 'styled-components';

interface ResultCardProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

const ResultContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 2rem auto;
  text-align: center;
`;

const Title = styled.h2`
  color: #232f3e;
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Score = styled.div`
  font-size: 3rem;
  color: #ff9900;
  margin: 1.5rem 0;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Message = styled.p`
  color: #475569;
  margin: 1.5rem 0;
  font-size: 1.2rem;
  line-height: 1.6;
`;

const RestartButton = styled.button`
  background: #ff9900;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background: #ff8800;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const Confetti = styled.div`
  position: absolute;
  width: 10px;
  height: 10px;
  background: #ff9900;
  border-radius: 50%;
`;

const ResultCard: React.FC<ResultCardProps> = ({ score, totalQuestions, onRestart }) => {
  const percentage = (score / totalQuestions) * 100;
  
  const getMessage = () => {
    if (percentage === 100) return '完璧です！AWS Lambdaのエキスパートですね！🏆';
    if (percentage >= 80) return '素晴らしい成績です！サーバーレスの世界をよく理解していますね！🌟';
    if (percentage >= 60) return 'よくできました！AWS Lambdaの基礎はしっかり押さえていますね！👍';
    return 'チャレンジャー精神が素晴らしいです！もっとサーバーレスの世界を探検しましょう！💪';
  };

  return (
    <ResultContainer>
      <Title>クイズ結果</Title>
      <Score>
        {score} / {totalQuestions}
        <br />
        <span style={{ fontSize: '1.5rem' }}>({percentage}%)</span>
      </Score>
      <Message>{getMessage()}</Message>
      <RestartButton onClick={onRestart}>
        もう一度チャレンジ
      </RestartButton>
    </ResultContainer>
  );
};

export default ResultCard;