import styled from '@emotion/styled';
import React, { HTMLAttributes } from 'react';

interface ColorProps extends HTMLAttributes<HTMLDivElement> {
  subtitle?: string;
  theme?: string;
  title?: string;
  token?: string;
  value?: string;
}

export const Color: React.VFC<ColorProps> = ({
  subtitle = '',
  theme,
  title = '',
  token = '',
  value,
  ...props
}): JSX.Element => (
  <Card {...props}>
    <div>
      <h5 className="title">{title}</h5>
      <span className="token">{token}</span>
      <span>{subtitle}</span>
      <span className="value">{value}</span>
    </div>
    <div className="preview" style={{ ['--color' as string]: value }}>
      {theme && <span className="sticker">{theme}</span>}
    </div>
  </Card>
);

const Card = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: var(--size, 7em);

  div {
    display: inherit;
    flex-direction: column;
    gap: 2px;
  }

  span {
    font-size: 0.8em;
    opacity: 0.5;
  }

  .title {
    font-weight: 500;
    margin: 0;
    margin-bottom: 4px;
  }

  .token {
    opacity: 0.7;
    text-transform: uppercase;
  }

  .value {
    font-family: monospace;
    font-size: 1em;
    margin-top: 2px;
    opacity: 0.5;
  }

  .preview {
    --color: ;
    --size: 72px;

    background-color: var(--color);
    border-radius: 100%;
    box-shadow: 0 0 8px 2px rgba(0 0 0 / 20%);
    height: var(--size);
    order: -1;
    width: var(--size);
  }

  .sticker {
    align-self: flex-start;
    background-color: black;
    border-radius: 2px;
    box-shadow: 0 0 2px rgba(0 0 0 / 20%);
    font-size: 0.7em;
    opacity: 1;
    padding: 0.125em 0.5em;
    text-transform: uppercase;
    transform: translate(-4px, 8px);
  }
`;
