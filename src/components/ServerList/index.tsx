import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

export const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton isHome />
      <ServerButton isHome hasNotifications />
      <ServerButton isHome mentions={3} />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome hasNotifications />
      <ServerButton isHome />
      <ServerButton isHome/>
      <ServerButton isHome mentions={7} />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome mentions={17} />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
      <ServerButton isHome />
    </Container>
  )
};