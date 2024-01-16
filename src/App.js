/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Papa from 'papaparse';


const App = () => {

  const notas = [
    { disciplina: 'Informática', nota: 20 },
    { disciplina: 'Física', nota: 15 },
    { disciplina: 'Matemática', nota: 10 },
    // Adicione mais produtos conforme necessário
  ];

  let corpo = document.getElementById("corpo");
  let body = document.getElementById("body");
  const imprime = ()=>{
   /* $(".pdf-gera").addClass('d-none');
    $(".csv-gera").addClass('d-none');
    $(".imprime-gera").addClass('d-none'); */
    $(".gerador").addClass('d-none');
    $("#parte1").removeClass('col-lg-6');
    $("#corpo").addClass('tamanhoTela');
    $("#parte2").addClass('d-none');
    
    window.print(corpo);
   /* $(".pdf-gera").removeClass('d-none');
    $(".csv-gera").removeClass('d-none');
    $(".imprime-gera").removeClass('d-none'); */
    $(".gerador").removeClass('d-none');
    $("#parte1").addClass('col-lg-6');
    $("#corpo").removeClass('tamanhoTela');
    $("#parte2").removeClass('d-none');
  }
  const imprime2 = ()=>{
   /* $(".pdf-gera").addClass('d-none');
    $(".csv-gera").addClass('d-none');
    $(".imprime-gera").addClass('d-none'); */
    $(".gerador").addClass('d-none');
    $("#parte2").removeClass('col-lg-6');
    $("#body").addClass('tamanhoTela');
    $("#parte1").addClass('d-none');
    
    window.print(body);
   /* $(".pdf-gera").removeClass('d-none');
    $(".csv-gera").removeClass('d-none');
    $(".imprime-gera").removeClass('d-none'); */
    $(".gerador").removeClass('d-none');
    $("#parte2").addClass('col-lg-6');
    $("#body").removeClass('tamanhoTela');
    $("#parte1").removeClass('d-none');
  }
  const generatePDF = () => {
    $("#parte1").removeClass('col-lg-6');
    $("#corpo").addClass('tamanhoTela');
    $("#parte2").addClass('d-none');

    html2canvas(document.getElementById('corpo')).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('declaração.pdf');
    });

    $("#parte1").addClass('col-lg-6');
    $("#corpo").removeClass('tamanhoTela');
    $("#parte2").removeClass('d-none');
  };
  const generatePDF2 = () => {
    $("#parte2").removeClass('col-lg-6');
    $("#body").addClass('tamanhoTela');
    $("#parte1").addClass('d-none');

    html2canvas(document.getElementById('body')).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(imgData, 'PNG', 0, 0, 210, 297);
      pdf.save('declaração2.pdf');
    });

    $("#parte2").addClass('col-lg-6');
    $("#body").removeClass('tamanhoTela');
    $("#parte1").removeClass('d-none');
  };

  const generateCSV = () => {
    const csvData = [];
    
    // Adiciona cabeçalhos
    csvData.push(['Disciplina', 'Notas']);

    // Adiciona dados da tabela
    notas.forEach(product => {
      csvData.push([product.disciplina, product.nota.toFixed(2)]);
    });

    // Gera o arquivo CSV
    const csv = Papa.unparse(csvData);

    // Cria um objeto Blob e um link para fazer o download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'declaração.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('Seu navegador não suporta download automático. Por favor, clique com o botão direito e escolha "Salvar como...".');
    }
  };

 

  return (
    <div className="App">
      <button class='gerador imprime-gera' type="button" name="button" id="gerarPDF" onClick={imprime}>
        <i class="bi bi-printer text-white"></i>
      </button>
      <button class='gerador print2 btn btn-primary' type="button" name="button" id="" onClick={imprime2}>
        <span class='text-white'>
        imprimir tela 2
        </span>
        
      </button>
      <div class="row container-fluid">
    <div class="col-12 col-lg-6" id='parte1'>
    <div class="" id="corpo">
        <div class="d-flex justify-content-center align-items-center">
          <div class='px-2'>
            <img
                  src="https://ispk.co.ao/wp-content/uploads/2021/07/Logo_Katangoji.png"
                  alt="ISPK"
                  class="logo"
              />
              
              <small class="d-block">ISPK/SAC/AB/01265/018 </small>
          </div>
           
              <div >
                <h1>Instituto Superior Politécnico Katangoji</h1>
                <label>Criado pelo Decreto Presidencial N° 168/12 de 21 de Julho de 2012</label>
              </div>
          </div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="conteudo">
              <h2 class=''>Direcção Académica</h2>
              <h3 class='py-4'>Declaração</h3>
              <p class="text-start">Para efeitos de  <span class="fw-bold">Trabalho,</span> declara-se, que o Senhor <strong>Paulo Pinto Ernesto Bunga,</strong> filho de Cipriano Bunga e de Isabel Ernesto, titular do Bilhete de Identidade nº 003079849LA033, emitido pelo Arquivo de Identificação de Luanda, aos 06 de Novembro de 2013, é Estudante deste Instituto, frequentou o 1º ano do curso de <b>Engenharia Mecânica,</b> durante o ano lectivo 2015, sob o processo n.º 1173/18, tendo obtido as seguintes classificações:
              </p>

              <div class="table-responsive py-3">
              <table class="table table-bordered border-dark">
                  <thead class=""> 
                    <tr>

                    <th scope="col">Disciplinas do 1º Ano - 2015</th>
                      <th scope="col">Nota Final</th>

                
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                    <td class="text-start">Metodologia de Aprendizagem</td>
                      <th scope="row">13</th>
                  
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Física</td>
                      <th scope="row">12</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Engenharia</td>
                      <th scope="row">17</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Informática</td>
                      <th scope="row">15</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Química</td>
                      <th scope="row">14</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Língua Portuguesa I</td>
                      <th scope="row">10</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Algebra Linear e Geometria Analítica</td>
                      <th scope="row">19</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Geometria Descriptiva</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Informática</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Física I</td>
                      <th scope="row">12</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Língua Portuguesa II</td>
                      <th scope="row">11</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Matemática I</td>
                      <th scope="row">15</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Química Geral</td>
                      <th scope="row">16</th>
                    
                    </tr>
                  
                  </tbody>
                </table>
                <table class="table table-hover table-bordered border-dark media-final">
                <thead class=""> 
                    <tr>

                    <th class="media" scope="col">Média Final</th>
                      <th class='final' scope="col">20</th>

                
                    </tr>
                  </thead>
                </table>
              </div>

              <p class="text-start">
              Por ser verdade, e me ter sido solicitada, passa-se a presente declaração, assinada e autenticada com o carimbo a óleo em uso neste Instituto.
              </p>
              <p class="text-start">
              Luanda aos, 15 de Maio de 2018.
              </p>

      <div class='py-2' id='assinatura'>
      <p class="fs-6" >A DIRECTORA GERAL</p>
      <p class="fs-6">(Prof.Doutora) Berta Emma Fernádez Gonzalez</p>
      </div>
     










            </div>
   
        </div>
        
      </div>
    </div>
    <div class="col-12 col-lg-6" id='parte2'>
    <div class="" id="body">
        <div class="d-flex justify-content-center align-items-center">
          <div class='px-2'>
            <img
                  src="https://ispk.co.ao/wp-content/uploads/2021/07/Logo_Katangoji.png"
                  alt="ISPK"
                  class="logo"
              />
              
              <small class="d-block">ISPK/SAC/AB/01265/018 </small>
          </div>
           
              <div >
                <h1>Instituto Superior Politécnico Katangoji</h1>
                <label>Criado pelo Decreto Presidencial N° 168/12 de 21 de Julho de 2012</label>
              </div>
          </div>
        <div class="d-flex justify-content-center align-items-center">
            <div class="conteudo">
              <h2 class=''>Direcção Académica</h2>
              <h3 class='py-4'>Declaração</h3>
              <p class="text-start">Para efeitos de  <span class="fw-bold">Trabalho,</span> declara-se, que o Senhor <strong>Paulo Pinto Ernesto Bunga,</strong> filho de Cipriano Bunga e de Isabel Ernesto, titular do Bilhete de Identidade nº 003079849LA033, emitido pelo Arquivo de Identificação de Luanda, aos 06 de Novembro de 2013, é Estudante deste Instituto, frequentou o 1º ano do curso de <b>Engenharia Mecânica,</b> durante o ano lectivo 2015, sob o processo n.º 1173/18, tendo obtido as seguintes classificações:
              </p>

              <div class="table-responsive py-3">
              <table class="table table-bordered border-dark">
                  <thead class=""> 
                    <tr>

                    <th scope="col">Disciplinas do 1º Ano - 2015</th>
                      <th scope="col">Nota Final</th>

                
                    </tr>
                  </thead>
                  <tbody >
                    <tr>
                    <td class="text-start">Metodologia de Aprendizagem</td>
                      <th scope="row">19</th>
                  
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Física</td>
                      <th scope="row">12</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Engenharia</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Informática</td>
                      <th scope="row">15</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Introdução à Química</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Língua Portuguesa I</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Algebra Linear e Geometria Analítica</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Geometria Descriptiva</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Informática</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Física I</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Língua Portuguesa II</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Matemática I</td>
                      <th scope="row">18</th>
                    
                    </tr>
                    <tr>
                    <td class="text-start">Química Geral</td>
                      <th scope="row">18</th>
                    
                    </tr>
                  
                  </tbody>
                </table>
                <table class="table table-hover table-bordered border-dark media-final">
                <thead class=""> 
                    <tr>

                    <th class="media" scope="col">Média Final</th>
                      <th class='final' scope="col">10</th>

                
                    </tr>
                  </thead>
                </table>
              </div>

              <p class="text-start">
              Por ser verdade, e me ter sido solicitada, passa-se a presente declaração, assinada e autenticada com o carimbo a óleo em uso neste Instituto.
              </p>
              <p class="text-start">
              Luanda aos, 15 de Maio de 2018.
              </p>

      <div class='py-2' id='assinatura'>
      <p class="fs-6" >A DIRECTORA GERAL</p>
      <p class="fs-6">(Prof.Doutora) Berta Emma Fernádez Gonzalez</p>
      </div>
     










            </div>
   
        </div>
        
      </div>
    </div>
    
  </div>

   
      <button class='btn btn-success rounded-circle gerador csv-gera' onClick={generateCSV}><i class="bi bi-filetype-csv text-white"></i></button>
      <button class='btn btn-primary rounded-circle gerador pdf-gera' onClick={generatePDF}><i class="bi bi-filetype-pdf text-light"></i></button>
      <button class='btn btn-primary gerador pdf2' onClick={generatePDF2}><i class="bi bi-filetype-pdf text-light"></i> Gerar PDF 2</button>
    </div>
  );
};

export default App;
