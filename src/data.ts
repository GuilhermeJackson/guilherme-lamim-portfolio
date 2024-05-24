import imobiliariaBerken from './assets/imobiliaria fernando berken.png';
import decontrola from './assets/carteira primeira tela.png';
import ticksOnePage from './assets/ticks website.png';
import cadence from './assets/cadence.png';
import oster from './assets/oster.png';
import coleman from './assets/coleman.png';
import personPictureImg from './assets/perfil.jpg'

export const descriptionSkills = {
    title: 'Meus conhecimentos',
    list: [
        'React / Typescript',
        'Angular / Typescript',
        'HTML / CSS',
        'Styled Component',
        'Less',
        'Ant Design NG-Zorro',
        'Consumo de APIs REST',
        'Ágil / Scrum',
        'Teste unitários',
        'eCharts',
        'Grafana',
        'Azure DevOps',
        'Prototipação com Figma'
    ],
}

export const descriptionAble = {

    resume1: "Olá, eu sou Guilherme Lamim, tenho me dedicado ao desenvolvimento de diversas aplicações web com uma variedade de bibliotecas e tecnologias.",
    resume2: " Tenho experiência em projetos de diferentes complexidades, onde aprendi as melhores técnicas para criar soluções web eficientes e modernas.",
    resume3: "Além do meu comprometimento profissional, sou pai e tenho o prazer de praticar MMA como uma forma de me manter ativo e saudável.",
    resume4: "Estou sempre em busca de novos desafios e oportunidades para aprimorar minhas habilidades como desenvolvedor e crescer como profissional."
}

export const providerService = {
    title: 'Meus Artigos',
    listService: [
        {
            title: 'Abstract Factory',
            subtitle: 'Você já ouvir falar sobre Abstract Factory?',
            description: 'Abstract Factory é um design patterns que fornece uma interface para criar conjuntos de objetos relacionados sem especificar sua classes concretas.',
            url: 'https://www.linkedin.com/pulse/abstract-factory-guilherme-lamim/?trackingId=sapLpfNTTMCdJ3SX%2BhzrnQ%3D%3D'
        },
        {
            title: 'Complexidade ciclomática',
            subtitle: '"The Complexity Measure" de Thomas J. McCabe',
            description: 'Esse conceito fornece uma métrica para quantificar a complexidade estrutural de um programa.',
            url: 'https://www.linkedin.com/pulse/complexidade-ciclom%25C3%25A1tica-guilherme-lamim/?trackingId=sapLpfNTTMCdJ3SX%2BhzrnQ%3D%3D'
        },
        {
            title: 'Dicas e Melhores Práticas para a Migração de JavaScript para TypeScript',
            subtitle: 'Melhor maneira de migrar de Javascript para Typescript',
            description: 'Dou ficas e falo sobre as melhores práticas para converter projetos de Javascript para Typescript',
            url: 'https://www.linkedin.com/pulse/dicas-e-melhores-pr%C3%A1ticas-para-migra%C3%A7%C3%A3o-de-javascript-guilherme-lamim-ajckf/'
        },
        {
            title: 'Observables: Simplificando o Código Assíncrono e Melhorando a Performance',
            subtitle: 'Como Observable funciona',
            description: 'Após me aprofundar nos Observables, nesse artigo explico como Observable pode facilitar a sua vida e por que ele vai melhorar a performace da sua aplicação baseado na minha experiencia. ',
            url: 'https://www.linkedin.com/pulse/observables-simplificando-o-c%C3%B3digo-ass%C3%ADncrono-e-melhorando-lamim-rzref/'
        },
    ]
}

export const whoReceiverService = {
    title: 'Alguns do meus trabalhos',
    listReceive: [
        
        {
            title: 'Imobiliaria Bercken',
            description: 'Projeto em React/Typescript. Com design moderno o site conta com banco de dados firebase e funcionalidade de notificação por e-mail.',
            img: imobiliariaBerken,
            github: '',
            site: 'https://fernando-berkenbrock-imobiliaria.vercel.app/'
        },
        {
            title: 'One Page para Catalogo de Produtos',
            description: 'Listagem de produtos com botão de whatsapp, direcionamento para mídias sociais e mapa de calor com hotjar.',
            img: ticksOnePage,
            github: '',
            site: 'https://www.ledsonalbuquerque.com/'
        },
        {
            title: 'Cadence e-commerce',
            description: 'Realização de manutenção na Cadence e-commerce utlizando javascript, typescript e jQuery.',
            img: cadence,
            github: '',
            site: 'https://www.cadence.com.br/'
        },
        {
            title: 'Oster e-commerce',
            description: 'Realização de manutenção na Oster e-commerce utlizando javascript, typescript e jQuery.',
            img: oster,
            github: '',
            site: 'https://www.oster.com.br/'
        },
        {
            title: 'Coleman',
            description: 'Realização de manutenção na Coleman e-commerce utlizando javascript, typescript e jQuery.',
            img: coleman,
            github: '',
            site: 'https://www.colemanstore.com.br/'
        },
        {
            title: 'DeControla',
            description: 'Projeto em React/Typescript/Java/Spring Boot. Um sistema financeiro '+
            'moderno, prático e intuitivo para gerenciar seus gastos e ganhos do mês.',
            img: decontrola,
            github: '',
            site: 'https://www.decontrola.com.br'
        },
        // {
        //     title: 'Plataforma de Streaming',
        //     description: 'Projeto criado para estudo de conceitos em React, criação de layout com Tailwind, criação e consumo de queries e mutation com GraphQl e Apollo, exibição de video com Vime e formatação de datas com datefns.',
        //     img: plataformaStreaming,
        //     github: 'https://github.com/GuilhermeJackson/plataforma-streaming',
        //     site: 'https://plataforma-streaming-gamma.vercel.app/'
        // },
        // {
        //     title: 'Fudamentos React',
        //     description: 'Projeto básico para aprendizado de conceitos como Hooks, UseEffect, Principio da Imutabilidade, Consumo de API, Async await',
        //     img: fundamentosReact,
        //     github: 'https://github.com/GuilhermeJackson/fundamentos-react',
        //     site: 'https://fundamentos-basicos-react.vercel.app/'
        // },
    ]
}

export const aboutMe = {
    me1: 'Olá, sou Guilherme Lamim, um desenvolvedor web com 7 anos de experiência. Tenho ampla experiência em projetos internacionais de alta complexidade, onde pude aprimorar minhas habilidades de desenvolvimento web.',
    me2: 'Meu foco principal é construir sites responsivos e oferecer uma experiência de usuário excepcional. Além disso, estou comprometido em entregar projetos de alta qualidade, com excelente desempenho e atendendo às expectativas dos clientes.',
    me3: 'Se você está em busca de um desenvolvedor altamente competente, estou aqui para ajudar.',

}

export const PositiveService = {
    title: 'Soft skills ',
    listPositive: [
        'Crio um ambiente de trabalho positivo, incentivando a colaboração entre colegas',
        'Ser adaptável é fundamental em um ambiente de rápida evolução tecnológica',
        'Minha colaboração com colegas torna o desenvolvimento mais eficiente e produtivo',
        'Ter empatia me ajuda a entender as dificuldades dos usuários finais',
        'Flexibilidade me permite lidar com mudanças de requisitos de forma tranquila',
        'Iniciativa é fundamental para propor melhorias no processo de desenvolvimento',
        'Resiliência me permite enfrentar desafios e aprender com os fracassos',
        'Acredito que feedback é fundamental para um ambiente de trabalho saudável e estou sempre aberto a críticas construtivas para melhorar minhas habilidades de programação',
        'Respeito a diversidade e valorizo as diferentes perspectivas'
    ]
}

export const Picture = {
    img: personPictureImg
}