import React, { useMemo } from 'react';
import { Container } from './listItem.styles';
import { useTable } from 'react-table';

const COLUMNS = [
  { Header: 'Planet Name', accessor: 'name' },
  { Header: 'Orbital Period', accessor: 'orbitalPeriod' },
  { Header: 'Diameter', accessor: 'diameter' },
  { Header: 'Climate', accessor: 'climates' },
  { Header: 'Surface water', accessor: 'surfaceWater' },
  { Header: 'Population', accessor: 'population' },
];

const ListItemComponent = ({ title, id, dataX }) => {
  const planets = dataX.filter((item) =>
    item.filmConnection.films.some((film) => film.id === id)
  );

  const planetsParsed = planets.map((planet) => {
    return {
      ...planet,
      climates: planet.climates[0],
    };
  });

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => planetsParsed, []);

  const tableInstance = useTable({
    columns,
    data,
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = tableInstance;

  return (
    <Container>
      <h3>{title}</h3>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderGroupProps}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default ListItemComponent;
