import Header from "../../Components/Layout/Header";
import Footer from "../../Components/Layout/Footer";
import "./styles.scss";
import badge from "../../images/badge.png";
import extrac from "../../images/extrac.webp";
import painting from "../../images/painting.webp";
import music from "../../images/music.webp";
import mit from "../../images/mit.webp";
import law from "../../images/law.webp";
import sport from "../../images/sport.webp";
import art from "../../images/art.webp";
import reading from "../../images/reading.webp";
import trees from "../../images/trees.webp";
import fun from "../../images/fun.webp";

const SaberMas = () => {
  return (
    <>
      <Header />
      <div id="dividerCont"></div>
      <div className="subTitleCont" id="aboutBanner">
        <h2 className="subpageTitle">Exito y Logros</h2>
        <img src={badge} id="titleLogo" />
      </div>
      <div id="SuccessCont">
        <div id="SuccessDesc">
          <div class="SuccTitle">
            <h2>Experiencias Extracurriculares</h2>
          </div>
          <div id="Sdescription">
            <div id="simg">
              <div id="simInner">
                <img src={extrac}></img>
              </div>
              <div id="Stext">
                <h4>EXPERIENCIAS FASCINANTES PARA CIUDADANOS DEL MUNDO</h4>
                <h2>
                  A través de debates, oportunidades fuera del aula y viajes,
                  nuestros curiosos alumnos se enfrentan al mundo.
                </h2>
              </div>
            </div>
            <div id="Sintro">
              <div id="SiTitle">
                <div id="SitInner">
                  <h2>CREANDO CONEXIONES LOCALES Y GLOBALES</h2>
                </div>
                <div id="SiTxt">
                  <h4>
                    Las experiencias de nuestros alumnos dentro y fuera del aula
                    desarrollan su ciudadanía del mundo, tanto de su comunidad
                    como del mundo. En Sunshine University, sabemos que las
                    perspectivas internacionales profundizan su comprensión.
                  </h4>
                  <h4>
                    Por ejemplo, mientras que nuestros estudiantes se están
                    convirtiendo en competentes en inglés y francés, también
                    ayudan a la comunidad comunidad, practican deportes, crean
                    arte o participan en viajes viajes nacionales e
                    internacionales.
                  </h4>
                  <h4>
                    Estas variadas experiencias hacen que nuestros estudiantes
                    adquieran conocimientos y comprensión completos y les
                    preparan para marcar la diferencia. la diferencia.
                  </h4>
                </div>
              </div>
              <div id="SiImg">
                <img src={painting}></img>
              </div>
            </div>
            <div id="Scollab">
              <div className="ScolTitle">
                <h2>COLABORACIONES</h2>
              </div>
              <div className="ScolTxt">
                <h4>
                  Nuestras colaboraciones con instituciones líderes mundiales en
                  la creatividad, la ciencia y el impacto social amplían la
                  visión de su hijo y le animan a poner en práctica su talento.
                </h4>
              </div>
              <div className="ScolCarrousel">
                <div className="ScolCard">
                  <div className="ScclImg">
                    <img src={music}></img>
                  </div>
                  <div className="SccTitle">
                    <h2>Escuela Juilliard</h2>
                  </div>
                  <div className="SccTxt">
                    <h4>
                      Nuestra colaboración con la institución artística más
                      renombrada del mundo enriquece el amor de nuestros alumnos
                      por la danza, el teatro y la música.
                    </h4>
                  </div>
                  <div className="SccBtn">
                    <a
                      href="https://www.juilliard.edu/"
                      target="_Blank"
                      title="Saber Más"
                    >
                      <span className="fa fa-plus-circle"></span>Saber Más
                    </a>
                  </div>
                </div>
                <div className="ScolCard">
                  <div className="ScclImg">
                    <img src={mit}></img>
                  </div>
                  <div className="SccTitle">
                    <h2>MIT</h2>
                  </div>
                  <div className="SccTxt">
                    <h4>
                      El programa STEAM del MIT-Nord Anglia ayuda a nuestros
                      alumnos a desarrollar su creatividad y su capacidad para
                      resolver problemas problemas afrontando los retos
                      interdisciplinares de hoy.
                    </h4>
                  </div>
                  <div className="SccBtn">
                    <a
                      href="https://www.mit.edu/"
                      target="_Blank"
                      title="Saber Más"
                    >
                      <span className="fa fa-plus-circle"></span>Saber Más
                    </a>
                  </div>
                </div>
                <div className="ScolCard">
                  <div className="ScclImg">
                    <img src={law}></img>
                  </div>
                  <div className="SccTitle">
                    <h2>Harvard</h2>
                  </div>
                  <div className="SccTxt">
                    <h4>
                      La colaboración de Sunshine University con Harvard es más
                      que una alianza; es un compromiso para fomentar un entorno
                      en el que los estudiantes puedan acceder a lo mejor de
                      ambos mundos.
                    </h4>
                  </div>
                  <div className="SccBtn">
                    <a
                      href="https://www.harvard.edu/"
                      target="_Blank"
                      title="Saber Más"
                    >
                      <span className="fa fa-plus-circle"></span>Saber Más
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="Sdiscovery">
              <div className="SdiscTitle">
                <h2>DESCUBRIENDO NUESTROS TALENTOS Y EL MUNDO EN GENERAL</h2>
              </div>
              <div className="ScolTxt">
                <h4>
                  A través de una variedad de actividades extracurriculares, en
                  las artes, los deportes, el apoyo al aprendizaje y la
                  investigación de carreras, el tiempo de su hijo fuera del aula
                  da sentido y motivación a su tiempo dentro del aula.
                </h4>
                <h4>
                  También ofrecemos emocionantes viajes a destinos en México,
                  así como viajes internacionales con Nord Anglia's Global Games
                  e intercambios al Reino Unido.
                </h4>
              </div>
              <div className="ScolCarrousel">
                <div className="ScolCard">
                  <div className="ScclImg">
                    <img src={sport}></img>
                  </div>
                  <div className="SccTitle">
                    <h2>Deportes en equipo e individuales</h2>
                  </div>
                  <div className="SccTxt">
                    <h4>
                      Entrenadores deportivos especializados dirigen nuestro
                      programa semanal para mantener a nuestros alumnos en forma
                      y sanos. Se anima a todos los estudiantes a jugar por
                      diversión y bienestar, y nuestros jugadores con más
                      talento representan a Sunshine University en torneos
                      competitivos.
                    </h4>
                  </div>
                </div>
                <div className="ScolCard">
                  <div className="ScclImg">
                    <img src={art}></img>
                  </div>
                  <div className="SccTitle">
                    <h2>Creatividad y artes</h2>
                  </div>
                  <div className="SccTxt">
                    <h4>
                      Nuestros alumnos expresan sus ideas y creatividad
                      participando en asignaturas académicas que abarcan la
                      música, el teatro, la danza contemporánea, la danza
                      folclórica, la artesanía y las artes visuales.
                    </h4>
                  </div>
                </div>
                <div className="ScolCard">
                  <div className="ScclImg">
                    <img src={reading}></img>
                  </div>
                  <div className="SccTitle">
                    <h2>Alfabetización y apoyo al aprendizaje</h2>
                  </div>
                  <div className="SccTxt">
                    <h4>
                      Después de clase, nuestros alumnos pueden trabajar en
                      cualquier área que suponga un reto con nuestros talentosos
                      profesores, que diseñan sesiones de tutoría con nuestros
                      especialistas en la materia. Este apoyo más allá del
                      horario de clase ayuda a nuestros alumnos a utilizar
                      estrategias para aprovechar sus puntos fuertes y alcanzar
                      sus objetivos.
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div id="Sdifference">
              <div className="SdiCard">
                <div className="SdiVerb">
                  <div className="SdifTitle">
                    <h4>MANTENERSE SANO EN CUERPO Y MENTE</h4>
                    <h2>CUIDANDO DE NUESTRO BIENESTAR</h2>
                  </div>
                  <div className="SdiTxt">
                    <h4>
                      En Sunshine University, creemos que una mentalidad y un
                      estilo de vida saludables son tan importantes como
                      nuestros estudios, por lo que fomentamos el desarrollo
                      integral de nuestros estudiantes apoyando su bienestar y
                      su capacidad de recuperación.
                    </h4>
                    <h4>
                      Nuestro equipo de psicólogos trabaja en estrecha
                      colaboración con nuestros profesores, especialistas y
                      padres para dotar a nuestros alumnos de herramientas y
                      recursos que les permitan mantener una mente y un espíritu
                      sanos que complementen su bienestar físico.
                    </h4>
                    <h4>
                      Además, nuestro Coordinador de Normas y Disciplina hace
                      demostraciones de comportamiento positivo y
                      autorregulación a nuestros alumnos, para que puedan
                      desarrollar técnicas y estrategias que potencien su
                      bienestar.
                    </h4>
                  </div>
                </div>
                <div className="SdiImg">
                  <div className="SdiImgInner">
                    <img src={painting}></img>
                  </div>
                </div>
              </div>
              <div className="SdiCard">
                <div className="SdiVerb">
                  <div className="SdifTitle">
                    <h4>APRENDIZAJE ÚTIL</h4>
                    <h2>MARCANDO LA DIFERENCIA</h2>
                  </div>
                  <div className="SdiTxt">
                    <h4>
                      En Sunshine University, animamos a nuestros estudiantes a
                      desarrollar su empatía y amabilidad para establecer
                      conexiones significativas con las comunidades que les
                      rodean, de modo que puedan descubrir cómo quieren
                      contribuir al mundo.
                    </h4>
                    <h4>
                      A través de viajes y actividades de extensión social a
                      nuestras comunidades en México, nuestros alumnos aprenden
                      a comprender diferentes entornos sociales y a considerar
                      formas en las que pueden ser útiles.
                    </h4>
                    <h4>
                      Además, como parte de nuestra cultura internacional,
                      nuestros alumnos aprenden a investigar, analizar y debatir
                      cuestiones de actualidad y de impacto mundial en nuestra
                      asignatura "Política y Ciudadanía Mundial".De este modo,
                      nuestros alumnos aprenden a marcar la diferencia no sólo a
                      nivel local, sino también mundial.
                    </h4>
                  </div>
                </div>
                <div className="SdiImg">
                  <div className="SdiImgInner">
                    <img src={trees}></img>
                  </div>
                </div>
              </div>
            </div>
            <div id="Senvironment">
              <div id="SeTitle">
                <h2>UN ENTORNO DE APRENDIZAJE ESTIMULANTE</h2>
                <div id="SiTxt">
                  <h4>
                    Nuestro campus es un entorno totalmente enriquecedor con un
                    ambiente inspirador, donde nuestros estudiantes pueden
                    perseguir todas sus metas y aspiraciones.
                  </h4>
                </div>
              </div>
              <div id="SiImg">
                <img src={fun}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SaberMas;
