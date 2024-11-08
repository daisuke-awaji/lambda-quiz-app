import React from 'react';
import styled from 'styled-components';
import { Question } from '../types/quiz';

interface QuizCardProps {
  question: Question;
  onAnswer: (index: number) => void;
  isAnswered: boolean;
  selectedAnswer?: number;
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 2rem auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const QuestionText = styled.h2`
  color: #232f3e;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 1.4;
`;

const OptionButton = styled.button<{ isSelected?: boolean; isCorrect?: boolean }>`
  width: 100%;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 2px solid #ddd;
  border-radius: 8px;
  background: ${({ isSelected, isCorrect }) =>
    isSelected
      ? isCorrect
        ? '#22c55e'
        : '#ef4444'
      : 'white'};
  color: ${({ isSelected }) => (isSelected ? 'white' : '#232f3e')};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  &:hover {
    background: ${({ isAnswered }) => (isAnswered ? undefined : '#f3f4f6')};
    transform: ${({ isAnswered }) => (isAnswered ? undefined : 'translateY(-1px)')};
  }

  &:disabled {
    cursor: default;
    opacity: ${({ isSelected }) => (isSelected ? 1 : 0.7)};
  }
`;

const Explanation = styled.div`
  margin-top: 1.5rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  color: #475569;
  border-left: 4px solid #ff9900;
  font-size: 1.1rem;
  line-height: 1.5;
`;

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  onAnswer,
  isAnswered,
  selectedAnswer
}) => {
  return (
    <CardContainer>
      <QuestionText>{question.question}</QuestionText>
      {question.options.map((option, index) => (
        <OptionButton
          key={index}
          onClick={() => onAnswer(index)}
          disabled={isAnswered}
          isSelected={selectedAnswer === index}
          isCorrect={isAnswered && index === question.correctAnswer}
        >
          {option}
        </OptionButton>
      ))}
      {isAnswered && question.explanation && (
        <Explanation>{question.explanation}</Explanation>
      )}
    </CardContainer>
  );
};

export default QuizCard;