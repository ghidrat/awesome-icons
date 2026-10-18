// Every icon: [name, category, shape, mask]
// shape = filled in the icon colour, mask = black areas cut out of the shape
// Grid: 24x24 (rendered with a 1px margin, viewBox -1 -1 26 26)
export const tr = (w = 2.4) => `fill="none" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"`
export const fu = (d, w = 2.4) => `<path d="${d}" ${tr(w)} stroke="#000"/>`
const cut = (d, w = 1.8) => `<path d="${d}" fill="none" stroke="#000" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`

const BASE = [
  ['isearch', `<circle cx="10.5" cy="10.5" r="7.5"/><path d="M16 16l4.8 4.8" ${tr(3.4)}/>`, `<circle cx="10.5" cy="10.5" r="4.4" fill="#000"/>`],
  ['aviso', `<path d="M4.5 9h3.2L15.6 4.6a1 1 0 0 1 1.4.9v13a1 1 0 0 1-1.4.9L7.7 15H4.5A2 2 0 0 1 2.5 13v-2a2 2 0 0 1 2-2z"/><rect x="5.6" y="14" width="3.6" height="7" rx="1.8"/><path d="M20 9.2a4 4 0 0 1 0 5.6" ${tr(2.2)}/>`, ''],
  ['changelog', `<rect x="4" y="2.5" width="16" height="19" rx="3.5"/>`, `<rect x="7.5" y="7" width="9" height="2" rx="1" fill="#000"/><rect x="7.5" y="11" width="9" height="2" rx="1" fill="#000"/><rect x="7.5" y="15" width="5" height="2" rx="1" fill="#000"/>`],
  ['manutencao', `<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z" stroke-width="1.6" stroke-linejoin="round"/>`, ''],
  ['novidade', `<path d="M11 3Q12 10 19.5 11.5Q12 13 11 21Q10 13 2.5 11.5Q10 10 11 3z" stroke-width="1.2" stroke-linejoin="round"/><path d="M19 2Q19.4 4.6 22 5Q19.4 5.4 19 8Q18.6 5.4 16 5Q18.6 4.6 19 2z" stroke-width="1" stroke-linejoin="round"/>`, ''],
  ['correcao', `<ellipse cx="12" cy="14.5" rx="5.6" ry="6.5"/><circle cx="12" cy="6.6" r="3.1"/><path d="M6.6 11.5L3.2 9.8M6.2 15H2.6M7 18.6l-3.3 2M17.4 11.5l3.4-1.7M17.8 15h3.6M17 18.6l3.3 2" ${tr(2)}/>`, `<rect x="11.2" y="9.6" width="1.6" height="11" rx=".8" fill="#000"/>`],
  ['instavel', `<path d="M10.3 3.7a2 2 0 0 1 3.4 0l8.1 14a2 2 0 0 1-1.7 3H3.9a2 2 0 0 1-1.7-3z"/>`, `<rect x="10.9" y="8.6" width="2.2" height="6.2" rx="1.1" fill="#000"/><circle cx="12" cy="17.4" r="1.3" fill="#000"/>`],
  ['online', `<circle cx="12" cy="12" r="10"/>`, fu('M7.6 12.4l3 3 5.8-6.2', 2.6)],
  ['offline', `<circle cx="12" cy="12" r="10"/>`, fu('M8.6 8.6l6.8 6.8M15.4 8.6l-6.8 6.8', 2.6)],
  ['atualizacao', `<path d="M20 12a8 8 0 0 1-14 5.3M4 12a8 8 0 0 1 14-5.3" ${tr(2.6)}/><path d="M18.8 3v4.6h-4.6M5.2 21v-4.6h4.6" ${tr(2.6)}/>`, ''],
  ['pagamento', `<rect x="2" y="4.5" width="20" height="15" rx="3.5"/>`, `<rect x="2" y="8.2" width="20" height="3" fill="#000"/><rect x="5.5" y="14.5" width="5" height="2" rx="1" fill="#000"/>`],
  ['cupom', `<path d="M3 4.8A1.8 1.8 0 0 1 4.8 3h6l9.6 9.6a1.8 1.8 0 0 1 0 2.5l-5.3 5.3a1.8 1.8 0 0 1-2.5 0L3 10.8z" stroke-width="1.4" stroke-linejoin="round"/>`, `<circle cx="7.7" cy="7.7" r="1.9" fill="#000"/>`],
  ['presente', `<rect x="3.5" y="11" width="17" height="10.5" rx="2"/><rect x="2.5" y="7" width="19" height="4.6" rx="1.6"/><path d="M12 7C10.5 3.2 6.6 3.4 7.4 5.9 7.9 7.2 10.6 7 12 7zM12 7c1.5-3.8 5.4-3.6 4.6-1.1C16.1 7.2 13.4 7 12 7z" stroke-width="1.6" stroke-linejoin="round"/>`, `<rect x="11.1" y="7" width="1.8" height="15" fill="#000"/><rect x="2" y="11.2" width="20" height=".9" fill="#000"/>`],
  ['seguranca', `<path d="M12 2.4l7.6 3v6.2c0 5-3.4 8.6-7.6 10.1-4.2-1.5-7.6-5.1-7.6-10.1V5.4z" stroke-width="1" stroke-linejoin="round"/>`, fu('M8.6 12.2l2.4 2.4 4.4-4.8', 2.4)],
  ['bot', `<rect x="4" y="7.5" width="16" height="12.5" rx="4.2"/><path d="M12 7.5V4.2" ${tr(2)}/><circle cx="12" cy="3.4" r="1.7"/><rect x="1.4" y="11.6" width="2" height="4.6" rx="1"/><rect x="20.6" y="11.6" width="2" height="4.6" rx="1"/>`, `<circle cx="9" cy="13.4" r="1.7" fill="#000"/><circle cx="15" cy="13.4" r="1.7" fill="#000"/>`],
  ['agendado', `<circle cx="12" cy="12" r="10"/>`, fu('M12 6.8v5.6l3.6 2.2', 2.4)],
  ['lancamento', `<path d="M12 2.4c4 2.6 5.5 6.6 4.6 12.1L14.2 17H9.8l-2.4-2.5C6.5 9 8 5 12 2.4z"/><path d="M8 12.2L4.4 16.6h4.4zM16 12.2l3.6 4.4h-4.4zM10.4 18.2h3.2L12 21.8z" stroke-width="1" stroke-linejoin="round"/>`, `<circle cx="12" cy="9.4" r="2" fill="#000"/>`],
  ['notificacao', `<path d="M12 2.8a6 6 0 0 1 6 6v3.6l1.7 3a1 1 0 0 1-.9 1.5H5.2a1 1 0 0 1-.9-1.5l1.7-3V8.8a6 6 0 0 1 6-6z"/><path d="M9.4 18.6a2.6 2.6 0 0 0 5.2 0z"/>`, ''],
  ['membros', `<circle cx="9" cy="7.8" r="3.7"/><path d="M2.4 19.4a6.6 6.2 0 0 1 13.2 0v.6a1 1 0 0 1-1 1H3.4a1 1 0 0 1-1-1z"/><circle cx="17.2" cy="8.8" r="2.9"/><path d="M16.4 13.3a5 5 0 0 1 5.6 5.4v.8a1 1 0 0 1-1 1h-3.4a7.6 7.6 0 0 0-1.2-7.2z"/>`, ''],
  ['evento', `<rect x="3" y="4.5" width="18" height="17" rx="3.4"/><rect x="6.8" y="2.2" width="2.2" height="4.6" rx="1.1"/><rect x="15" y="2.2" width="2.2" height="4.6" rx="1.1"/>`, `<rect x="3" y="9" width="18" height="1.6" fill="#000"/><rect x="6.6" y="13" width="3" height="3" rx=".8" fill="#000"/><rect x="10.5" y="13" width="3" height="3" rx=".8" fill="#000"/><rect x="14.4" y="13" width="3" height="3" rx=".8" fill="#000"/>`],
  ['privado', `<rect x="4" y="10" width="16" height="11.5" rx="3"/><path d="M7.8 10V7.4a4.2 4.2 0 0 1 8.4 0V10" ${tr(2.4)}/>`, `<circle cx="12" cy="14.6" r="1.7" fill="#000"/><rect x="11.2" y="15" width="1.6" height="3.4" rx=".8" fill="#000"/>`],
  ['link', `<path d="M10 13.6a4.4 4.4 0 0 0 6.2.4l3-3a4.4 4.4 0 0 0-6.2-6.2l-1.4 1.4M14 10.4a4.4 4.4 0 0 0-6.2-.4l-3 3a4.4 4.4 0 0 0 6.2 6.2l1.4-1.4" ${tr(2.6)}/>`, ''],
  ['ticket', `<path d="M3 7.5A2.5 2.5 0 0 1 5.5 5h13A2.5 2.5 0 0 1 21 7.5v2a2.5 2.5 0 0 0 0 5v2a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 16.5v-2a2.5 2.5 0 0 0 0-5z"/>`, `<rect x="13.8" y="6.6" width="1.6" height="2.2" rx=".8" fill="#000"/><rect x="13.8" y="10.9" width="1.6" height="2.2" rx=".8" fill="#000"/><rect x="13.8" y="15.2" width="1.6" height="2.2" rx=".8" fill="#000"/>`],
  ['suporte', `<path d="M4 13.5v-1.8a8 8 0 0 1 16 0v1.8" ${tr(2.4)}/><rect x="2.6" y="12.4" width="5" height="7.6" rx="2.2"/><rect x="16.4" y="12.4" width="5" height="7.6" rx="2.2"/>`, ''],
  ['regras', `<path d="M5 4.5A2.5 2.5 0 0 1 7.5 2H19v20H7.5A2.5 2.5 0 0 1 5 19.5z"/>`, `<rect x="9" y="6" width="6.5" height="1.8" rx=".9" fill="#000"/><rect x="9" y="9.6" width="4.5" height="1.8" rx=".9" fill="#000"/><rect x="5" y="17.4" width="14" height="1.2" fill="#000"/>`],
  ['sorteio', `<path d="M7 3h10v6a5 5 0 0 1-10 0z"/><path d="M7 5H4.2v1.4A3.6 3.6 0 0 0 7.6 10M17 5h2.8v1.4a3.6 3.6 0 0 1-3.4 3.6" ${tr(2)}/><rect x="10.8" y="13.6" width="2.4" height="4.4"/><rect x="7" y="17.6" width="10" height="3.6" rx="1.4"/>`, ''],
  ['vip', `<path d="M3 8l4.5 3.6L12 4.5l4.5 7.1L21 8l-1.8 10.5H4.8z" stroke-width="1.6" stroke-linejoin="round"/><rect x="4.8" y="19.6" width="14.4" height="2" rx="1"/>`, ''],
  ['veiculo', `<path d="M4 11l1.8-4.6A2 2 0 0 1 7.7 5h8.6a2 2 0 0 1 1.9 1.4L20 11a2 2 0 0 1 1.5 1.9V17a1 1 0 0 1-1 1H3.5a1 1 0 0 1-1-1v-4.1A2 2 0 0 1 4 11z"/><rect x="4.5" y="16" width="3.4" height="4" rx="1.4"/><rect x="16.1" y="16" width="3.4" height="4" rx="1.4"/>`, `<path d="M6.4 10.6l1.2-3.2h8.8l1.2 3.2z" fill="#000"/><circle cx="7" cy="14" r="1.4" fill="#000"/><circle cx="17" cy="14" r="1.4" fill="#000"/>`],
  ['saude', `<path d="M12 21s-8.5-5.2-8.5-11.2A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 8.5 3.2C20.5 15.8 12 21 12 21z"/>`, `<rect x="10.9" y="9" width="2.2" height="7" rx=".6" fill="#000"/><rect x="8.5" y="11.4" width="7" height="2.2" rx=".6" fill="#000"/>`],
  ['cpf', `<rect x="2" y="4.5" width="20" height="15" rx="3.2"/>`, `<circle cx="8" cy="10.6" r="2.3" fill="#000"/><path d="M4.6 16.4a3.6 3.2 0 0 1 6.8 0z" fill="#000"/><rect x="13.5" y="9" width="5.5" height="1.8" rx=".9" fill="#000"/><rect x="13.5" y="12.6" width="4" height="1.8" rx=".9" fill="#000"/>`],
  ['pessoa', `<circle cx="12" cy="7.6" r="4.4"/><path d="M3.8 20.2a8.2 7.4 0 0 1 16.4 0v.3a1 1 0 0 1-1 1H4.8a1 1 0 0 1-1-1z"/>`, ''],
  ['telefone', `<rect x="6" y="1.8" width="12" height="20.4" rx="3.2"/>`, `<rect x="10" y="18" width="4" height="1.6" rx=".8" fill="#000"/>`],
  ['email', `<rect x="2" y="4.5" width="20" height="15" rx="3.2"/>`, `<path d="M5.5 8.5L12 13l6.5-4.5" fill="none" stroke="#000" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>`],
  ['endereco', `<path d="M12 22s7.2-6.4 7.2-12.2a7.2 7.2 0 0 0-14.4 0C4.8 15.6 12 22 12 22z"/>`, `<circle cx="12" cy="9.8" r="2.8" fill="#000"/>`],
  ['casa', `<path d="M3 11.2L12 3.5l9 7.7V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20z" stroke-width="1.2" stroke-linejoin="round"/>`, `<rect x="9.6" y="14" width="4.8" height="7.5" rx="1" fill="#000"/>`],
  ['empresa', `<path d="M3 21V5.5A2.5 2.5 0 0 1 5.5 3h7A2.5 2.5 0 0 1 15 5.5V9h3.5A2.5 2.5 0 0 1 21 11.5V21z"/>`, `<rect x="6" y="6.2" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="9.8" y="6.2" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="6" y="10.4" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="9.8" y="10.4" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="6" y="14.6" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="9.8" y="14.6" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="16.6" y="12.4" width="2.2" height="2.2" rx=".5" fill="#000"/><rect x="16.6" y="16" width="2.2" height="2.2" rx=".5" fill="#000"/>`],
  ['justica', `<path d="M12 3v16.5M7 20.5h10M4.5 6.5h15" ${tr(2.2)}/><path d="M4.5 7.5L2 13.5h5zM19.5 7.5L17 13.5h5z" stroke-width="1.4" stroke-linejoin="round"/><path d="M2 13.5a2.5 2.2 0 0 0 5 0zM17 13.5a2.5 2.2 0 0 0 5 0z"/>`, ''],
  ['transferencia', `<path d="M4 8.5h14.5M15 4.5l4 4-4 4M20 15.5H5.5M9 11.5l-4 4 4 4" ${tr(2.6)}/>`, ''],
  ['documento', `<path d="M6.5 2.5h7l5.5 5.5v11.5a2.5 2.5 0 0 1-2.5 2.5h-10A2.5 2.5 0 0 1 4 19.5V5a2.5 2.5 0 0 1 2.5-2.5z"/>`, `<path d="M13.5 2.5V8H19" fill="#000"/><rect x="7.5" y="12" width="8" height="1.8" rx=".9" fill="#000"/><rect x="7.5" y="15.6" width="5.5" height="1.8" rx=".9" fill="#000"/>`],
  ['frota', `<rect x="7" y="3" width="15" height="9" rx="2.6" opacity=".55"/><path d="M3 14.5l1.4-3.4A1.8 1.8 0 0 1 6.1 10h7.8a1.8 1.8 0 0 1 1.7 1.1l1.4 3.4a1.8 1.8 0 0 1 1 1.6V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2.9a1.8 1.8 0 0 1 1-1.6z"/><rect x="3.4" y="19" width="3" height="3" rx="1.2"/><rect x="13.6" y="19" width="3" height="3" rx="1.2"/>`, `<path d="M5.4 14.2l1-2.4h7.2l1 2.4z" fill="#000"/><circle cx="6" cy="16.8" r="1.2" fill="#000"/><circle cx="14" cy="16.8" r="1.2" fill="#000"/>`],
  ['medalha', `<path d="M7 2.5h3.6l1.4 4 1.4-4H17l-3 7.3" stroke-width="1" stroke-linejoin="round"/><circle cx="12" cy="15" r="6.5"/>`, `<path d="M12 11.3l1.1 2.2 2.4.3-1.8 1.7.5 2.4-2.2-1.2-2.2 1.2.5-2.4-1.8-1.7 2.4-.3z" fill="#000"/>`],
  ['dinheiro', `<rect x="1.8" y="5.5" width="20.4" height="13" rx="3"/>`, `<circle cx="12" cy="12" r="3.2" fill="#000"/><circle cx="5.6" cy="12" r="1.1" fill="#000"/><circle cx="18.4" cy="12" r="1.1" fill="#000"/>`]
]

const CORES = { cinza: '#b5bac1', branco: '#f2f3f5', azul: '#4b8cf7' }

const CATEGORIA = {
  isearch: 'interface', notificacao: 'interface', link: 'interface', privado: 'seguranca', seguranca: 'seguranca',
  aviso: 'status', changelog: 'status', manutencao: 'status', novidade: 'status', correcao: 'status', instavel: 'status',
  online: 'status', offline: 'status', atualizacao: 'status', agendado: 'status', lancamento: 'status',
  pagamento: 'comercio', cupom: 'comercio', presente: 'comercio', dinheiro: 'comercio', transferencia: 'comercio',
  bot: 'comunidade', membros: 'comunidade', evento: 'comunidade', ticket: 'comunidade', suporte: 'comunidade',
  regras: 'comunidade', sorteio: 'comunidade', vip: 'comunidade', medalha: 'comunidade',
  veiculo: 'dados', saude: 'dados', cpf: 'dados', pessoa: 'dados', telefone: 'dados', email: 'dados', endereco: 'dados',
  casa: 'dados', empresa: 'dados', justica: 'dados', documento: 'dados', frota: 'dados'
}

const NOVOS = [
  // interface
  ['menu', 'interface', `<rect x="3" y="4.6" width="18" height="2.8" rx="1.4"/><rect x="3" y="10.6" width="18" height="2.8" rx="1.4"/><rect x="3" y="16.6" width="18" height="2.8" rx="1.4"/>`, ''],
  ['fechar', 'interface', `<path d="M6 6l12 12M18 6L6 18" ${tr(3)}/>`, ''],
  ['mais', 'interface', `<path d="M12 4.5v15M4.5 12h15" ${tr(3)}/>`, ''],
  ['confirmar', 'interface', `<path d="M4.5 12.5l5 5L19.5 7" ${tr(3)}/>`, ''],
  ['ajustes', 'interface', `<path d="M4 6h16M4 12h16M4 18h16" ${tr(2.2)}/><circle cx="9" cy="6" r="2.8"/><circle cx="15.5" cy="12" r="2.8"/><circle cx="7" cy="18" r="2.8"/>`, ''],
  ['olho', 'interface', `<path d="M12 5C6.5 5 3 9.5 2 12c1 2.5 4.5 7 10 7s9-4.5 10-7c-1-2.5-4.5-7-10-7z"/>`, `<circle cx="12" cy="12" r="3.4" fill="none" stroke="#000" stroke-width="1.8"/>`],
  ['estrela', 'interface', `<path d="M12 2.5l2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17l-5.9 3.3 1.3-6.5-4.9-4.5 6.6-.8z" stroke-width="1.4" stroke-linejoin="round"/>`, ''],
  ['coracao', 'interface', `<path d="M12 21s-8.5-5.2-8.5-11.2A4.8 4.8 0 0 1 12 6.6a4.8 4.8 0 0 1 8.5 3.2C20.5 15.8 12 21 12 21z"/>`, ''],
  ['favorito', 'interface', `<path d="M6 2.5h12A1.5 1.5 0 0 1 19.5 4v17.5L12 16.5l-7.5 5V4A1.5 1.5 0 0 1 6 2.5z" stroke-width="1" stroke-linejoin="round"/>`, ''],
  ['lixeira', 'interface', `<rect x="4.5" y="7" width="15" height="14.5" rx="2.4"/><rect x="2.5" y="3.8" width="19" height="2.4" rx="1.2"/><rect x="9" y="2" width="6" height="2.6" rx="1"/>`, `<rect x="8.6" y="10" width="1.8" height="8.5" rx=".9" fill="#000"/><rect x="13.6" y="10" width="1.8" height="8.5" rx=".9" fill="#000"/>`],
  ['editar', 'interface', `<path d="M15.5 3.5l5 5L9 20H4v-5z" stroke-width="1.4" stroke-linejoin="round"/>`, cut('M13 6l5 5', 1.6)],
  ['filtro', 'interface', `<path d="M3 4h18l-7 8.5V20l-4 2v-9.5z" stroke-width="1.4" stroke-linejoin="round"/>`, ''],
  ['lampada', 'interface', `<path d="M12 2a7 7 0 0 0-4.2 12.6c.8.6 1.2 1.4 1.2 2.4h6c0-1 .4-1.8 1.2-2.4A7 7 0 0 0 12 2z"/><rect x="9" y="18.4" width="6" height="1.8" rx=".9"/><rect x="10" y="21" width="4" height="1.6" rx=".8"/>`, ''],
  ['bandeira', 'interface', `<path d="M5 21.5V3" ${tr(2.4)}/><path d="M5 3.5h13.5l-2.5 4.5 2.5 4.5H5z" stroke-width="1" stroke-linejoin="round"/>`, ''],
  ['alvo', 'interface', `<circle cx="12" cy="12" r="10"/>`, `<circle cx="12" cy="12" r="6.5" fill="none" stroke="#000" stroke-width="1.8"/><circle cx="12" cy="12" r="2.8" fill="none" stroke="#000" stroke-width="1.8"/>`],
  // setas
  ['seta-direita', 'setas', `<path d="M4 12h15M13 5.5l6.5 6.5-6.5 6.5" ${tr(3)}/>`, ''],
  ['seta-esquerda', 'setas', `<path d="M20 12H5M11 5.5L4.5 12l6.5 6.5" ${tr(3)}/>`, ''],
  ['seta-cima', 'setas', `<path d="M12 20V5M5.5 11L12 4.5l6.5 6.5" ${tr(3)}/>`, ''],
  ['seta-baixo', 'setas', `<path d="M12 4v15M5.5 13l6.5 6.5 6.5-6.5" ${tr(3)}/>`, ''],
  ['externo', 'setas', `<path d="M19 13.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5.5" ${tr(2.6)}/><path d="M14.5 3H21v6.5M21 3l-9 9" ${tr(2.6)}/>`, ''],
  ['download', 'setas', `<path d="M12 3v11M7 9.5l5 5 5-5" ${tr(2.8)}/><rect x="3" y="18" width="18" height="3.4" rx="1.7"/>`, ''],
  ['upload', 'setas', `<path d="M12 15V4M7 8.5l5-5 5 5" ${tr(2.8)}/><rect x="3" y="18" width="18" height="3.4" rx="1.7"/>`, ''],
  // midia
  ['play', 'midia', `<circle cx="12" cy="12" r="10"/>`, `<path d="M10 7.8v8.4l6.6-4.2z" fill="#000"/>`],
  ['pausa', 'midia', `<circle cx="12" cy="12" r="10"/>`, `<rect x="8.6" y="7.6" width="2.4" height="8.8" rx="1" fill="#000"/><rect x="13" y="7.6" width="2.4" height="8.8" rx="1" fill="#000"/>`],
  ['musica', 'midia', `<path d="M9 17.5V5l11-2.5v12.5" ${tr(2.4)}/><circle cx="6.2" cy="17.8" r="3.2"/><circle cx="17.2" cy="15.2" r="3.2"/>`, ''],
  ['camera', 'midia', `<path d="M3.5 7h3.3L8.6 4.3A1 1 0 0 1 9.4 4h5.2a1 1 0 0 1 .8.3L17.2 7h3.3A1.5 1.5 0 0 1 22 8.5v10a1.5 1.5 0 0 1-1.5 1.5h-17A1.5 1.5 0 0 1 2 18.5v-10A1.5 1.5 0 0 1 3.5 7z"/>`, `<circle cx="12" cy="13.2" r="3.4" fill="none" stroke="#000" stroke-width="1.8"/>`],
  ['imagem', 'midia', `<rect x="2.5" y="3.5" width="19" height="17" rx="3"/>`, `<circle cx="8.3" cy="9" r="1.9" fill="#000"/><path d="M5 18l4.5-5 3 3 3.5-4.5L19.5 18z" fill="#000"/>`],
  ['video', 'midia', `<rect x="2" y="5.5" width="13.5" height="13" rx="3"/><path d="M17 10l5-3v10l-5-3z" stroke-width="1" stroke-linejoin="round"/>`, ''],
  ['volume', 'midia', `<path d="M3 9h3.5l5-4.5v15l-5-4.5H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1z" stroke-width="1" stroke-linejoin="round"/><path d="M15 9a4 4 0 0 1 0 6M18 6a8 8 0 0 1 0 12" ${tr(2.2)}/>`, ''],
  ['microfone', 'midia', `<rect x="8.5" y="2" width="7" height="12.5" rx="3.5"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3.5" ${tr(2.2)}/>`, ''],
  // arquivos
  ['pasta', 'arquivos', `<path d="M2.5 6A2.5 2.5 0 0 1 5 3.5h4.2l2.3 2.5H19a2.5 2.5 0 0 1 2.5 2.5V18a2.5 2.5 0 0 1-2.5 2.5H5A2.5 2.5 0 0 1 2.5 18z"/>`, ''],
  ['salvar', 'arquivos', `<path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H16l5 5v10.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5z" stroke-width="1" stroke-linejoin="round"/>`, `<rect x="7" y="3" width="8" height="5" rx="1" fill="#000"/><circle cx="12" cy="14.5" r="2.8" fill="#000"/>`],
  ['anexo', 'arquivos', `<path d="M20 11.5l-8.2 8.2a5.2 5.2 0 0 1-7.4-7.4l8.6-8.6a3.5 3.5 0 0 1 4.9 4.9l-8.5 8.5a1.7 1.7 0 0 1-2.5-2.5l7.9-7.9" ${tr(2.2)}/>`, ''],
  ['copiar', 'arquivos', `<rect x="8" y="8" width="13.5" height="13.5" rx="3"/><path d="M5 16h-.5a2 2 0 0 1-2-2V4.5a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2V5" ${tr(2.2)}/>`, ''],
  // dev
  ['codigo', 'dev', `<path d="M8 6l-6 6 6 6M16 6l6 6-6 6" ${tr(2.8)}/><path d="M14 3.5l-4 17" ${tr(2.4)}/>`, ''],
  ['terminal', 'dev', `<rect x="2" y="3.5" width="20" height="17" rx="3.2"/>`, fu('M6.5 9l3.2 3-3.2 3', 2.2) + `<rect x="11.5" y="14" width="6" height="2" rx="1" fill="#000"/>`],
  ['git', 'dev', `<circle cx="6" cy="5" r="2.8"/><circle cx="6" cy="19" r="2.8"/><circle cx="18" cy="7" r="2.8"/><path d="M6 7.5v9M18 9.5c0 4.5-5 5-11 7.5" ${tr(2.2)}/>`, ''],
  ['banco-de-dados', 'dev', `<path d="M3.5 5.5v13c0 1.8 3.8 3.3 8.5 3.3s8.5-1.5 8.5-3.3v-13"/><ellipse cx="12" cy="5.5" rx="8.5" ry="3.3"/>`, cut('M3.5 5.5c0 1.8 3.8 3.3 8.5 3.3s8.5-1.5 8.5-3.3M3.5 11.5c0 1.8 3.8 3.3 8.5 3.3s8.5-1.5 8.5-3.3', 1.4)],
  ['cpu', 'dev', `<rect x="5" y="5" width="14" height="14" rx="2.6"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" ${tr(2)}/>`, `<rect x="9" y="9" width="6" height="6" rx="1" fill="#000"/>`],
  ['servidor', 'dev', `<rect x="2.5" y="3" width="19" height="8" rx="2.4"/><rect x="2.5" y="13" width="19" height="8" rx="2.4"/>`, `<circle cx="6.5" cy="7" r="1.2" fill="#000"/><circle cx="6.5" cy="17" r="1.2" fill="#000"/><rect x="10" y="6.1" width="7.5" height="1.8" rx=".9" fill="#000"/><rect x="10" y="16.1" width="7.5" height="1.8" rx=".9" fill="#000"/>`],
  ['chave', 'dev', `<circle cx="7.5" cy="15.5" r="5"/><path d="M11 12l9.5-9.5M17 6l3 3M14.5 8.5l2.5 2.5" ${tr(2.4)}/>`, `<circle cx="7.5" cy="15.5" r="1.8" fill="#000"/>`],
  ['wifi', 'dev', `<path d="M2 8.8a14.5 14.5 0 0 1 20 0M5.2 12.4a10 10 0 0 1 13.6 0M8.5 15.9a5.2 5.2 0 0 1 7 0" ${tr(2.6)}/><circle cx="12" cy="19.6" r="1.8"/>`, ''],
  ['bateria', 'dev', `<rect x="1.8" y="6.5" width="18" height="11" rx="2.8"/><rect x="20.6" y="10" width="2" height="4" rx="1"/>`, `<rect x="4.2" y="8.9" width="13.2" height="6.2" rx="1.4" fill="none" stroke="#000" stroke-width="1.4"/>`],
  ['controle', 'dev', `<path d="M7 6.5h10a5 5 0 0 1 4.9 4l.9 5.2a2.8 2.8 0 0 1-4.9 2.3l-2.4-2.5h-7L6.1 18a2.8 2.8 0 0 1-4.9-2.3l.9-5.2A5 5 0 0 1 7 6.5z"/>`, cut('M7.5 9.5v4M5.5 11.5h4') + `<circle cx="15.5" cy="10.5" r="1.2" fill="#000"/><circle cx="17.8" cy="12.8" r="1.2" fill="#000"/>`],
  // clima
  ['sol', 'clima', `<circle cx="12" cy="12" r="4.8"/><path d="M12 1.8v2.4M12 19.8v2.4M4.8 4.8l1.7 1.7M17.5 17.5l1.7 1.7M1.8 12h2.4M19.8 12h2.4M4.8 19.2l1.7-1.7M17.5 6.5l1.7-1.7" ${tr(2.4)}/>`, ''],
  ['lua', 'clima', `<path d="M20.5 14.2A8.8 8.8 0 1 1 9.8 3.5a7 7 0 0 0 10.7 10.7z" stroke-width="1" stroke-linejoin="round"/>`, ''],
  ['nuvem', 'clima', `<path d="M17.5 19.5H7a5 5 0 0 1-.7-10 6.5 6.5 0 0 1 12.4 1.7 4.2 4.2 0 0 1-1.2 8.3z"/>`, ''],
  ['chuva', 'clima', `<path d="M17.5 15H7a4.5 4.5 0 0 1-.6-9 6 6 0 0 1 11.4 1.6A3.7 3.7 0 0 1 17.5 15z"/><path d="M8 18l-1 2.5M12.5 18l-1 2.5M17 18l-1 2.5" ${tr(2.2)}/>`, ''],
  ['raio', 'clima', `<path d="M13.5 2L4.5 13.5h6.5L10 22l9.5-12h-6.5z" stroke-width="1.2" stroke-linejoin="round"/>`, ''],
  ['fogo', 'clima', `<path d="M12 22a7.5 7.5 0 0 0 7.5-7.5c0-4.5-3.5-6.5-4.5-10-1.4 2.2-2.4 3.2-3.6 3.2 0-2.1-1-4.2-3-5.7.2 4.5-4.4 7.2-4.4 12.5A7.5 7.5 0 0 0 12 22z" stroke-width="1" stroke-linejoin="round"/>`, `<path d="M12 20a3.2 3.2 0 0 0 3.2-3.2c0-2-1.6-3-2.2-4.6-.8 1.2-1.6 1.8-2.4 1.8-.6.9-1.8 1.7-1.8 2.8A3.2 3.2 0 0 0 12 20z" fill="#000"/>`],
  ['folha', 'clima', `<path d="M11 20.5A7.5 7.5 0 0 1 3.5 13C3.5 6.5 10 3.5 20.5 3.5c0 10.5-3.2 17-9.5 17z" stroke-width="1" stroke-linejoin="round"/>`, cut('M4 21c3-5.5 7-8.5 11.5-10.5')],
  // comercio
  ['carrinho', 'comercio', `<path d="M2 3h2.8l2.6 12.2a1.5 1.5 0 0 0 1.5 1.3h9.3a1.5 1.5 0 0 0 1.5-1.2L21.5 7H5.8" ${tr(2.4)}/><circle cx="9.5" cy="20.2" r="1.8"/><circle cx="17.5" cy="20.2" r="1.8"/>`, ''],
  ['carteira', 'comercio', `<path d="M3 6.5A2.5 2.5 0 0 1 5.5 4H18v3h1.5A1.5 1.5 0 0 1 21 8.5v11a1.5 1.5 0 0 1-1.5 1.5h-14A2.5 2.5 0 0 1 3 18.5z"/>`, `<rect x="14.5" y="11" width="8" height="5" rx="2.5" fill="none" stroke="#000" stroke-width="1.6"/>`],
  ['loja', 'comercio', `<path d="M3.5 3.5h17L22 9a3.3 3.3 0 0 1-6.6 0 3.3 3.3 0 0 1-6.8 0A3.3 3.3 0 0 1 2 9z"/><path d="M4 13.5V20a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 20 20v-6.5z"/>`, `<rect x="9.5" y="15.5" width="5" height="6" rx="1" fill="#000"/>`],
  ['grafico', 'comercio', `<rect x="3" y="12" width="4.4" height="9" rx="1.4"/><rect x="9.8" y="7" width="4.4" height="14" rx="1.4"/><rect x="16.6" y="3" width="4.4" height="18" rx="1.4"/>`, ''],
  ['porcentagem', 'comercio', `<circle cx="12" cy="12" r="10"/>`, cut('M8 16l8-8', 2.2) + `<circle cx="8.6" cy="8.6" r="1.6" fill="#000"/><circle cx="15.4" cy="15.4" r="1.6" fill="#000"/>`],
  // comunidade
  ['chat', 'comunidade', `<path d="M4.5 3h15A2.5 2.5 0 0 1 22 5.5v10a2.5 2.5 0 0 1-2.5 2.5H9.5L5 21.5V18h-.5A2.5 2.5 0 0 1 2 15.5v-10A2.5 2.5 0 0 1 4.5 3z" stroke-width="1" stroke-linejoin="round"/>`, `<circle cx="8" cy="10.5" r="1.4" fill="#000"/><circle cx="12" cy="10.5" r="1.4" fill="#000"/><circle cx="16" cy="10.5" r="1.4" fill="#000"/>`],
  ['enviar', 'comunidade', `<path d="M21.5 2.5L2.5 10l7.5 3.2 3.2 7.8z" stroke-width="1.4" stroke-linejoin="round"/>`, cut('M10 13.2l5-5')],
  ['compartilhar', 'comunidade', `<circle cx="18" cy="5" r="3.2"/><circle cx="6" cy="12" r="3.2"/><circle cx="18" cy="19" r="3.2"/><path d="M8.6 10.6l6.8-4.2M8.6 13.4l6.8 4.2" ${tr(2.2)}/>`, ''],
  ['curtir', 'comunidade', `<path d="M7 10.5l4-8a2.5 2.5 0 0 1 3 2.6L13.6 9h5.6a2 2 0 0 1 2 2.4l-1.6 8a2 2 0 0 1-2 1.6H7z" stroke-width="1" stroke-linejoin="round"/><rect x="2" y="10.5" width="3.6" height="10.5" rx="1.2"/>`, ''],
  ['arroba', 'comunidade', `<circle cx="12" cy="12" r="3.8" ${tr(2.4)}/><path d="M15.8 8v5.2a2.8 2.8 0 0 0 5.6 0V12a9.4 9.4 0 1 0-3.7 7.5" ${tr(2.4)}/>`, ''],
  ['globo', 'comunidade', `<circle cx="12" cy="12" r="10"/>`, cut('M2 12h20M12 2c3 3 4 6.5 4 10s-1 7-4 10M12 2C9 5 8 8.5 8 12s1 7 4 10', 1.6)]
]

export const ICONES = [...BASE.map(([n, d, m]) => [n, CATEGORIA[n], d, m]), ...NOVOS]
