export default function Menu(fn) {
  return fn([
    {
      id: 1,
      level: 0,
      text: 'Empresa cliente',
      children: [{
        id: 1,
        level: 1,
        text: 'Administração',
        children: [{
          id: 1,
          level: 2,
          text: 'Adicionar empresa cliente',
          link: '/empresa/nova'
        }]
      },
      {
        id: 2,
        level: 1,
        text: 'Estabelecimento',
        children: [{
          id: 1,
          level: 2,
          text: 'Cadastrar'
        }, {
          id: 2,
          level: 2,
          text: 'Listar'
        }]
      },
      {
        id: 3,
        level: 1,
        text: 'Gestor',
        children: [{
          id: 1,
          level: 2,
          text: 'Cadastrar'
        }, {
          id: 2,
          level: 2,
          text: 'Listar'
        }]
      },
      {
        id: 4,
        level: 1,
        text: 'Relatórios',
        children: [{
          id: 1,
          level: 2,
          text: 'Empresas ativas/inativas/bloqueadas'
        }, {
          id: 2,
          level: 2,
          text: 'Associar empresa a grupo'
        }, {
          id: 3,
          level: 2,
          text: 'Associar menu a empresa'
        }, {
          id: 4,
          level: 2,
          text: 'Associar menu colaborador a empresa'
        }, {
          id: 5,
          level: 2,
          text: 'Parametrizar bloqueio de solicitação/justificativa'
        }, {
          id: 6,
          level: 2,
          text: 'Credenciados ativos/bloqueados/inativos'
        }]
      }
      ]
    },
    {
      id: 2,
      level: 0,
      text: 'Estab. credenciado',
      children: [{
        id: 1,
        level: 1,
        text: 'Administração',
        children: [{
          id: 1,
          level: 2,
          text: 'Adicionar estab. credenciado'
        }, {
          id: 2,
          level: 2,
          text: 'Listagem estab. credenciado'
        }, {
          id: 3,
          level: 2,
          text: 'Autorizar estab. credenciado nji9'
        }]
      }]
    },
    {
      id: 3,
      level: 0,
      text: 'Administrativo',
      children: [{
        id: 1,
        level: 1,
        text: 'Publicações',
        children: [{
          id: 1,
          level: 2,
          text: 'Cadastro usuário adm'
        }, {
          id: 2,
          level: 2,
          text: 'Listagem usuário adm'
        }]
      }]
    }
  ]);
}
