import React from 'react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Bot } from './Bot';
import { Player } from './Player';
import { Table } from './Table';

export const Game = () => (
  <>
    <TwoPlayers />
    <ThreePlayers />
    <FourPlayers />
  </>
);

const TwoPlayers = () => {
  const numberOfPlayers = useSelector((state: RootState) => state.game.numberOfPlayers);
  return (
    <>
      {numberOfPlayers === 2 ? (
        <>
          <BotContainer />
          <Flex>
            <BotContainer>
              {' '}
              <Bot botId="bot1" nextToPlay="me" />
            </BotContainer>
            <Table />
            <BotContainer />
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
            <Bot botId="bot2" nextToPlay="me" />
          </BotContainer>
          <Flex>
            <BotContainer>
              <Bot botId="bot1" nextToPlay="bot2" />
            </BotContainer>
            <Table />
            <BotContainer />
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
            <Bot botId="bot2" nextToPlay="bot3" /> {/* Rosetta */}
          </BotContainer>
          <Flex>
            <BotContainer>
              <Bot botId="bot1" nextToPlay="bot2" /> {/* Carolyn */}
            </BotContainer>
            <Table />
            <BotContainer>
              <Bot botId="bot3" nextToPlay="me" /> {/* Ola */}
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
