import "./scrollup.scss";

const Scrollup = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 500){
            scrollUp?.classList.add("show-scroll");
        }else{
            scrollUp?.classList.remove("show-scroll");
        }
    })

    return (
        <a href="#home" className="scrollup" aria-label="Go to up page">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
    )
}

export default Scrollup