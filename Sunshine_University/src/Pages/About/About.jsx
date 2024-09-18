import Footer from "../../Components/Layout/Footer";
import "./styles.scss";
import about from "../../images/about.png";
import mision from "../../images/mision.png";
import prof from "../../images/professor.png";
import inv from "../../images/research.png";
import com from "../../images/community.webp";
import hub from "../../images/hub.webp";
import cit from "../../images/cit.webp";
import camp from "../../images/camp.webp";
import join from "../../images/join.webp";
import badge from "../../images/badge.png";

const About = () => {
  return (
    <>
      <div id="dividerCont"></div>
      <div className="subTitleCont" id="aboutBanner">
        <h2 className="subpageTitle">Sobre Nosotros</h2>
        <img src={badge} id="titleLogo" />
      </div>
      <div id="AbtCont">
        <div className="abtInner">
          <div className="abtText">
            <h2>
              Acerca de nosotros<br></br>Sunshine University
            </h2>
            <p>
              Bienvenido a Sunshine University, donde el conocimiento se
              encuentra con la innovación y los sueños se transforman en
              realidad. Fundada en el espíritu de la exploración intelectual y
              la excelencia académica, Sunshine University es un faro de la
              educación superior que tiene como objetivo capacitar a la próxima
              generación de líderes globales, pensadores y creadores.
            </p>
          </div>
          <div className="abtImg">
            <img src={about} />
          </div>
        </div>
        <div className="abtInner abtreverse">
          <div className="abtText">
            <h2>Nuestra misión</h2>
            <p>
              En Sunshine University, nuestra misión es cultivar un entorno de
              aprendizaje dinámico e inclusivo que fomente el pensamiento
              crítico, la creatividad y el liderazgo ético. Estamos
              comprometidos a proporcionar experiencias educativas
              transformadoras que capaciten a los estudiantes para afrontar
              retos complejos y contribuir de manera significativa a la
              sociedad.
            </p>
          </div>
          <div className="abtImg">
            <img src={mision} />
          </div>
        </div>
        <div className="abtInner">
          <div className="abtText">
            <h2>Profesorado excepcional</h2>
            <p>
              Nuestros distinguidos profesores están a la vanguardia de sus
              respectivos campos y aportan su experiencia y pasión a las aulas.
              Inspiran, guían y orientan a los estudiantes para que superen los
              límites del conocimiento, animándoles a cuestionar, explorar e
              innovar.
            </p>
          </div>
          <div className="abtImg">
            <img src={prof} />
          </div>
        </div>
        <div className="abtInner abtreverse">
          <div className="abtText">
            <h2>Investigación de vanguardia</h2>
            <p>
              La Sunshine University se dedica a ampliar las fronteras del
              conocimiento a través de una investigación pionera. Nuestros
              centros e institutos de investigación colaboran en distintas
              disciplinas para abordar algunos de los problemas más acuciantes
              del mundo, desde la sostenibilidad hasta los avances sanitarios.
              Los estudiantes tienen la oportunidad de participar en proyectos
              de investigación prácticos que contribuyen a mejorar la sociedad.
            </p>
          </div>
          <div className="abtImg">
            <img src={inv} />
          </div>
        </div>
        <div className="abtInner">
          <div className="abtText">
            <h2>Comunidad global</h2>
            <p>
              Con un cuerpo estudiantil diverso y vibrante que representa
              diferentes culturas, orígenes y perspectivas, Sunshine University
              es un microcosmos de la comunidad global. Creemos que el
              aprendizaje se enriquece mediante la exposición a puntos de vista
              variados, y fomentamos el diálogo abierto y las interacciones
              interculturales.
            </p>
          </div>
          <div className="abtImg">
            <img src={com} />
          </div>
        </div>
        <div className="abtInner abtreverse">
          <div className="abtText">
            <h2>Centro de Innovación</h2>
            <p>
              Como pionera en educación, Sunshine University cuenta con un
              Centro de Innovación que sirve como catalizador para el
              pensamiento empresarial y la innovación. Este centro proporciona a
              los estudiantes los recursos, la tutoría y los espacios de
              colaboración necesarios para dar vida a sus ideas y crear un
              impacto en el mundo real.
            </p>
          </div>
          <div className="abtImg">
            <img src={hub} />
          </div>
        </div>
        <div className="abtInner">
          <div className="abtText">
            <h2>Ciudadanía comprometida</h2>
            <p>
              Inculcamos a nuestros alumnos un sentido de la responsabilidad
              hacia sus comunidades y el mundo en general. Nuestro énfasis en la
              ciudadanía comprometida anima a los estudiantes a utilizar su
              educación para marcar una diferencia positiva, fomentando un
              compromiso con la justicia social, la sostenibilidad y la toma de
              decisiones éticas.
            </p>
          </div>
          <div className="abtImg">
            <img src={cit} />
          </div>
        </div>
        <div className="abtInner abtreverse">
          <div className="abtText">
            <h2>Vida en el campus</h2>
            <p>
              Enclavado en un entorno pintoresco, nuestro moderno campus ofrece
              un entorno propicio para el crecimiento personal e intelectual.
              Desde modernas aulas hasta laboratorios bien equipados, los
              estudiantes tienen acceso a instalaciones de primera categoría que
              mejoran su aprendizaje. Nuestra vibrante vida en el campus incluye
              una amplia gama de actividades extracurriculares, organizaciones
              estudiantiles y eventos culturales que fomentan la camaradería y
              el desarrollo personal.
            </p>
          </div>
          <div className="abtImg">
            <img src={camp} />
          </div>
        </div>
        <div className="abtInner">
          <div className="abtText">
            <h2>Únete a nosotros</h2>
            <p>
              Te invitamos a embarcarte en un viaje educativo como ningún otro.
              En Sunshine University, serás desafiado, inspirado y preparado
              para dar forma a un futuro lleno de posibilidades ilimitadas. Ven
              a ser parte de nuestra comunidad y descubre el potencial ilimitado
              dentro de ti.
            </p>
          </div>
          <div className="abtImg">
            <img src={join} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
