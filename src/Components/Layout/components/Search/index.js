import HeadlessTippy from "@tippyjs/react/headless";
import { useEffect, useRef, useState } from "react";
import { Wrapper as PopperWrapper } from "../../../Popper";
import AccountItem from "../../../AccountItem";
import { ClearIcon, LoadingIcon, SearchIcon } from "../../../Icons";
import clsx from "clsx";
import Style from "./Search.module.scss";
import { useDebounce } from "../../../../Hooks";
import * as searchApi from "../../../../ApiServices/SearchApi";

function Search() {
  const [showResult, setShowResult] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();
  const debounce = useDebounce(searchValue, 500);
  useEffect(() => {
    if (!debounce.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchApi.search(debounce);
      setSearchResult(result);
      setLoading(false);
    };
    //su dung axios de lay api

    fetchApi();

    //cach khac
    // fetch(
    //   `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
    //     debounce
    //   )}&type=less`
    // )
    //   .then((response) => response.json())
    //   .then((res) => {
    //     setSearchResult(res.data);
    //     setLoading(false);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  }, [debounce]);

  const handleOnClickClear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };

  const handleFocusShow = () => {
    setShowResult(false);
  };

  const handleOnchage = (e) => {
    const searchInput = e.target.value;
    if (!searchInput.startsWith(" ")) {
      setSearchValue(searchInput);
    }
  };
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => {
        return (
          <div
            className={clsx(Style["search-result"])}
            tabIndex="-1"
            {...attrs}
          >
            <PopperWrapper>
              <div className={clsx(Style["search-label"])}>Account</div>
              {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} />
              ))}
            </PopperWrapper>
          </div>
        );
      }}
      onClickOutside={handleFocusShow}
    >
      <div className={clsx(Style.search)}>
        <input
          ref={inputRef}
          value={searchValue}
          className={Style.input}
          placeholder="Search"
          onChange={handleOnchage}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={clsx(Style.close)} onClick={handleOnClickClear}>
            <ClearIcon />
          </button>
        )}

        {loading && <LoadingIcon className={clsx(Style.loading)} />}

        <span className={clsx(Style.span)}></span>
        <button className={clsx(Style["search-btn"])}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}
export default Search;
