import React, { useState } from "react";
import styled from "styled-components";
import QuizCard from "./components/QuizCard";
import ResultCard from "./components/ResultCard";
import FloatingIcons from "./components/background/FloatingIcons";
import { questions } from "./data/questions";
import { QuizState } from "./types/quiz";

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  position: relative;
`;

const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
`;

const Title = styled.h1`
  color: #232f3e;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Subtitle = styled.h2`
  color: #ff9900;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Progress = styled.div`
  max-width: 600px;
  margin: 0 auto 1rem;
  text-align: center;
  color: #666;
  position: relative;
  z-index: 1;
`;

const ProgressBar = styled.div`
  background: rgba(255, 255, 255, 0.5);
  height: 8px;
  border-radius: 4px;
  margin: 0.5rem auto;
  max-width: 600px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ProgressFill = styled.div<{ progress: number }>`
  background: #ff9900;
  height: 100%;
  border-radius: 4px;
  width: ${({ progress }) => progress}%;
  transition: width 0.3s ease;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    score: 0,
    showResult: false,
    userAnswers: [],
  });

  const handleAnswer = (selectedAnswer: number) => {
    const currentQuestion = questions[quizState.currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

    setQuizState((prev) => ({
      ...prev,
      score: isCorrect ? prev.score + 1 : prev.score,
      userAnswers: [...prev.userAnswers, selectedAnswer],
    }));

    setTimeout(() => {
      if (quizState.currentQuestionIndex === questions.length - 1) {
        setQuizState((prev) => ({
          ...prev,
          showResult: true,
        }));
      } else {
        setQuizState((prev) => ({
          ...prev,
          currentQuestionIndex: prev.currentQuestionIndex + 1,
        }));
      }
    }, 1500);
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      score: 0,
      showResult: false,
      userAnswers: [],
    });
  };

  const progress = (quizState.currentQuestionIndex / questions.length) * 100;

  return (
    <AppContainer>
      <FloatingIcons />
      <Header>
        <Title>AWS Lambda 10周年記念クイズ</Title>
        <Subtitle>サーバーレスの世界へようこそ！</Subtitle>
      </Header>

      <ContentWrapper>
        {!quizState.showResult && (
          <>
            <Progress>
              Question {quizState.currentQuestionIndex + 1} of{" "}
              {questions.length}
            </Progress>
            <ProgressBar>
              <ProgressFill progress={progress} />
            </ProgressBar>
            <QuizCard
              question={questions[quizState.currentQuestionIndex]}
              onAnswer={handleAnswer}
              isAnswered={
                quizState.userAnswers[quizState.currentQuestionIndex] !==
                undefined
              }
              selectedAnswer={
                quizState.userAnswers[quizState.currentQuestionIndex]
              }
            />
          </>
        )}

        {quizState.showResult && (
          <ResultCard
            score={quizState.score}
            totalQuestions={questions.length}
            onRestart={handleRestart}
          />
        )}
      </ContentWrapper>
    </AppContainer>
  );
}

export default App;
