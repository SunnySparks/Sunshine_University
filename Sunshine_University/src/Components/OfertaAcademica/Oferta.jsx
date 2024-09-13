import React from "react";
import "./styles.scss";
import "../../styles/global.scss";
//simport { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import titleimg from "../../images/offer.webp";

const OfertaAcademica = () => {
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);
  const [isClassAdded3, setIsClassAdded3] = useState(false);
  const [isClassAdded4, setIsClassAdded4] = useState(false);
  const [isClassAdded5, setIsClassAdded5] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);

  const toggleDropdown = () => {
    setIsOpen1(!isOpen1);
  };

  const handleClick = () => {
    setIsClassAdded(!isClassAdded);
  };
  const handleClick2 = () => {
    setIsClassAdded2(!isClassAdded2);
  };
  const handleClick3 = () => {
    setIsClassAdded3(!isClassAdded3);
  };
  const handleClick4 = () => {
    setIsClassAdded4(!isClassAdded4);
  };
  const handleClick5 = () => {
    setIsClassAdded5(!isClassAdded5);
  };
  return (
    <div id="ofertaCont" className="homeComponent">
      <div id="ofertaInner">
        <div id="ofertaTitle">
          <h2 className="webfont">Oferta Académica</h2>
          <div id="titleImg">
            <img src={titleimg} />
          </div>
        </div>
        <div id="ofertaTextContent">
          <h3 className="webfont">
            🎓 ¡Explora horizontes sin límites en Sunshine University! 🌟
          </h3>
          <h3 className="webfont">
            Embárcate en un viaje académico transformador en Sunshine
            University, donde las posibilidades son ilimitadas y el conocimiento
            no tiene límites. Como un faro de excelencia en la educación,
            estamos encantados de extender una invitación exclusiva para ti.
          </h3>
          <div id="ofertaTextBox">
            <div className="OtxtInner">
              <h4 className="webfont">
                <strong>🌐 Profesorado incomparable:</strong> Sumérgete en un
                mundo de proezas intelectuales, guiado por un distinguido
                profesorado compuesto por expertos líderes y pioneros del
                pensamiento en sus campos.
              </h4>
            </div>
            <div className="OtxtInner">
              <h4 className="webfont">
                <strong>📚 Programas de vanguardia:</strong> Elige entre una
                amplia gama de programas innovadores y meticulosamente
                elaborados, diseñados para equiparte con las habilidades y
                conocimientos necesarios para prosperar en los dinámicos
                paisajes de hoy y mañana.
              </h4>
            </div>
            <div className="OtxtInner">
              <h4 className="webfont">
                <strong>🌍 Perspectivas globales:</strong> Sumérgete en una
                comunidad culturalmente diversa e inclusiva, fomentando un rico
                tapiz de perspectivas que ampliarán tu comprensión del mundo y
                darán forma a tu mentalidad global.
              </h4>
            </div>
            <div className="OtxtInner">
              <h4 className="webfont">
                <strong>🔬 Instalaciones de vanguardia:</strong> Libera tu
                potencial dentro de nuestro campus moderno y tecnológicamente
                avanzado, que cuenta con laboratorios de clase mundial,
                bibliotecas y espacios de colaboración para mejorar tu
                experiencia de aprendizaje.
              </h4>
            </div>
            <div className="OtxtInner">
              <h4 className="webfont">
                <strong>🌱 Crecimiento personalizado:</strong> Nuestro
                compromiso con tu éxito se extiende más allá del aula, con
                tutorías personalizadas y apoyo para nutrir tu crecimiento
                académico y personal.
              </h4>
            </div>
            <div className="OtxtInner">
              <h4 className="webfont">
                <strong>🎉 Vibrante vida en el campus:</strong> Sumérgete en un
                vibrante tapiz de actividades extracurriculares, clubes y
                eventos que prometen enriquecer tu experiencia universitaria y
                crear recuerdos para toda la vida.
              </h4>
            </div>
          </div>
        </div>
        <div id="ofertaContent">
          <div className="webfont2 textCont">
            <div className="buttonDrowpdown">
              <div className="buttonInner">
                <button onClick={handleClick}>
                  {/*<FontAwesomeIcon icon={"language"} />
                  <FontAwesomeIcon icon={"fa-language"} />*/}
                  <h4>🈵🆎Licenciatura en Idiomas</h4>
                </button>
                <ul className={`dropdown-list ${isClassAdded ? "open" : ""}`}>
                  <li>
                    <h2>
                      🌍 ¡Enciende tu pasión por los idiomas! 📚<br></br> Abre
                      la puerta a una carrera satisfactoria y gratificante con
                      nuestro programa de Licenciatura en Idiomas.
                    </h2>
                  </li>
                  <li>
                    <h3>
                      Explora diversas metodologías lingüísticas y matices
                      culturales, preparándote para conectar con estudiantes de
                      todo el mundo.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      En Sunshine University, somos más que una escuela; somos
                      una comunidad de entusiastas de los idiomas que creen en
                      el poder transformador de la educación. Únete a nosotros
                      para dar forma al futuro en Idiomas e inspirar a la
                      próxima generación de ciudadanos del mundo.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      ¿Listo para embarcarte en tu viaje para convertirte en un
                      profesional de los idiomas? Póngase en contacto con
                      nosotros para obtener más información sobre nuestro
                      programa de Licenciatura en Idiomas y dar el primer paso
                      hacia una carrera emocionante y significativa en la
                      educación.
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="buttonDrowpdown">
              <div className="buttonInner">
                <button onClick={handleClick2}>
                  <h4>🚑🏥Licenciatura en Enfermería</h4>
                </button>
                <ul className={`dropdown-list ${isClassAdded2 ? "open" : ""}`}>
                  <li>
                    <h2>
                      🩺 ¡Emprende tu noble viaje en enfermería! 🌡️<br></br>{" "}
                      Descubre el mundo de la compasión, el cuidado y la
                      excelencia en la atención sanitaria con nuestro programa
                      de Grado en Enfermería. En Sunshine University, estamos
                      comprometidos a nutrir la próxima generación de héroes de
                      la salud que harán una diferencia real en la vida de las
                      personas y las comunidades.
                    </h2>
                  </li>
                  <li>
                    <h3>
                      Aprenda de profesionales de enfermería experimentados que
                      aportan una gran experiencia clínica y conocimientos al
                      aula.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Gain practical skills through clinical rotations and
                      simulation exercises, ensuring you're well-prepared to
                      excel in real-world healthcare settings.
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="buttonDrowpdown">
              <div className="buttonInner">
                <button onClick={handleClick3}>
                  <h4>🧑‍🍳🍱Licenciatura en Gastronomía</h4>
                </button>
                <ul className={`dropdown-list ${isClassAdded3 ? "open" : ""}`}>
                  <li>
                    <h2>
                      🍽️ ¡La excelencia culinaria te espera! 🌟<br></br>
                      Da rienda suelta a tu pasión por el arte de la cocina y
                      embárcate en un viaje delicioso con nuestro programa de
                      Grado en Cocina. En Sunshine University, nos dedicamos a
                      formar la próxima generación de artistas culinarios y
                      chefs que crearán exquisitas experiencias culinarias que
                      deleitarán los sentidos.
                    </h2>
                  </li>
                  <li>
                    <h3>
                      Aprenda de célebres chefs y expertos culinarios
                      apasionados por compartir su sabiduría culinaria y guiarle
                      hacia la maestría culinaria.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Perfeccione sus habilidades culinarias en las cocinas más
                      modernas, adquiriendo experiencia práctica en la
                      preparación de diversas cocinas de todo el mundo.
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="buttonDrowpdown">
              <div className="buttonInner">
                <button onClick={handleClick4}>
                  <h4>📐🏗️Licenciatura en Arquitectura</h4>
                </button>
                <ul className={`dropdown-list ${isClassAdded4 ? "open" : ""}`}>
                  <li>
                    <h2>
                      🏛️ ¡Diseña el mundo del mañana con un título de
                      Arquitectura! 🏗️<br></br> Da rienda suelta a tu genio
                      creativo y embárcate en un viaje transformador con nuestro
                      programa de Grado en Arquitectura. En la Sunshine
                      University, estamos dedicados a nutrir a los arquitectos
                      del futuro, que darán forma al mundo con diseños
                      innovadores y soluciones sostenibles.
                    </h2>
                  </li>
                  <li>
                    <h3>
                      Aprenda de arquitectos galardonados y líderes del sector a
                      los que les apasiona orientar a la próxima generación de
                      visionarios de la arquitectura.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Desarrolla tus habilidades arquitectónicas a través de
                      proyectos de estudio inmersivos, que te permitirán
                      convertir tus ideas en estructuras tangibles e
                      impactantes.
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
            <div className="buttonDrowpdown">
              <div className="buttonInner">
                <button onClick={handleClick5}>
                  <h4>🧑‍💻⚛️Ingeniería en Software</h4>
                </button>
                <ul className={`dropdown-list ${isClassAdded5 ? "open" : ""}`}>
                  <li>
                    <h2>
                      🌐 ¡Forja el futuro digital con una Ingeniería en
                      Software!
                      <br></br>
                      💻 Embárcate en un viaje dinámico en el mundo de la
                      tecnología y la innovación con nuestro programa de Grado
                      en Ingeniería de Software. En Sunshine University, estamos
                      comprometidos a equiparlo con las habilidades y
                      conocimientos necesarios para convertirse en un ingeniero
                      de software competente, listo para dar forma al panorama
                      digital.
                    </h2>
                  </li>
                  <li>
                    <h3>
                      Aprenda de expertos líderes del sector e ingenieros de
                      software experimentados a los que les apasiona compartir
                      sus conocimientos y puntos de vista.
                    </h3>
                  </li>
                  <li>
                    <h3>
                      Adquiere experiencia práctica en el mundo real a través de
                      proyectos de codificación, prácticas y oportunidades de
                      colaboración, para asegurarte de que estás preparado para
                      trabajar desde el primer día.
                    </h3>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-buttons webfont">
            {/*<Link href="/Oferta/SaberMas">Saber Más</Link>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfertaAcademica;
