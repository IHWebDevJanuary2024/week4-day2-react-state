import './Footer.css'

function Footer(props) {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <section className={props.theme} id="footer">
            <p>© {year}</p>
        </section>
    )
}

export default Footer;