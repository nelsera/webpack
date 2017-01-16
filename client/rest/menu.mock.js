export default fn => {
  return fn([
    {
      level: 0,
      text: 'Empresa cliente',
      child: [{
        level: 1,
        text: 'Administração',
        child: [{
          level: 2,
          text: 'Adicionar empresa cliente',
          link: 'empresa/nova'
        }]
      },
      {
        level: 1,
        text: 'Estabelecimento',
        child: [{
          level: 2,
          text: 'Cadastrar'
        }, {
          level: 2,
          text: 'Listar'
        }]
      },
      {
        level: 1,
        text: 'Gestor',
        child: [{
          level: 2,
          text: 'Cadastrar'
        }, {
          level: 2,
          text: 'Listar'
        }]
      },
      {
        level: 1,
        text: 'Relatórios',
        child: [{
          level: 2,
          text: 'Empresas ativas/inativas/bloqueadas'
        }, {
          level: 2,
          text: 'Associar empresa a grupo'
        }, {
          level: 2,
          text: 'Associar menu a empresa'
        }, {
          level: 2,
          text: 'Associar menu colaborador a empresa'
        }, {
          level: 2,
          text: 'Parametrizar bloqueio de solicitação/justificativa'
        }, {
          level: 2,
          text: 'Credenciados ativos/bloqueados/inativos'
        }]
      }
      ]
    },
    {
      level: 0,
      text: 'Estab. credenciado',
      child: [{
        level: 1,
        text: 'Administração',
        child: [{
          level: 2,
          text: 'Adicionar estab. credenciado'
        }, {
          level: 2,
          text: 'Listagem estab. credenciado'
        }, {
          level: 2,
          text: 'Autorizar estab. credenciado nji9'
        }]
      }]
    },
    {
      level: 0,
      text: 'Administrativo',
      child: [{
        level: 1,
        text: 'Publicações',
        child: [{
          level: 2,
          text: 'Cadastro usuário adm'
        }, {
          level: 2,
          text: 'Listagem usuário adm'
        }]
      }]
    }
  ]);
};
