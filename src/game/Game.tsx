import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Bot } from './Bot';
import { Player } from './Player';
import { Table } from './Table';

export const Game = () => {
  const gameState = useSelector((state: RootState) => state.game.gameState);
  const cardsDeck = useSelector((state: RootState) => state.game.cardsDeck);

  if (gameState === 'initial') {
    return null;
  }

  return (
    <>
      <TwoPlayers />
      <ThreePlayers />
      <FourPlayers />
    </>
  );
};

const TwoPlayers = () => {
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);
  return (
    <>
      {numberOfPlayers === 2 ? (
        <>
          <BotContainer />
          <Flex>
            <BotContainer />
            <Table />
            <BotContainer>
              <Bot name="Ola" />
            </BotContainer>
          </Flex>
          <PlayerContainer>
            <Player />
          </PlayerContainer>
        </>
      ) : null}
    </>
  );
};
const ThreePlayers = () => {
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);
  return (
    <>
      {numberOfPlayers === 3 ? (
        <>
          <BotContainer>
            <Bot name="Rosetta" />
          </BotContainer>
          <Flex>
            <BotContainer />
            <Table />
            <BotContainer>
              <Bot name="Ola" />
            </BotContainer>
          </Flex>
          <PlayerContainer>
            <Player />
          </PlayerContainer>
        </>
      ) : null}
    </>
  );
};

const FourPlayers = () => {
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);
  return (
    <>
      {numberOfPlayers === 4 ? (
        <>
          <BotContainer>
            <Bot name="Rosetta" />
          </BotContainer>
          <Flex>
            <BotContainer>
              <Bot name="Carolyn" />
            </BotContainer>
            <Table />
            <BotContainer>
              <Bot name="Ola" />
            </BotContainer>
          </Flex>
          <PlayerContainer>
            <Player />
          </PlayerContainer>
        </>
      ) : null}
    </>
  );
};

const Flex = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
`;

const PlayerContainer = styled.div`
  margin: 0 auto;
`;

const BotContainer = styled.div`
  height: 160px;
  width: 551px;
  margin: 0 auto;
`;
