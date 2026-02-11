export default function Header ({company}) {
    const name = "Melinda";

    return (
    <header>
        <h1>Welcome {name} to <span id="txt-red">{company}</span> Labs Intranet</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Employee Management</a></li>
                    <li><a href="#">JavaScript Practice!</a></li>
                </ul>
            </nav>
    </header> );
}