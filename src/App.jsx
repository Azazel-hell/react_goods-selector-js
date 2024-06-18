import 'bulma/css/bulma.css';
import './App.scss';
import { useState } from 'react';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

function GoodsList({ selectedGood, setSelectedGood, reset }) {
  return goods.map(item => (
    <tr
      data-cy="Good"
      key={item}
      className={item === selectedGood ? 'has-background-success-light' : ''}
    >
      <td>
        {item === selectedGood ? (
          <button
            data-cy="RemoveButton"
            type="button"
            className="button is-info"
            onClick={reset}
          >
            -
          </button>
        ) : (
          <button
            data-cy="AddButton"
            type="button"
            className="button"
            onClick={() => setSelectedGood(item)}
          >
            +
          </button>
        )}
      </td>
      <td data-cy="GoodTitle" className="is-vcentered">
        {item}
      </td>
    </tr>
  ));
}

export const App = () => {
  const [selectedGood, setSelectedGood] = useState('Jam');

  const reset = () => {
    setSelectedGood('');
  };

  return (
    <main className="section container">
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? `${selectedGood} is selected` : 'No goods selected'}
        {selectedGood && (
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={reset}
          />
        )}
      </h1>

      <table className="table">
        <tbody>
          <GoodsList
            selectedGood={selectedGood}
            setSelectedGood={setSelectedGood}
            reset={reset}
          />
        </tbody>
      </table>
    </main>
  );
};
