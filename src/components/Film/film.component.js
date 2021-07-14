import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ListItem, TitleContainer, Title, TitleIcon } from './film.styles';
import ArrowClose from 'assets/arrowClose.svg';
import ArrowOpen from 'assets/arrowOpen.svg';
import { useWindowWidth } from '@react-hook/window-size';
import AnimateHeight from 'react-animate-height';

const FilmComponent = ({ title, id, data, MobTable, DeskTable }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useWindowWidth() < 750;

  const planets = data.filter((item) =>
    item.filmConnection.films.some((film) => film.id === id)
  );

  const planetsModified = planets.map((planet) => {
    return {
      ...planet,
      climates: planet.climates[0],
    };
  });

  return (
    <ListItem>
      <TitleContainer onClick={() => setOpen(!open)}>
        <Title>{title}</Title>
        <TitleIcon src={open ? ArrowClose : ArrowOpen} />
      </TitleContainer>
      <AnimateHeight duration={300} height={open ? 'auto' : 0}>
        {isMobile ? (
          <MobTable planets={planetsModified} />
        ) : (
          <DeskTable planets={planetsModified} />
        )}
      </AnimateHeight>
    </ListItem>
  );
};

FilmComponent.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  MobTable: PropTypes.func.isRequired,
  DeskTable: PropTypes.func.isRequired,
};

export default FilmComponent;
