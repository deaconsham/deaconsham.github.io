import LineBadge from './LineBadge'

function Header() {
    return (
        <header className="section station-header">
            <h1 className="station-name">DEACON SHAM</h1>
            <LineBadge section="bio" />
        </header>
    )
}

export default Header