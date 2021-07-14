import Card from 'components/Card';
import Logo from 'components/Logo';
import FilmList from 'components/FilmList';
import Film from 'components/Film';
import Container from 'components/Container';
import MobTable from 'components/Tables/MobTable';
import DeskTable from 'components/Tables/DeskTable';
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
