import React from 'react';

import { ChannelButton } from '../ChannelButton';

import { Container, Category, AddCategoryIcon } from './styles';


export const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="work" />
      <ChannelButton channelName="fifa22" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
}