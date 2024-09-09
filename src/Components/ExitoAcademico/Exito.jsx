import "./style.scss";
import "../../styles/global.scss";
import img from "../../images/grad.webp";
import Fade from "react-reveal/Fade";

const ExitoAcademico = () => {
  return (
    <div id="exitoCont">
      <div id="exitoInner">
        <div id="exitoTitle">
          <h2 className="webfont">Éxito Académico</h2>
          <div id="titleImg">
            <img src={img} />
          </div>
        </div>
        <div id="exitoTextCont" className="webfont2">
          <p>
            Bienvenido a Sunshine University, donde la excelencia académica y el
            éxito de los estudiantes están en el centro de todo lo que hacemos.
            Nuestro compromiso de ofrecer una educación de alto nivel va de la
            mano con nuestra dedicación a la entrega de resultados tangibles
            para nuestros estudiantes. Creemos que la verdadera medida del éxito
            de una institución es el éxito de sus graduados, y en Sunshine
            University, nos sentimos inmensamente orgullosos de los logros y
            resultados de nuestros estudiantes.
          </p>
          <p>
            En esta sección, le invitamos a explorar el camino del éxito que le
            espera en Sunshine University. Desde las tasas de graduación que
            reflejan nuestro apoyo inquebrantable para el progreso de los
            estudiantes hasta las gratificantes oportunidades profesionales que
            siguen, nuestra universidad es un lugar donde se alimentan los
            sueños, se alcanzan las metas y las aspiraciones se hacen realidad.
          </p>
          <p>
            Acompáñanos mientras profundizamos en los factores que contribuyen a
            los triunfos de nuestros estudiantes, los recursos disponibles para
            apoyar tu viaje académico y la vibrante comunidad que te espera. En
            Sunshine University, tu éxito es nuestra misión, y estamos
            encantados de formar parte de tu aventura educativa y profesional.
            Descubre cómo definimos el éxito escolar y los resultados, y
            emprende un camino que te conduzca a un futuro más brillante.
          </p>
        </div>
        <div className="home-buttons webfont">
          <Link href="/Exito/SaberMas">Saber Más</Link>
        </div>
      </div>
    </div>
  );
};

export default ExitoAcademico;
