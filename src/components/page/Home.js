import { Page } from "./Page";
import logoIg from "../../images/logoIg.svg";
import logoWhats from "../../images/logoWhatsApp.svg";
import logoAnthon from "../../images/logoAnthon.jpg";
import "./styles/Home.scss";

export const Home = () => {
  return (
    <Page>
      <section>
        <div className="col-md-9 gx-5 mb-4 infoAnthon">
          <img
            className="logoAnthon"
            src={logoAnthon}
            alt="logoAnthon"
          />
          <div className="descriptionOfAnthon">
            <h3>
              <strong>Sobre Anthon</strong>
            </h3>
            <p>
              <strong>Anthon Bakery</strong> surgió como un lugar donde pude
              refugiarme del estrés provado por el encierro al que nos llevó la
              nueva normalidad. Cocinando en casa por 6 años, me pareció un buen
              momento éste, donde tenía todo el tiempo disponible para poder
              llevar a cabo clásicos de pastelería que merecían ser
              reivindicados después de tanto maltrato que ví en redes sociales,
              panaderías e incluso tiendas pasteleras. La esencia de{" "}
              <strong>Anthon Bakery</strong> es hacer pastelería bien definida,
              impulsada por lo artístico que puedo proponer desde la tecnica y
              la pasión.
            </p>
            <h4>
              <strong>Contactame</strong>
            </h4>
            <div className="socialReds">
              <a
                href="https://www.instagram.com/anthonbakery/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logoIg" src={logoIg} alt="Instagram" />
              </a>
              <a
                href="https://wa.link/jnzgmv"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="logoWhats" src={logoWhats} alt="WhatsApp" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
};
