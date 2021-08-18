import './Hero.scss';

const Hero = ({children}) => {
    return (
        <section id="Hero">
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Hero;
