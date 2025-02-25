import * as React from 'react';

function HeadImpl() {
  React.useEffect(() => {
    document.title = 'yacd';
  });

  return <></>;
}

export const Head = HeadImpl;
