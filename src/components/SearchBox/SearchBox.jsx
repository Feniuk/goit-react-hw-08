import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const onFilter = (e) => dispatch(setFilter(e.target.value));
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={onFilter}
      />
    </div>
  );
};

export default SearchBox;
