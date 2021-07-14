import React from 'react';
import PropTypes from 'prop-types';
import { Table, Body, Row, BodyCell, CategoryWrapper } from './mobTable.styles';
import { COLUMNS } from 'data/constants';

const MobTableComponent = ({ planets }) => {
  return (
    <Table>
      {planets.map((planet, planetIndex) => (
        <Body even={planetIndex % 2}>
          {COLUMNS.map((col, colIndex) => (
            <Row>
              <BodyCell>
                <CategoryWrapper>{col.Header}</CategoryWrapper>
              </BodyCell>
              <BodyCell light={colIndex === 0}>
                {planet[col.accessor] ? planet[col.accessor] : 'unknown'}
              </BodyCell>
            </Row>
          ))}
        </Body>
      ))}
    </Table>
  );
};

MobTableComponent.propTypes = {
  planets: PropTypes.array.isRequired,
};

export default MobTableComponent;
