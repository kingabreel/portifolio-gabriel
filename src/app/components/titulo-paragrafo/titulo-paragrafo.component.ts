import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo-paragrafo',
  templateUrl: './titulo-paragrafo.component.html',
  styleUrls: ['./titulo-paragrafo.component.css']
})
export class TituloParagrafoComponent {

  @Input()
  title:string="Titulo muito criativo por causa de fulano"
  @Input()
  paragraph:string="Lorem ipsum dolor sit amet. Ut commodi dolor aut corporis fugiat nam tenetur consequatur ut commodi nostrum. Qui quia voluptas non galisum ipsam est rerum quia ut eius alias. Qui dolorem commodi ut recusandae excepturi non consequatur molestias ex omnis magni ut voluptatem facere et eaque autem;"
}
