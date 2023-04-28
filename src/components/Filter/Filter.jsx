import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from 'redux/filter/selectors';
import { setFilterValue } from 'redux/filter/slice';

import { HiOutlineSearch } from 'react-icons/hi';

import { Label, Wrapper, Input } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const onChange = evt => {
    const { value } = evt.currentTarget;
    dispatch(setFilterValue(value));
  };

  return (
    <Label>
      <Wrapper>
        <HiOutlineSearch size={28} />
        <Input
          onChange={onChange}
          value={filter}
          type="text"
          name="filter"
          placeholder="Find by name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        />
      </Wrapper>
    </Label>
  );
};
