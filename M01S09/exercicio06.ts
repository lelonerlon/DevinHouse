class Conta {    
   protected numero: number;
   protected saldo: number;
   protected estaAtiva: boolean;
   protected dono: string

   constructor(numero: number, saldo:number, estaAtiva: boolean, dono: string){
        this.numero = numero;
        this.saldo = saldo;
        this.estaAtiva = estaAtiva;
        this.dono = dono
   }
}

class ContaEmpresa extends Conta{
    private limiteDeDeposito: number = 1000;
    valor:number

    constructor(numero, saldo, estaAtiva, dono){
        super(numero, saldo, estaAtiva, dono);
       
        }

    imprimeValorConta(){
            console.log(`O saldo da conta é: ${this.saldo}`)
   }

    deposito(valor:number){
        this.valor = valor;
        if (valor <= this.limiteDeDeposito){
            this.saldo += valor;
            this.imprimeValorConta();
        } else {
            console.log(`O valor depositado está acima do limete da conta. que é de ${this.limiteDeDeposito}`);
        }
    }

}

let conta = new ContaEmpresa(10, 200, true, 'Antonio');


conta.deposito(100);

console.log(conta);



