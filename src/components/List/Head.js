import React from 'react';
import classnames from 'classnames';

const Head = (props) => {
  var btnState = {
    'cards': { val: 'Карточки', active: false },
    'rows': { val: 'Список', active: false }
  };

  const onViewBtnClick = (e) => {
    let { name } = e.target;

    btnState[name].active = name === props.activeView;

    props.onViewBtnClick(e);
  }

  return (
    <header className="list__head">
      <div className="list__head-item">
      </div>
      <div className="list__head-item">
        {Object.keys(btnState).map((name) => (
          let btn = btnState[name];

          <button type="button" name={name} onClick={onViewBtnClick} className={classnames({
            'list__view-btn': true,
            'active': btn.active
          })}>btn.val</button>
        ))}
      </div>
    </header>
  )
}

export default Head;