import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { playerIdToPlayerNameMap } from './playerIdToPlayerNameMap';
import ConfettiExplosion from '@reonomy/react-confetti-explosion';

export const Winner = () => {
  const score = useSelector((state: RootState) => state.game.score);
  const winnerValue = score.reduce((prev, curr) =>
    prev.value > curr.value ? prev : curr,
  ).value;
  const winnersScore = score.filter((item) => item.value === winnerValue);
  const winnerText = winnersScore.length === 1 ? 'The winner is: ' : 'The winners are: ';

  const handleWinners = () => {
    switch (winnersScore.length) {
      case 1:
        return playerIdToPlayerNameMap[winnersScore[0].playerId];
      case 2:
        return `${playerIdToPlayerNameMap[winnersScore[0].playerId]} and ${
          playerIdToPlayerNameMap[winnersScore[1].playerId]
        }`;
      case 3:
        return `${playerIdToPlayerNameMap[winnersScore[0].playerId]}, ${
          playerIdToPlayerNameMap[winnersScore[1].playerId]
        } and ${playerIdToPlayerNameMap[winnersScore[2].playerId]}`;
      default:
        return `${playerIdToPlayerNameMap[winnersScore[0].playerId]}, ${
          playerIdToPlayerNameMap[winnersScore[1].playerId]
        }, ${playerIdToPlayerNameMap[winnersScore[2].playerId]} and ${
          playerIdToPlayerNameMap[winnersScore[3].playerId]
        }`;
    }
  };

  return (
    <Container>
      <Title>{`${winnerText} ${handleWinners()}`}</Title>
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
