//RECUPERANDO VALORES DOS INPUTs
let valorIvestido_1 = document.getElementById('valor-investido-1');
let valorIvestido_2 = document.getElementById('valor-investido-2');
let valorIvestido_3 = document.getElementById('valor-investido-3');

let numerdoDeLeads_1 = document.getElementById('numero-leads-1');
let numerdoDeLeads_2 = document.getElementById('numero-leads-2');
let numerdoDeLeads_3 = document.getElementById('numero-leads-3');

//CALCULANDO CUSTO POR LEAD
function calcularCustoPorLead1(){
  let valor1 = valorIvestido_1.value || 0;
  let nLeads1 = numerdoDeLeads_1.value || 0;

  if(nLeads1 === 0){
    cpl = parseFloat(valor1 / 1);
  }else{
    cpl = parseFloat(valor1 / nLeads1);
  }

  document.getElementById('custo-por-lead-1').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorLead2(){
  let valor2 = valorIvestido_2.value || 0;
  let nLeads2 = numerdoDeLeads_2.value || 0;

  if(nLeads2 === 0){
    cpl = parseFloat(valor2 / 1);
  }else{
    cpl = parseFloat(valor2 / nLeads2);
  }

  document.getElementById('custo-por-lead-2').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcularCustoPorLead3(){
  let valor3 = valorIvestido_3.value || 0;
  let nLeads3 = numerdoDeLeads_3.value || 0;

  if(nLeads3 === 0){
    cpl = parseFloat(valor3 / 2);
  }else{
    cpl = parseFloat(valor3 / nLeads3);
  }

  document.getElementById('custo-por-lead-3').value = cpl.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

//EXECUTANDO A FUNÇÃO CUSTO POR LEAD
valorIvestido_1.onblur = function(){calcularCustoPorLead1()}
numerdoDeLeads_1.onblur = function(){calcularCustoPorLead1()}

valorIvestido_2.onblur = function(){calcularCustoPorLead2()}
numerdoDeLeads_2.onblur = function(){calcularCustoPorLead2()}

valorIvestido_3.onblur = function(){calcularCustoPorLead3()}
numerdoDeLeads_3.onblur = function(){calcularCustoPorLead3()}