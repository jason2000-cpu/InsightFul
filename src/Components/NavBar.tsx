
const navLinks = [
    {
        id: '1',
        name: 'Overview'
    },
    {
        id: '2',
        name: 'Reports'
    },
    {
        id: '3',
        name: 'Settings'
    }
]

function NavBar() {
  return (
    <div>
        <div>
            <img src="/static/logo.png" alt="LOGO" />
            <span>InfoSight</span>
        </div>
        <div>
            {
                navLinks.map( link => (
                    <span key={link.id}>{link.name}</span>
                ))
            }
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default NavBar