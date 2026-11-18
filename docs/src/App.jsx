import React, { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = 'dd383332-8636-4d2c-97d8-1f7cfb318b75';

const styles = {
  page: {
    fontFamily: 'Arial, sans-serif',
    background: '#fffdfa',
    minHeight: '100vh',
    color: '#292524',
    overflowX: 'clip'
  },
  container: {
    width: '100%',
    maxWidth: '1160px',
    margin: '0 auto',
    padding: '0 25px',
    boxSizing: 'border-box'
  },
  brand: {
    background: '#f97316',
    color: '#fff',
    padding: '10px 16px',
    borderRadius: '12px',
    fontWeight: '800',
    fontSize: '17px',
    display: 'inline-block',
    whiteSpace: 'nowrap'
  },
  primaryButton: {
    padding: '14px 23px',
    background: '#f97316',
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.2s'
  },
  secondaryButton: {
    padding: '13px 22px',
    background: '#fff',
    color: '#c2410c',
    border: '1px solid #fed7aa',
    borderRadius: '12px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  section: {
    padding: '85px 0'
  },
  eyebrow: {
    display: 'inline-block',
    color: '#c2410c',
    background: '#ffedd5',
    padding: '7px 13px',
    borderRadius: '30px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
    marginBottom: '17px'
  },
  sectionTitle: {
    fontSize: 'clamp(28px, 4vw, 40px)',
    lineHeight: '1.15',
    color: '#292524',
    margin: '0 0 16px',
    fontWeight: '800'
  },
  sectionText: {
    color: '#78716c',
    fontSize: '16px',
    lineHeight: '1.75',
    maxWidth: '690px',
    margin: '0 auto'
  },
  card: {
    background: '#fff',
    border: '1px solid #f5e7d8',
    borderRadius: '18px',
    padding: '25px',
    boxShadow: '0 8px 28px rgba(120, 53, 15, 0.045)'
  },
  input: {
    width: '100%',
    boxSizing: 'border-box',
    padding: '13px 14px',
    border: '1px solid #e7e5e4',
    borderRadius: '10px',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
    outlineColor: '#fb923c',
    background: '#fff'
  }
};

const modules = [
  {
    icon: '👥',
    title: 'Tutores e pacientes',
    description: 'Cadastros centralizados para manter as informações dos tutores e seus animais organizadas.'
  },
  {
    icon: '🩺',
    title: 'Atendimento veterinário',
    description: 'Estrutura planejada para consultas, anamnese, registros clínicos e histórico do paciente.'
  },
  {
    icon: '📋',
    title: 'Receitas e prescrições',
    description: 'Criação de receitas vinculadas ao atendimento, com geração de documentos em PDF prevista.'
  },
  {
    icon: '🏥',
    title: 'Internamento',
    description: 'Acompanhamento de pacientes internados, evolução clínica, cuidados e procedimentos.'
  },
  {
    icon: '💉',
    title: 'Vacinação',
    description: 'Organização do histórico vacinal, lotes, validade e próximos reforços.'
  },
  {
    icon: '📦',
    title: 'Estoque',
    description: 'Controle planejado de produtos, medicamentos, entradas, saídas e movimentações por unidade.'
  },
  {
    icon: '💰',
    title: 'Financeiro',
    description: 'Estrutura para caixa, contas, recebimentos e acompanhamento financeiro.'
  },
  {
    icon: '📊',
    title: 'Relatórios',
    description: 'Indicadores para acompanhar a operação e apoiar decisões de gestão.'
  }
];

const faqs = [
  {
    question: 'O Vetinos é destinado apenas a clínicas pequenas?',
    answer: 'Não. A proposta é atender clínicas independentes, hospitais veterinários e organizações com várias unidades, permitindo uma evolução gradual da estrutura.'
  },
  {
    question: 'Qual a diferença entre Vetinos Local e Vetinos Web?',
    answer: 'O Vetinos Local é uma instalação independente para uma clínica de unidade única, com acesso pela rede interna e operação local prevista. O Vetinos Web é a modalidade online indicada para redes que precisam administrar várias unidades em conjunto.'
  },
  {
    question: 'Uma clínica com duas unidades pode usar o Vetinos Local?',
    answer: 'No modelo Local, cada unidade teria uma instalação independente, sem gestão centralizada entre elas. Para administrar várias unidades em conjunto, a modalidade indicada é o Vetinos Web.'
  },
  {
    question: 'O Vetinos Local já funciona sem internet?',
    answer: 'A operação local com servidor na clínica e acesso pela rede interna é uma modalidade prevista no projeto. Ela ainda depende de implementação, testes de instalação, segurança, backup e recuperação antes de ser oferecida.'
  },
  {
    question: 'Os módulos já estão todos disponíveis?',
    answer: 'Não. O Vetinos está em desenvolvimento. Os módulos serão disponibilizados gradualmente, depois de implementados, integrados e validados.'
  },
  {
    question: 'Como funcionam os planos e os preços?',
    answer: 'As condições comerciais ainda estão em formação. Entre em contato para acompanhar as novidades e demonstrar seu interesse.'
  },
  {
    question: 'Como posso solicitar informações?',
    answer: 'Utilize o formulário desta página. Sua mensagem será encaminhada para a equipe responsável pelo Vetinos.'
  },
  {
    question: 'O sistema protege os dados de cada clínica?',
    answer: 'O isolamento entre organizações, o controle de permissões e a proteção das informações são requisitos centrais da arquitetura do projeto.'
  }
];

function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #f5e7d8',
      background: '#fffdfa',
      padding: '27px 20px',
      textAlign: 'center'
    }}>
      <div style={{
        color: '#a8a29e',
        fontSize: '12px',
        lineHeight: 1.8
      }}>
        © 2026 Vetinos. Todos os direitos reservados.
        <br />
        by Jonathan D. Andrade
      </div>
    </footer>
  );
}

function PetIllustration() {
  return (
    <img
      src={`${import.meta.env.BASE_URL}pets-vet.png`}
      alt="Ilustração de cachorro e gato representando o cuidado veterinário"
      style={{
        width: '100%',
        maxWidth: '390px',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
      }}
    />
  );
}

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '43px' }}>
      <span style={styles.eyebrow}>{eyebrow}</span>
      <h2 style={styles.sectionTitle}>{title}</h2>
      <p style={styles.sectionText}>{text}</p>
    </div>
  );
}

function StatusLabel({ children = 'Em desenvolvimento' }) {
  return (
    <span style={{
      display: 'inline-block',
      color: '#9a3412',
      background: '#fff7ed',
      border: '1px solid #fed7aa',
      padding: '6px 9px',
      borderRadius: '20px',
      fontSize: '10px',
      fontWeight: 'bold'
    }}>
      {children}
    </span>
  );
}

export default function App() {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    subject: 'Quero conhecer o Vetinos',
    message: ''
  });
  const [website, setWebsite] = useState('');
  const [sending, setSending] = useState(false);
  const [contactStatus, setContactStatus] = useState(null);
  const [openFaq, setOpenFaq] = useState(0);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContact((previous) => ({ ...previous, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setContactStatus(null);

    if (website.trim()) {
      setContactStatus({
        type: 'success',
        message: 'Mensagem recebida. Obrigado pelo contato!'
      });
      return;
    }

    setSending(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Vetinos - ${contact.subject}`,
          from_name: 'Site Vetinos',
          name: contact.name,
          email: contact.email,
          assunto: contact.subject,
          message: contact.message,
          botcheck: ''
        })
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Não foi possível enviar a mensagem.');
      }

      setContactStatus({
        type: 'success',
        message: 'Mensagem enviada com sucesso! Em breve entraremos em contato.'
      });

      setContact({
        name: '',
        email: '',
        subject: 'Quero conhecer o Vetinos',
        message: ''
      });
    } catch (err) {
      console.error('Erro ao enviar contato:', err);
      setContactStatus({
        type: 'error',
        message: 'Não foi possível enviar sua mensagem agora. Tente novamente.'
      });
    } finally {
      setSending(false);
    }
  };

  const goToContact = () => {
    document.getElementById('contato')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <div style={styles.page}>
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; scroll-padding-top: 78px; }
        section[id] { scroll-margin-top: 78px; }
        button, input, textarea, select { font-family: Arial, sans-serif; }
        button:hover { filter: brightness(0.97); }
        a { color: inherit; }
        .vet-nav a {
          text-decoration: none;
          color: #57534e;
          font-size: 13px;
          font-weight: 600;
        }
        .vet-nav a:hover { color: #ea580c; }
        .vet-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 18px;
        }
        .vet-two {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .vet-three {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 20px;
        }
        .vet-module {
          transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
          will-change: transform;
        }
        .vet-module:hover,
        .vet-module:focus-within {
          transform: translateY(-4px) scale(1.01);
          border-color: #fed7aa;
          box-shadow: 0 16px 36px rgba(120,53,15,.11);
        }
        .vet-faq {
          width: 100%;
          text-align: left;
          background: #fff;
          border: 1px solid #f5e7d8;
          border-radius: 12px;
          padding: 18px 20px;
          cursor: pointer;
          color: #292524;
          font-size: 14px;
          font-weight: bold;
        }
        .vet-contact-input:focus {
          border-color: #fb923c !important;
          outline: 2px solid #ffedd5;
        }
      `}</style>

      {/* CABEÇALHO */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(255,253,250,0.96)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #f5e7d8'
      }}>
        <div className="vet-header" style={{
          ...styles.container,
          minHeight: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
          <a href="#inicio" style={{ textDecoration: 'none' }}>
            <span style={styles.brand}>🐾 Vetinos</span>
          </a>

          <nav className="vet-nav" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }}>
            <a href="#sobre">Sobre</a>
            <a href="#recursos">Recursos</a>
            <a href="#modalidades">Modalidades</a>
            <a href="#planos">Planos</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>

          {/* REDIRECIONAMENTO DIRETO PARA O ACESSO EXTERNO DO SISTEMA */}
          <a
            href="https://app-vetinos.web.app/acesso.html"
            style={{
              ...styles.primaryButton,
              padding: '11px 18px',
              fontSize: '13px'
            }}
          >
            Acessar sistema
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="inicio" className="vet-hero" style={{
          padding: '75px 0 85px',
          background: 'linear-gradient(135deg, #fff7ed 0%, #fffdfa 58%, #ffedd5 100%)'
        }}>
          <div style={{
            ...styles.container,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px'
          }}>
            <div style={{ flex: '1 1 440px', minWidth: 0 }}>
              <span style={styles.eyebrow}>
                Gestão veterinária preparada para crescer
              </span>

              <h1 style={{
                fontSize: 'clamp(38px, 5.5vw, 61px)',
                lineHeight: 1.08,
                color: '#292524',
                letterSpacing: '-1.8px',
                margin: '0 0 23px',
                fontWeight: 900
              }}>
                Sua clínica evolui.
                <br />
                <span style={{ color: '#f97316' }}>
                  Sua gestão acompanha.
                </span>
              </h1>

              <p style={{
                color: '#57534e',
                fontSize: '17px',
                lineHeight: 1.8,
                maxWidth: '570px',
                marginBottom: '30px'
              }}>
                Uma plataforma de gestão veterinária pensada para
                clínicas, hospitais e redes que desejam organizar
                sua operação e crescer com estrutura, integração
                e segurança.
              </p>

              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                <button onClick={goToContact} style={styles.primaryButton}>
                  Quero conhecer o Vetinos
                </button>
                <a href="#recursos" style={styles.secondaryButton}>
                  Conhecer a plataforma
                </a>
              </div>
            </div>

            <div style={{
              flex: '1 1 350px',
              minWidth: 0,
              display: 'flex',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '100%',
                maxWidth: '460px',
                background: '#fff',
                border: '1px solid #fed7aa',
                borderRadius: '30px',
                padding: '25px',
                boxShadow: '0 25px 65px rgba(154,52,18,.09)'
              }}>
                <PetIllustration />
                <div style={{
                  textAlign: 'center',
                  padding: '12px 5px 5px'
                }}>
                  <h3 style={{
                    color: '#9a3412',
                    fontSize: '21px',
                    margin: '5px 0 10px'
                  }}>
                    Tecnologia para cuidar melhor.
                  </h3>
                  <p style={{
                    color: '#a16207',
                    fontSize: '14px',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    Organização para quem cuida de quem não sabe falar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* APRESENTAÇÃO */}
        <section id="sobre" className="vet-section" style={styles.section}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Conheça o Vetinos"
              title="Mais estrutura para acompanhar o crescimento da sua operação."
              text="O Vetinos está sendo desenvolvido para conectar os principais processos de uma operação veterinária em uma plataforma organizada, modular e preparada para crescer."
            />

            <div className="vet-three">
              {[
                {
                  icon: '🏥',
                  title: 'Para clínicas',
                  text: 'Uma estrutura pensada para organizar a operação de uma clínica independente.'
                },
                {
                  icon: '🩺',
                  title: 'Para hospitais',
                  text: 'Uma base preparada para integrar diferentes rotinas e processos veterinários.'
                },
                {
                  icon: '🏢',
                  title: 'Para redes',
                  text: 'Uma arquitetura planejada para administrar várias unidades dentro da mesma organização.'
                }
              ].map((item) => (
                <div key={item.title} style={{
                  ...styles.card,
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '37px', marginBottom: '16px' }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    color: '#9a3412',
                    fontSize: '19px',
                    margin: '0 0 11px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: '#78716c',
                    fontSize: '14px',
                    lineHeight: 1.7,
                    margin: 0
                  }}>
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MÓDULOS */}
        <section id="recursos" className="vet-section" style={styles.section}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Ecossistema Vetinos"
              title="Os processos da gestão veterinária, conectados."
              text="A plataforma está sendo desenvolvida em módulos integrados. Cada recurso será disponibilizado gradualmente, após sua implementação e validação."
            />

            <div className="vet-grid">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="vet-module"
                  style={{
                    ...styles.card,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '230px'
                  }}
                >
                  <div style={{
                    fontSize: '31px',
                    marginBottom: '15px'
                  }}>
                    {module.icon}
                  </div>
                  <h3 style={{
                    fontSize: '17px',
                    color: '#9a3412',
                    margin: '0 0 10px'
                  }}>
                    {module.title}
                  </h3>
                  <p style={{
                    color: '#78716c',
                    fontSize: '13px',
                    lineHeight: 1.7,
                    margin: '0 0 17px',
                    flex: 1
                  }}>
                    {module.description}
                  </p>
                  <div>
                    <StatusLabel />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MODALIDADES DE IMPLANTAÇÃO */}
        <section id="modalidades" className="vet-section" style={styles.section}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Duas modalidades independentes"
              title="O Vetinos se adapta à forma como sua clínica trabalha."
              text="Escolha entre uma instalação local, voltada a uma unidade independente, ou a plataforma web online, preparada para redes que precisam administrar várias unidades em conjunto."
            />

            <div className="vet-two" style={{ alignItems: 'stretch' }}>
              <div style={{ ...styles.card, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ fontSize: '38px' }}>🖥️</div>
                <div>
                  <span style={styles.eyebrow}>Instalação local</span>
                  <h3 style={{ color: '#9a3412', fontSize: '24px', margin: '0 0 8px' }}>Vetinos Local</h3>
                  <p style={{ color: '#78716c', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>Para clínica independente que utiliza uma única unidade e prefere manter a operação em sua própria estrutura.</p>
                </div>
                <ul style={{ color: '#57534e', fontSize: '13px', lineHeight: 1.9, paddingLeft: '20px', margin: 0 }}>
                  <li>Instalado em um computador servidor da clínica.</li>
                  <li>Computadores e tablets acessam pela rede local.</li>
                  <li>Operação prevista mesmo sem conexão com a internet.</li>
                  <li>Banco de dados e instalação próprios daquela unidade.</li>
                  <li>Atualizações e cópias de segurança administradas localmente.</li>
                </ul>
                <div style={{ marginTop: 'auto', padding: '13px', borderRadius: '11px', background: '#fff7ed', color: '#9a3412', fontSize: '12px', lineHeight: 1.6 }}>Cada instalação é independente. Se uma empresa tiver mais de uma unidade e optar pelo modelo local, cada unidade terá seu próprio sistema, sem gestão centralizada entre elas.</div>
                <button onClick={() => { setContact((previous) => ({ ...previous, subject: 'Interesse no Vetinos Local' })); goToContact(); }} style={styles.secondaryButton}>Tenho interesse no Vetinos Local</button>
              </div>

              <div style={{ ...styles.card, display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div style={{ fontSize: '38px' }}>☁️</div>
                <div>
                  <span style={styles.eyebrow}>Plataforma online</span>
                  <h3 style={{ color: '#9a3412', fontSize: '24px', margin: '0 0 8px' }}>Vetinos Web</h3>
                  <p style={{ color: '#78716c', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>Para redes, grupos e organizações que precisam conectar e administrar duas ou mais unidades em uma única estrutura.</p>
                </div>
                <ul style={{ color: '#57534e', fontSize: '13px', lineHeight: 1.9, paddingLeft: '20px', margin: 0 }}>
                  <li>Acesso pela internet, sem servidor na recepção.</li>
                  <li>Administração centralizada de várias unidades.</li>
                  <li>Usuários e permissões conforme organização e unidade.</li>
                  <li>Dados compartilhados ou separados conforme as regras da rede.</li>
                  <li>Atualizações e infraestrutura administradas centralmente.</li>
                </ul>
                <div style={{ marginTop: 'auto', padding: '13px', borderRadius: '11px', background: '#fff7ed', color: '#9a3412', fontSize: '12px', lineHeight: 1.6 }}>A modalidade web é a opção indicada para redes que precisam de visão e gestão integradas entre unidades.</div>
                <button onClick={() => { setContact((previous) => ({ ...previous, subject: 'Interesse no Vetinos Web para rede' })); goToContact(); }} style={styles.secondaryButton}>Tenho interesse no Vetinos Web</button>
              </div>
            </div>

            <p style={{ color: '#a8a29e', fontSize: '12px', lineHeight: 1.7, textAlign: 'center', maxWidth: '820px', margin: '24px auto 0' }}>As modalidades e seus recursos estão em estruturação e serão disponibilizados após implementação e validação. Planos, valores, requisitos técnicos e condições de contratação serão informados pela equipe Vetinos.</p>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="vet-section" style={styles.section}>
          <div style={{
            ...styles.container,
            maxWidth: '850px'
          }}>
            <SectionHeading
              eyebrow="Perguntas frequentes"
              title="Tire suas dúvidas."
              text="Algumas respostas sobre a proposta, a estrutura e o desenvolvimento do Vetinos."
            />

            <div style={{ display: 'grid', gap: '11px' }}>
              {faqs.map((faq, index) => (
                <div key={faq.question}>
                  <button
                    className="vet-faq"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                  >
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '15px'
                    }}>
                      {faq.question}
                      <span style={{
                        color: '#f97316',
                        fontSize: '20px',
                        flexShrink: 0
                      }}>
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </span>
                  </button>

                  {openFaq === index && (
                    <div style={{
                      padding: '15px 20px 19px',
                      color: '#78716c',
                      fontSize: '13px',
                      lineHeight: 1.8,
                      background: '#fff',
                      border: '1px solid #f5e7d8',
                      borderTop: 'none',
                      borderRadius: '0 0 12px 12px'
                    }}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="vet-section" style={{
          ...styles.section,
          background: '#fff7ed'
        }}>
          <div style={styles.container}>
            <SectionHeading
              eyebrow="Fale com a equipe"
              title="Vamos conversar sobre sua operação?"
              text="Envie sua mensagem para conhecer melhor o Vetinos, demonstrar interesse ou acompanhar as novidades do projeto."
            />

            <div className="vet-two" style={{
              alignItems: 'start',
              maxWidth: '950px',
              margin: '0 auto'
            }}>
              <div style={{ padding: '15px 5px' }}>
                <h3 style={{
                  color: '#9a3412',
                  fontSize: '23px',
                  margin: '0 0 15px'
                }}>
                  Estamos construindo uma nova forma de organizar a gestão veterinária.
                </h3>
                <p style={{
                  color: '#78716c',
                  fontSize: '14px',
                  lineHeight: 1.85
                }}>
                  Quer saber mais sobre a plataforma, os módulos previstos
                  ou as futuras condições comerciais? Deixe seus dados e
                  conte um pouco sobre o que procura.
                </p>
              </div>

              <form
                onSubmit={handleContactSubmit}
                style={{
                  ...styles.card,
                  padding: '28px'
                }}
              >
                <h3 style={{
                  color: '#9a3412',
                  fontSize: '20px',
                  margin: '0 0 22px'
                }}>
                  Envie sua mensagem
                </h3>

                <div style={{
                  position: 'absolute',
                  left: '-10000px',
                  width: '1px',
                  height: '1px',
                  overflow: 'hidden'
                }} aria-hidden="true">
                  <label>
                    Não preencha este campo
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex="-1"
                      autoComplete="off"
                    />
                  </label>
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    Nome
                  </label>
                  <input
                    className="vet-contact-input"
                    name="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    required
                    maxLength="100"
                    placeholder="Seu nome"
                    style={styles.input}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    E-mail
                  </label>
                  <input
                    className="vet-contact-input"
                    type="email"
                    name="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    required
                    maxLength="150"
                    placeholder="seu@email.com"
                    style={styles.input}
                  />
                </div>

                <div style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    Assunto
                  </label>
                  <select
                    className="vet-contact-input"
                    name="subject"
                    value={contact.subject}
                    onChange={handleContactChange}
                    style={styles.input}
                  >
                    <option>Quero conhecer o Vetinos</option>
                    <option>Interesse em planos e preços</option>
                    <option>Tenho uma clínica veterinária</option>
                    <option>Tenho um hospital veterinário</option>
                    <option>Tenho uma rede de unidades</option>
                    <option>Outra dúvida</option>
                  </select>
                </div>

                <div style={{ marginBottom: '18px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '13px',
                    fontWeight: 'bold',
                    marginBottom: '7px',
                    color: '#57534e'
                  }}>
                    Mensagem
                  </label>
                  <textarea
                    className="vet-contact-input"
                    name="message"
                    value={contact.message}
                    onChange={handleContactChange}
                    required
                    maxLength="3000"
                    rows="5"
                    placeholder="Conte como podemos ajudar..."
                    style={{
                      ...styles.input,
                      resize: 'vertical',
                      lineHeight: 1.6
                    }}
                  />
                </div>

                {contactStatus && (
                  <div role="status" style={{
                    padding: '12px',
                    borderRadius: '9px',
                    marginBottom: '15px',
                    fontSize: '13px',
                    lineHeight: 1.5,
                    color: contactStatus.type === 'success' ? '#166534' : '#991b1b',
                    background: contactStatus.type === 'success' ? '#dcfce7' : '#fee2e2'
                  }}>
                    {contactStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  style={{
                    ...styles.primaryButton,
                    width: '100%',
                    opacity: sending ? 0.7 : 1,
                    cursor: sending ? 'wait' : 'pointer'
                  }}
                >
                  {sending ? 'Enviando mensagem...' : 'Enviar mensagem'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <Footer />
    </div>
  );
}