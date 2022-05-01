export class Aluno{
     nome: string;
     matricula: number;
     passou: boolean;

    aprovado(media: number){
      if(media >= 7 ){
          this.passou = true;
      }else{
          this.passou = false;
      }
      return this.passou;
 }
}

export interface Nota{
    cadeira: string;
    ponto: number;
    aluno: Aluno
}
