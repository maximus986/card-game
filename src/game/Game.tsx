import React, { Fragment } from 'react';
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
          <TopBotContainer />
          <Flex>
            <BotContainer>
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
          <TopBotContainer>
            <Bot botId="bot2" nextToPlay="me" />
          </TopBotContainer>
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
          <TopBotContainer>
            <Bot botId="bot2" nextToPlay="bot3" />
          </TopBotContainer>
          <Flex>
            <BotContainer>
              <Bot botId="bot1" nextToPlay="bot2" />
            </BotContainer>
            <Table />
            <BotContainer>
              <Bot botId="bot3" nextToPlay="me" />
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
  height: 95px;
  width: 125px;
  @media (min-width: 768px) {
    height: 103px;
    width: 265px;
  }
  @media (min-width: 1280px) {
    height: 172px;
    width: 410px;
  }
  @media (min-width: 1600px) {
    height: 160px;
    width: 551px;
  }
`;
const TopBotContainer = styled.div`
  height: 95px;
  width: 125px;
  margin: 0 auto;
  @media (min-width: 768px) {
    height: 103px;
    width: 275px;
  }
  @media (min-width: 992px) {
    height: 103px;
    width: 265px;
  }
  @media (min-width: 1280px) {
    height: 172px;
    width: 410px;
  }
  @media (min-width: 1600px) {
    height: 160px;
    width: 551px;
  }
`;
