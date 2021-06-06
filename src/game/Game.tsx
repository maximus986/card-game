import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store';
import { Bot } from './Bot';
import { Player } from './Player';
import { Table } from './Table';
import { fetchCardsDeck } from './gameSlice';

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
            <BotContainer />
            <Table />
            <BotContainer>
              <Bot name="Ola" botId="bot1" nextToPlay="me" />
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
            <Bot name="Rosetta" botId="bot2" nextToPlay="me" />
          </BotContainer>
          <Flex>
            <BotContainer />
            <Table />
            <BotContainer>
              <Bot name="Ola" botId="bot1" nextToPlay="bot2" />
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
            <Bot name="Rosetta" botId="bot2" nextToPlay="bot3" />
          </BotContainer>
          <Flex>
            <BotContainer>
              <Bot name="Carolyn" botId="bot3" nextToPlay="me" />
            </BotContainer>
            <Table />
            <BotContainer>
              <Bot name="Ola" botId="bot1" nextToPlay="bot2" />
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
