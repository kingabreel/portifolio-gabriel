import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corpo-destaque',
  templateUrl: './corpo-destaque.component.html',
  styleUrls: ['./corpo-destaque.component.css']
})
export class CorpoDestaqueComponent implements OnInit {
  saudacao = 'Olá! Hello! Hola!';
  titulo = 'Engenheiro de Software';
  paragrafo = 'Me chamo Gabriel, sou dev de software, desenhista e atleta nas horas vagas. Uma grande qualidade/defeito que tenho é que quando foco em algo, esqueço de tudo ao meu redor, esse projeto me fez esquecer de almoçar hoje.';

  textoExibido = {
    saudacao: '',
    titulo: '',
    paragrafo: ''
  };

  velocidadeDigitacao = 20;

  constructor() { }

  ngOnInit() {
    this.iniciarDigitacao();
  }

  async iniciarDigitacao() {
    await this.exibirElemento(this.saudacao, 'saudacao');
    await this.exibirElemento(this.titulo, 'titulo');
    await this.exibirElemento(this.paragrafo, 'paragrafo');
  }

  async exibirElemento(texto: string, elemento: 'titulo' | 'paragrafo' | 'saudacao') {
    let textoExibido = this.textoExibido[elemento];

    for (let indice = 0; indice < texto.length; indice++) {
      textoExibido += texto.charAt(indice);
      this.textoExibido[elemento] = textoExibido;
      await this.delay(this.velocidadeDigitacao);
    }
  }

  private delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
