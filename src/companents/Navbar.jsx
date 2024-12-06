const Navbar = () => {
    return (
        <>
            <section className="navbar">
                <img src="/Logo.png" alt="" />
                <div className="hrefs">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">gallery</a>
                    <a href="">service</a>
                    <a href="">contact</a>
                </div>
                <div className="icons">
                    <i className="fa-solid fa-x-twitter"></i>
                    <i className="fa-solid fa-facebook"></i>
                    <i className="fa-solid fa-instagram"></i>
                    <i className="fa-solid fa-linkedin"></i>
                </div>
            </section>
        </>
    )
}

export default Navbar