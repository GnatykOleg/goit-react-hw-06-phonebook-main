import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contacts-actions';
import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(state => state.contacts.filter);

  const dispatch = useDispatch();
  return (
    <div className={s.filter}>
      <label htmlFor="filter" className={s.labelFilter}>
        Find contacts by name
        <input
          className={s.filterInput}
          onChange={event => dispatch(setFilter(event.currentTarget.value))}
          type="name"
          name="filter"
          id="filter"
          value={value}
          required
        />
      </label>
    </div>
  );
}
