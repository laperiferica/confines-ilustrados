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

const StyledWholeGallery = styled.div`
  .columns {
    display: block;
  }
  .single {
    display: none;
  }
  @media only screen and (max-width: 980px) {
    .columns {
      display: none;
    }
    .single {
      display: block;
    }
  }
`;

const StyledCustomView = styled.div`
  .imageContainer {
    height: 90vh;
    display: grid;
    align-items: center;
    justify-items: center;
  }
`;
const CustomView = ({ ...props }) => (
  <StyledCustomView>
    <div className={'imageContainer'}>
      {props.data.video ? (
        <iframe
          width="90%"
          modestbranding="1"
          rel="0"
          showinfo="0"
          height="90%"
          src={`https://www.youtube.com/embed/${props.data.video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullscreen
        ></iframe>
      ) : (
        <img src={props.data.src} style={{ maxHeight: '90vh' }} />
      )}
    </div>
  </StyledCustomView>
);

const Gallery = ({ items, partitions, gap, lang, component }) => {
  const [currentImage, setCurrentImage] = useState(-1);

  const openLightbox = (index) => {
    console.log(index);
    setCurrentImage(index);
  };

  const closeLightbox = () => {
    setCurrentImage(-1);
  };

  const columns = Array(partitions)
    .fill(null)
    .map(() => []);
  items.forEach((image, idx) => {
    columns[idx % partitions].push({ img: image, idx });
  });

  const Cmp = component;

  return (
    <StyledWholeGallery>
      <div className={'columns'}>
        <StyledGallery partitions={partitions} gap={gap}>
          {columns.map((column, idx) => (
            <div key={idx}>
              {column.map((item, idx2) => (
                <Cmp
                  key={idx2}
                  gap={gap}
                  item={item.img}
                  lang={lang}
                  onClick={() => openLightbox(item.idx)}
                />
              ))}
            </div>
          ))}
        </StyledGallery>
      </div>
      <div className={'single'}>
        <StyledGallery>
          {items.map((item, idx) => (
            <Cmp
              key={idx}
              gap={gap}
              item={item}
              lang={lang}
              onClick={() => openLightbox(idx)}
            />
          ))}
        </StyledGallery>
      </div>
      <ModalGateway>
        {currentImage >= 0 && (
          <Modal onClose={closeLightbox}>
            <Carousel
              components={{ View: CustomView }}
              currentIndex={currentImage}
              views={items.map(({ image, video }) => ({
                src: image.src,
                video,
              }))}
            />
          </Modal>
        )}
      </ModalGateway>
    </StyledWholeGallery>
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
