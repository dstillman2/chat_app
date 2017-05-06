import React from 'react';

import onClickCreateAccount from './util/header.createAccount';
import Button from './widgets/button';


function Header() {
  return (
    <div id="header">
      <Button
        name="create account"
        onClick={onClickCreateAccount}
      />
    </div>
  );
}

export default Header;
