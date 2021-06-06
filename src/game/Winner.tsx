import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { playerIdToPlayerNameMap } from './playerIdToPlayerNameMap';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

export const Winner = () => {
  const score = useSelector((state: RootState) => state.game.score);
  const winnerId = score.reduce((prev, curr) =>
    prev.value > curr.value ? prev : curr,
  ).playerId;
  return (
    <Container>
      <Title>The winner is: {playerIdToPlayerNameMap[winnerId]} </Title>
      <ConfettiExplosion
        force={0.4}
        duration={3000}
        particleCount={60}
        floorHeight={1000}
        floorWidth={1000}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  text-align: center;
  color: #6db06d;
`;
