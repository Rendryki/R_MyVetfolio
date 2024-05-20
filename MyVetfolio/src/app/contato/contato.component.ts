import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contato.component.html',
  styleUrl: './contato.component.css'
})
export class ContatoComponent {

  form: FormGroup = this.fb.group({
    from_name: "",
    to_name: "rendryki",
    from_email: "",
    from_number: "",
    from_subject: "",
    message: "",
  })

  constructor(private fb:FormBuilder){}

  async send(){
    emailjs.init("0qlrv8uwQcf5cR0A7");

    if(this.form.value.from_name == "" || this.form.value.from_email == "" || this.form.value.from_number == "" || this.form.value.from_subject == "" || this.form.value.message == ""){
     alert("Por favor, preencha todos os campos!")
  
    }else{
      let response = await emailjs.send("service_9yfsrsk","template_7udekve",{
        from_name: this.form.value.from_name,
        to_name: this.form.value.to_name,
        from_email: this.form.value.from_email,
        from_number: this.form.value.from_number,
        from_subject: this.form.value.from_subject,
        message: this.form.value.message,
      });
  
      alert("mensagem enviada!")
      this.form.reset();
    }
  }

}
