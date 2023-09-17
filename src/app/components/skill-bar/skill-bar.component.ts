import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-bar',
  templateUrl: './skill-bar.component.html',
  styleUrls: ['./skill-bar.component.css']
})
export class SkillBarComponent {

  @Input()
  width:string=""
  @Input()
  skillTitle:string=""
}
