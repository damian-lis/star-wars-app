import {
  Card,
  Container,
  FilmList,
  Film,
  Logo,
  DeskTable,
  MobTable,
} from 'components';
import { data } from 'data/films.json';

function App() {
  const { films, planets } = data;

  return (
    <Container>
      <Card>
        <Logo />
        <FilmList>
          {films.map((film) => (
            <Film
              key={film.id}
              id={film.id}
              data={planets}
              title={film.title}
              MobTable={MobTable}
              DeskTable={DeskTable}
            />
          ))}
        </FilmList>
      </Card>
    </Container>
  );
}

export default App;
