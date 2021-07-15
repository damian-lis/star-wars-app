import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import { iconDesc, iconAsc, iconDefault } from 'assets';
import {
  Wrapper,
  CategoryContainer,
  CategoryWrapper,
  CategoryIconContainer,
  CategoryIcon,
  Table,
  Head,
  BodyCell,
  HeadCell,
  Row,
  Body,
} from './deskTable.styles';
import { COLUMNS } from 'data/constants';

const DeskTableComponent = ({ planets, ...restProps }) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => planets, [planets]);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Wrapper>
      <Table {...restProps} {...getTableProps()}>
        <Head>
          {headerGroups.map((headerGroup) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <HeadCell
                  {...column.getHeaderProps(column.getSortByToggleProps)}
                >
                  <CategoryContainer>
                    <CategoryWrapper>{column.render('Header')}</CategoryWrapper>
                    <CategoryIconContainer>
                      <CategoryIcon
                        src={
                          column.isSorted
                            ? column.isSortedDesc
                              ? iconDesc
                              : iconAsc
                            : iconDefault
                        }
                      />
                    </CategoryIconContainer>
                  </CategoryContainer>
                </HeadCell>
              ))}
            </Row>
          ))}
        </Head>

        <Body {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <Row {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <BodyCell {...cell.getCellProps()}>
                      {cell.render('Cell').props.value
                        ? cell.render('Cell')
                        : 'unknown'}
                    </BodyCell>
                  );
                })}
              </Row>
            );
          })}
        </Body>
      </Table>
    </Wrapper>
  );
};

DeskTableComponent.propTypes = {
  planets: PropTypes.array.isRequired,
};

export default DeskTableComponent;
