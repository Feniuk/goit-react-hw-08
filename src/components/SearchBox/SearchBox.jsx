import styles from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selector";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  const onFilter = (e) => dispatch(changeFilter(e.target.value));
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
