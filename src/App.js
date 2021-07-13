import Container from 'components/Container';
import Title from 'components/Title';
import List from 'components/List';
import ListItem from 'components/ListItem';
import { data } from 'data/films.json';

function App() {
  const { films, planets } = data;

  return (
    <div style={{ padding: 20, paddingTop: 70 }}>
      <Container>
        <Title main='Star Wars' sub='RECRUITMENT TASK' />
        <List>
          {films.map((film) => (
            <ListItem
              key={film.id}
              id={film.id}
              title={film.title}
              dataX={planets}
            />
          ))}
        </List>
      </Container>
    </div>
  );
}

export default App;
