import React from 'react';
import PropTypes from 'prop-types';

import Item from './Item';
import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.partitions}, 1fr);
  grid-gap: ${(props) => props.gap}rem;
  margin: 0 70px;
  @media only screen and (max-width: 980px) {
    & {
      grid-template-columns: 1fr;
      margin: 0;
    }
  }
`;

const Gallery = ({ images, partitions, gap, lang }) => {
  const columns = Array(partitions)
    .fill(null)
    .map(() => []);
  images.forEach((image, idx) => {
    columns[idx % partitions].push(image);
  });

  return (
    <StyledGallery partitions={partitions} gap={gap}>
      {columns.map((column, idx) => (
        <div key={idx}>
          {column.map((image) => (
            <Item key={image.src} gap={gap} image={image} lang={lang} />
          ))}
        </div>
      ))}
    </StyledGallery>
  );
};

Gallery.propTypes = {
  images: PropTypes.array,
  partitions: PropTypes.number,
  gap: PropTypes.number,
  lang: PropTypes.string,
};

Gallery.defaultProps = {
  partitions: 3,
  gap: 1,
  lang: 'en',
};

export default Gallery;
