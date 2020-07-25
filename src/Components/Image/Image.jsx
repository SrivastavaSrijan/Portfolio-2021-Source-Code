import React from 'react';

import loadingImage from '../../Assets/SVG/Spinner.svg';
import errorImage from '../../Assets/SVG/Spinner.svg';
import Img from 'react-cool-img';
export const Image = ({ imgJpg, imgWebp, alt }) => {
  return (
    <picture>
      <Img
        style={{ objectFit: 'contain' }}
        placeholder={loadingImage}
        error={errorImage}
        type='image/webp'
        srcSet={imgWebp}
        alt='A picture of me'
      />
      <Img
        style={{ objectFit: 'contain' }}
        placeholder={loadingImage}
        type='image/webp'
        error={errorImage}
        srcSet={imgJpg}
        alt={alt}
      />
      <Img
        style={{ objectFit: 'contain' }}
        placeholder={loadingImage}
        error={errorImage}
        src={imgWebp}
        alt={alt}
      />
    </picture>
  );
};
