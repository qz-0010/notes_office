import React from 'react';
import classnames from 'classnames';

const Head = (props) => {
  var buttons = {
    'cards': { val: 'Карточки' },
    'rows': { val: 'Список' }
  };

  debugger;
  return (
    <header className="list__head">
      <div className="list__head-item">
      </div>
      <div className="list__head-item">
        {Object.keys(buttons).map((name) => {
          let btn = buttons[name];

          return (
            <button type="button" name={name} onClick={props.onViewBtnClick} className={classnames({
              'list__view-btn': true,
              'active': props.activeView === name
            })}>{btn.val}{btn.active}</button>
          )
        })}
      </div>
    </header>
  )
}

export default Head;