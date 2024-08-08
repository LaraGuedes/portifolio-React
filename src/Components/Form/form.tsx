import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as S from "./style";
import emailjs from "@emailjs/browser";

// Zod para validação
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const links = [
  { href: "https://github.com/LaraGuedes", src: "/icones/github.png", alt: "GitHub", text: "/LaraGuedes" },
  { href: "https://www.linkedin.com/in/lara-caleg%C3%A1rio-guedes/", src: "/icones/linkedin.png", alt: "LinkedIn", text: "/Lara-Calegario-guedes" },
  { href: "mailto:lara.guedes569@gmail.com", src: "/icones/email.png", alt: "Email", text: "lara.guedes569@gmail.com" }
];

// Colocar os campos que serão verificados
const createSchema = z.object({
  name: z.string().nonempty('Nome é obrigatório'),
  email: z.string().nonempty('E-mail é obrigatório').email('Formato de e-mail inválido'),
  message: z.string().nonempty('Mensagem é obrigatória'),
});

// Definindo o tipo de schema com o ts
type ProductsFilterSchema = z.infer<typeof createSchema>;

function Form() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ProductsFilterSchema>({
    resolver: zodResolver(createSchema),
  });

  const onSubmit = (data: ProductsFilterSchema) => {
    const { name, email, message } = data;

    const templateParams = {
      from_name: name,
      message: message,
      email: email
    };

    emailjs.send("service_c8psoym", "template_e3dhr2n", templateParams, "92oQZUGklohVaFKvM")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        reset();
      }, (err) => {
        console.log("Erro", err);
      });
  };

  // Verifica o tamanho da tela para aplicar animações apenas em desktop
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    updateMedia();
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  return (
    <S.FormContainer className='contact-section'>
      <div className='content'>
        <div className='form'>
          <h2>Entre em <br /><span>Contato</span></h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              placeholder="Seu nome"
              {...register('name')}
            />
            {errors.name && <p>{errors.name.message}</p>}
            <input
              type="email"
              placeholder="Seu E-mail"
              {...register('email')}
            />
            {errors.email && <p>{errors.email.message}</p>}
            <textarea
              placeholder="Sua mensagem :)"
              {...register('message')}
            ></textarea>
            {errors.message && <p>{errors.message.message}</p>}
            <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="contact-info" ref={ref}>
          {links.map((link, index) => (
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ x: isDesktop ? '100%' : 0, opacity: isDesktop ? 0 : 1 }}
              animate={inView && isDesktop ? { x: 0, opacity: 1 } : {}}
              transition={isDesktop ? { delay: index * 0.5, duration: 1 } : {}}
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
