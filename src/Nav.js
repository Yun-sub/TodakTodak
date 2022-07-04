import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {
  return (
    <nav className='naav'>
      <Link to='/' className='site-title'>
        Todot List
      </Link>
      <ul>
        <CustomLink to='/'>메인</CustomLink>
        <CustomLink to='/analysis'>분석</CustomLink>
        <CustomLink to='/settings'>설정</CustomLink>
      </ul>
    </nav>
  );
  function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}
