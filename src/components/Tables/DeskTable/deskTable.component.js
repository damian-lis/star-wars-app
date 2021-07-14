import React, { useMemo } from 'react';
import { useTable, useSortBy } from 'react-table';
import PropTypes from 'prop-types';
import IconDesc from 'assets/iconDesc.svg';
import IconAsc from 'assets/iconAsc.svg';
import IconDefault from 'assets/iconDefault.svg';
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

const DeskTableComponent = ({ planets }) => {
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
      <Table {...getTableProps()}>
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
                              ? IconDesc
                              : IconAsc
                            : IconDefault
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
                  console.log(cell.render('Cell').props.value);
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
