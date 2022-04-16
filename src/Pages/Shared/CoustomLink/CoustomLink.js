
import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CoustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
        <Link
          style={{ color: match ? 'red':'black', textDecoration: match ? '2px underline':'', borderRadius:match?'5px':'', padding:match?'':''}}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
};

export default CoustomLink;