import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from "./style";
import emailjs from "@emailjs/browser"

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
    triggerOnce: false,
    threshold: 0.1
  });

  // Inicialize o useForm
  const { register, handleSubmit, reset } = useForm();

  // Função para ser chamada no submit do formulário
  const onSubmit = (data) => {
    const { name, email, message } = data; //Data é um objeto que tem os dados, assim abro ele e pego os dados de dentro

    // Pegar os dados
    const templateParams = {
      from_name: name,
      message: message,
      email: email
    }

    emailjs.send("service_c8psoym", "template_e3dhr2n", templateParams, "92oQZUGklohVaFKvM")

      // Verificar se o email foi enviado
      .then((response) => {
        console.log("email enviado", response.status, response.text);
        reset();
      }, (err) => { //Verificar se deu erro
        console.log("Erro", err);
      })
  };

  return (
    <S.FormContainer>
      <div className='content'>
        <div className='form'>
          <h2>Entre em <br />
            <span>Contato</span></h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Seu nome"
              {...register('name', { required: "Nome é obrigatório" })}
            />
            <input
              type="email"
              placeholder="Seu E-mail"
              {...register('email', {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido"
                }
              })}
            />
            <textarea
              placeholder="Sua mensagem :)"
              {...register('message', { required: "Mensagem é obrigatória" })}
            ></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-info" ref={ref}>
          {links.map((link, index) => (
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: '100%', opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
              transition={{ delay: index * 0.5, duration: 1 }}
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
