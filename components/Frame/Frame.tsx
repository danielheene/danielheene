import { css } from '@emotion/react';

const containerStyles = css`
  display: block;
  position: relative;
  width: 100%;

  &::before {
    content: '';
    display: block;
  }
`;

const iframeStyles = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
`;

interface Props {
  src: string;
  title?: string;
  ratio?: number;
}

export const Frame = ({ src, title, ratio = 16 / 9 }: Props): JSX.Element => {
  return (
    <div
      css={[
        containerStyles,
        css`
          &::before {
            padding-top: ${100 / ratio}%;
          }
        `,
      ]}
    >
      <iframe
        src={src}
        css={iframeStyles}
        title={title || 'Frame'}
        scrolling='no'
        frameBorder='0'
        allowFullScreen
        allowtransparency='true'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        // onLoad={(event) => (event.currentTarget.src = src)}
      >
        a
      </iframe>
    </div>
  );
};
