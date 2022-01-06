import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
      <nav>
        <a href='/#'>React Movies</a>
        <ul>
          <li>
            <a href='/#'>Home</a>
          </li>
          <li>
            <a href='/#'>Repo</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
