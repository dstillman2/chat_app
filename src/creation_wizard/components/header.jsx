import React from 'react';

import onClickCreateAccount from './util/header.createAccount';
import Button from './widgets/button';


function Header() {
  return (
    <div id="header">
      <div className="nav-container">
        <Button
          name="new account"
          onClick={onClickCreateAccount}
        />
        <Button
          name="pop out"
          onClick={onClickCreateAccount}
        />
      </div>
    </div>
  );
}

export default Header;
