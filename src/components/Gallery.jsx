import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Carousel, { Modal, ModalGateway } from 'react-images';

import styled from 'styled-components';

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(${(props) => props.partitions}, 1fr);
  grid-gap: ${(props) => props.gap}rem;
  margin: 2rem;
  @media only screen and (max-width: 980px) {
    & {
      grid-template-columns: 1fr;
      margin: 0;
    }
  }
`;

const Gallery = ({ items, partitions, gap, lang, component }) => {
  const [currentImage, setCurrentImage] = useState(-1);

  const openLightbox = (index) => {
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(-1);
  };

  const columns = Array(partitions)
    .fill(null)
    .map(() => []);
  items.forEach((image, idx) => {
    columns[idx % partitions].push(image);
  });

  const Cmp = component;

  return (
    <>
      <StyledGallery partitions={partitions} gap={gap}>
        {columns.map((column, idx) => (
          <div key={idx}>
            {column.map((item, idx2) => (
              <Cmp
                key={idx2}
                gap={gap}
                item={item}
                lang={lang}
                onClick={() => openLightbox(idx * idx2)}
              />
            ))}
          </div>
        ))}
      </StyledGallery>
      <ModalGateway>
        {currentImage >= 0 && (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={items.map(({ image }) => ({
                src: image.src,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </>
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
