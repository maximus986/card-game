import styled from '@emotion/styled';
import { Card } from 'data/game/cardsDeck';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store';
import { Bot } from './Bot';
import { Player } from './Player';
import { Table } from './Table';

// subscribes to numberOfPlayer which can be 2, 3 or 4

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
            <Table cards={mockTableCards} />
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
            <Table cards={mockTableCards} />
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
            <Table cards={mockTableCards} />
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

const mockTableCards: Card[] = [
  {
    code: 'AS',
    image: 'https://deckofcardsapi.com/static/img/AS.png',
    value: 'ACE',
  },
  {
    code: '2S',
    image: 'https://deckofcardsapi.com/static/img/2S.png',
    value: '2',
  },
  {
    code: '7S',
    image: 'https://deckofcardsapi.com/static/img/7S.png',
    value: '7',
  },
  {
    code: '2H',
    image: 'https://deckofcardsapi.com/static/img/2H.png',
    value: '2',
  },
];
