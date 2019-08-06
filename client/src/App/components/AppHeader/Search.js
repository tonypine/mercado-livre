import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Picture } from 'react-responsive-picture';
import { withRouter } from 'react-router-dom';
import qs from 'qs';

import style from './Search.module.scss';

import Magnifier from './ic_Search.png';
import Magnifier2x from './ic_Search@2x.png';

const Search = ({ className, history, location }) => {
  const { search } = qs.parse(location.search, { ignoreQueryPrefix: true });
  const [value, setValue] = useState(search);
  const { t } = useTranslation();
  const searchField = useRef();

  useEffect(() => {
    setValue(search);
  }, [search]);

  const doSearch = useCallback(() => {
    history.push(`/items?search=${searchField.current.value}`);
  }, [history]);

  return (
    <div className={`${style.wrapper} ${className}`}>
      <input
        ref={searchField}
        type="search"
        className={`${style.input} ${className}`}
        placeholder={t('search_placeholder')}
        value={value}
        onChange={e => setValue(e.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') doSearch();
        }}
      />
      <button type="button" className={style.button} onClick={doSearch}>
        <Picture src={`${Magnifier} 1x, ${Magnifier2x} 2x`} />
      </button>
    </div>
  );
};

export default withRouter(Search);
