import React from 'react';

import loadingImage from '../../Assets/SVG/Spinner.svg';
import errorImage from '../../Assets/SVG/Spinner.svg';
import Img from 'react-cool-img';
export const AltImage = ({ imgJpg, imgWebp, alt }) => {
  return (
    <picture>
      <source
        style={{ objectFit: 'contain' }}
        placeholder={loadingImage}
        error={errorImage}
        type='image/jpg'
        srcSet={imgWebp}
        alt='A picture of me'
      />
      <source
        style={{ objectFit: 'contain' }}
        placeholder={loadingImage}
        type='image/webp'
        error={errorImage}
        srcSet={imgJpg}
        alt={alt}
        debounce={1000}
      />
      <Img
        style={{ objectFit: 'contain' }}
        placeholder={loadingImage}
        error={errorImage}
        src={imgWebp}
        alt={alt}
        debounce={1000}
      />
    </picture>
  );
};
export default AltImage;
