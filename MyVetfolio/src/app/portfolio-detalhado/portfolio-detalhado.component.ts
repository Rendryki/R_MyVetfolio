import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-detalhado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-detalhado.component.html',
  styleUrl: './portfolio-detalhado.component.css'
})
export class PortfolioDetalhadoComponent {

  ArrRepositories = new Array();
  ArrFilled: boolean = false;

  
  ngOnInit(){

    if(this.ArrFilled == false){

      return fetch("https://api.github.com/users/Rendryki/repos").then(response => response.json()).then(response => response.forEach((list: { updated_at: any; name: string; fork: boolean; html_url: string; language: string; }) => {

        if(list.name != "Rendryki" && list.name != "R_Portfolio" && list.name != "R_Time_Capsule" && list.name != "R_Poke_App" && list.name != "R_My_Products_Storage" && list.fork == false){
          let formatedLastCommitDate = list.updated_at.substring(0, 10);
          let repositoriesObject = {
              name : list.name,
              url : list.html_url,
              Programing_Language: list.language,
              LastCommitDate: formatedLastCommitDate
          }
          this.ArrRepositories.push(repositoriesObject);
        }
        
        else if(list.name === "R_Not_So_Fake"){
          let formatedLastCommitDate = list.updated_at.substring(0, 10);
          let repositoriesObject = {
              name : list.name,
              url : list.html_url,
              Programing_Language: list.language,
              LastCommitDate: formatedLastCommitDate
          }
          this.ArrRepositories.push(repositoriesObject); 
        }
        
        else if(list.name === "R_Time_Capsule" || list.name === "R_Poke_App" || list.name === "R_My_Products_Storage"){
          let formatedLastCommitDate = list.updated_at.substring(0, 10);
          let repositoriesObject = {
              name : list.name,
              url : list.html_url,
              Programing_Language: list.language,
              LastCommitDate: formatedLastCommitDate
          }
          this.ArrRepositories.unshift(repositoriesObject); 
          this.ArrFilled = true;
        }

      }))

    }

    else{
      return console.log("array already exists!");
    }

  }

}
