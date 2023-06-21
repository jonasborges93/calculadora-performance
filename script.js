//RECUPERANDO VALORES DOS INPUTs
let valorInvestido_1 = document.getElementById('valor-investido-1');
let valorInvestido_2 = document.getElementById('valor-investido-2');
let valorInvestido_3 = document.getElementById('valor-investido-3');

let numeroDeLeads_1 = document.getElementById('numero-leads-1');
let numeroDeLeads_2 = document.getElementById('numero-leads-2');
let numeroDeLeads_3 = document.getElementById('numero-leads-3');

let numeroDeProspect_1 = document.getElementById('numero-prospects-1');
let numeroDeProspect_2 = document.getElementById('numero-prospects-2');
let numeroDeProspect_3 = document.getElementById('numero-prospects-3');

let numeroDeCliente_1 = document.getElementById('numero-clientes-1');
let numeroDeCliente_2 = document.getElementById('numero-clientes-2');
let numeroDeCliente_3 = document.getElementById('numero-clientes-3');

let valorDasVendas_1 = document.getElementById('valor-vendas-1');
let valorDasVendas_2 = document.getElementById('valor-vendas-2');
let valorDasVendas_3 = document.getElementById('valor-vendas-3');


//CALCULANDO TOTAL INVESTIDO EM MIDIA
function calcularTotalInvestidoEmMidia(){
  let totalInvestido = 0;
  let valor1 = parseFloat(valorInvestido_1.value || 0);
  let valor2 = parseFloat(valorInvestido_2.value || 0);
  let valor3 = parseFloat(valorInvestido_3.value || 0);

  totalInvestido = totalInvestido += valor1;
  totalInvestido = totalInvestido += valor2;
  totalInvestido = totalInvestido += valor3;
  
  document.getElementById('total-investimento').innerHTML = totalInvestido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

//CALCULANDO CUSTO POR LEAD
function calcularCustoPorLead1(){
  let valor1 = valorInvestido_1.value || 0;
  let nLeads1 = numeroDeLeads_1.value || 0;

  if(valor1 != 0){
    valor1 = valor1.replace(',','.');
  }

  if(nLeads1 === 0){
    cpl = parseFloat(valor1 / 1);
  }else{
    cpl = parseFloat(valor1 / nLeads1);
  }

  document.getElementById('custo-por-lead-1').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorLead2(){
  let valor2 = valorInvestido_2.value || 0;
  let nLeads2 = numeroDeLeads_2.value || 0;
  
  if(valor2 != 0){
    valor2 = valor2.replace(',','.');
  }
  
  if(nLeads2 === 0){
    cpl = parseFloat(valor2 / 1);
  }else{
    cpl = parseFloat(valor2 / nLeads2);
  }

  document.getElementById('custo-por-lead-2').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorLead3(){
  let valor3 = valorInvestido_3.value || 0;
  let nLeads3 = numeroDeLeads_3.value || 0;
  
  if(valor3 != 0){
    valor3 = valor3.replace(',','.');
  }

  if(nLeads3 === 0){
    cpl = parseFloat(valor3 / 2);
  }else{
    cpl = parseFloat(valor3 / nLeads3);
  }

  document.getElementById('custo-por-lead-3').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

//CALCULANDO CUSTO POR PROSPECT
function calcularCustoPorProspect1(){
  let valor1 = valorInvestido_1.value || 0;
  let nProspect1 = numeroDeProspect_1.value || 0;
  
  if(valor1 != 0){
    valor1 = valor1.replace(',','.');
  }
  
  if(nProspect1 === 0){
    cpl = parseFloat(valor1 / 1);
  }else{
    cpl = parseFloat(valor1 / nProspect1);
  }

  document.getElementById('custo-por-prospect-1').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorProspect2(){
  let valor2 = valorInvestido_2.value || 0;
  let nProspect2 = numeroDeProspect_2.value || 0;
  
  if(valor2 != 0){
    valor2 = valor2.replace(',','.');
  }

  if(nProspect2 === 0){
    cpl = parseFloat(valor2 / 1);
  }else{
    cpl = parseFloat(valor2 / nProspect2);
  }

  document.getElementById('custo-por-prospect-2').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
}

function calcularCustoPorProspect3(){
  let valor3 = valorInvestido_3.value || 0;
  let nProspect3 = numeroDeProspect_3.value || 0;
  
  if(valor3 != 0){
    valor3 = valor3.replace(',','.');
  }
  
  if(nProspect3 === 0){
    cpl = parseFloat(valor3 / 1);
  }else{
    cpl = parseFloat(valor3 / nProspect3);
  }

  document.getElementById('custo-por-prospect-3').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
}

//CALCULANDO A TAXA DE CONVERSÃO PROSPECT
function calcularTaxaDeConversãoProspect1(){
  nProspect1 = numeroDeProspect_1.value || 0;
  nLeads1 = numeroDeLeads_1.value || 0;
  
  if(nProspect1 === 0 || nLeads1 === 0){
    tcp = 0;
  }else{
    tcp = parseFloat((nProspect1 / nLeads1) * 100);
  }

  document.getElementById('taxa-de-conversao-prospect-1').value = tcp.toFixed(2) + '%';
}

function calcularTaxaDeConversãoProspect2(){
  nProspect2 = numeroDeProspect_2.value || 0;
  nLeads2 = numeroDeLeads_2.value || 0;
  
  if(nProspect2 === 0 || nLeads2 === 0){
    tcp = 0;
  }else{
    tcp = parseFloat((nProspect2 / nLeads2) * 100);
  }

  document.getElementById('taxa-de-conversao-prospect-2').value = tcp.toFixed(2) + '%';
}

function calcularTaxaDeConversãoProspect3(){
  nProspect3 = numeroDeProspect_3.value || 0;
  nLeads3 = numeroDeLeads_3.value || 0;
  
  if(nProspect3 === 0 || nLeads2 === 0){
    tcp = 0;
  }else{
    tcp = parseFloat((nProspect3 / nLeads3) * 100);
  }

  document.getElementById('taxa-de-conversao-prospect-3').value = tcp.toFixed(2) + '%';
}

//CALCULANDO TAXA DE AQUISIÇÃO DE CLIENTES(CAC)
function calcularTaxaDeAquisicaoDeClientes1(){
  nClientes1 = numeroDeCliente_1.value || 0;
  valor1 = valorInvestido_1.value || 0;

  if(nClientes1 === 0 || valor1 === 0){
    cac = 0;
  } else{
    valor1 = valor1.replace(',', '.');
    cac = parseFloat(valor1 / nClientes1);
  }

  document.getElementById('cac-1').value = cac.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularTaxaDeAquisicaoDeClientes2(){
  nClientes2 = numeroDeCliente_2.value || 0;
  valor2 = valorInvestido_2.value || 0;
  
  if(nClientes2 === 0 || valor2 === 0){
    cac = 0;
  } else{
    valor2 = valor2.replace(',', '.');
    cac = parseFloat(valor2 / nClientes2);
  }

  document.getElementById('cac-2').value = cac.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularTaxaDeAquisicaoDeClientes3(){
  nClientes3 = numeroDeCliente_3.value || 0;
  valor3 = valorInvestido_3.value || 0;

  if(nClientes3 === 0 || valor3 === 0){
    cac = 0;
  } else{
    valor3 = valor3.replace(',', '.');
    cac = parseFloat(valor3 / nClientes3);
  }

  document.getElementById('cac-3').value = cac.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

//CALCULANDO TAXA DE CONVERSÃO DE VENDAS(TCV)
function calcularTaxaDeConversaoDeVendas1(){
  nClientes1 = numeroDeCliente_1.value || 0;
  nProspect1 = numeroDeProspect_1.value || 0;

  if(nClientes1 === 0 || nProspect1 === 0){
    tcv = 0;
  }else{
    tcv = parseFloat((nClientes1 / nProspect1) * 100)
  }

  document.getElementById('tcv-1').value = tcv.toFixed(2) + '%';
}

function calcularTaxaDeConversaoDeVendas2(){
  nClientes2 = numeroDeCliente_2.value || 0;
  nProspect2 = numeroDeProspect_2.value || 0;

  if(nClientes2 === 0 || nProspect2 === 0){
    tcv = 0;
  }else{
    tcv = parseFloat((nClientes2 / nProspect2) * 100)
  }

  document.getElementById('tcv-2').value = tcv.toFixed(2) + '%';
}

function calcularTaxaDeConversaoDeVendas3(){
  nClientes3 = numeroDeCliente_3.value || 0;
  nProspect3 = numeroDeProspect_3.value || 0;

  if(nClientes3 === 0 || nProspect3 === 0){
    tcv = 0;
  }else{
    tcv = parseFloat((nClientes3 / nProspect3) * 100)
  }

  document.getElementById('tcv-3').value = tcv.toFixed(2) + '%';
}

//CALCULANDO TICKET MEDIO DE VENDAS (TKM)
function calcularTicketMedioDeVendas1(){
  nVendas1 = valorDasVendas_1.value || 0;
  nClientes1 = numeroDeCliente_1.value || 0;
  
  if(nVendas1 === 0 || nClientes1 === 0){
    tkm = 0;
  }else{
    nVendas1 = nVendas1.replace(',', '.');
    tkm = parseFloat(nVendas1 / nClientes1);
  }

  document.getElementById('tkm-1').value = tkm.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
}

function calcularTicketMedioDeVendas2(){
  nVendas2 = valorDasVendas_2.value || 0;
  nClientes2 = numeroDeCliente_2.value || 0;

  if(nVendas2 === 0 || nClientes2 === 0){
    tkm = 0;
  }else{
    nVendas2 = nVendas2.replace(',', '.');
    tkm = parseFloat(nVendas2 / nClientes2);
  }

  document.getElementById('tkm-2').value = tkm.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
}

function calcularTicketMedioDeVendas3(){
  nVendas3 = valorDasVendas_3.value || 0;
  nClientes3 = numeroDeCliente_3.value || 0;

  if(nVendas3 === 0 || nClientes3 === 0){
    tkm = 0;
  }else{
    nVendas3 = nVendas3.replace(',', '.');
    tkm = parseFloat(nVendas3 / nClientes3);
  }

  document.getElementById('tkm-3').value = tkm.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});;
}

//CALCULANDO INDICE DE CONVERSÃO DE CAMPANHA (ICC)
function calcularIndiceDeConversaoDeCampanha1(){
  nVendas1 = valorDasVendas_1.value || 0;
  nValorInvestido1 = valorInvestido_1.value || 0;

  if(nVendas1 === 0 || nValorInvestido1 === 0){
    icc = 0;
  }else{
    nVendas1 = nVendas1.replace(',', '.');
    nValorInvestido1 = nValorInvestido1.replace(',', '.');
    icc = parseFloat(nVendas1 / nValorInvestido1);
  }

  document.getElementById('icc-1').value = icc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularIndiceDeConversaoDeCampanha2(){
  nVendas2 = valorDasVendas_2.value || 0;
  nValorInvestido2 = valorInvestido_2.value || 0;

  if(nVendas2 === 0 || nValorInvestido2 === 0){
    icc = 0;
  }else{
    nVendas2 = nVendas2.replace(',', '.');
    nValorInvestido2 = nValorInvestido2.replace(',', '.');
    icc = parseFloat(nVendas2 / nValorInvestido2);
  }

  document.getElementById('icc-2').value = icc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularIndiceDeConversaoDeCampanha3(){
  nVendas3 = valorDasVendas_3.value || 0;
  nValorInvestido3 = valorInvestido_3.value || 0;

  if(nVendas3 === 0 || nValorInvestido3 === 0){
    icc = 0;
  }else{
    nVendas3 = nVendas3.replace(',', '.');
    nValorInvestido3 = nValorInvestido3.replace(',', '.');
    icc = parseFloat(nVendas3 / nValorInvestido3);
  }

  document.getElementById('icc-3').value = icc.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

//MONTANDO AS FUNÇÕES QUE SERÃO EXECUTADAS POR COLUNA
function atualizarValores1(){
  calcularCustoPorLead1();
  calcularCustoPorProspect1();
  calcularTaxaDeConversãoProspect1();
  calcularTaxaDeAquisicaoDeClientes1();
  calcularTaxaDeConversaoDeVendas1();
  calcularTicketMedioDeVendas1();
  calcularIndiceDeConversaoDeCampanha1();
  calcularTotalInvestidoEmMidia();
}

function atualizarValores2(){
  calcularCustoPorLead2();
  calcularCustoPorProspect2();
  calcularTaxaDeConversãoProspect2();
  calcularTaxaDeAquisicaoDeClientes2();
  calcularTaxaDeConversaoDeVendas2();
  calcularTicketMedioDeVendas2();
  calcularIndiceDeConversaoDeCampanha2();
  calcularTotalInvestidoEmMidia();
}

function atualizarValores3(){
  calcularCustoPorLead3();
  calcularCustoPorProspect3();
  calcularTaxaDeConversãoProspect3();
  calcularTaxaDeAquisicaoDeClientes3();
  calcularTaxaDeConversaoDeVendas3();
  calcularTicketMedioDeVendas3();
  calcularIndiceDeConversaoDeCampanha3();
  calcularTotalInvestidoEmMidia();
}

//EXECUTANDO A FUNÇÃO AO SAIR DO INPUT
valorInvestido_1.onblur = function(){atualizarValores1()}
numeroDeLeads_1.onblur = function(){atualizarValores1()}
numeroDeProspect_1.onblur = function(){atualizarValores1()}
numeroDeCliente_1.onblur = function(){atualizarValores1()}
valorDasVendas_1.onblur = function(){atualizarValores1()}

valorInvestido_2.onblur = function(){atualizarValores2()}
numeroDeLeads_2.onblur = function(){atualizarValores2()}
numeroDeProspect_2.onblur = function(){atualizarValores2()}
numeroDeCliente_2.onblur = function(){atualizarValores2()}
valorDasVendas_2.onblur = function(){atualizarValores2()}

valorInvestido_3.onblur = function(){atualizarValores3()}
numeroDeLeads_3.onblur = function(){atualizarValores3()}
numeroDeProspect_3.onblur = function(){atualizarValores3()}
numeroDeCliente_3.onblur = function(){atualizarValores3()}
valorDasVendas_3.onblur = function(){atualizarValores3()}