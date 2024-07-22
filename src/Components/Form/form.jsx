import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from "./style";

// Imagens
import Github from "/public/icones/github.png";
import Email from "/public/icones/email.png";
import Linkedin from "/public/icones/linkedin.png";

const links = [
  { href: "https://github.com/LaraGuedes", src: Github, alt: "GitHub", text: "/LaraGuedes" },
  { href: "https://www.linkedin.com/in/lara-caleg%C3%A1rio-guedes/", src: Linkedin, alt: "LinkedIn", text: "/Lara-Calegario-guedes" },
  { href: "mailto:lara.guedes569@gmail.com", src: Email, alt: "Email", text: "lara.guedes569@gmail.com" }
];

function Form() {
  const { ref, inView } = useInView({
    triggerOnce: false, // Aciona a animação toda vez que a seção entra na viewport
    threshold: 0.1 // Define o limite de visibilidade (10%)
  });

  return (
    <S.FormContainer>
      <div className='content'>
        <div className='form'>
          <h2>Entre em <br/>
            <span>Contato</span></h2>
          <form>
            <input type="text" placeholder="Seu nome" name="name" />
            <input type="email" placeholder="Seu E-mail" name="email" />
            <textarea placeholder="Sua mensagem :)" name="message"></textarea>
            <button type="submit">Enviar_</button>
          </form>
        </div>
        <div className="contact-info" ref={ref}>
          {links.map((link, index) => (
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: '100%', opacity: 0 }} // Mova as bolinhas de um ponto a 100% do width da viewport
              animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
              transition={{ delay: index * 0.5, duration: 1 }} // Ajuste o atraso conforme necessário
              key={index}
              style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            >
              <img src={link.src} alt={link.alt} />
              {link.text}
            </motion.a>
          ))}
        </div>
      </div>
    </S.FormContainer>
  );
}

export default Form;
