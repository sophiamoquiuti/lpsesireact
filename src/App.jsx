import s from "./App.module.css";

import image01 from '/01.avif'
import image02 from '/02.jpg'
import image03 from '/03.webp'


function App() {
  //js

  return (
    <>
      <nav>
        <span className={s.navItems} onclick="navTo('s1')">
          <i class="fa-regular fa-address-card"></i>
          <a href="#s1" className={s.navWords}>Empresa</a>
        </span>
        <span className={s.navItems} onclick="navTo('s2')">
          <i class="fa-solid fa-car-side"></i>
          <a href="#s2" className={s.navWords}>Carros</a>
        </span>
        <span className={s.navItems} onclick="navTo('s3')">
          <i class="fa-brands fa-square-youtube"></i>
          <a href="#s3" className={s.navWords}>Vídeo</a>
        </span>
        <span className={s.navItems} onclick="navTo('s4')">
         <i class="fa-solid fa-phone"></i>
          <a href="#s4" className={s.navWords}>Contato</a>
        </span>
      </nav>
      <main>
        <section id="s1" className={s.s1}>
          <h1>Ferrari</h1>
          <h2>O melhor carro esportivo do mundo.</h2>
        </section>
        <section id="s2" className={s.s2}>
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={image01}
              alt="Carro 01"
            />
            <div>
              <h4>Ferrari F8 Tributo</h4>
              <p>
                Um esportivo criado para unir desempenho extremo com
                dirigibilidade refinada no dia a dia. Seu motor V8 biturbo
                entrega aceleração brutal e um ronco que se tornou marca
                registrada da linha.
              </p>
            </div>
          </div>
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={image02}
              alt="Carro 02"
            />
            <div>
              <h4>Ferrari 488 Pista</h4>
              <p>
                Desenvolvida com foco em pistas, ela combina aerodinâmica
                agressiva com redução de peso. Cada detalhe foi pensado para
                respostas rápidas em curvas e máxima eficiência em alta
                velocidade.
              </p>
            </div>
          </div>
          <div className={s.card}>
            <img
              width="300px"
              height="auto"
              src={image03}
              alt="Carro 3"
            />
            <div>
              <h4>Ferrari LaFerrari</h4>
              <p>
                Considerada um dos projetos mais icônicos da marca italiana,
                mistura motor a combustão com tecnologia híbrida inspirada na
                Fórmula 1. Seu design futurista acompanha um desempenho capaz de
                impressionar até colecionadores experientes.
              </p>
            </div>
          </div>
        </section>
        <section id="s3" className={s.s3}>
          <iframe
            className={s.vid}
            src="https://www.youtube.com/embed/Po4w52SsNMk?si=EZhbUItp38zNPxI9&autoplay=0"
            title="YouTube video player"
            frameborder="0"
            allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
        <section id="s4" className={s.s4}>
          <h3>CONTATO</h3>
          <div className={s.formulario}>
            <label for="nome">Nome: </label>
            <input type="text" id="nome" placeholder="Digite seu nome" />
            <label for="assunto">Mensagem: </label>
            <textarea id="assunto" placeholder="Digite sua mensagem"></textarea>
            <button onclick="enviar()">ENVIAR</button>
          </div>
        </section>
      </main>
      <footer>
        <a href="https://www.facebook.com" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </footer>
    </>
  );
}

export default App;
