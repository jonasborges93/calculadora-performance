//RECUPERANDO VALORES DOS INPUTs
let valorIvestido_1 = document.getElementById('valor-investido-1');
let valorIvestido_2 = document.getElementById('valor-investido-2');
let valorIvestido_3 = document.getElementById('valor-investido-3');

let numeroDeLeads_1 = document.getElementById('numero-leads-1');
let numeroDeLeads_2 = document.getElementById('numero-leads-2');
let numeroDeLeads_3 = document.getElementById('numero-leads-3');

let numeroDeProspect_1 = document.getElementById('numero-prospects-1');
let numeroDeProspect_2 = document.getElementById('numero-prospects-2');
let numeroDeProspect_3 = document.getElementById('numero-prospects-3');

//CALCULANDO CUSTO POR LEAD
function calcularCustoPorLead1(){
  let valor1 = valorIvestido_1.value || 0;
  let nLeads1 = numeroDeLeads_1.value || 0;

  if(nLeads1 === 0){
    cpl = parseFloat(valor1 / 1);
  }else{
    cpl = parseFloat(valor1 / nLeads1);
  }

  document.getElementById('custo-por-lead-1').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorLead2(){
  let valor2 = valorIvestido_2.value || 0;
  let nLeads2 = numeroDeLeads_2.value || 0;

  if(nLeads2 === 0){
    cpl = parseFloat(valor2 / 1);
  }else{
    cpl = parseFloat(valor2 / nLeads2);
  }

  document.getElementById('custo-por-lead-2').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorLead3(){
  let valor3 = valorIvestido_3.value || 0;
  let nLeads3 = numeroDeLeads_3.value || 0;

  if(nLeads3 === 0){
    cpl = parseFloat(valor3 / 2);
  }else{
    cpl = parseFloat(valor3 / nLeads3);
  }

  document.getElementById('custo-por-lead-3').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

//CALCULANDO CUSTO POR PROSPECT
function calcularCustoPorProspect1(){
  let valor1 = valorIvestido_1.value || 0;
  let nProspect1 = numeroDeProspect_1.value || 0;

  if(nProspect1 === 0){
    cpl = parseFloat(valor1 / 1);
  }else{
    cpl = parseFloat(valor1 / nProspect1);
  }

  document.getElementById('custo-por-prospect-1').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorProspect2(){
  let valor2 = valorIvestido_2.value || 0;
  let nProspect2 = numeroDeProspect_2.value || 0;

  if(nProspect2 === 0){
    cpl = parseFloat(valor2 / 1);
  }else{
    cpl = parseFloat(valor2 / nProspect2);
  }

  document.getElementById('custo-por-prospect-2').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
  
}

function calcularCustoPorProspect3(){
  let valor3 = valorIvestido_3.value || 0;
  let nProspect3 = numeroDeProspect_3.value || 0;

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

function atualizarValores1(){
  calcularCustoPorLead1();
  calcularCustoPorProspect1();
  calcularTaxaDeConversãoProspect1();
}
function atualizarValores2(){
  calcularCustoPorLead2();
  calcularCustoPorProspect2();
  calcularTaxaDeConversãoProspect2();
}
function atualizarValores3(){
  calcularCustoPorLead3();
  calcularCustoPorProspect3();
  calcularTaxaDeConversãoProspect3();
}

//EXECUTANDO A FUNÇÃO CUSTO POR LEAD
valorIvestido_1.onblur = function(){atualizarValores1()}
numeroDeLeads_1.onblur = function(){atualizarValores1()}
numeroDeProspect_1.onblur = function(){atualizarValores1()}

valorIvestido_2.onblur = function(){atualizarValores2()}
numeroDeLeads_2.onblur = function(){atualizarValores2()}
numeroDeProspect_2.onblur = function(){atualizarValores2()}

valorIvestido_3.onblur = function(){atualizarValores3()}
numeroDeLeads_3.onblur = function(){atualizarValores3()}
numeroDeProspect_3.onblur = function(){atualizarValores3()}

//EXECUTANDO A FUNÇÃO CUSTO POR PROSPECT