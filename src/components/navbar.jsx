
//Stateless Functional Component
const Navbar = ({totalCounters}) => {
  return (
    <nav className='navbar navbar-dark bg-info'>
      <a className='navbar-brand' href='#'>
        Navbar{' '}
        <span className='badge badge-pill badge-secondary'>
          {totalCounters}
        </span>
      </a>
    </nav>
  )
}

export default Navbar;


