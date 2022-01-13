import React, {useRef, useEffect } from 'react';
import { ChannelMessage, Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

export const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop =  div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
          key={n}
          author= "Rodrigo Redivo"
          date="20/01/2020"
          content="Hoje é meu aniversário!"
          />
        ))}

        <ChannelMessage
          author= "Diego Alves"
          date="10/01/2020"
          content={
            <>
              <Mention>@RodrigoRedivo</Mention>, bora jogar fifa ou csgo?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}