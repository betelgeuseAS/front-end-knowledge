import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import localization from './localization';
import './Localize.sass';

export const Localize = ({onSetLanguage}) => {
  return (
    <div className="localize">
      <span className={classNames('flag', { selected: localization.getLanguage() === 'uk' })} onClick={() => onSetLanguage('uk')}>
        ukr
      </span>
      <span className={classNames('flag', { selected: localization.getLanguage() === 'ru' })} onClick={() => onSetLanguage('ru')}>
        rus
      </span>
      <span className={classNames('flag', { selected: localization.getLanguage() === 'en' })} onClick={() => onSetLanguage('en')}>
        eng
      </span>
    </div>
  );
};

Localize.propTypes = {
  onSetLanguage: PropTypes.func.isRequired
};

Localize.defaultProps = {
  onSetLanguage: () => {},
};
