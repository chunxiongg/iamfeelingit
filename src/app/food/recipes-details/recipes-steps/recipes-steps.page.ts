import { Component, OnInit } from '@angular/core';
import { AppServeService } from 'src/app/app-serve.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-steps',
  templateUrl: './recipes-steps.page.html',
  styleUrls: ['./recipes-steps.page.scss'],
})
export class RecipesStepsPage implements OnInit {

  constructor(private appServe: AppServeService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
